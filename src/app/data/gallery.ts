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
    title: 'Theater Sejarah Nabi',
    caption: 'Audio visual perjalanan Nabi Muhammad SAW & syiar-Nya.',
    image: '/images/gallery/islam-dunia/islam-dunia-2.jpg',
  },
  {
    id: 3,
    era: 'islam-dunia',
    title: 'Masa Nabi Muhammad SAW & Khulafaur Rasyidin',
    caption:
      'Islam lahir dan masyarakat Muslim pertama berdiri di Madinah.',
    image: '/images/gallery/islam-dunia/islam-dunia-3.jpg',
  },
  {
    id: 4,
    era: 'islam-dunia',
    title: 'Dinasti Umayyah (661–750 M)',
    caption:
      'Islam menyebar cepat, fondasi pemerintahan dibangun hingga Andalusia.',
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
      'Kekaisaran Islam terkuat dan terlama, dipimpin Sultan Suleiman the Magnificent.',
    image: '/images/gallery/islam-dunia/islam-dunia-6.jpg',
  },

  // --- Era Awal Nusantara ---
  {
    id: 7,
    era: 'awal-nusantara',
    title: 'Theatre Nusantara',
    caption:
      'Film layar lebar perjalanan & penyebaran Islam di Nusantara.',
    image: '/images/gallery/awal-nusantara/awal-nusantara-1.jpg',
  },
  {
    id: 8,
    era: 'awal-nusantara',
    title: 'Barus, Perlak & Samudera Pasai',
    caption: 'Awal cahaya Islam menyebar di Nusantara (Abad 7-13).',
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
    caption: 'Sembilan wali penyebar Islam di Tanah Jawa abad 15-16.',
    image: '/images/gallery/kesultanan/kesultanan-1.jpg',
  },
  {
    id: 11,
    era: 'kesultanan',
    title: 'Kesultanan Demak',
    caption: 'Kerajaan Islam pertama di Tanah Jawa (1478-1561).',
    image: '/images/gallery/kesultanan/kesultanan-2.jpg',
  },
  {
    id: 12,
    era: 'kesultanan',
    title: 'Kesultanan Cirebon & Banten',
    caption: 'Pusat dakwah & cahaya Islam penjaga jalur rempah.',
    image: '/images/gallery/kesultanan/kesultanan-3.jpg',
  },
  {
    id: 13,
    era: 'kesultanan',
    title: 'Kesultanan Gowa & Kutai Kertanegara',
    caption: 'Cahaya Islam di Sulawesi & harmoni dengan tradisi Dayak.',
    image: '/images/gallery/kesultanan/kesultanan-4.jpg',
  },
  {
    id: 14,
    era: 'kesultanan',
    title: 'Kesultanan Lombok, Banjar, Tidore & Aceh',
    caption: 'Penyebaran Islam dari NTB hingga Serambi Mekkah.',
    image: '/images/gallery/kesultanan/kesultanan-5.jpg',
  },
  {
    id: 15,
    era: 'kesultanan',
    title: 'Kesultanan Banten & Mataram',
    caption: 'Pilar Islam pesisir Jawa & kerajaan Islam besar (1526-1755).',
    image: '/images/gallery/kesultanan/kesultanan-6.jpg',
  },
  {
    id: 16,
    era: 'kesultanan',
    title: 'Kesultanan Bima, Deli & Siak',
    caption: 'Harmoni Islam dengan budaya lokal, Melayu & Sumatra.',
    image: '/images/gallery/kesultanan/kesultanan-7.jpg',
  },

  // --- Era Keraton ---
  {
    id: 17,
    era: 'keraton',
    title: 'Keraton Surakarta & Mangkunegaran',
    caption: 'Pusat dakwah, tradisi Jawa & spirit Islam sejak 1744.',
    image: '/images/gallery/keraton/keraton-1.jpg',
  },
  {
    id: 18,
    era: 'keraton',
    title: 'Keraton Ngayogyakarta & Pakualaman',
    caption: 'Spirit Islam dalam budaya Jawa sejak 1755.',
    image: '/images/gallery/keraton/keraton-2.jpg',
  },
];
