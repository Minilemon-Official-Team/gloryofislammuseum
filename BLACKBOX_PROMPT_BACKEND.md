# PROMPT BLACKBOX AI — BACKEND WORKER (FINAL)
## Copy seluruh isi di bawah ini ke Blackbox AI

---

```
You are an expert fullstack developer. Build a complete production-ready
multilingual text + audio translation system using Cloudflare Workers (backend),
Cloudflare D1 as database, and Cloudflare R2 as audio storage.

Read every section carefully before writing any code.

════════════════════════════════════════════════════════
## 1. PROJECT OVERVIEW
════════════════════════════════════════════════════════

This system translates Indonesian museum content into 11 other languages.
Indonesian text is the SOURCE — it does NOT go through DeepL translation.
All 12 languages (including Indonesian) get TTS audio generated and stored in R2.
Translation + audio generation runs ONCE via a script, then served forever from D1 + R2.

════════════════════════════════════════════════════════
## 2. CREDENTIALS — USE EXACTLY AS WRITTEN
════════════════════════════════════════════════════════

CLOUDFLARE:
  Account ID     : cd932427a70c9e379f99bd90f35c16f7
  API Token      : dxUBVqp2q7sfnCZWUv4IYY16Jdl_D4hyXwVPIxek
  D1 Database    : translations-db
  D1 Database ID : a53f7b0f-c3f5-4711-9e42-a5613a4619c7
  R2 Bucket      : audio-translations
  R2 Public URL  : https://pub-135a7545edfc4289af5e9373bf26a44b.r2.dev
  R2 S3 Endpoint : https://cd932427a70c9e379f99bd90f35c16f7.r2.cloudflarestorage.com
  Workers Domain : dtopengkingdom.workers.dev

DEEPL:
  API Key        : 0516a76b-1968-4287-8d80-3c8e9ab2860c:fx
  Endpoint       : https://api-free.deepl.com/v2/translate
  Free Quota     : 500,000 characters/month
  Source lang    : ID (Indonesian)
  NOTE: DeepL only used for 11 non-Indonesian languages. Indonesian skips DeepL.

════════════════════════════════════════════════════════
## 3. ALL 12 LANGUAGES
════════════════════════════════════════════════════════

const ALL_LANGUAGES = [
  { code: 'id', label: 'Indonesia',  deepl: null,  tts: 'id' }, // source — skip DeepL, still generate TTS
  { code: 'en', label: 'English',    deepl: 'EN',  tts: 'en' },
  { code: 'ja', label: 'Japanese',   deepl: 'JA',  tts: 'ja' },
  { code: 'ko', label: 'Korean',     deepl: 'KO',  tts: 'ko' },
  { code: 'ar', label: 'Arabic',     deepl: 'AR',  tts: 'ar' },
  { code: 'fr', label: 'French',     deepl: 'FR',  tts: 'fr' },
  { code: 'de', label: 'German',     deepl: 'DE',  tts: 'de' },
  { code: 'es', label: 'Spanish',    deepl: 'ES',  tts: 'es' },
  { code: 'zh', label: 'Chinese',    deepl: 'ZH',  tts: 'zh' },
  { code: 'ms', label: 'Malay',      deepl: 'MS',  tts: 'ms' },
  { code: 'th', label: 'Thai',       deepl: 'TH',  tts: 'th' },
  { code: 'nl', label: 'Dutch',      deepl: 'NL',  tts: 'nl' },
];

// deepl: null → skip DeepL, use source text directly
// All 12 languages generate TTS audio and store to R2

════════════════════════════════════════════════════════
## 4. AUDIO FILE LOCATION IN R2
════════════════════════════════════════════════════════

All audio files stored in R2 bucket "audio-translations" under path:
  audio/{langCode}/{zoneKey}.mp3

Full public URL pattern:
  https://pub-135a7545edfc4289af5e9373bf26a44b.r2.dev/audio/{langCode}/{zoneKey}.mp3

Examples for zone "JAWA TIMUR" (key: jawa_timur):
  Indonesian : https://pub-135a7545edfc4289af5e9373bf26a44b.r2.dev/audio/id/jawa_timur.mp3
  English    : https://pub-135a7545edfc4289af5e9373bf26a44b.r2.dev/audio/en/jawa_timur.mp3
  Japanese   : https://pub-135a7545edfc4289af5e9373bf26a44b.r2.dev/audio/ja/jawa_timur.mp3
  Korean     : https://pub-135a7545edfc4289af5e9373bf26a44b.r2.dev/audio/ko/jawa_timur.mp3
  Arabic     : https://pub-135a7545edfc4289af5e9373bf26a44b.r2.dev/audio/ar/jawa_timur.mp3
  French     : https://pub-135a7545edfc4289af5e9373bf26a44b.r2.dev/audio/fr/jawa_timur.mp3
  German     : https://pub-135a7545edfc4289af5e9373bf26a44b.r2.dev/audio/de/jawa_timur.mp3
  Spanish    : https://pub-135a7545edfc4289af5e9373bf26a44b.r2.dev/audio/es/jawa_timur.mp3
  Chinese    : https://pub-135a7545edfc4289af5e9373bf26a44b.r2.dev/audio/zh/jawa_timur.mp3
  Malay      : https://pub-135a7545edfc4289af5e9373bf26a44b.r2.dev/audio/ms/jawa_timur.mp3
  Thai       : https://pub-135a7545edfc4289af5e9373bf26a44b.r2.dev/audio/th/jawa_timur.mp3
  Dutch      : https://pub-135a7545edfc4289af5e9373bf26a44b.r2.dev/audio/nl/jawa_timur.mp3

Zone key rule: lowercase + spaces → underscores + remove special chars
  "PRASEJARAH"                  → "prasejarah"
  "JAWA TIMUR"                  → "jawa_timur"
  "HOMO FLORESIENSIS (HOBBIT)"  → "homo_floresiensis_hobbit"
  "PELINDUNG & PENOLAK BALAK"   → "pelindung_penolak_balak"

════════════════════════════════════════════════════════
## 5. FOLDER STRUCTURE
════════════════════════════════════════════════════════

worker/
├── src/
│   ├── routes/
│   │   ├── translate.js      # GET /api/translations/:lang/:key
│   │   └── audio.js          # GET /api/audio/:lang/:key
│   ├── services/
│   │   ├── deepl.js          # DeepL translate (skips id)
│   │   ├── tts.js            # Google TTS audio generator (all 12 langs)
│   │   └── r2.js             # R2 upload/check handler
│   └── index.js              # Main Worker entry + CORS
├── scripts/
│   └── runTranslation.js     # ONE-TIME script: translate + generate all audio
├── data/
│   └── content.id.json       # Source Indonesian content (27 zones)
├── wrangler.toml
├── .env
└── package.json

════════════════════════════════════════════════════════
## 6. wrangler.toml
════════════════════════════════════════════════════════

name = "translation-worker"
main = "src/index.js"
compatibility_date = "2024-01-01"
account_id = "cd932427a70c9e379f99bd90f35c16f7"

[[d1_databases]]
binding = "DB"
database_name = "translations-db"
database_id = "a53f7b0f-c3f5-4711-9e42-a5613a4619c7"

[[r2_buckets]]
binding = "AUDIO_BUCKET"
bucket_name = "audio-translations"

[vars]
R2_PUBLIC_URL  = "https://pub-135a7545edfc4289af5e9373bf26a44b.r2.dev"
DEEPL_ENDPOINT = "https://api-free.deepl.com/v2/translate"

════════════════════════════════════════════════════════
## 7. DATABASE SCHEMA
════════════════════════════════════════════════════════

CREATE TABLE IF NOT EXISTS translations (
  id           INTEGER PRIMARY KEY AUTOINCREMENT,
  content_key  TEXT NOT NULL,
  source_text  TEXT NOT NULL,
  lang_code    TEXT NOT NULL,
  translated   TEXT NOT NULL,      -- for 'id': same as source_text
  audio_path   TEXT,               -- R2 path: audio/{lang}/{key}.mp3
  audio_url    TEXT,               -- full public R2 URL
  created_at   DATETIME DEFAULT CURRENT_TIMESTAMP,
  UNIQUE(content_key, lang_code)
);

CREATE INDEX IF NOT EXISTS idx_lang ON translations(lang_code);
CREATE INDEX IF NOT EXISTS idx_key  ON translations(content_key);

NOTE: For lang_code = 'id', translated = source_text (no DeepL used).
All 12 lang_codes will have rows, including 'id'.

════════════════════════════════════════════════════════
## 8. content.id.json — SOURCE CONTENT (27 zones)
════════════════════════════════════════════════════════

{
  "prasejarah": "Perjalanan peradaban Nusantara adalah epik panjang dari fajar umat manusia hingga lahirnya kerajaan-kerajaan megah. Berawal dari pemburu nomaden Paleolitikum, peradaban berevolusi melalui masa agraris Neolitikum hingga pesatnya pertukaran budaya dan perdagangan di Zaman Logam. Transformasi dari pembuat alat batu purba menuju masyarakat pesisir yang kompleks ini pada akhirnya membuka jalan bagi kemunculan peradaban besar pertama—seperti Kutai, Tarumanegara, dan Sriwijaya—yang merajut mahakarya sejarah dan warisan maritim Nusantara.",
  "austronesia": "Perjalanan sejarah Nusantara dibentuk secara mendalam oleh epik besar Migrasi Austronesia. Berawal dari Taiwan ribuan tahun silam, para pelaut ulung ini mengarungi samudra untuk membawa revolusi agraris dan bahasa yang kini menjadi akar budaya kepulauan ini. Jejak peradaban mereka berevolusi pesat dari era Neolitikum menuju Zaman Logam, yang pada akhirnya memicu kemunculan kerajaan-kerajaan kuno yang megah. Melintasi keemasan jalur rempah, era penyebaran Islam, hingga masa kolonial, warisan Austronesia tetap kokoh bertahan—mewariskan ratusan bahasa, teknologi maritim perahu bercadik, dan keragaman tradisi yang merajut identitas Indonesia modern.",
  "jawa_timur": "Kisah epik Jawa Timur bermula dari peradaban purba di lembah Sungai Brantas, berevolusi menjadi pusat keemasan kerajaan Hindu-Buddha yang memuncak pada kemegahan imperium Majapahit. Pasca keruntuhan Majapahit, pesisir utaranya bertransformasi menjadi nadi utama penyebaran Islam dan perniagaan internasional. Melintasi era kolonialisme yang panjang, jiwa pantang menyerah rakyatnya meledak dalam pertempuran heroik 10 November 1945 di Surabaya, selamanya mengukuhkan wilayah ini sebagai kawah candradimuka kemerdekaan Indonesia.",
  "sejarah_kerajaan_jawa_timur": "Sejarah Jawa Timur adalah epik dinasti-dinasti besar Nusantara. Dari era Hindu-Buddha yang dinamis melalui Kahuripan hingga Singhasari, wilayah ini mencapai puncak kemegahannya bersama imperium maritim agung Majapahit. Memasuki abad ke-15, transisi spiritual melalui dakwah damai Wali Songo di pesisir utara melahirkan era kesultanan Islam baru, sekaligus mengukuhkan posisi Jawa Timur sebagai pusat perniagaan maritim internasional.",
  "jawa_tengah": "Jawa Tengah adalah jantung kebudayaan Jawa dan saksi bisu peradaban Nusantara. Sejarahnya merentang dari manusia purba di Sangiran hingga era keemasan Mataram Kuno yang mewariskan mahakarya Borobudur dan Prambanan. Memasuki abad ke-15, arus perubahan melahirkan pusat peradaban Islam di bawah Kesultanan Demak, Pajang, dan Mataram. Melintasi gejolak kolonial yang diwarnai perlawanan heroik Pangeran Diponegoro, Jawa Tengah kini berdiri tangguh sebagai benteng kebudayaan klasik dan sumbu pergerakan kemerdekaan Indonesia.",
  "jawa_barat": "Jawa Barat adalah tanah kelahiran peradaban Sunda, berakar dari tradisi megalitik purba Gunung Padang. Wilayah ini menyaksikan berdirinya Tarumanagara, yang kemudian mewariskan kejayaannya pada kemegahan Kerajaan Pajajaran di bawah Prabu Siliwangi. Memasuki abad ke-16, peradaban Islam mekar melalui pesisir Kesultanan Banten dan Cirebon. Melintasi era kolonial, semangat keperwiraan rakyat memuncak dalam epik Bandung Lautan Api, selamanya mengukuhkan wilayah ini sebagai pilar pertahanan kemerdekaan Indonesia.",
  "bali": "Bali, Sang 'Pulau Dewata', adalah wujud nyata kesinambungan budaya Hindu dan tradisi leluhur Austronesia. Peradabannya mengakar dari sistem tata air prasejarah subak, mekar di bawah Dinasti Warmadewa, dan disempurnakan oleh warisan kemegahan Majapahit. Menghadapi kolonialisme, jiwa keperwiraan rakyatnya meledak lewat epos heroik Puputan dan perjuangan I Gusti Ngurah Rai. Kini, melampaui segala gejolak zaman, Bali modern mempesona dunia sambil terus menjaga nyala api spiritualitas Hindu Dharma dan filosofi agung Tri Hita Karana.",
  "nusa_tenggara_barat": "Nusa Tenggara Barat adalah permata kepulauan yang menjembatani pesona Bali dan eksotisme timur Nusantara. Jejak peradabannya berakar dari zaman prasejarah, mekar menjadi Kerajaan Sasak, dan disempurnakan oleh warisan agraris imperium Majapahit. Masuknya jaringan perniagaan Melayu dan Arab kemudian melahirkan era Islam di Kesultanan Bima dan Sumbawa. Melintasi sejarah perlawanan heroik melawan kolonialisme, wilayah ini kini berdiri megah—merayakan pesona Gunung Rinjani, tradisi tenun ikat, dan keberagaman magis suku Sasak, Bima, serta Sumbawa.",
  "nusa_tenggara_timur": "Nusa Tenggara Timur adalah persimpangan eksotis bertemunya budaya Austronesia, Melanesia, Asia, dan Eropa. Jejak purbanya membentang dari misteri Homo floresiensis di Flores hingga kokohnya tradisi megalitik di tanah Sumba. Tumbuh dengan struktur adat dan kerajaan lokal yang kuat, arah sejarahnya berubah saat bangsa Portugis dan Belanda tiba di abad ke-16, membawa perburuan cendana dan penyebaran iman Katolik. Melintasi era persaingan kolonial, NTT modern kini mekar merayakan pesona Taman Nasional Komodo dan Danau Kelimutu, serta mahakarya tradisi seperti tenun ikat dan alunan magis dawai sasando.",
  "pulau_leti": "Di ufuk tenggara Nusantara, Pulau Leti menyimpan jejak peradaban sakral yang telah berusia lebih dari dua milenium. Di sinilah berdiri Patung Yene, sebuah mahakarya spiritual yang bukan sekadar pahatan batu, melainkan medium penghubung antara manusia dan roh para leluhur. Melalui ritual kuno 'Patung Darah Pipi', masyarakat adat merawat ikatan batin dengan nenek moyang—memohon keselamatan kampung dan kesuburan bumi. Menjadi saksi bisu perjalanan waktu dari era prasejarah hingga masa kini, Patung Yene terus abadi sebagai warisan budaya yang mengingatkan kita akan dalamnya akar spiritualitas luhur Nusantara.",
  "homo_floresiensis_hobbit": "Di kedalaman gua kapur Liang Bua, Flores, tersimpan salah satu penemuan paling mengejutkan dalam sejarah evolusi: Homo floresiensis. Dijuluki 'Manusia Hobbit' karena posturnya yang mungil setinggi satu meter, spesies ini mampu bertahan hidup di alam terisolasi menggunakan alat batu purba selama puluhan ribu tahun. Fenomena adaptasi unik island dwarfism ini mengubah pemahaman dunia—membuktikan bahwa perjalanan evolusi manusia tidaklah tunggal, melainkan epik penuh cabang misterius yang menempatkan Nusantara sebagai kunci penting dalam peta evolusi dunia.",
  "sumatra": "Sumatra berdiri agung sebagai pusat peradaban purba dan simpul niaga utama di Samudra Hindia. Sejarahnya membentang dari akar budaya Austronesia hingga keemasan imperium Sriwijaya sang penguasa Selat Malaka. Abad ke-13 menyambut fajar Islam melalui Samudra Pasai, disusul oleh kejayaan Kesultanan Aceh dan Pagaruyung. Mengarungi masa kolonial dengan perlawanan heroik dalam Perang Padri dan Aceh, jiwa merdekanya memuncak pada peran vital PDRI di masa kemerdekaan. Kini, Sumatra modern terus merawat warisan budaya sepuluh provinsinya—membentang dari megahnya kaldera Danau Toba hingga puncak Gunung Kerinci.",
  "manusia_purba_harau": "Di kawasan megah Lembah Harau dan pesisir Sumatra Barat, tersimpan jejak transisi besar peradaban purba Nusantara. Penemuan alat-alat batu kuno menjadi saksi bisu peralihan gaya hidup pemburu-peramu menuju pola hunian yang lebih menetap. Revolusi ini memuncak dengan hadirnya mahakarya artefak perunggu di kawasan pesisir, menandai kemajuan pesat teknologi dan lahirnya jaringan perdagangan maritim. Kisah dari Lembah Harau ini membuktikan bahwa sejak ribuan tahun silam, Sumatra Barat telah menjadi panggung dinamis bagi inovasi, adaptasi, dan evolusi masyarakat terstruktur di Asia Tenggara.",
  "sulawesi": "Sulawesi, pulau berwujud unik di simpul maritim Nusantara, menyimpan peradaban yang berakar dari lukisan gua prasejarah tertua di Maros-Pangkep. Jejak pelaut Austronesia ini melahirkan keperkasaan Kerajaan Luwu hingga kedigdayaan maritim Kesultanan Gowa-Tallo di bawah kepemimpinan heroik Sultan Hasanuddin. Masuknya Islam di abad ke-16 semakin mengukuhkan wilayah ini sebagai urat nadi perniagaan rempah. Mengarungi kerasnya pusaran kolonialisme, jiwa tangguh para pelaut tak pernah surut; kini mekar di Sulawesi modern yang merayakan keberagaman magis Bugis, Makassar, Toraja, hingga suku Bajo sang pengembara samudra.",
  "kalimantan": "Kalimantan menyimpan epik peradaban yang berdenyut selaras dengan urat nadi sungai-sungai raksasanya. Kisahnya bermula dari lukisan gua purba dan tradisi suku Dayak, sebelum menorehkan sejarah sebagai rumah bagi Kutai Martadipura, kerajaan Hindu tertua di Nusantara. Arus waktu dan pesona rempah kemudian mengundang jaringan niaga Islam yang melahirkan kesultanan makmur seperti Banjar dan Pontianak. Melewati masa kelam kolonialisme dan perlawanan heroik Pangeran Antasari, jantung hutan tropis ini kini menatap masa depan gemilang sebagai Ibu Kota Nusantara (IKN), seraya terus melestarikan pesona suku dan kekayaan alam liarnya.",
  "sejarah_kalimantan": "Pulau Kalimantan menyimpan jejak peradaban purba di belantara hutan tropisnya, membentang dari tradisi megalitik hingga pesona lukisan gua kuno. Melintasi zaman, sungai-sungai raksasa menjadi urat nadi kehidupan yang mengubah pesisirnya menjadi jalur niaga vital, melahirkan kerajaan-kerajaan megah seperti Kutai. Sebuah harmoni budaya tercipta dengan indah; ketika suku Dayak di pedalaman teguh menjaga sakralnya tradisi leluhur, wilayah pesisirnya mekar menjadi perpaduan multikultural dari jejak para pelaut Asia dan Eropa.",
  "suku_dayak_kalimantan": "Jauh di pedalaman dan hulu sungai raksasa Kalimantan, Suku Dayak telah mendiami belantara hutan tropis selama ribuan tahun. Sebutan kolektif ini menaungi beragam sub-suku yang hidup harmonis, menjadikan alam bukan sekadar sumber kehidupan, melainkan ruang spiritual yang sakral. Identitas luhur mereka terukir indah melalui kemegahan rumah panjang, seni tato tradisional, hingga pusaka mandau dan perisai bermotif alam. Melalui ritual suci seperti upacara Tiwah dan perayaan panen, masyarakat Dayak terus merawat keseimbangan abadi antara manusia, para leluhur, dan roh penjaga alam.",
  "pelindung_penolak_balak": "Di pedalaman hutan belantara Kalimantan, berdiri sebuah arca batu unik wujud sang kucing hutan yang menjadi saksi bisu tradisi spiritual kuno masyarakat Dayak. Sosok sakral yang melambangkan kewaspadaan dan ketangkasan gaib ini dipuja sebagai pelindung kampung dan penolak segala bala. Lebih dari sekadar artefak, arca ini adalah wujud abadi dari keharmonisan yang mendalam antara manusia, roh penjaga, dan hutan yang telah memeluk kehidupan mereka selama ribuan tahun.",
  "papua": "Di ufuk paling timur Nusantara, Papua menyimpan epik peradaban kuno yang telah berdenyut sejak 40.000 tahun silam. Dari kedalaman lembah hingga pesisirnya, ratusan suku adat seperti Dani, Asmat, dan Amungme teguh merawat tradisi komunal dan ikatan batin dengan alam leluhur. Melintasi era penjelajahan bangsa Eropa dan masa kolonial Belanda, arus sejarah pada akhirnya membawa wilayah ini terintegrasi ke dalam pangkuan Ibu Pertiwi, didorong oleh perjuangan tokoh pahlawan seperti J.A. Dimara. Kini, Papua modern berdiri megah memancarkan pesonanya—sebuah simfoni kekayaan budaya dan keajaiban alam yang membentang dari Lembah Baliem hingga Danau Sentani.",
  "asal_usul_wayang": "Wayang, mahakarya seni Nusantara yang bermakna 'bayangan' atau 'roh', merupakan harmoni luhur antara cerita, alunan gamelan, dan filosofi kehidupan. Lahir di era Hindu-Buddha pada abad ke-9 dengan membawakan epos agung Ramayana dan Mahabharata, seni ini bertransformasi secara anggun di abad ke-15 ketika para Wali Songo menjadikannya medium dakwah Islam yang damai. Dari siluet magis wayang kulit di Jawa Tengah dan Timur hingga rupa rupawan wayang golek di Jawa Barat, warisan yang kini diakui agung oleh UNESCO ini terus abadi—bukan sekadar hiburan rakyat, melainkan pilar pendidikan moral dan cermin kearifan spiritual bangsa yang tak lekang oleh waktu.",
  "laksamana_cheng_ho": "Laksamana Cheng Ho, pelaut Muslim agung dari Dinasti Ming, menorehkan jejak epik di perairan Nusantara melalui tujuh pelayaran bersejarahnya antara tahun 1405 hingga 1433. Membawa misi diplomasi damai, persahabatan, dan pengamanan jalur niaga, armada raksasanya merajut hubungan erat dengan kerajaan-kerajaan terkemuka seperti Majapahit, Samudera Pasai, dan Malaka. Ekspedisi monumental ini tidak sekadar memperluas pengaruh politik Tiongkok tanpa penjajahan, melainkan juga mengukuhkan posisi Nusantara sebagai simpul strategis yang vital dalam jaringan maritim dunia pada abad ke-15.",
  "budaya_peranakan": "Budaya Peranakan adalah mahakarya akulturasi indah yang lahir dari perpaduan harmonis antara pendatang Tionghoa dan tradisi lokal Nusantara. Pertemuan dua dunia ini melahirkan warisan seni yang menawan, mulai dari alunan musik Gambang Kromong khas Betawi yang menggabungkan instrumen dawai dan gamelan, hingga pertunjukan Wayang Potehi di kawasan pesisir Jawa. Semarak perpaduan ini juga hidup dalam kemeriahan tradisi Cap Go Meh dan tarian Barongsai, serta terlukis anggun pada lembaran Batik Peranakan yang memadukan motif mitologi Tiongkok dengan corak warna Nusantara yang cerah.",
  "wayang_potehi": "Wayang Potehi, seni boneka tangan klasik yang dibawa oleh imigran Tionghoa ke kota-kota pelabuhan Nusantara pada abad ke-17 hingga ke-18, telah mekar menjadi mahakarya akulturasi budaya yang memukau. Berawal dari ritual perayaan kelenteng seperti Imlek dan Cap Go Meh yang membawakan epik legenda Tiongkok, seni ini secara perlahan dan anggun membaur dengan jiwa lokal Nusantara. Harmoni ini terwujud menawan dalam perpaduan dinamis antara instrumen musik tradisional Tiongkok dan alunan gamelan Jawa, serta adaptasi cerita yang merangkul kearifan masyarakat setempat.",
  "timeline_wayang_potehi": "Memasuki abad ke-20, seni Wayang Potehi mulai terorganisasi secara rapi melalui berbagai paguyuban di kota-kota besar Nusantara, menjaga nyala tradisi di tengah dinamika perubahan sosial dan politik bangsa. Mengalami masa kebangkitan kultural pada era 1970-an, kesenian ini menemukan kembali panggungnya dalam kemeriahan perayaan Imlek dan Cap Go Meh. Kini, di era digital, Wayang Potehi telah bertransformasi menjadi warisan budaya hidup yang melampaui batas etnis—merajut kisah klasik Tiongkok dengan tema lokal dan sejarah Nusantara.",
  "ken_dedes": "Ken Dedes, sang permaisuri agung dari abad ke-13, berdiri sebagai sosok sentral dalam pusaran berdirinya Kerajaan Singhasari. Dikenal memiliki kecantikan memukau yang memancarkan prabha atau sinar kemuliaan, kisahnya diwarnai intrik kekuasaan yang dramatis ketika ia dipersunting oleh Ken Arok setelah tragedi pembunuhan penguasa Tumapel, Tunggul Ametung. Seperti yang dikisahkan dengan penuh misteri dan ramalan dalam kitab Pararaton, dari garis keturunannyalah lahir raja-raja besar penguasa Singhasari dan Majapahit.",
  "dewi_parwati": "Dewi Parwati, lambang agung cinta, kesetiaan, dan kekuatan ilahi (Shakti), dihormati dalam agama Hindu sebagai pendamping abadi Dewa Siwa. Kisah pengabdiannya bermula dari pertapaan berat sang putri Raja Himawan ini demi meluluhkan hati Siwa, sang pertapa agung yang hidup menyendiri. Dari penyatuan suci mereka lahirlah dewa-dewa besar penguasa kebijaksanaan dan peperangan, yakni Ganesha dan Kartikeya. Di balik pesona kelembutannya, Parwati menyimpan wujud perkasa pembinasakan kejahatan dalam rupa Durga dan Kali.",
  "perjalanan_leluhur_nias": "Berakar dari jejak migrasi purba Austronesia, Pulau Nias melahirkan peradaban luhur yang menjunjung tinggi keberanian, kehormatan, dan solidaritas komunal. Semangat pantang menyerah masyarakatnya terukir abadi dalam ketangguhan arsitektur Omo Hada dan heroisme tradisi Fahombo Batu. Hingga detik ini, warisan agung para leluhur terus berdenyut, merawat harmoni suci antara manusia, alam, dan pendahulu, serta menjadi kepingan yang memperkaya indahnya mosaik peradaban Nusantara."
}

════════════════════════════════════════════════════════
## 9. deepl.js — TRANSLATE SERVICE
════════════════════════════════════════════════════════

Rules:
- If lang === 'id': SKIP DeepL, return source text directly
- Otherwise: check D1 first, if exists return from D1, else call DeepL → save to D1
- Handle error 456 (quota exceeded) explicitly

export async function translateText(env, sourceText, langCode, contentKey) {
  // Indonesian: no translation needed, use source directly
  if (langCode === 'id') {
    // Save to D1 with translated = source_text
    await env.DB.prepare(
      `INSERT OR IGNORE INTO translations
       (content_key, source_text, lang_code, translated)
       VALUES (?, ?, 'id', ?)`
    ).bind(contentKey, sourceText, sourceText).run();
    return sourceText;
  }

  // Check D1 cache first
  const existing = await env.DB.prepare(
    'SELECT translated FROM translations WHERE content_key = ? AND lang_code = ?'
  ).bind(contentKey, langCode).first();
  if (existing) return existing.translated;

  // Call DeepL
  const res = await fetch(env.DEEPL_ENDPOINT, {
    method: 'POST',
    headers: {
      'Authorization': `DeepL-Auth-Key ${env.DEEPL_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ text: [sourceText], source_lang: 'ID', target_lang: langCode }),
  });

  if (res.status === 456) throw new Error('DeepL quota exceeded');
  const data = await res.json();
  const translated = data.translations[0].text;

  // Save to D1
  await env.DB.prepare(
    `INSERT OR IGNORE INTO translations
     (content_key, source_text, lang_code, translated)
     VALUES (?, ?, ?, ?)`
  ).bind(contentKey, sourceText, langCode, translated).run();

  console.log(`[DEEPL] ${contentKey} → ${langCode} (${sourceText.length} chars)`);
  return translated;
}

════════════════════════════════════════════════════════
## 10. tts.js — AUDIO GENERATION SERVICE
════════════════════════════════════════════════════════

Rules:
- ALL 12 languages generate audio including Indonesian ('id')
- Check R2 first — if audio exists, skip generation
- Use Google TTS free endpoint
- Upload to R2 under: audio/{langCode}/{contentKey}.mp3
- Update D1 row with audio_path and audio_url

R2 path format : audio/{langCode}/{contentKey}.mp3
Public URL     : {R2_PUBLIC_URL}/audio/{langCode}/{contentKey}.mp3

Google TTS endpoint:
https://translate.google.com/translate_tts?ie=UTF-8&q={TEXT}&tl={LANG}&client=tw-ob

export async function generateAudio(env, text, langCode, contentKey) {
  const r2Key    = `audio/${langCode}/${contentKey}.mp3`;
  const audioUrl = `${env.R2_PUBLIC_URL}/${r2Key}`;

  // Check if already exists in R2
  const exists = await env.AUDIO_BUCKET.head(r2Key);
  if (exists) {
    console.log(`[AUDIO EXISTS] ${r2Key}`);
    return audioUrl;
  }

  // Generate via Google TTS
  const ttsUrl = `https://translate.google.com/translate_tts?ie=UTF-8&q=${encodeURIComponent(text)}&tl=${langCode}&client=tw-ob`;
  const audioRes = await fetch(ttsUrl, {
    headers: { 'User-Agent': 'Mozilla/5.0' }
  });
  if (!audioRes.ok) throw new Error(`TTS failed: ${langCode}/${contentKey}`);

  const buffer = await audioRes.arrayBuffer();

  // Upload to R2
  await env.AUDIO_BUCKET.put(r2Key, buffer, {
    httpMetadata: { contentType: 'audio/mpeg' }
  });

  // Update D1 with audio URLs
  await env.DB.prepare(
    'UPDATE translations SET audio_path = ?, audio_url = ? WHERE content_key = ? AND lang_code = ?'
  ).bind(r2Key, audioUrl, contentKey, langCode).run();

  console.log(`[AUDIO SAVED] ${audioUrl}`);
  return audioUrl;
}

════════════════════════════════════════════════════════
## 11. runTranslation.js — ONE-TIME SCRIPT
════════════════════════════════════════════════════════

This script runs ONCE only. It is idempotent (safe to re-run — skips existing).

Logic for each content key × each language:
  if lang === 'id':
    → save source text to D1 as translated (no DeepL)
    → generate TTS audio from source Indonesian text → upload to R2
  else:
    → call DeepL API (or use D1 cache) to get translation
    → generate TTS audio from translated text → upload to R2

Script must:
1. Load content.id.json (27 zones)
2. Create D1 table if not exists (via Cloudflare API)
3. Loop all 27 content keys × 12 languages = 324 total operations
4. Show progress: "[12/324] id/jawa_timur ✓ (audio saved)"
5. Show quota summary at end:
   - Total DeepL characters used (only 11 langs × text length, not id)
   - Estimated remaining quota
   - Total audio files generated

Run with: node worker/scripts/runTranslation.js

Use dotenv for .env, node-fetch for HTTP, @aws-sdk/client-s3 for R2 uploads.

════════════════════════════════════════════════════════
## 12. WORKER API ROUTES
════════════════════════════════════════════════════════

GET /api/translations/:lang/:key
  → return { translated, audio_url } from D1
  → 404 if not found

GET /api/translations/:lang
  → return all translations for that language as array
  → { key, translated, audio_url }[]

All responses include CORS headers:
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Methods: GET, OPTIONS
  Access-Control-Allow-Headers: Content-Type

════════════════════════════════════════════════════════
## 13. .env FILE
════════════════════════════════════════════════════════

CLOUDFLARE_ACCOUNT_ID=cd932427a70c9e379f99bd90f35c16f7
CLOUDFLARE_API_TOKEN=dxUBVqp2q7sfnCZWUv4IYY16Jdl_D4hyXwVPIxek
CLOUDFLARE_D1_DATABASE_ID=a53f7b0f-c3f5-4711-9e42-a5613a4619c7
DEEPL_API_KEY=0516a76b-1968-4287-8d80-3c8e9ab2860c:fx
R2_BUCKET_NAME=audio-translations
R2_PUBLIC_URL=https://pub-135a7545edfc4289af5e9373bf26a44b.r2.dev
R2_ENDPOINT=https://cd932427a70c9e379f99bd90f35c16f7.r2.cloudflarestorage.com

════════════════════════════════════════════════════════
## 14. FILES TO GENERATE
════════════════════════════════════════════════════════

1. wrangler.toml
2. worker/.env
3. worker/data/content.id.json          (27 zones, use Section 8)
4. worker/src/index.js                  (main Worker + CORS)
5. worker/src/services/deepl.js         (translate, skip id)
6. worker/src/services/tts.js           (audio gen, all 12 langs)
7. worker/src/services/r2.js            (R2 upload/check helper)
8. worker/src/routes/translate.js       (API routes)
9. worker/scripts/runTranslation.js     (one-time script)
10. worker/package.json
11. README.md                           (setup + run steps)

════════════════════════════════════════════════════════
## 15. CRITICAL RULES
════════════════════════════════════════════════════════

[ ] Indonesian (id) NEVER calls DeepL — saves source text as translated in D1
[ ] ALL 12 languages including id generate TTS audio and store to R2
[ ] R2 path format: audio/{langCode}/{contentKey}.mp3
[ ] Check D1 before calling DeepL (never double-call)
[ ] Check R2 before generating audio (never double-generate)
[ ] runTranslation.js is idempotent — safe to re-run
[ ] DeepL quota tracking only counts 11 languages (not id)
[ ] CORS headers on all Worker responses
[ ] Error 456 from DeepL handled gracefully

Generate all files now starting from wrangler.toml.
```
