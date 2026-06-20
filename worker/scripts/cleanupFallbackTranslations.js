const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '..', '.env') });

const { S3Client, DeleteObjectCommand } = require('@aws-sdk/client-s3');

const CLOUDFLARE_ACCOUNT_ID = process.env.CLOUDFLARE_ACCOUNT_ID;
const CLOUDFLARE_D1_DATABASE_ID = process.env.CLOUDFLARE_D1_DATABASE_ID;
const CLOUDFLARE_API_TOKEN = process.env.CLOUDFLARE_API_TOKEN;
const R2_BUCKET_NAME = process.env.R2_BUCKET_NAME;

const r2Client = new S3Client({
  endpoint: process.env.R2_ENDPOINT,
  region: 'auto',
  credentials: {
    accessKeyId: process.env.R2_ACCESS_KEY_ID,
    secretAccessKey: process.env.R2_SECRET_ACCESS_KEY,
  },
});

async function d1Query(sql, params = []) {
  const res = await fetch(
    `https://api.cloudflare.com/client/v4/accounts/${CLOUDFLARE_ACCOUNT_ID}/d1/database/${CLOUDFLARE_D1_DATABASE_ID}/query`,
    {
      method: 'POST',
      signal: AbortSignal.timeout(45000),
      headers: {
        Authorization: `Bearer ${CLOUDFLARE_API_TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ sql, params }),
    }
  );
  const data = await res.json();
  if (!data.success) throw new Error(`D1 failed: ${JSON.stringify(data.errors)}`);
  return data.result;
}

async function main() {
  const rowsResult = await d1Query(`
    SELECT content_key, lang_code, audio_path
    FROM translations
    WHERE lang_code != 'id' AND translated = source_text
  `);
  const rows = rowsResult?.[0]?.results ?? [];
  console.log(`Found ${rows.length} fallback rows where translated == source_text`);

  let deletedAudio = 0;
  for (const row of rows) {
    if (!row.audio_path) continue;
    try {
      await r2Client.send(new DeleteObjectCommand({ Bucket: R2_BUCKET_NAME, Key: row.audio_path }));
      deletedAudio++;
    } catch (error) {
      console.error(`Failed to delete R2 object ${row.audio_path}: ${error.message}`);
    }
  }

  await d1Query(`DELETE FROM translations WHERE lang_code != 'id' AND translated = source_text`);
  console.log(`Deleted ${rows.length} D1 fallback rows and ${deletedAudio} R2 audio objects`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
