// Translation Worker - Main Entry Point
// Serves translation API and handles CORS

const R2_PUBLIC_URL = 'https://pub-135a7545edfc4289af5e9373bf26a44b.r2.dev';
const ALLOWED_LANGS = new Set(['id', 'en', 'ja', 'ko', 'ar', 'fr', 'de', 'es', 'zh', 'ms', 'th', 'nl']);

// CORS headers
const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
};

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (request.method === 'OPTIONS') {
      return new Response(null, { headers: corsHeaders });
    }

    if (url.pathname.startsWith('/api/translations/')) {
      return handleTranslationRequest(env, url);
    }

    return new Response('Not Found', {
      status: 404,
      headers: corsHeaders
    });
  }
};

async function handleTranslationRequest(env, url) {
  const pathParts = url.pathname.replace('/api/translations/', '').split('/').filter(Boolean);

  try {
    // /api/translations/:lang
    if (pathParts.length === 1) {
      const langCode = pathParts[0];

      if (!ALLOWED_LANGS.has(langCode)) {
        return jsonResponse({ error: 'Invalid language code' }, 400);
      }

      const rows = await env.DB.prepare(
        'SELECT content_key as key, translated, audio_url FROM translations WHERE lang_code = ? ORDER BY content_key ASC'
      ).bind(langCode).all();

      const resultRows = rows?.results ?? [];
      return jsonResponse(resultRows, 200);
    }

    // /api/translations/:lang/:key
    if (pathParts.length === 2) {
      const [langCode, contentKey] = pathParts;

      if (!ALLOWED_LANGS.has(langCode)) {
        return jsonResponse({ error: 'Invalid language code' }, 400);
      }

      let result = await env.DB.prepare(
        'SELECT translated, audio_url FROM translations WHERE content_key = ? AND lang_code = ?'
      ).bind(contentKey, langCode).first();

      if (!result) {
        const sourceResult = await env.DB.prepare(
          'SELECT source_text FROM translations WHERE content_key = ? AND lang_code = ?'
        ).bind(contentKey, 'id').first();

        if (!sourceResult) {
          return jsonResponse({ error: 'Content not found' }, 404);
        }

        const sourceText = sourceResult.source_text;
        let translated = sourceText;

        if (langCode !== 'id') {
          const deeplRes = await fetch(env.DEEPL_ENDPOINT, {
            method: 'POST',
            headers: {
              'Authorization': `DeepL-Auth-Key ${env.DEEPL_API_KEY}`,
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              text: [sourceText],
              source_lang: 'ID',
              target_lang: langCode.toUpperCase()
            })
          });

          if (deeplRes.ok) {
            const data = await deeplRes.json();
            translated = data.translations?.[0]?.text ?? sourceText;
          }
        }

        const r2Key = `audio/${langCode}/${contentKey}.mp3`;
        const audioUrl = `${R2_PUBLIC_URL}/${r2Key}`;

        const audioExists = await env.AUDIO_BUCKET.head(r2Key);
        if (!audioExists) {
          const ttsUrl = `https://translate.google.com/translate_tts?ie=UTF-8&q=${encodeURIComponent(translated)}&tl=${langCode}&client=tw-ob`;
          const audioRes = await fetch(ttsUrl, { headers: { 'User-Agent': 'Mozilla/5.0' } });
          if (audioRes.ok) {
            const buffer = await audioRes.arrayBuffer();
            await env.AUDIO_BUCKET.put(r2Key, buffer, {
              httpMetadata: { contentType: 'audio/mpeg' }
            });
          }
        }

        await env.DB.prepare(
          `INSERT OR IGNORE INTO translations (content_key, source_text, lang_code, translated, audio_path, audio_url) VALUES (?, ?, ?, ?, ?, ?)`
        ).bind(contentKey, sourceText, langCode, translated, r2Key, audioUrl).run();

        result = { translated, audio_url: audioUrl };
      }

      return jsonResponse({
        translated: result.translated,
        audio_url: result.audio_url
      }, 200);
    }

    return jsonResponse({ error: 'Invalid path' }, 400);
  } catch (error) {
    console.error('Translation error:', error);
    return jsonResponse({ error: 'Internal error' }, 500);
  }
}

function jsonResponse(payload, status = 200) {
  return new Response(JSON.stringify(payload), {
    status,
    headers: { ...corsHeaders, 'Content-Type': 'application/json' }
  });
}

