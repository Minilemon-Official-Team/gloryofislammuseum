export type GalleryEra =
  | 'islam-dunia'
  | 'awal-nusantara'
  | 'kesultanan'
  | 'keraton';

export interface GalleryItem {
  id: number;
  era: GalleryEra;
  title: string;
  caption: string;
  image: string;
}

export const GALLERY_ERAS: { key: GalleryEra; label: string }[] = [
  { key: 'islam-dunia', label: 'Era Islam Dunia' },
  { key: 'awal-nusantara', label: 'Era Awal Nusantara' },
  { key: 'kesultanan', label: 'Era Kesultanan' },
  { key: 'keraton', label: 'Era Keraton' },
];

export const galleryItems: GalleryItem[] = [
  // --- Era Islam Dunia ---
  {
    id: 1,
    era: 'islam-dunia',
    title: 'Entrance Gate Utama',
    caption:
      'Pintu masuk The Glory of Islam Museum, menuju zona Gallery Nabi area Theater.',
    image: '/images/gallery/islam-dunia/islam-dunia-1.jpg',
  },
  {
    id: 2,
    era: 'islam-dunia',
    title: 'Theater',
    caption: 'Sejarah Nabi Muhammad SAW & Syiar Nya.',
    image: '/images/gallery/islam-dunia/islam-dunia-2.jpg',
  },
  {
    id: 3,
    era: 'islam-dunia',
    title: 'Sejarah Nabi & Khulafaur Rasyidin',
    caption:
      'Islam lahir dan masyarakat Muslim pertama berdiri di Madinah.',
    image: '/images/gallery/islam-dunia/islam-dunia-3.jpg',
  },
  {
    id: 4,
    era: 'islam-dunia',
    title: 'Dinasti Umayyah (661–750 M)',
    caption: 'Islam menyebar cepat dan fondasi pemerintahannya dibangun.',
    image: '/images/gallery/islam-dunia/islam-dunia-4.jpg',
  },
  {
    id: 5,
    era: 'islam-dunia',
    title: 'Dinasti Abbasiyah (750–1258 M)',
    caption: 'Puncak ilmu dan peradaban, berpusat di Baghdad.',
    image: '/images/gallery/islam-dunia/islam-dunia-5.jpg',
  },
  {
    id: 6,
    era: 'islam-dunia',
    title: 'Imperium Ottoman Turki (1299–1922 M)',
    caption:
      'Kekaisaran Islam terkuat dan terlama, dipimpin Sultan besar seperti Suleiman the Magnificent.',
    image: '/images/gallery/islam-dunia/islam-dunia-6.jpg',
  },

  // --- Era Awal Nusantara ---
  {
    id: 7,
    era: 'awal-nusantara',
    title: 'Theatre',
    caption:
      'Zona audio visual ini menayangkan film layar lebar yang mengisahkan perjalanan dan penyebaran Islam di Nusantara.',
    image: '/images/gallery/awal-nusantara/awal-nusantara-1.jpg',
  },
  {
    id: 8,
    era: 'awal-nusantara',
    title: 'Barus, Perlak & Kerajaan Samudera Pasai',
    caption:
      'Barus (Abad 7-8) - Awal Cahaya Islam Menyebar. Perlak (840-890) - Pintu gerbang Islam di Tanah Jawa. Samudera Pasai (1267) - Mercusuar awal Islam di Nusantara.',
    image: '/images/gallery/awal-nusantara/awal-nusantara-2.jpg',
  },
  {
    id: 9,
    era: 'awal-nusantara',
    title: 'Laksamana Cheng Ho',
    caption: 'Jejak Tionghoa Muslim di Nusantara abad 7-9.',
    image: '/images/gallery/awal-nusantara/awal-nusantara-3.jpg',
  },

  // --- Era Kesultanan ---
  {
    id: 10,
    era: 'kesultanan',
    title: 'Walisanga',
    caption:
      'Walisanga (Abad 15-16) - Lahirnya Peradaban Islam di Tanah Jawa. Kyai Hasan Basari (Abad 18) - Guru Para Ulama & Bangsawan.',
    image: '/images/gallery/kesultanan/kesultanan-1.jpg',
  },
  {
    id: 11,
    era: 'kesultanan',
    title: 'Kesultanan Demak',
    caption:
      'Kesultanan Demak (1478-1561) - Kerajaan Islam Pertama di Tanah Jawa.',
    image: '/images/gallery/kesultanan/kesultanan-2.jpg',
  },
  {
    id: 12,
    era: 'kesultanan',
    title: 'Kesultanan Cirebon & Kesultanan Banten',
    caption:
      'Kesultanan Cirebon (1430-1677) - Pusat Dakwah & Budaya Islam. Kesultanan Banten (1432-1914) - Cahaya Islam penjaga Jalur Rempah.',
    image: '/images/gallery/kesultanan/kesultanan-3.jpg',
  },
  {
    id: 13,
    era: 'kesultanan',
    title: 'Kesultanan Gowa, Kutai Kertanegara & Kesultanan Bone',
    caption:
      'Kesultanan Gowa (1300-1960) - Cahaya Islam di Bumi Sulawesi. Kutai Kertanegara (1300-1960) - Harmoni Islam & Tradisi Dayak. Kesultanan Bone - Harmoni Islam & Tradisi Bugis.',
    image: '/images/gallery/kesultanan/kesultanan-4.jpg',
  },
  {
    id: 14,
    era: 'kesultanan',
    title: 'Kesultanan Lombok, Banjar, Tidore & Aceh',
    caption:
      'Kesultanan Lombok (+1500) - Cahaya Islam di NTB. Kesultanan Banjar (1520-1905) - Pusat Penyebaran Islam di Nusantara. Kesultanan Tidore (1495-1967) - Cahaya Islam, Penjaga Jalur Rempah Maluku. Kesultanan Aceh (1496-1903) - Serambi Mekkah & Pusat Keilmuan Islam di Nusantara.',
    image: '/images/gallery/kesultanan/kesultanan-5.jpg',
  },
  {
    id: 15,
    era: 'kesultanan',
    title: 'Kesultanan Banten & Mataram',
    caption:
      'Kesultanan Banten (1526-1813) - Pilar Islam di Pesisir Jawa, Tahta Islam Pewaris Demak. Kesultanan Pajang - Pewaris kesultanan Demak. Kesultanan Mataram Islam (1586-1755).',
    image: '/images/gallery/kesultanan/kesultanan-6.jpg',
  },
  {
    id: 16,
    era: 'kesultanan',
    title: 'Kesultanan Bima, Deli & Siak',
    caption:
      'Kesultanan Bima (1620-1958) - Harmoni Islam & Budaya Lokal. Kesultanan Deli - Harmoni Islam & Budaya Melayu. Kesultanan Siak (1723-1945) - Cahaya Islam di Pesisir Timur Sumatra.',
    image: '/images/gallery/kesultanan/kesultanan-7.jpg',
  },

  // --- Era Keraton ---
  {
    id: 17,
    era: 'keraton',
    title: 'Keraton Surakarta & Kadipaten Mangkunegaran',
    caption:
      'Keraton Surakarta (1744 - ...) - Pusat Dakwah & Tradisi Jawa. Kadipaten Mangkunegaran (1757 - ...) - Pusat Budaya Jawa & Spirit Islam.',
    image: '/images/gallery/keraton/keraton-1.jpg',
  },
  {
    id: 18,
    era: 'keraton',
    title: 'Keraton Ngayogyakarta & Kadipaten Pakualaman',
    caption:
      'Keraton Ngayogyakarta (1755 - ...) - Spirit Islam dalam Budaya Jawa. Kadipaten Pakualaman (1813 - ...) - Cahaya Islam di Tanah Jawa.',
    image: '/images/gallery/keraton/keraton-2.jpg',
  },
];
