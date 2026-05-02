# Translation Worker - Setup & Run Guide

## Overview

This Cloudflare Worker handles:
- Indonesian to 11 language translations via DeepL
- Text-to-Speech (TTS) audio generation for all 12 languages
- Audio storage in Cloudflare R2
- Translation caching in Cloudflare D1

## Prerequisites

1. Node.js installed
2. Cloudflare account with:
   - D1 Database (translations-db)
   - R2 Bucket (audio-translations)
   - API Token with D1 and R2 permissions
3. DeepL API Key (free tier: 500,000 chars/month)

## Setup

### 1. Install Dependencies

```bash
cd worker
npm install
```

### 2. Configure Environment

Edit `.env` file with your credentials:

```
CLOUDFLARE_ACCOUNT_ID=your_account_id
CLOUDFLARE_API_TOKEN=your_api_token
CLOUDFLARE_D1_DATABASE_ID=your_d1_database_id
DEEPL_API_KEY=your_deepl_api_key
R2_BUCKET_NAME=audio-translations
R2_PUBLIC_URL=https://pub-xxx.r2.dev
R2_ENDPOINT=https://xxx.r2.cloudflarestorage.com
```

### 3. Create D1 Table

The script will automatically create the table. Manual SQL:

```sql
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
);

CREATE INDEX IF NOT EXISTS idx_lang ON translations(lang_code);
CREATE INDEX IF NOT EXISTS idx_key ON translations(content_key);
```

### 4. Run Translation Script

This one-time script will:
- Translate all 27 zones to 11 languages
- Generate TTS audio for all 12 languages
- Upload audio to R2
- Save to D1

```bash
npm run run-translation
```

### 5. Deploy Worker

```bash
npm run deploy
```

## API Endpoints

### Get Translation

```
GET /api/translations/:lang/:key

Response:
{
  "translated": "Translated text...",
  "audio_url": "https://pub-xxx.r2.dev/audio/en/jawa_timur.mp3"
}
```

## Language Codes

| Code | Language |
|------|----------|
| id   | Indonesia |
| en   | English |
| ja   | Japanese |
| ko   | Korean |
| ar   | Arabic |
| fr   | French |
| de   | German |
| es   | Spanish |
| zh   | Chinese |
| ms   | Malay |
| th   | Thai |
| nl   | Dutch |

## Audio File Location

R2 path: `audio/{langCode}/{zoneKey}.mp3`

Examples:
- `audio/id/jawa_timur.mp3`
- `audio/en/jawa_timur.mp3`
- `audio/ja/jawa_timur.mp3`

## Zone Keys

| Zone Name | Key |
|-----------|-----|
| PRASEJARAH | prasejarah |
| AUSTRONESIA | austronesia |
| JAWA TIMUR | jawa_timur |
| ... | ... |

