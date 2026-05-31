// Translation Configuration for Glory of Islam Museum
// All audio and translations served from Cloudflare R2 + Workers

export const R2_BASE_URL = 'https://pub-135a7545edfc4289af5e9373bf26a44b.r2.dev';
export const WORKER_API = 'https://translation-worker.dtopengkingdom.workers.dev';

export const LANGUAGES = [
    { code: 'id', label: 'IDN', flag: '🇮🇩' },
    { code: 'en', label: 'ENG', flag: '🇬🇧' },
    { code: 'zh', label: 'CN', flag: '🇨🇳' },
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
// Note: Keys are the result of toZoneKey(zoneName) which converts zone.name to lowercase and replaces non-alphanumeric chars
const ID_AUDIO_MAP: Record<string, string> = {
    // === GEDUNG A: JEJAK PERADABAN (Building A zones) ===
    // Zone 1: RUANG TEATER - No audio (video playback)
    // Zone 2: RUANG SEJARAH NABI -> "ruang_sejarah_nabi"
    ruang_sejarah_nabi: 'Khulafaur Rasyidin  Tiga Dekade yang Mengubah Dunia',
    // Zone 3: RUANG UMAYYAH -> "ruang_umayyah"
    ruang_umayyah: 'Kekhalifahan Umayyah Awal Kekuasaan Besar Islam',
    // Zone 4: RUANG ABBASIYAH -> "ruang_abbasiyah"
    ruang_abbasiyah: 'Masa Keemasan Peradaban Islam  Poros Dunia di Baghdad',
    // Zone 5: RUANG UTSMANIYAH -> "ruang_utsmaniyah"
    ruang_utsmaniyah: '3 mahkota ottoman',
    // Zone 6: RUANG SAFAWIYAH -> "ruang_safawiyah"
    ruang_safawiyah: 'Iran Safawi',
    // Zone 7: RUANG MUGHAL -> "ruang_mughal"
    ruang_mughal: 'kejayaan islam di benua india',

    // === GEDUNG B: CAHAYA ISLAM DI NUSANTARA (Building B zones) ===
    // Zone 8: RUANG TEATER NUSANTARA - No audio (video playback)
    // Zone 9: TITIK NOL PERADABAN -> "titik_nol_peradaban"
    titik_nol_peradaban: 'KESULTANAN SAMUDRA PASAI',
    // Zone 10: CAHAYA DI JANTUNG MAJAPAHIT & ERA WALI SONGO -> "cahaya_di_jantung_majapahit_era_wali_songo" (& removed)
    cahaya_di_jantung_majapahit_era_wali_songo: 'Cahaya Islam di singgasana Majapahit',
    // Zone 11: KEBANGKITAN KESULTANAN JAWA -> "kebangkitan_kesultanan_jawa"
    kebangkitan_kesultanan_jawa: 'Kesultanan Pajang',
    // Zone 12: PELITA DI PELOSOK NEGERI -> "pelita_di_pelosok_negeri"
    pelita_di_pelosok_negeri: 'Laksamana Muslim di Lautan Nusantara',
    // Zone 13: KEJAYAAN MATARAM ISLAM -> "kejayaan_mataram_islam"
    kejayaan_mataram_islam: 'KESULTANAN MATARAM ISLAM',
    // Zone 14: PEWARIS TRADISI DAN DINAMIKA SEJARAH -> "pewaris_tradisi_dan_dinamika_sejarah"
    pewaris_tradisi_dan_dinamika_sejarah: 'Akhir dari Kesultanan Mataram  KASUNANAN SURAKARTA HADININGRAT',

    // === LEGACY MAPPINGS (kept for backward compatibility) ===
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

