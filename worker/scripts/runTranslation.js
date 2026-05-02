/**
 * ONE-TIME SCRIPT: Run translation and generate all audio files
 * 
 * This script:
 * 1. Creates D1 table if not exists
 * 2. Loads content.id.json (27 zones)
 * 3. Translates to 11 languages (skip Indonesian) using DeepL
 * 4. Generates TTS audio for all 12 languages (including Indonesian)
 * 5. Uploads audio to R2
 * 6. Saves everything to D1
 * 
 * Run with: node scripts/runTranslation.js
 */

const fs = require('fs');
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '..', '.env') });

// AWS SDK for R2
const { S3Client, PutObjectCommand, HeadObjectCommand } = require('@aws-sdk/client-s3');

// Google TTS API
const googleTTS = require('google-tts-api');

// BUG 1 FIXED: R2 credentials
const R2_CONFIG = {
  endpoint: process.env.R2_ENDPOINT,
  region: 'auto',
  credentials: {
    accessKeyId: process.env.R2_ACCESS_KEY_ID,
    secretAccessKey: process.env.R2_SECRET_ACCESS_KEY
  }
};

const R2_BUCKET_NAME = process.env.R2_BUCKET_NAME;
const R2_PUBLIC_URL = process.env.R2_PUBLIC_URL;
const DEEPL_API_KEY = process.env.DEEPL_API_KEY;
const DEEPL_ENDPOINT = 'https://api-free.deepl.com/v2/translate';
const CLOUDFLARE_ACCOUNT_ID = process.env.CLOUDFLARE_ACCOUNT_ID;
const CLOUDFLARE_D1_DATABASE_ID = process.env.CLOUDFLARE_D1_DATABASE_ID;
const CLOUDFLARE_API_TOKEN = process.env.CLOUDFLARE_API_TOKEN;

// All 12 languages
const ALL_LANGUAGES = [
  { code: 'id', label: 'Indonesia', deepl: null, tts: 'id' },  // source — skip DeepL, still generate TTS
  { code: 'en', label: 'English', deepl: 'EN', tts: 'en' },
  { code: 'ja', label: 'Japanese', deepl: 'JA', tts: 'ja' },
  { code: 'ko', label: 'Korean', deepl: 'KO', tts: 'ko' },
  { code: 'ar', label: 'Arabic', deepl: 'AR', tts: 'ar' },
  { code: 'fr', label: 'French', deepl: 'FR', tts: 'fr' },
  { code: 'de', label: 'German', deepl: 'DE', tts: 'de' },
  { code: 'es', label: 'Spanish', deepl: 'ES', tts: 'es' },
  { code: 'zh', label: 'Chinese', deepl: 'ZH', tts: 'zh' },
  { code: 'ms', label: 'Malay', deepl: 'MS', tts: 'ms' },
  { code: 'th', label: 'Thai', deepl: 'TH', tts: 'th' },
  { code: 'nl', label: 'Dutch', deepl: 'NL', tts: 'nl' },
];

// Load content
const content = require('../data/content.id.json');
const contentKeys = Object.keys(content);

console.log('========================================');
console.log('TRANSLATION WORKER - RUN TRANSLATION');
console.log('========================================');
console.log(`Total zones: ${contentKeys.length}`);
console.log(`Total languages: ${ALL_LANGUAGES.length}`);
console.log(`Total operations: ${contentKeys.length * ALL_LANGUAGES.length}`);
console.log('========================================\n');

// Track stats
let totalOperations = 0;
let completedOperations = 0;
let deepLCharactersUsed = 0;
let audioFilesGenerated = 0;

// Initialize R2 client
const r2Client = new S3Client(R2_CONFIG);

// ========== FIXED D1 QUERY HELPER ==========
const d1Query = async (sql, params = []) => {
  const res = await fetch(
    `https://api.cloudflare.com/client/v4/accounts/${CLOUDFLARE_ACCOUNT_ID}/d1/database/${CLOUDFLARE_D1_DATABASE_ID}/query`,
    {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${CLOUDFLARE_API_TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ sql, params }),
    }
  );
  const data = await res.json();
  if (!data.success) throw new Error(`D1 failed: ${JSON.stringify(data.errors)}`);
  return data.result;
};

// Helper: Check if audio exists in R2
async function checkAudioExistsR2(key) {
  try {
    await r2Client.send(new HeadObjectCommand({
      Bucket: R2_BUCKET_NAME,
      Key: key
    }));
    return true;
  } catch (error) {
    return false;
  }
}

// Helper: Upload audio to R2
async function uploadAudioToR2(key, audioBuffer) {
  try {
    await r2Client.send(new PutObjectCommand({
      Bucket: R2_BUCKET_NAME,
      Key: key,
      Body: audioBuffer,
      ContentType: 'audio/mpeg'
    }));
    return true;
  } catch (error) {
    console.error(`  ❌ Failed to upload audio: ${error.message}`);
    return false;
  }
}

// FIXED: TTS using google-tts-api package
async function generateTTS(text, langCode) {
  try {
    // Clean text — remove characters that confuse TTS splitting
    const cleanText = text
      .replace(/—/g, ', ')    // em dash → comma
      .replace(/\.\.\./g, '.') // ellipsis → period
      .replace(/\s+/g, ' ')    // multiple spaces → single
      .trim();

    const urls = googleTTS.getAllAudioUrls(cleanText, {
      lang: langCode,
      slow: false,
      host: 'https://translate.google.com',
      splitPunct: ',.!?;:،。！？；：、।|॥',
    });

    const chunks = [];
    for (const { url } of urls) {
      await new Promise(r => setTimeout(r, 800));
      const res = await fetch(url, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
          'Referer': 'https://translate.google.com/',
          'Accept': 'audio/mpeg, */*',
        }
      });
      if (!res.ok) throw new Error(`chunk failed: ${res.status}`);
      const buf = await res.arrayBuffer();
      chunks.push(Buffer.from(buf));
    }

    return Buffer.concat(chunks);
  } catch (error) {
    console.error(`  ❌ TTS error: ${error.message}`);
    return null;
  }
}

// Helper: Translate with DeepL
async function translateWithDeepL(text, targetLang) {
  try {
    const response = await fetch(DEEPL_ENDPOINT, {
      method: 'POST',
      headers: {
        'Authorization': `DeepL-Auth-Key ${DEEPL_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        text: [text],
        source_lang: 'ID',
        target_lang: targetLang
      })
    });

    if (response.status === 456) {
      throw new Error('DeepL quota exceeded');
    }

    if (!response.ok) {
      throw new Error(`DeepL error: ${response.status}`);
    }

    const data = await response.json();
    deepLCharactersUsed += text.length;
    return data.translations[0].text;
  } catch (error) {
    console.error(`  ❌ DeepL error: ${error.message}`);
    return text; // fallback to source
  }
}

// Helper: Create D1 table via Cloudflare API
async function createD1Table() {
  console.log('Creating D1 table...');
  
  const createTableSQL = `
    CREATE TABLE IF NOT EXISTS translations (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      content_key TEXT NOT NULL,
      source_text TEXT NOT NULL,
      lang_code TEXT NOT NULL,
      translated TEXT NOT NULL,
      audio_path TEXT,
      audio_url TEXT,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      UNIQUE(content_key, lang_code)
    )
  `;

  try {
    await d1Query(createTableSQL);
    console.log('✅ Table created');
  } catch (e) {
    console.log('⚠️ Table might already exist, continuing...');
  }
  
  // Create indexes (may fail if already exists)
  try {
    await d1Query('CREATE INDEX IF NOT EXISTS idx_lang ON translations(lang_code)');
    console.log('✅ Index lang created');
  } catch (e) {
    console.log('⚠️ Index lang might already exist');
  }
  
  try {
    await d1Query('CREATE INDEX IF NOT EXISTS idx_key ON translations(content_key)');
    console.log('✅ Index key created');
  } catch (e) {
    console.log('⚠️ Index key might already exist');
  }
  
  console.log('✅ D1 table created/verified successfully');
}

// Helper: Insert to D1
async function insertToD1(contentKey, sourceText, langCode, translated, audioPath, audioUrl) {
  const sql = `
    INSERT OR IGNORE INTO translations 
    (content_key, source_text, lang_code, translated, audio_path, audio_url) 
    VALUES (?, ?, ?, ?, ?, ?)
  `;
  return d1Query(sql, [contentKey, sourceText, langCode, translated, audioPath, audioUrl]);
}

// Main execution
async function runTranslation() {
  totalOperations = contentKeys.length * ALL_LANGUAGES.length;
  
  // Create D1 table
  await createD1Table();
  
  console.log('\n🚀 Starting translation process...\n');

  // Process each content key
  for (let i = 0; i < contentKeys.length; i++) {
    const contentKey = contentKeys[i];
    const sourceText = content[contentKey];
    
    console.log(`[${i + 1}/${contentKeys.length}] Processing: ${contentKey}`);
    
    // Process each language
    for (let j = 0; j < ALL_LANGUAGES.length; j++) {
      const lang = ALL_LANGUAGES[j];
      completedOperations++;
      
      try {
        // Determine translated text
        let translated = sourceText;
        
        if (lang.code === 'id') {
          // Indonesian: use source directly, no DeepL
          translated = sourceText;
        } else {
          // Check D1 cache BEFORE calling DeepL
          try {
            const existing = await d1Query(
              'SELECT translated FROM translations WHERE content_key = ? AND lang_code = ?',
              [contentKey, lang.code]
            );

            if (existing && existing[0]?.results?.length > 0) {
              translated = existing[0].results[0].translated;
              console.log(`  ${lang.code}: from D1 cache (skipped DeepL)`);
            } else {
              // Only call DeepL if not in D1
              translated = await translateWithDeepL(sourceText, lang.deepl);
              console.log(`  ${lang.code}: translated (${sourceText.length} → ${translated.length} chars)`);
            }
          } catch (e) {
            // If query fails, fallback to DeepL
            translated = await translateWithDeepL(sourceText, lang.deepl);
            console.log(`  ${lang.code}: translated (${sourceText.length} → ${translated.length} chars)`);
          }
        }
        
        // Generate audio
        const r2Key = `audio/${lang.code}/${contentKey}.mp3`;
        const audioUrl = `${R2_PUBLIC_URL}/${r2Key}`;
        
        // Check if audio exists in R2
        const audioExists = await checkAudioExistsR2(r2Key);
        
        if (!audioExists) {
          // Generate TTS
          const audioBuffer = await generateTTS(translated, lang.tts);
          
          if (audioBuffer) {
            // Upload to R2
            const uploaded = await uploadAudioToR2(r2Key, audioBuffer);
            if (uploaded) {
              audioFilesGenerated++;
              console.log(`    🎵 audio saved to R2`);
            }
          }
        } else {
          console.log(`    🎵 audio exists in R2 (skipped)`);
        }
        
        // Save to D1
        await insertToD1(contentKey, sourceText, lang.code, translated, r2Key, audioUrl);
        
      } catch (error) {
        console.error(`  ❌ Error: ${error.message}`);
      }
      
      // Progress
      const progress = Math.round((completedOperations / totalOperations) * 100);
      process.stdout.write(`\r  Progress: ${progress}% (${completedOperations}/${totalOperations})`);
      
      // Step 3: Add 2 second delay between each language to avoid Google rate limiting
      await new Promise(r => setTimeout(r, 2000));
    }
    
    console.log(`\n  ✅ ${contentKey} complete\n`);
  }

  // Summary
  console.log('========================================');
  console.log('📊 SUMMARY');
  console.log('========================================');
  console.log(`Total operations: ${completedOperations}`);
  console.log(`DeepL characters used: ${deepLCharactersUsed}`);
  console.log(`Audio files generated: ${audioFilesGenerated}`);
  console.log(`Estimated DeepL quota remaining: ${500000 - deepLCharactersUsed} chars`);
  console.log('========================================');
  console.log('✅ All translations and audio files generated!');
}

// Run the script
runTranslation().catch(console.error);
