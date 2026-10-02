// Translation Worker - Main Entry Point
// Serves translation API and handles CORS

const DEFAULT_R2_PUBLIC_URL = 'https://audio.gloryofislammuseum.com';
const INDONESIAN_R2_PUBLIC_URL = 'https://audio.indonesianheritagemuseum.com';
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
      return handleTranslationRequest(env, url, request);
    }

    return new Response('Not Found', {
      status: 404,
      headers: corsHeaders
    });
  }
};

async function handleTranslationRequest(env, url, request) {
  const pathParts = url.pathname.replace('/api/translations/', '').split('/').filter(Boolean);
  const r2PublicUrl = resolveR2PublicUrl(request);

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

      const resultRows = (rows?.results ?? []).map((row) => ({
        ...row,
        audio_url: `${r2PublicUrl}/audio/${langCode}/${row.key}.mp3`,
      }));
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

          if (!deeplRes.ok) {
            console.error(`DeepL error ${deeplRes.status} for ${langCode}/${contentKey}`);
            return jsonResponse({ error: 'Translation unavailable' }, 503);
          }

          const data = await deeplRes.json();
          translated = data.translations?.[0]?.text;
          if (!translated || translated === sourceText) {
            return jsonResponse({ error: 'Translation unavailable' }, 503);
          }
        }

        const r2Key = `audio/${langCode}/${contentKey}.mp3`;
        const audioUrl = `${r2PublicUrl}/${r2Key}`;

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
        audio_url: `${r2PublicUrl}/audio/${langCode}/${contentKey}.mp3`
      }, 200);
    }

    return jsonResponse({ error: 'Invalid path' }, 400);
  } catch (error) {
    console.error('Translation error:', error);
    return jsonResponse({ error: 'Internal error' }, 500);
  }
}

function resolveR2PublicUrl(request) {
  const source = request.headers.get('Origin') || request.headers.get('Referer') || '';

  try {
    const hostname = new URL(source).hostname;
    if (hostname === 'indonesianheritagemuseum.com' || hostname.endsWith('.indonesianheritagemuseum.com')) {
      return INDONESIAN_R2_PUBLIC_URL;
    }
  } catch {
    // Non-browser clients may omit Origin/Referer; use the existing Glory default.
  }

  return DEFAULT_R2_PUBLIC_URL;
}

function jsonResponse(payload, status = 200) {
  return new Response(JSON.stringify(payload), {
    status,
    headers: { ...corsHeaders, 'Content-Type': 'application/json' }
  });
}

