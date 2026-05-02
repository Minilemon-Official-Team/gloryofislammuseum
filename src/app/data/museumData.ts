export const DUMMY_LOGO = '/images/logo.png';

export interface Zone {
    id: number;
    name: string;
    nameEn: string;
    image: string;
    description: string;
    descriptionEn: string;
}

export interface Building {
    code: 'A' | 'B';
    titleId: string;
    titleEn: string;
    zones: Zone[];
}

export const buildings: Building[] = [
    {
        code: 'A',
        titleId: 'Gedung A: Jejak Peradaban',
        titleEn: 'Building A: The Footsteps of Civilization',
        zones: [
            {
                id: 1,
                name: 'RUANG TEATER',
                nameEn: 'The Theater Room',
                image: '/images/zones/ruang-teater.png',
                description: 'Selamat datang di The Glory of Islam Museum. Sebelum kita melangkah menapaki jejak-jejak masa lalu, mari sejenak menahan napas dan menyaksikan garis besar dari epik yang akan kita jalani. Dari pasir gurun Arabia yang gersang, sebuah risalah lahir dan mengubah wajah dunia selamanya. Kita akan menyaksikan bagaimana sebuah peradaban bangkit, merentangkan sayapnya melintasi tiga benua, dan mewariskan mahakarya ilmu pengetahuan, seni, hingga arsitektur yang mengagumkan—mulai dari fajar kenabian hingga era megah Utsmaniyah, Safawiyah, dan Mughal.',
                descriptionEn: 'Welcome to The Glory of Islam Museum. Before we step forward to trace the footprints of the past, let us pause and witness the grand outline of the epic we are about to embark upon. From the arid desert sands of Arabia, a message was born that changed the face of the world forever. We will witness how a civilization rose, spreading its wings across three continents, and bequeathing awe-inspiring masterpieces of science, art, and architecture—from the dawn of prophethood to the majestic eras of the Ottoman, Safavid, and Mughal empires.',
            },
            {
                id: 2,
                name: 'RUANG SEJARAH NABI',
                nameEn: "The Prophet's History Room",
                image: '/images/zones/ruang-sejarah-nabi.png',
                description: "Di sinilah segalanya bermula. Mari kita kembali ke abad ke-7, di tengah keheningan Gua Hira saat wahyu pertama diturunkan kepada Nabi Muhammad ﷺ. Ruangan ini akan membawa kita meresapi beratnya rintangan di fase Makkah, keajaiban perjalanan menembus langit dalam Isra Mi'raj, hingga titik balik sejarah yang paling menentukan: Hijrah ke Madinah. Kisah ini tidak berhenti di sana. Kita juga akan menelusuri era kepemimpinan Khulafaur Rasyidin—empat sahabat utama yang dengan penuh keadilan dan kebijaksanaan meletakkan fondasi politik dan persaudaraan umat Islam awal.",
                descriptionEn: "This is where it all began. Let us travel back to the 7th century, amidst the silence of the Cave of Hira when the first revelation descended upon Prophet Muhammad ﷺ. This room will guide us in comprehending the immense trials of the Meccan phase, the miracle of the celestial journey in Isra and Mi'raj, to the most decisive turning point in history: the Hijrah to Medina. The story does not end there. We will also trace the era of the Rashidun Caliphs—the four main companions who, with profound justice and wisdom, laid the political and fraternal foundations of the early Muslim community.",
            },
            {
                id: 3,
                name: 'RUANG UMAYYAH',
                nameEn: 'The Umayyad Room',
                image: '/images/zones/ruang-umayyah.png',
                description: 'Bayangkan sebuah masa di mana para penunggang kuda memacu peradaban melampaui batas imajinasi. Memasuki era Umayyah, pusat kekuasaan berpindah ke Damaskus. Di bawah panji mereka, Islam mengalami ekspansi wilayah yang tak tertandingi; menembus kerasnya pegunungan menuju tanah Andalusia di Spanyol, hingga ke perbatasan Tiongkok di timur. Ini adalah era di mana Islam mulai berinteraksi secara mendalam dengan kebudayaan Romawi dan Persia, melahirkan asimilasi budaya pertama yang agung dan menancapkan pilar-pilar arsitektur klasik yang abadi.',
                descriptionEn: 'Imagine a time when horsemen propelled civilization beyond the bounds of imagination. Entering the Umayyad era, the seat of power shifted to Damascus. Under their banner, Islam experienced unparalleled territorial expansion; piercing through rugged mountains to the lands of Andalusia in Spain, reaching the borders of China in the east. This was the era where Islam began to deeply interact with Roman and Persian cultures, giving birth to the first grand cultural assimilation and establishing the eternal pillars of classical architecture.',
            },
            {
                id: 4,
                name: 'RUANG ABBASIYAH',
                nameEn: 'The Abbasid Room',
                image: '/images/zones/ruang-abbasiyah.png',
                description: 'Kita kini tiba di Puncak Abad Pertengahan, namun ini bukanlah masa kegelapan. Saat dunia lain terlelap, kota metropolis Baghdad justru benderang oleh cahaya ilmu pengetahuan. Ini adalah masa Kekhalifahan Abbasiyah, Era Keemasan Islam. Di sinilah Baitul Hikmah atau Rumah Kebijaksanaan berdiri. Kita akan mendengarkan kisah para ilmuwan, astronom, dan filsuf yang menerjemahkan warisan Yunani kuno, menemukan aljabar, dan memajukan ilmu kedokteran yang kelak menjadi rujukan utama universitas-universitas di Eropa selama berabad-abad.',
                descriptionEn: 'We have now arrived at the High Middle Ages, yet this is no dark age. While the rest of the world slumbered, the metropolis of Baghdad was brilliantly illuminated by the light of knowledge. This is the era of the Abbasid Caliphate, the Golden Age of Islam. It is here that the House of Wisdom stood. We will listen to the tales of scientists, astronomers, and philosophers who translated ancient Greek heritage, invented algebra, and advanced medicine that would later become the primary reference for European universities for centuries.',
            },
            {
                id: 5,
                name: 'RUANG UTSMANIYAH',
                nameEn: 'The Ottoman Room',
                image: '/images/zones/ruang-utsmaniyah.png',
                description: 'Sejarah perlahan bergeser ke bumi Anatolia, tempat lahirnya salah satu imperium paling tangguh yang pernah dikenal dunia: Kekaisaran Utsmaniyah. Mari kita rasakan ketegangan gemilang tahun 1453, saat Konstantinopel akhirnya takluk dan mengubah peta geopolitik dunia. Utsmaniyah bukan sekadar mesin militer yang menjembatani Asia dan Eropa; mereka adalah penjaga rute perniagaan dunia, patron dari kaligrafi yang indah, dan pelindung hukum yang adil di bawah kepemimpinan agung seperti Sultan Suleiman Al-Qanuni.',
                descriptionEn: 'History slowly shifts to the lands of Anatolia, the birthplace of one of the most formidable empires the world has ever known: the Ottoman Empire. Let us feel the glorious tension of 1453, when Constantinople finally yielded and altered the global geopolitical map. The Ottomans were not merely a military machine bridging Asia and Europe; they were the guardians of world trade routes, patrons of exquisite calligraphy, and protectors of just laws under majestic leaderships like Sultan Suleiman the Magnificent.',
            },
            {
                id: 6,
                name: 'RUANG SAFAWIYAH',
                nameEn: 'The Safavid Room',
                image: '/images/zones/ruang-safawiyah.png',
                description: 'Tinggalkan sejenak deru meriam, karena di daratan Persia, Kekaisaran Safawiyah tengah mendefinisikan ulang arti keindahan. Di bawah naungan Shah Abbas, ibukota Isfahan dibangun sedemikian memukaunya hingga dijuluki Nesf-e-Jahan (Separuh Dunia). Ruangan ini menceritakan era di mana kerohanian berpadu dengan estetika tingkat tinggi. Ini adalah masa kejayaan para penyair, pelukis miniatur, dan penenun sutra; sebuah kesultanan yang menjadikan filsafat dan keanggunan seni sebagai napas dari peradabannya.',
                descriptionEn: 'Leave behind the roar of cannons for a moment, because in the lands of Persia, the Safavid Empire was redefining the meaning of beauty. Under the patronage of Shah Abbas, the capital city of Isfahan was built so breathtakingly that it was dubbed Nesf-e-Jahan (Half the World). This room narrates an era where spirituality intertwined with high aesthetics. This was the golden age of poets, miniature painters, and silk weavers; a sultanate that made philosophy and artistic elegance the very breath of its civilization.',
            },
            {
                id: 7,
                name: 'RUANG MUGHAL',
                nameEn: 'The Mughal Room',
                image: '/images/zones/ruang-mughal.png',
                description: 'Perjalanan kita di Gedung A berujung di anak benua India. Di sinilah Kekaisaran Mughal merajut dua budaya besar—tradisi Islam-Persia dan kekayaan lokal Hindustan—menjadi sebuah permadani sejarah yang tiada duanya. Kita akan menyelami kisah cinta, ambisi, dan kekuasaan dari para kaisar seperti Akbar yang toleran hingga Shah Jahan yang melukiskan kesedihannya lewat kemegahan Taj Mahal. Sebuah penutup yang elegan dari era Tiga Kekaisaran Mesiu Islam, menyisakan monumen-monumen abadi yang masih memikat dunia hingga hari ini.',
                descriptionEn: 'Our journey in Building A culminates in the Indian subcontinent. It is here that the Mughal Empire wove two great cultures—the Islamic-Persian tradition and the local wealth of Hindustan—into a historical tapestry unlike any other. We will delve into the tales of love, ambition, and power of emperors like the tolerant Akbar to Shah Jahan, who painted his sorrow through the grandeur of the Taj Mahal. An elegant conclusion to the era of the Three Islamic Gunpowder Empires, leaving behind eternal monuments that continue to captivate the world to this day.',
            },
        ],
    },
    {
        code: 'B',
        titleId: 'Gedung B: Cahaya Islam di Nusantara',
        titleEn: 'Building B: The Light of Islam in Nusantara',
        zones: [
            {
                id: 8,
                name: 'RUANG TEATER NUSANTARA',
                nameEn: 'The Theater Room',
                image: '/images/zones/ruang-teater-nusantara.jpg',
                description: 'Perjalanan kita di Nusantara diawali di ruang ini. Melalui layar teater, mari kita arungi samudra waktu dan menyaksikan bagaimana kapal-kapal dagang dari Gujarat, Persia, dan Arab berlabuh di perairan kepulauan kita. Visual ini mengisahkan gelombang pertama kedatangan Islam—bukan melalui pedang atau penaklukan, melainkan lewat pesona perniagaan, akhlak yang mulia, dan pertukaran budaya yang damai.',
                descriptionEn: "Our journey in the Archipelago begins in this room. Through the theater screen, let us sail the ocean of time and witness how merchant ships from Gujarat, Persia, and Arabia dropped anchor in our island waters. This visual narrates the first wave of Islam's arrival—not through swords or conquest, but through the allure of commerce, noble character, and peaceful cultural exchange.",
            },
            {
                id: 9,
                name: 'TITIK NOL PERADABAN',
                nameEn: 'Ground Zero of Civilization',
                image: '/images/zones/titik-nol-peradaban.jpg',
                description: 'Langkah pertama di tanah Sumatra. Ruangan ini adalah saksi bisu dari "Titik Nol" peradaban Islam di Nusantara, yakni Barus. Kita akan menyusuri jejak-jejak awal kekuasaan Islam yang tumbuh secara perlahan, mulai dari berdirinya Kerajaan Jeumpa dan Kesultanan Peureulak. Puncaknya, kita akan berdiri di depan gerbang megah Samudera Pasai, kesultanan pertama yang menjadi mercusuar hukum dan literatur Islam awal di Asia Tenggara.',
                descriptionEn: 'The first steps on the soil of Sumatra. This room serves as a silent witness to the "Ground Zero" of Islamic civilization in the archipelago: Barus. We will trace the early footprints of Islamic authority as it slowly took root, from the establishment of the Jeumpa Kingdom and the Peureulak Sultanate. Ultimately, we will stand before the grand gates of Samudera Pasai, the first sultanate that became a beacon of early Islamic law and literature in Southeast Asia.',
            },
            {
                id: 10,
                name: 'CAHAYA DI JANTUNG MAJAPAHIT & ERA WALI SONGO',
                nameEn: 'Light in the Heart of Majapahit & The Wali Songo Era',
                image: '/images/zones/cahaya-majapahit-wali-songo.png',
                description: "Berlayar ke tanah Jawa, kita disambut oleh nisan tua Siti Fatimah binti Maimun di Leran, bukti nyata pemukiman muslim pertama di bawah bayang-bayang kebesaran Majapahit. Di zona ini, sejarah tidak bercerita tentang benturan, melainkan harmoni. Saksikan kisah romantis dan diplomatis Putri Campa bersama Prabu Brawijaya V, hingga kedatangan Syekh Maulana Ibrahim. Setelahnya, kita akan meresapi perjuangan dakwah Wali Songo—mulai dari Sunan Gresik dan Sunan Ampel, hingga strategi akulturasi budaya yang brilian dari Sunan Bonang, Kalijaga, Kudus, Muria, Drajat, Giri, hingga Sunan Gunung Jati. Mereka memeluk tradisi lokal dan mengubahnya menjadi jalan cahaya.",
                descriptionEn: "Sailing to the land of Java, we are greeted by the ancient tombstone of Siti Fatimah binti Maimun in Leran, a tangible proof of the first Muslim settlements under the shadow of Majapahit's greatness. In this zone, history speaks not of clashes, but of harmony. Witness the romantic and diplomatic tale of Princess Campa and King Brawijaya V, to the arrival of Sheikh Maulana Ibrahim. Afterwards, we will immerse ourselves in the propagation efforts of the Wali Songo (The Nine Saints)—from Sunan Gresik and Sunan Ampel, to the brilliant cultural acculturation strategies of Sunan Bonang, Kalijaga, Kudus, Muria, Drajat, Giri, and Sunan Gunung Jati. They embraced local traditions and transformed them into pathways of light.",
            },
            {
                id: 11,
                name: 'KEBANGKITAN KESULTANAN JAWA',
                nameEn: 'The Rise of Javanese Sultanates',
                image: '/images/zones/kebangkitan-kesultanan-jawa.jpg',
                description: 'Memasuki abad ke-15 dan 16, hegemoni politik berganti. Ruangan ini memamerkan kebangkitan Demak Bintoro sebagai kesultanan Islam pertama di Jawa. Dari pesisir utara, kekuatan menyebar ke barat melalui pesona budaya Kesultanan Cirebon dan Banten—yang kelak menjadi penguasa Selat Sunda dan pusat perniagaan dunia. Jangan lewatkan kisah heroik armada maritim Kerajaan Kalinyamat, sebelum kita melihat bagaimana Kesultanan Pajang perlahan memindahkan pusat peradaban Islam ke pedalaman Jawa.',
                descriptionEn: "Entering the 15th and 16th centuries, political hegemony shifted. This room showcases the rise of Demak Bintoro as the first Islamic sultanate in Java. From the northern coast, power spread westward through the cultural charm of the Cirebon and Banten Sultanates—the latter eventually becoming the master of the Sunda Strait and a global trade hub. Do not miss the heroic tales of the Kalinyamat Kingdom's maritime fleet, before we see how the Pajang Sultanate slowly relocated the center of Islamic civilization to the Javanese interior.",
            },
            {
                id: 12,
                name: 'PELITA DI PELOSOK NEGERI',
                nameEn: 'Beacons Across the Archipelago',
                image: '/images/zones/pelita-di-pelosok-negeri.jpg',
                description: 'Islam di Nusantara bukanlah cerita tentang satu atau dua pulau saja. Di zona ini, kita akan merasakan luasnya jaringan maritim Islam. Dari aroma rempah Kesultanan Ternate, Tidore, Jailolo, dan Bacan di Maluku; hembusan napas syiar di tanah Sumatra (Sekala Brak, Deli, Palembang, Siak); ketangguhan pelaut Kesultanan Gowa-Tallo, Bone, Buton, dan Wajo di Sulawesi; hingga cahaya yang menyentuh bumi Papua di Kaimana, Misool, Waigeo, dan Fataga. Kita juga akan menyeberang ke Kesultanan Banjar dan Kutai di Kalimantan, hingga singgah di kerajaan-kerajaan Nusa Tenggara seperti Selaparang dan Bima.',
                descriptionEn: 'Islam in the Nusantara is not a story of just one or two islands. In this zone, we will feel the vastness of the Islamic maritime network. From the aroma of spices in the Sultanates of Ternate, Tidore, Jailolo, and Bacan in Maluku; the breath of faith in Sumatra (Sekala Brak, Deli, Palembang, Siak); the resilience of sailors from the Sultanates of Gowa-Tallo, Bone, Buton, and Wajo in Sulawesi; to the light that touched the lands of Papua in Kaimana, Misool, Waigeo, and Fataga. We will also cross to the Banjar and Kutai Sultanates in Kalimantan, and make port at the kingdoms of Nusa Tenggara like Selaparang and Bima.',
            },
            {
                id: 13,
                name: 'KEJAYAAN MATARAM ISLAM',
                nameEn: 'The Glory of Islamic Mataram',
                image: '/images/zones/kejayaan-mataram-islam.jpg',
                description: 'Kita tiba di era penyatuan agung kebudayaan Jawa dan Islam. Zona ini didedikasikan untuk Kesultanan Mataram Islam. Dengarkan narasi keberanian Sultan Agung yang memimpin perlawanan di bawah panji Mataram melawan kolonialisme, sekaligus melahirkan karya sastra dan kalender perpaduan Jawa-Hijriah yang brilian. Ruangan ini merekam masa transisi kekuasaan yang penuh dinamika di puncak kejayaan Mataram.',
                descriptionEn: "We arrive at the era of the grand unification of Javanese and Islamic cultures. This zone is dedicated to the Islamic Mataram Sultanate. Listen to the narrative of Sultan Agung's bravery, leading the resistance under the Mataram banner against colonialism, while simultaneously birthing brilliant literature and the hybridized Javanese-Hijri calendar. This room records the highly dynamic transition of power at the absolute zenith of Mataram's glory.",
            },
            {
                id: 14,
                name: 'PEWARIS TRADISI DAN DINAMIKA SEJARAH',
                nameEn: 'Heirs of Tradition and Historical Dynamics',
                image: '/images/zones/pewaris-tradisi-dan-dinamika-sejarah.jpg',
                description: 'Akhir dari tur Gedung B membawa kita pada fragmen-fragmen sejarah yang membentuk identitas keraton modern. Saksikan dampak dari Perjanjian Giyanti yang membagi penerus Mataram menjadi Kasunanan Surakarta, Kesultanan Ngayogyakarta, Kadipaten Mangkunegaran, dan Pakualaman. Zona ini juga menceritakan intrik politik Geger Pecinan yang mengguncang Jawa. Namun, di tengah pergolakan tersebut, tradisi keilmuan Islam tetap kokoh dijaga di akar rumput, sebagaimana diwakili oleh sosok ulama besar seperti Kyai Basari yang merawat pondok pesantren sebagai benteng spiritual Nusantara.',
                descriptionEn: 'The end of our Building B tour brings us to the historical fragments that shaped the identity of modern Javanese palaces. Witness the impact of the Treaty of Giyanti, which divided the successors of Mataram into the Surakarta Sunanate, the Yogyakarta Sultanate, the Mangkunegaran, and the Pakualaman Principalities. This zone also recounts the political intrigue of the Geger Pecinan (Chinese Rebellion) that shook Java. Yet, amidst such turbulence, the Islamic scholarly tradition remained firmly guarded at the grassroots level, represented by great clerics like Kyai Basari who nurtured Islamic boarding schools (pesantren) as the spiritual fortresses of the Archipelago.',
            },
        ],
    },
];

export const allZones: Zone[] = buildings.flatMap((b) => b.zones);

export const findZoneById = (id: number): { zone: Zone; building: Building; index: number } | null => {
    let index = 0;
    for (const building of buildings) {
        for (const zone of building.zones) {
            if (zone.id === id) return { zone, building, index };
            index++;
        }
    }
    return null;
};

export const getZoneImage = (zone: Zone): string => {
    if (zone.image && zone.image !== '') return zone.image;
    return DUMMY_LOGO;
};
