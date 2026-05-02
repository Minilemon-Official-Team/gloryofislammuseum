# PROMPT BLACKBOX AI — FRONTEND AUTOGUIDE + OBJECTPAGE (FINAL)
## Copy seluruh isi di bawah ini ke Blackbox AI

---

```
You are an expert React + TypeScript developer working on an existing Indonesian Heritage Museum website.
Read every section fully before writing any code. Generate all files completely — no shortcuts, no placeholders.

════════════════════════════════════════════════════════
## 1. PROJECT CONTEXT
════════════════════════════════════════════════════════

Existing ReactJS + TypeScript + Vite project on Cloudflare Pages.
Two pages need updating:
- AutoGuide.tsx  → museum zones list, has audio player + existing React i18n for UI text
- ObjectPage.tsx → detailed zone view, currently has NO language switcher

GOALS:
1. Replace all museumData with 27 new zones + Indonesian descriptions
2. New data structure: zone has name + objects[] with id, image, description only
   NO audioId field — all audio built dynamically from R2
   NO per-object name field
3. When user switches language → BOTH description text AND audio change simultaneously
4. ALL 12 languages (including Indonesian) get audio from Cloudflare R2
5. Add ContentLanguageSwitcher to ObjectPage.tsx (currently missing)
6. Keep existing React i18n for UI labels — do NOT touch it

════════════════════════════════════════════════════════
## 2. AUDIO ARCHITECTURE — ALL 12 LANGUAGES FROM R2
════════════════════════════════════════════════════════

ALL audio (including Indonesian) is served from Cloudflare R2.
No Cloudinary fallback. No special case for Indonesian.

R2 Base URL : https://pub-135a7545edfc4289af5e9373bf26a44b.r2.dev
Audio path  : /audio/{langCode}/{zoneKey}.mp3

Full URL examples for zone "JAWA TIMUR" (key: jawa_timur):
  🇮🇩 Indonesian : https://pub-135a7545edfc4289af5e9373bf26a44b.r2.dev/audio/id/jawa_timur.mp3
  🇬🇧 English    : https://pub-135a7545edfc4289af5e9373bf26a44b.r2.dev/audio/en/jawa_timur.mp3
  🇯🇵 Japanese   : https://pub-135a7545edfc4289af5e9373bf26a44b.r2.dev/audio/ja/jawa_timur.mp3
  🇰🇷 Korean     : https://pub-135a7545edfc4289af5e9373bf26a44b.r2.dev/audio/ko/jawa_timur.mp3
  🇸🇦 Arabic     : https://pub-135a7545edfc4289af5e9373bf26a44b.r2.dev/audio/ar/jawa_timur.mp3
  🇫🇷 French     : https://pub-135a7545edfc4289af5e9373bf26a44b.r2.dev/audio/fr/jawa_timur.mp3
  🇩🇪 German     : https://pub-135a7545edfc4289af5e9373bf26a44b.r2.dev/audio/de/jawa_timur.mp3
  🇪🇸 Spanish    : https://pub-135a7545edfc4289af5e9373bf26a44b.r2.dev/audio/es/jawa_timur.mp3
  🇨🇳 Chinese    : https://pub-135a7545edfc4289af5e9373bf26a44b.r2.dev/audio/zh/jawa_timur.mp3
  🇲🇾 Malay      : https://pub-135a7545edfc4289af5e9373bf26a44b.r2.dev/audio/ms/jawa_timur.mp3
  🇹🇭 Thai       : https://pub-135a7545edfc4289af5e9373bf26a44b.r2.dev/audio/th/jawa_timur.mp3
  🇳🇱 Dutch      : https://pub-135a7545edfc4289af5e9373bf26a44b.r2.dev/audio/nl/jawa_timur.mp3

Zone key rule (zone name → file key):
  lowercase + spaces → underscores + remove special chars ( ) & 
  "PRASEJARAH"                  → "prasejarah"
  "JAWA TIMUR"                  → "jawa_timur"
  "SEJARAH KERAJAAN JAWA TIMUR" → "sejarah_kerajaan_jawa_timur"
  "NUSA TENGGARA BARAT"         → "nusa_tenggara_barat"
  "NUSA TENGGARA TIMUR"         → "nusa_tenggara_timur"
  "HOMO FLORESIENSIS (HOBBIT)"  → "homo_floresiensis_hobbit"
  "PELINDUNG & PENOLAK BALAK"   → "pelindung_penolak_balak"
  "LAKSAMANA CHENG HO"          → "laksamana_cheng_ho"
  "ASAL USUL WAYANG"            → "asal_usul_wayang"
  "BUDAYA PERANAKAN"            → "budaya_peranakan"
  "WAYANG POTEHI"               → "wayang_potehi"
  "TIMELINE WAYANG POTEHI"      → "timeline_wayang_potehi"
  "KEN DEDES"                   → "ken_dedes"
  "DEWI PARWATI"                → "dewi_parwati"
  "PERJALANAN LELUHUR NIAS"     → "perjalanan_leluhur_nias"
  "MANUSIA PURBA HARAU"         → "manusia_purba_harau"
  "SUKU DAYAK KALIMANTAN"       → "suku_dayak_kalimantan"
  "SEJARAH KALIMANTAN"          → "sejarah_kalimantan"
  "PULAU LETI"                  → "pulau_leti"

════════════════════════════════════════════════════════
## 3. TRANSLATION TEXT ARCHITECTURE
════════════════════════════════════════════════════════

Indonesian (id):
  Use object.description directly — no API call needed

All other 11 languages:
  Fetch from: https://translation-worker.dtopengkingdom.workers.dev/api/translations/{langCode}/{zoneKey}
  Response: { translated: "...", audio_url: "..." }
  Timeout: 3000ms
  Fallback: show Indonesian description if fetch fails

Cache all fetched translations in memory (useRef) per session.
Cache key format: "{langCode}_{zoneKey}"  e.g. "en_jawa_timur"
Never refetch same cache key twice.

════════════════════════════════════════════════════════
## 4. CONSTANTS — src/utils/translationConfig.ts
════════════════════════════════════════════════════════

```typescript
export const R2_BASE_URL = 'https://pub-135a7545edfc4289af5e9373bf26a44b.r2.dev';
export const WORKER_API  = 'https://translation-worker.dtopengkingdom.workers.dev';

export const LANGUAGES = [
  { code: 'id', label: 'Indonesia',  flag: '🇮🇩' },
  { code: 'en', label: 'English',    flag: '🇬🇧' },
  { code: 'ja', label: '日本語',      flag: '🇯🇵' },
  { code: 'ko', label: '한국어',      flag: '🇰🇷' },
  { code: 'ar', label: 'العربية',    flag: '🇸🇦' },
  { code: 'fr', label: 'Français',   flag: '🇫🇷' },
  { code: 'de', label: 'Deutsch',    flag: '🇩🇪' },
  { code: 'es', label: 'Español',    flag: '🇪🇸' },
  { code: 'zh', label: '中文',        flag: '🇨🇳' },
  { code: 'ms', label: 'Melayu',     flag: '🇲🇾' },
  { code: 'th', label: 'ภาษาไทย',    flag: '🇹🇭' },
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

// Build R2 audio URL — ALL 12 languages including Indonesian use R2
export function buildAudioUrl(langCode: LangCode, zoneName: string): string {
  const zoneKey = toZoneKey(zoneName);
  return `${R2_BASE_URL}/audio/${langCode}/${zoneKey}.mp3`;
}

// Build translation API URL
export function buildTranslationUrl(langCode: LangCode, zoneName: string): string {
  const zoneKey = toZoneKey(zoneName);
  return `${WORKER_API}/api/translations/${langCode}/${zoneKey}`;
}
```

════════════════════════════════════════════════════════
## 5. TRANSLATION CONTEXT — src/context/TranslationContext.tsx
════════════════════════════════════════════════════════

```typescript
import React, { createContext, useContext, useState, useCallback, useRef } from 'react';
import { LANGUAGES, LangCode, buildAudioUrl, buildTranslationUrl } from '../utils/translationConfig';

interface TranslationContextType {
  currentLang: LangCode;
  setLanguage: (lang: LangCode) => void;
  languages: typeof LANGUAGES;
  isLoading: boolean;
  getDescription: (zoneName: string, indonesianText: string) => string;
  getAudio: (zoneName: string) => string;  // no cloudinaryUrl param — all from R2
  prefetchTranslation: (zoneName: string, indonesianText: string) => void;
}

const TranslationContext = createContext<TranslationContextType | null>(null);

export function TranslationProvider({ children }: { children: React.ReactNode }) {
  const [currentLang, setCurrentLang] = useState<LangCode>('id');
  const [isLoading, setIsLoading]     = useState(false);
  const cache = useRef<Record<string, string>>({});

  const setLanguage = useCallback((lang: LangCode) => setCurrentLang(lang), []);

  const prefetchTranslation = useCallback(async (zoneName: string, indonesianText: string) => {
    if (currentLang === 'id') return;
    const cacheKey = `${currentLang}_${zoneName}`;
    if (cache.current[cacheKey]) return;

    try {
      setIsLoading(true);
      const url = buildTranslationUrl(currentLang, zoneName);
      const res = await fetch(url, { signal: AbortSignal.timeout(3000) });
      if (!res.ok) throw new Error('not found');
      const data = await res.json();
      cache.current[cacheKey] = data.translated;
    } catch {
      cache.current[cacheKey] = indonesianText; // fallback
    } finally {
      setIsLoading(false);
    }
  }, [currentLang]);

  const getDescription = useCallback((zoneName: string, indonesianText: string): string => {
    if (currentLang === 'id') return indonesianText;
    const cacheKey = `${currentLang}_${zoneName}`;
    return cache.current[cacheKey] ?? indonesianText;
  }, [currentLang]);

  // All 12 languages get audio from R2 — no special case for Indonesian
  const getAudio = useCallback((zoneName: string): string => {
    return buildAudioUrl(currentLang, zoneName);
  }, [currentLang]);

  return (
    <TranslationContext.Provider value={{
      currentLang, setLanguage, languages: LANGUAGES,
      isLoading, getDescription, getAudio, prefetchTranslation,
    }}>
      {children}
    </TranslationContext.Provider>
  );
}

export function useTranslationContext() {
  const ctx = useContext(TranslationContext);
  if (!ctx) throw new Error('Must be inside TranslationProvider');
  return ctx;
}
```

════════════════════════════════════════════════════════
## 6. CONTENT LANGUAGE SWITCHER — src/components/ui/ContentLanguageSwitcher.tsx
════════════════════════════════════════════════════════

```typescript
import { useTranslationContext } from '../../context/TranslationContext';
import { LangCode } from '../../utils/translationConfig';

export function ContentLanguageSwitcher() {
  const { currentLang, setLanguage, languages, isLoading } = useTranslationContext();
  const current = languages.find(l => l.code === currentLang);

  return (
    <div className="flex items-center gap-2 bg-white/90 backdrop-blur-sm
                    rounded-xl px-3 py-2 shadow border border-gray-200">
      <span className="text-lg">{current?.flag}</span>
      <span className="text-sm font-semibold text-gray-600">🔊</span>
      <select
        value={currentLang}
        onChange={(e) => setLanguage(e.target.value as LangCode)}
        disabled={isLoading}
        className="text-sm font-medium text-gray-800 bg-transparent
                   border-none cursor-pointer focus:outline-none"
      >
        {languages.map((lang) => (
          <option key={lang.code} value={lang.code}>
            {lang.flag} {lang.label}
          </option>
        ))}
      </select>
      {isLoading && <span className="text-xs text-amber-500 animate-pulse">•••</span>}
    </div>
  );
}
```

Place in top/header area of BOTH AutoGuide.tsx and ObjectPage.tsx.

════════════════════════════════════════════════════════
## 7. ZONE RENDER PATTERN (apply to both pages)
════════════════════════════════════════════════════════

```typescript
import { useEffect } from 'react';
import { useTranslationContext } from '../context/TranslationContext';
import { toZoneKey } from '../utils/translationConfig';

// Inside component:
const { currentLang, getDescription, getAudio, prefetchTranslation } = useTranslationContext();

const obj         = zone.objects[0];
const zoneKey     = toZoneKey(zone.name);
const description = getDescription(zone.name, obj.description);
const audioUrl    = getAudio(zone.name); // always R2, all 12 langs

useEffect(() => {
  prefetchTranslation(zone.name, obj.description);
}, [currentLang, zone.name]);

// JSX:
<h2>{zone.name}</h2>
<img src={obj.image} alt={zone.name} />

{/* CRITICAL: key forces audio reload on language switch */}
<audio
  key={`${zoneKey}-${currentLang}`}
  controls
  src={audioUrl}
>
  Your browser does not support audio.
</audio>

<p>{description}</p>
```

MANDATORY: audio element must have key={`${zoneKey}-${currentLang}`}
Without this, React won't reload audio when language changes.

════════════════════════════════════════════════════════
## 8. TypeScript INTERFACES
════════════════════════════════════════════════════════

```typescript
interface ZoneObject {
  id: number;
  image: string;       // Cloudinary image URL
  description: string; // Indonesian source text
  // NO audioId — all audio from R2 dynamically
  // NO name — removed completely
}

interface Zone {
  name: string;        // Zone title (used to derive zoneKey)
  objects: ZoneObject[];
}
```

════════════════════════════════════════════════════════
## 9. FULL MUSEUM DATA — 27 ZONES
════════════════════════════════════════════════════════

Replace entire existing museumData with this.
Keep existing Cloudinary image URLs where available. Use '' for missing.
NO audioId field. NO name field per object.

```typescript
const museumData: Zone[] = [
  {
    name: 'PRASEJARAH',
    objects: [{ id: 1, image: '',
      description: 'Perjalanan peradaban Nusantara adalah epik panjang dari fajar umat manusia hingga lahirnya kerajaan-kerajaan megah. Berawal dari pemburu nomaden Paleolitikum, peradaban berevolusi melalui masa agraris Neolitikum hingga pesatnya pertukaran budaya dan perdagangan di Zaman Logam. Transformasi dari pembuat alat batu purba menuju masyarakat pesisir yang kompleks ini pada akhirnya membuka jalan bagi kemunculan peradaban besar pertama—seperti Kutai, Tarumanegara, dan Sriwijaya—yang merajut mahakarya sejarah dan warisan maritim Nusantara.',
    }],
  },
  {
    name: 'AUSTRONESIA',
    objects: [{ id: 2, image: '',
      description: 'Perjalanan sejarah Nusantara dibentuk secara mendalam oleh epik besar Migrasi Austronesia. Berawal dari Taiwan ribuan tahun silam, para pelaut ulung ini mengarungi samudra untuk membawa revolusi agraris dan bahasa yang kini menjadi akar budaya kepulauan ini. Jejak peradaban mereka berevolusi pesat dari era Neolitikum menuju Zaman Logam, yang pada akhirnya memicu kemunculan kerajaan-kerajaan kuno yang megah. Melintasi keemasan jalur rempah, era penyebaran Islam, hingga masa kolonial, warisan Austronesia tetap kokoh bertahan—mewariskan ratusan bahasa, teknologi maritim perahu bercadik, dan keragaman tradisi yang merajut identitas Indonesia modern.',
    }],
  },
  {
    name: 'JAWA TIMUR',
    objects: [{ id: 3, image: '',
      description: 'Kisah epik Jawa Timur bermula dari peradaban purba di lembah Sungai Brantas, berevolusi menjadi pusat keemasan kerajaan Hindu-Buddha yang memuncak pada kemegahan imperium Majapahit. Pasca keruntuhan Majapahit, pesisir utaranya bertransformasi menjadi nadi utama penyebaran Islam dan perniagaan internasional. Melintasi era kolonialisme yang panjang, jiwa pantang menyerah rakyatnya meledak dalam pertempuran heroik 10 November 1945 di Surabaya, selamanya mengukuhkan wilayah ini sebagai kawah candradimuka kemerdekaan Indonesia.',
    }],
  },
  {
    name: 'SEJARAH KERAJAAN JAWA TIMUR',
    objects: [{ id: 4, image: '',
      description: 'Sejarah Jawa Timur adalah epik dinasti-dinasti besar Nusantara. Dari era Hindu-Buddha yang dinamis melalui Kahuripan hingga Singhasari, wilayah ini mencapai puncak kemegahannya bersama imperium maritim agung Majapahit. Memasuki abad ke-15, transisi spiritual melalui dakwah damai Wali Songo di pesisir utara melahirkan era kesultanan Islam baru, sekaligus mengukuhkan posisi Jawa Timur sebagai pusat perniagaan maritim internasional.',
    }],
  },
  {
    name: 'JAWA TENGAH',
    objects: [{ id: 5, image: '',
      description: 'Jawa Tengah adalah jantung kebudayaan Jawa dan saksi bisu peradaban Nusantara. Sejarahnya merentang dari manusia purba di Sangiran hingga era keemasan Mataram Kuno yang mewariskan mahakarya Borobudur dan Prambanan. Memasuki abad ke-15, arus perubahan melahirkan pusat peradaban Islam di bawah Kesultanan Demak, Pajang, dan Mataram. Melintasi gejolak kolonial yang diwarnai perlawanan heroik Pangeran Diponegoro, Jawa Tengah kini berdiri tangguh sebagai benteng kebudayaan klasik dan sumbu pergerakan kemerdekaan Indonesia.',
    }],
  },
  {
    name: 'JAWA BARAT',
    objects: [{ id: 6, image: '',
      description: 'Jawa Barat adalah tanah kelahiran peradaban Sunda, berakar dari tradisi megalitik purba Gunung Padang. Wilayah ini menyaksikan berdirinya Tarumanagara, yang kemudian mewariskan kejayaannya pada kemegahan Kerajaan Pajajaran di bawah Prabu Siliwangi. Memasuki abad ke-16, peradaban Islam mekar melalui pesisir Kesultanan Banten dan Cirebon. Melintasi era kolonial, semangat keperwiraan rakyat memuncak dalam epik Bandung Lautan Api, selamanya mengukuhkan wilayah ini sebagai pilar pertahanan kemerdekaan Indonesia.',
    }],
  },
  {
    name: 'BALI',
    objects: [{ id: 7, image: '',
      description: 'Bali, Sang "Pulau Dewata", adalah wujud nyata kesinambungan budaya Hindu dan tradisi leluhur Austronesia. Peradabannya mengakar dari sistem tata air prasejarah subak, mekar di bawah Dinasti Warmadewa, dan disempurnakan oleh warisan kemegahan Majapahit. Menghadapi kolonialisme, jiwa keperwiraan rakyatnya meledak lewat epos heroik Puputan dan perjuangan I Gusti Ngurah Rai. Kini, melampaui segala gejolak zaman, Bali modern mempesona dunia sambil terus menjaga nyala api spiritualitas Hindu Dharma dan filosofi agung Tri Hita Karana.',
    }],
  },
  {
    name: 'NUSA TENGGARA BARAT',
    objects: [{ id: 8, image: '',
      description: 'Nusa Tenggara Barat adalah permata kepulauan yang menjembatani pesona Bali dan eksotisme timur Nusantara. Jejak peradabannya berakar dari zaman prasejarah, mekar menjadi Kerajaan Sasak, dan disempurnakan oleh warisan agraris imperium Majapahit. Masuknya jaringan perniagaan Melayu dan Arab kemudian melahirkan era Islam di Kesultanan Bima dan Sumbawa. Melintasi sejarah perlawanan heroik melawan kolonialisme, wilayah ini kini berdiri megah—merayakan pesona Gunung Rinjani, tradisi tenun ikat, dan keberagaman magis suku Sasak, Bima, serta Sumbawa.',
    }],
  },
  {
    name: 'NUSA TENGGARA TIMUR',
    objects: [{ id: 9, image: '',
      description: 'Nusa Tenggara Timur adalah persimpangan eksotis bertemunya budaya Austronesia, Melanesia, Asia, dan Eropa. Jejak purbanya membentang dari misteri Homo floresiensis di Flores hingga kokohnya tradisi megalitik di tanah Sumba. Tumbuh dengan struktur adat dan kerajaan lokal yang kuat, arah sejarahnya berubah saat bangsa Portugis dan Belanda tiba di abad ke-16, membawa perburuan cendana dan penyebaran iman Katolik. Melintasi era persaingan kolonial, NTT modern kini mekar merayakan pesona Taman Nasional Komodo dan Danau Kelimutu, serta mahakarya tradisi seperti tenun ikat dan alunan magis dawai sasando.',
    }],
  },
  {
    name: 'PULAU LETI',
    objects: [{ id: 10, image: '',
      description: 'Di ufuk tenggara Nusantara, Pulau Leti menyimpan jejak peradaban sakral yang telah berusia lebih dari dua milenium. Di sinilah berdiri Patung Yene, sebuah mahakarya spiritual yang bukan sekadar pahatan batu, melainkan medium penghubung antara manusia dan roh para leluhur. Melalui ritual kuno "Patung Darah Pipi", masyarakat adat merawat ikatan batin dengan nenek moyang—memohon keselamatan kampung dan kesuburan bumi. Menjadi saksi bisu perjalanan waktu dari era prasejarah hingga masa kini, Patung Yene terus abadi sebagai warisan budaya yang mengingatkan kita akan dalamnya akar spiritualitas luhur Nusantara.',
    }],
  },
  {
    name: 'HOMO FLORESIENSIS (HOBBIT)',
    objects: [{ id: 11, image: '',
      description: 'Di kedalaman gua kapur Liang Bua, Flores, tersimpan salah satu penemuan paling mengejutkan dalam sejarah evolusi: Homo floresiensis. Dijuluki "Manusia Hobbit" karena posturnya yang mungil setinggi satu meter, spesies ini mampu bertahan hidup di alam terisolasi menggunakan alat batu purba selama puluhan ribu tahun. Fenomena adaptasi unik island dwarfism ini mengubah pemahaman dunia—membuktikan bahwa perjalanan evolusi manusia tidaklah tunggal, melainkan epik penuh cabang misterius yang menempatkan Nusantara sebagai kunci penting dalam peta evolusi dunia.',
    }],
  },
  {
    name: 'SUMATRA',
    objects: [{ id: 12, image: '',
      description: 'Sumatra berdiri agung sebagai pusat peradaban purba dan simpul niaga utama di Samudra Hindia. Sejarahnya membentang dari akar budaya Austronesia hingga keemasan imperium Sriwijaya sang penguasa Selat Malaka. Abad ke-13 menyambut fajar Islam melalui Samudra Pasai, disusul oleh kejayaan Kesultanan Aceh dan Pagaruyung. Mengarungi masa kolonial dengan perlawanan heroik dalam Perang Padri dan Aceh, jiwa merdekanya memuncak pada peran vital PDRI di masa kemerdekaan. Kini, Sumatra modern terus merawat warisan budaya sepuluh provinsinya—membentang dari megahnya kaldera Danau Toba hingga puncak Gunung Kerinci.',
    }],
  },
  {
    name: 'MANUSIA PURBA HARAU',
    objects: [{ id: 13, image: '',
      description: 'Di kawasan megah Lembah Harau dan pesisir Sumatra Barat, tersimpan jejak transisi besar peradaban purba Nusantara. Penemuan alat-alat batu kuno menjadi saksi bisu peralihan gaya hidup pemburu-peramu menuju pola hunian yang lebih menetap. Revolusi ini memuncak dengan hadirnya mahakarya artefak perunggu di kawasan pesisir, menandai kemajuan pesat teknologi dan lahirnya jaringan perdagangan maritim. Kisah dari Lembah Harau ini membuktikan bahwa sejak ribuan tahun silam, Sumatra Barat telah menjadi panggung dinamis bagi inovasi, adaptasi, dan evolusi masyarakat terstruktur di Asia Tenggara.',
    }],
  },
  {
    name: 'SULAWESI',
    objects: [{ id: 14, image: '',
      description: 'Sulawesi, pulau berwujud unik di simpul maritim Nusantara, menyimpan peradaban yang berakar dari lukisan gua prasejarah tertua di Maros-Pangkep. Jejak pelaut Austronesia ini melahirkan keperkasaan Kerajaan Luwu hingga kedigdayaan maritim Kesultanan Gowa-Tallo di bawah kepemimpinan heroik Sultan Hasanuddin. Masuknya Islam di abad ke-16 semakin mengukuhkan wilayah ini sebagai urat nadi perniagaan rempah. Mengarungi kerasnya pusaran kolonialisme, jiwa tangguh para pelaut tak pernah surut; kini mekar di Sulawesi modern yang merayakan keberagaman magis Bugis, Makassar, Toraja, hingga suku Bajo sang pengembara samudra.',
    }],
  },
  {
    name: 'KALIMANTAN',
    objects: [{ id: 15, image: '',
      description: 'Kalimantan menyimpan epik peradaban yang berdenyut selaras dengan urat nadi sungai-sungai raksasanya. Kisahnya bermula dari lukisan gua purba dan tradisi suku Dayak, sebelum menorehkan sejarah sebagai rumah bagi Kutai Martadipura, kerajaan Hindu tertua di Nusantara. Arus waktu dan pesona rempah kemudian mengundang jaringan niaga Islam yang melahirkan kesultanan makmur seperti Banjar dan Pontianak. Melewati masa kelam kolonialisme dan perlawanan heroik Pangeran Antasari, jantung hutan tropis ini kini menatap masa depan gemilang sebagai Ibu Kota Nusantara (IKN), seraya terus melestarikan pesona suku dan kekayaan alam liarnya.',
    }],
  },
  {
    name: 'SEJARAH KALIMANTAN',
    objects: [{ id: 16, image: '',
      description: 'Pulau Kalimantan menyimpan jejak peradaban purba di belantara hutan tropisnya, membentang dari tradisi megalitik hingga pesona lukisan gua kuno. Melintasi zaman, sungai-sungai raksasa menjadi urat nadi kehidupan yang mengubah pesisirnya menjadi jalur niaga vital, melahirkan kerajaan-kerajaan megah seperti Kutai. Sebuah harmoni budaya tercipta dengan indah; ketika suku Dayak di pedalaman teguh menjaga sakralnya tradisi leluhur, wilayah pesisirnya mekar menjadi perpaduan multikultural dari jejak para pelaut Asia dan Eropa.',
    }],
  },
  {
    name: 'SUKU DAYAK KALIMANTAN',
    objects: [{ id: 17, image: '',
      description: 'Jauh di pedalaman dan hulu sungai raksasa Kalimantan, Suku Dayak telah mendiami belantara hutan tropis selama ribuan tahun. Sebutan kolektif ini menaungi beragam sub-suku yang hidup harmonis, menjadikan alam bukan sekadar sumber kehidupan, melainkan ruang spiritual yang sakral. Identitas luhur mereka terukir indah melalui kemegahan rumah panjang, seni tato tradisional, hingga pusaka mandau dan perisai bermotif alam. Melalui ritual suci seperti upacara Tiwah dan perayaan panen, masyarakat Dayak terus merawat keseimbangan abadi antara manusia, para leluhur, dan roh penjaga alam.',
    }],
  },
  {
    name: 'PELINDUNG & PENOLAK BALAK',
    objects: [{ id: 18, image: '',
      description: 'Di pedalaman hutan belantara Kalimantan, berdiri sebuah arca batu unik wujud sang kucing hutan yang menjadi saksi bisu tradisi spiritual kuno masyarakat Dayak. Sosok sakral yang melambangkan kewaspadaan dan ketangkasan gaib ini dipuja sebagai pelindung kampung dan penolak segala bala. Lebih dari sekadar artefak, arca ini adalah wujud abadi dari keharmonisan yang mendalam antara manusia, roh penjaga, dan hutan yang telah memeluk kehidupan mereka selama ribuan tahun.',
    }],
  },
  {
    name: 'PAPUA',
    objects: [{ id: 19, image: '',
      description: 'Di ufuk paling timur Nusantara, Papua menyimpan epik peradaban kuno yang telah berdenyut sejak 40.000 tahun silam. Dari kedalaman lembah hingga pesisirnya, ratusan suku adat seperti Dani, Asmat, dan Amungme teguh merawat tradisi komunal dan ikatan batin dengan alam leluhur. Melintasi era penjelajahan bangsa Eropa dan masa kolonial Belanda, arus sejarah pada akhirnya membawa wilayah ini terintegrasi ke dalam pangkuan Ibu Pertiwi, didorong oleh perjuangan tokoh pahlawan seperti J.A. Dimara. Kini, Papua modern berdiri megah memancarkan pesonanya—sebuah simfoni kekayaan budaya dan keajaiban alam yang membentang dari Lembah Baliem hingga Danau Sentani.',
    }],
  },
  {
    name: 'ASAL USUL WAYANG',
    objects: [{ id: 20, image: '',
      description: 'Wayang, mahakarya seni Nusantara yang bermakna "bayangan" atau "roh", merupakan harmoni luhur antara cerita, alunan gamelan, dan filosofi kehidupan. Lahir di era Hindu-Buddha pada abad ke-9 dengan membawakan epos agung Ramayana dan Mahabharata, seni ini bertransformasi secara anggun di abad ke-15 ketika para Wali Songo menjadikannya medium dakwah Islam yang damai. Dari siluet magis wayang kulit di Jawa Tengah dan Timur hingga rupa rupawan wayang golek di Jawa Barat, warisan yang kini diakui agung oleh UNESCO ini terus abadi—bukan sekadar hiburan rakyat, melainkan pilar pendidikan moral dan cermin kearifan spiritual bangsa yang tak lekang oleh waktu.',
    }],
  },
  {
    name: 'LAKSAMANA CHENG HO',
    objects: [{ id: 21, image: '',
      description: 'Laksamana Cheng Ho, pelaut Muslim agung dari Dinasti Ming, menorehkan jejak epik di perairan Nusantara melalui tujuh pelayaran bersejarahnya antara tahun 1405 hingga 1433. Membawa misi diplomasi damai, persahabatan, dan pengamanan jalur niaga, armada raksasanya merajut hubungan erat dengan kerajaan-kerajaan terkemuka seperti Majapahit, Samudera Pasai, dan Malaka. Ekspedisi monumental ini tidak sekadar memperluas pengaruh politik Tiongkok tanpa penjajahan, melainkan juga mengukuhkan posisi Nusantara sebagai simpul strategis yang vital dalam jaringan maritim dunia pada abad ke-15.',
    }],
  },
  {
    name: 'BUDAYA PERANAKAN',
    objects: [{ id: 22, image: '',
      description: 'Budaya Peranakan adalah mahakarya akulturasi indah yang lahir dari perpaduan harmonis antara pendatang Tionghoa dan tradisi lokal Nusantara. Pertemuan dua dunia ini melahirkan warisan seni yang menawan, mulai dari alunan musik Gambang Kromong khas Betawi yang menggabungkan instrumen dawai dan gamelan, hingga pertunjukan Wayang Potehi di kawasan pesisir Jawa. Semarak perpaduan ini juga hidup dalam kemeriahan tradisi Cap Go Meh dan tarian Barongsai, serta terlukis anggun pada lembaran Batik Peranakan yang memadukan motif mitologi Tiongkok dengan corak warna Nusantara yang cerah.',
    }],
  },
  {
    name: 'WAYANG POTEHI',
    objects: [{ id: 23, image: '',
      description: 'Wayang Potehi, seni boneka tangan klasik yang dibawa oleh imigran Tionghoa ke kota-kota pelabuhan Nusantara pada abad ke-17 hingga ke-18, telah mekar menjadi mahakarya akulturasi budaya yang memukau. Berawal dari ritual perayaan kelenteng seperti Imlek dan Cap Go Meh yang membawakan epik legenda Tiongkok, seni ini secara perlahan dan anggun membaur dengan jiwa lokal Nusantara. Harmoni ini terwujud menawan dalam perpaduan dinamis antara instrumen musik tradisional Tiongkok dan alunan gamelan Jawa, serta adaptasi cerita yang merangkul kearifan masyarakat setempat.',
    }],
  },
  {
    name: 'TIMELINE WAYANG POTEHI',
    objects: [{ id: 24, image: '',
      description: 'Memasuki abad ke-20, seni Wayang Potehi mulai terorganisasi secara rapi melalui berbagai paguyuban di kota-kota besar Nusantara, menjaga nyala tradisi di tengah dinamika perubahan sosial dan politik bangsa. Mengalami masa kebangkitan kultural pada era 1970-an, kesenian ini menemukan kembali panggungnya dalam kemeriahan perayaan Imlek dan Cap Go Meh. Kini, di era digital, Wayang Potehi telah bertransformasi menjadi warisan budaya hidup yang melampaui batas etnis—merajut kisah klasik Tiongkok dengan tema lokal dan sejarah Nusantara.',
    }],
  },
  {
    name: 'KEN DEDES',
    objects: [{ id: 25, image: '',
      description: 'Ken Dedes, sang permaisuri agung dari abad ke-13, berdiri sebagai sosok sentral dalam pusaran berdirinya Kerajaan Singhasari. Dikenal memiliki kecantikan memukau yang memancarkan prabha atau sinar kemuliaan, kisahnya diwarnai intrik kekuasaan yang dramatis ketika ia dipersunting oleh Ken Arok setelah tragedi pembunuhan penguasa Tumapel, Tunggul Ametung. Seperti yang dikisahkan dengan penuh misteri dan ramalan dalam kitab Pararaton, dari garis keturunannyalah lahir raja-raja besar penguasa Singhasari dan Majapahit.',
    }],
  },
  {
    name: 'DEWI PARWATI',
    objects: [{ id: 26, image: '',
      description: 'Dewi Parwati, lambang agung cinta, kesetiaan, dan kekuatan ilahi (Shakti), dihormati dalam agama Hindu sebagai pendamping abadi Dewa Siwa. Kisah pengabdiannya bermula dari pertapaan berat sang putri Raja Himawan ini demi meluluhkan hati Siwa, sang pertapa agung yang hidup menyendiri. Dari penyatuan suci mereka lahirlah dewa-dewa besar penguasa kebijaksanaan dan peperangan, yakni Ganesha dan Kartikeya. Di balik pesona kelembutannya, Parwati menyimpan wujud perkasa pembinasakan kejahatan dalam rupa Durga dan Kali.',
    }],
  },
  {
    name: 'PERJALANAN LELUHUR NIAS',
    objects: [{ id: 27, image: '',
      description: 'Berakar dari jejak migrasi purba Austronesia, Pulau Nias melahirkan peradaban luhur yang menjunjung tinggi keberanian, kehormatan, dan solidaritas komunal. Semangat pantang menyerah masyarakatnya terukir abadi dalam ketangguhan arsitektur Omo Hada dan heroisme tradisi Fahombo Batu. Hingga detik ini, warisan agung para leluhur terus berdenyut, merawat harmoni suci antara manusia, alam, dan pendahulu, serta menjadi kepingan yang memperkaya indahnya mosaik peradaban Nusantara.',
    }],
  },
];
```

════════════════════════════════════════════════════════
## 10. NO-CONFLICT WITH EXISTING i18n
════════════════════════════════════════════════════════

SYSTEM 1 — Existing React i18n (DO NOT TOUCH):
  Controls UI labels, nav, button text
  Keep its existing switcher component unchanged

SYSTEM 2 — New TranslationContext (ADD THIS):
  Controls zone description text + audio language
  Uses ContentLanguageSwitcher (labeled "🔊")

These two systems are completely independent and never share state.

════════════════════════════════════════════════════════
## 11. ObjectPage.tsx CHANGES
════════════════════════════════════════════════════════

A) Add ContentLanguageSwitcher to page header/top area
B) Use getDescription() + getAudio() from useTranslationContext()
C) Call prefetchTranslation() in useEffect on mount and lang change
D) audio element MUST have key={`${zoneKey}-${currentLang}`}
E) Remove any display of object.name — use zone.name as title
F) Keep all existing layout, routing, styling unchanged

════════════════════════════════════════════════════════
## 12. WRAP APP — src/main.tsx
════════════════════════════════════════════════════════

```typescript
import { TranslationProvider } from './context/TranslationContext';

<TranslationProvider>
  <App />
</TranslationProvider>
```

════════════════════════════════════════════════════════
## 13. FILES TO GENERATE
════════════════════════════════════════════════════════

1. src/utils/translationConfig.ts
2. src/context/TranslationContext.tsx
3. src/components/ui/ContentLanguageSwitcher.tsx
4. src/pages/AutoGuide.tsx       ← 27 zones, new structure, existing i18n intact
5. src/pages/ObjectPage.tsx      ← ContentLanguageSwitcher + dynamic audio added
6. src/main.tsx                  ← TranslationProvider wrapper

════════════════════════════════════════════════════════
## 14. FINAL CHECKLIST
════════════════════════════════════════════════════════

[ ] NO audioId field in ZoneObject interface or museumData
[ ] NO object.name field anywhere
[ ] ALL 27 zones present with descriptions
[ ] ALL 12 languages including id get audio from R2
[ ] buildAudioUrl() has NO special case for Indonesian
[ ] audio key={`${zoneKey}-${currentLang}`} in BOTH pages (mandatory)
[ ] R2_BASE_URL = https://pub-135a7545edfc4289af5e9373bf26a44b.r2.dev
[ ] WORKER_API = https://translation-worker.dtopengkingdom.workers.dev
[ ] ContentLanguageSwitcher in BOTH AutoGuide AND ObjectPage
[ ] TranslationProvider wraps App in main.tsx
[ ] Existing i18n completely untouched
[ ] No localStorage used
[ ] No TypeScript 'any' types
[ ] Translation cache uses useRef

Start with src/utils/translationConfig.ts now.
```
