// Translation Configuration for Indonesian Heritage Museum
// All audio and translations served from Cloudflare R2 + Workers

export const R2_BASE_URL = 'https://pub-135a7545edfc4289af5e9373bf26a44b.r2.dev';
export const WORKER_API = 'https://translation-worker.dtopengkingdom.workers.dev';

export const LANGUAGES = [
    { code: 'id', label: 'Indonesia', flag: '🇮🇩' },
    { code: 'en', label: 'English', flag: '🇬🇧' },
    { code: 'ja', label: '日本語', flag: '🇯🇵' },
    { code: 'ko', label: '한국어', flag: '🇰🇷' },
    { code: 'ar', label: 'العربية', flag: '🇸🇦' },
    { code: 'fr', label: 'Français', flag: '🇫🇷' },
    { code: 'de', label: 'Deutsch', flag: '🇩🇪' },
    { code: 'es', label: 'Español', flag: '🇪🇸' },
    { code: 'zh', label: '中文', flag: '🇨🇳' },
    { code: 'ms', label: 'Melayu', flag: '🇲🇾' },
    { code: 'th', label: 'ภาษาไทย', flag: '🇹🇭' },
    { code: 'nl', label: 'Nederlands', flag: '🇳🇱' },
] as const;

export type LangCode = typeof LANGUAGES[number]['code'];

// Convert zone name to safe R2/API key
export function toZoneKey(zoneName: string): string {
    return zoneName
        .toLowerCase()
        .replace(/[()&]/g, '')
        .replace(/[^a-z0-9\s]/g, '')
        .trim()
        .replace(/\s+/g, '_');
}

// Indonesian local audio filename mapping (zoneKey -> actual .wav filename without extension)
const ID_AUDIO_MAP: Record<string, string> = {
    prasejarah: 'Prasejarah',
    austronesia: 'Austronesia',
    'jawa_timur': 'Jawa_Timur',
    sejarah_kerajaan_jawa_timur: 'Sejarah_Kerajaan_Jawa_Timur',
    jawa_tengah: 'Jawa_Tengah',
    jawa_barat: 'Jawa_Barat',
    bali: 'Bali',
    nusa_tenggara_barat: 'NTB',
    nusa_tenggara_timur: 'NTT',
    'pulau_leti': 'Leti',
    'homo_floresiensis_hobbit': 'Hobbit',
    sumatra: 'Sumatera',
    manusia_purba_harau: 'Manusia_Purba_Harau',
    sulawesi: 'Sulawesi',
    kalimantan: 'Kalimantan',
    sejarah_kalimantan: 'Sejarah_Kalimantan',
    suku_dayak_kalimantan: 'Suku_Dayak_Kalimantan',
    pelindung_penolak_balak: 'Pelindung_&_Penolak_Balak',
    papua: 'Papua',
    asal_usul_wayang: 'Asal_Usul_Wayang',
    laksamana_cheng_ho: 'Chengho',
    budaya_peranakan: 'Budaya_Peranakan',
    wayang_potehi: 'Potehi',
    timeline_wayang_potehi: 'Timeline_Puppet',
    ken_dedes: 'Ken_Dedes',
    dewi_parwati: 'Dewi_Parwati',
    perjalanan_leluhur_nias: 'Sumatera_Perjalanan_Leluhur',
};

// English local audio filename mapping (identical to ID since filenames match)
const EN_AUDIO_MAP: Record<string, string> = {
    ...ID_AUDIO_MAP,
    // Special cases confirmed from file names
    'jawa_timur': 'Jawa Timur', // has space
};

// Build audio URL
export function buildAudioUrl(langCode: LangCode, zoneName: string): string {
    const zoneKey = toZoneKey(zoneName);
    const filename = (langCode === 'id' ? ID_AUDIO_MAP : langCode === 'en' ? EN_AUDIO_MAP : null)?.[zoneKey] || zoneKey;

    if (langCode === 'id') {
        return `/Audio/id/${filename}.wav`;
    }
    if (langCode === 'en') {
        return `/Audio/eng/${filename}.wav`;
    }
    // All other languages: .mp3 from Cloudflare R2
    return `${R2_BASE_URL}/audio/${langCode}/${zoneKey}.mp3`;
}

// Build translation API URL
export function buildTranslationUrl(langCode: LangCode, zoneName: string): string {
    const zoneKey = toZoneKey(zoneName);
    return `${WORKER_API}/api/translations/${langCode}/${zoneKey}`;
}

