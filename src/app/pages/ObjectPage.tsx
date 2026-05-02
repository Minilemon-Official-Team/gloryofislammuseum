import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, Check, MapPin, Share2 } from 'lucide-react';
import { useTranslationContext } from '../context/TranslationContext';
import { ContentLanguageSwitcher } from '../components/ui/ContentLanguageSwitcher';
import { AudioPlayer } from '../components/ui/AudioPlayer';

const DUMMY_LOGO = 'https://res.cloudinary.com/dnbq1z8lx/image/upload/v1772934955/Logo_mkvfjb.webp';

interface ZoneObject {
    id: number;
    image: string;
    description: string;
}

interface Zone {
    name: string;
    objects: ZoneObject[];
}

const museumData: Zone[] = [
    { name: 'PRASEJARAH', objects: [{ id: 1, image: '/images/zones/autoguide-image-(1).jpeg', description: 'Perjalanan peradaban Nusantara adalah epik panjang dari fajar umat manusia hingga lahirnya kerajaan-kerajaan megah. Berawal dari pemburu nomaden Paleolitikum, peradaban berevolusi melalui masa agraris Neolitikum hingga pesatnya pertukaran budaya dan perdagangan di Zaman Logam. Transformasi dari pembuat alat batu purba menuju masyarakat pesisir yang kompleks ini pada akhirnya membuka jalan bagi kemunculan peradaban besar pertama—seperti Kutai, Tarumanegara, dan Sriwijaya—yang merajut mahakarya sejarah dan warisan maritim Nusantara.' }] },
    { name: 'AUSTRONESIA', objects: [{ id: 2, image: '/images/zones/autoguide-image-(2).jpeg', description: 'Perjalanan sejarah Nusantara dibentuk secara mendalam oleh epik besar Migrasi Austronesia. Berawal dari Taiwan ribuan tahun silam, para pelaut ulung ini mengarungi samudra untuk membawa revolusi agraris dan bahasa yang kini menjadi akar budaya kepulauan ini. Jejak peradaban mereka berevolusi pesat dari era Neolitikum menuju Zaman Logam, yang pada akhirnya memicu kemunculan kerajaan-kerajaan kuno yang megah. Melintasi keemasan jalur rempah, era penyebaran Islam, hingga masa kolonial, warisan Austronesia tetap kokoh bertahan—mewariskan ratusan bahasa, teknologi maritim perahu bercadik, dan keragaman tradisi yang merajut identitas Indonesia modern.' }] },
    { name: 'JAWA TIMUR', objects: [{ id: 3, image: '/images/zones/autoguide-image-(3).jpeg', description: 'Kisah epik Jawa Timur bermula dari peradaban purba di lembah Sungai Brantas, berevolusi menjadi pusat keemasan kerajaan Hindu-Buddha yang memuncak pada kemegahan imperium Majapahit. Pasca keruntuhan Majapahit, pesisir utaranya bertransformasi menjadi nadi utama penyebaran Islam dan perniagaan internasional. Melintasi era kolonialisme yang panjang, jiwa pantang menyerah rakyatnya meledak dalam pertempuran heroik 10 November 1945 di Surabaya, selamanya mengukuhkan wilayah ini sebagai kawah candradimuka kemerdekaan Indonesia.' }] },
    { name: 'SEJARAH KERAJAAN JAWA TIMUR', objects: [{ id: 4, image: '/images/zones/autoguide-image-(4).jpeg', description: 'Sejarah Jawa Timur adalah epik dinasti-dinasti besar Nusantara. Dari era Hindu-Buddha yang dinamis melalui Kahuripan hingga Singhasari, wilayah ini mencapai puncak kemegahannya bersama imperium maritim agung Majapahit. Memasuki abad ke-15, transisi spiritual melalui dakwah damai Wali Songo di pesisir utara melahirkan era kesultanan Islam baru, sekaligus mengukuhkan posisi Jawa Timur sebagai pusat perniagaan maritim internasional.' }] },
    { name: 'JAWA TENGAH', objects: [{ id: 5, image: '/images/zones/autoguide-image-(5).jpeg', description: 'Jawa Tengah adalah jantung kebudayaan Jawa dan saksi bisu peradaban Nusantara. Sejarahnya merentang dari manusia purba di Sangiran hingga era keemasan Mataram Kuno yang mewariskan mahakarya Borobudur dan Prambanan. Memasuki abad ke-15, arus perubahan melahirkan pusat peradaban Islam di bawah Kesultanan Demak, Pajang, dan Mataram. Melintasi gejolak kolonial yang diwarnai perlawanan heroik Pangeran Diponegoro, Jawa Tengah kini berdiri tangguh sebagai benteng kebudayaan klasik dan sumbu pergerakan kemerdekaan Indonesia.' }] },
    { name: 'JAWA BARAT', objects: [{ id: 6, image: '/images/zones/autoguide-image-(6).jpeg', description: 'Jawa Barat adalah tanah kelahiran peradaban Sunda, berakar dari tradisi megalitik purba Gunung Padang. Wilayah ini menyaksikan berdirinya Tarumanagara, yang kemudian mewariskan kejayaannya pada kemegahan Kerajaan Pajajaran di bawah Prabu Siliwangi. Memasuki abad ke-16, peradaban Islam mekar melalui pesisir Kesultanan Banten dan Cirebon. Melintasi era kolonial, semangat keperwiraan rakyat memuncak dalam epik Bandung Lautan Api, selamanya mengukuhkan wilayah ini sebagai pilar pertahanan kemerdekaan Indonesia.' }] },
    { name: 'BALI', objects: [{ id: 7, image: '/images/zones/autoguide-image-(7).jpeg', description: 'Bali, Sang "Pulau Dewata", adalah wujud nyata kesinambungan budaya Hindu dan tradisi leluhur Austronesia. Peradabannya mengakar dari sistem tata air prasejarah subak, mekar di bawah Dinasti Warmadewa, dan disempurnakan oleh warisan kemegahan Majapahit. Menghadapi kolonialisme, jiwa keperwiraan rakyatnya meledak lewat epos heroik Puputan dan perjuangan I Gusti Ngurah Rai. Kini, melampaui segala gejolak zaman, Bali modern mempesona dunia sambil terus menjaga nyala api spiritualitas Hindu Dharma dan filosofi agung Tri Hita Karana.' }] },
    { name: 'NUSA TENGGARA BARAT', objects: [{ id: 8, image: '/images/zones/autoguide-image-(8).jpeg', description: 'Nusa Tenggara Barat adalah permata kepulauan yang menjembatani pesona Bali dan eksotisme timur Nusantara. Jejak peradabannya berakar dari zaman prasejarah, mekar menjadi Kerajaan Sasak, dan disempurnakan oleh warisan agraris imperium Majapahit. Masuknya jaringan perniagaan Melayu dan Arab kemudian melahirkan era Islam di Kesultanan Bima dan Sumbawa. Melintasi sejarah perlawanan heroik melawan kolonialisme, wilayah ini kini berdiri megah—merayakan pesona Gunung Rinjani, tradisi tenun ikat, dan keberagaman magis suku Sasak, Bima, serta Sumbawa.' }] },
    { name: 'NUSA TENGGARA TIMUR', objects: [{ id: 9, image: '/images/zones/autoguide-image-(9).jpeg', description: 'Nusa Tenggara Timur adalah persimpangan eksotis bertemunya budaya Austronesia, Melanesia, Asia, dan Eropa. Jejak purbanya membentang dari misteri Homo floresiensis di Flores hingga kokohnya tradisi megalitik di tanah Sumba. Tumbuh dengan struktur adat dan kerajaan lokal yang kuat, arah sejarahnya berubah saat bangsa Portugis dan Belanda tiba di abad ke-16, membawa perburuan cendana dan penyebaran iman Katolik. Melintasi era persaingan kolonial, NTT modern kini mekar merayakan pesona Taman Nasional Komodo dan Danau Kelimutu, serta mahakarya tradisi seperti tenun ikat dan alunan magis dawai sasando.' }] },
    { name: 'PULAU LETI', objects: [{ id: 10, image: '/images/zones/autoguide-image-(10).jpeg', description: 'Di ufuk tenggara Nusantara, Pulau Leti menyimpan jejak peradaban sakral yang telah berusia lebih dari dua milenium. Di sinilah berdiri Patung Yene, sebuah mahakarya spiritual yang bukan sekadar pahatan batu, melainkan medium penghubung antara manusia dan roh para leluhur. Melalui ritual kuno "Patung Darah Pipi", masyarakat adat merawat ikatan batin dengan nenek moyang—memohon keselamatan kampung dan kesuburan bumi. Menjadi saksi bisu perjalanan waktu dari era prasejarah hingga masa kini, Patung Yene terus abadi sebagai warisan budaya yang mengingatkan kita akan dalamnya akar spiritualitas luhur Nusantara.' }] },
    { name: 'HOMO FLORESIENSIS (HOBBIT)', objects: [{ id: 11, image: '/images/zones/autoguide-image-(11).jpeg', description: 'Di kedalaman gua kapur Liang Bua, Flores, tersimpan salah satu penemuan paling mengejutkan dalam sejarah evolusi: Homo floresiensis. Dijuluki "Manusia Hobbit" karena posturnya yang mungil setinggi satu meter, spesies ini mampu bertahan hidup di alam terisolasi menggunakan alat batu purba selama puluhan ribu tahun. Fenomena adaptasi unik island dwarfism ini mengubah pemahaman dunia—membuktikan bahwa perjalanan evolusi manusia tidaklah tunggal, melainkan epik penuh cabang misterius yang menempatkan Nusantara sebagai kunci penting dalam peta evolusi dunia.' }] },
    { name: 'SUMATRA', objects: [{ id: 12, image: '/images/zones/autoguide-image-(12).jpeg', description: 'Sumatra berdiri agung sebagai pusat peradaban purba dan simpul niaga utama di Samudra Hindia. Sejarahnya membentang dari akar budaya Austronesia hingga keemasan imperium Sriwijaya sang penguasa Selat Malaka. Abad ke-13 menyambut fajar Islam melalui Samudra Pasai, disusul oleh kejayaan Kesultanan Aceh dan Pagaruyung. Mengarungi masa kolonial dengan perlawanan heroik dalam Perang Padri dan Aceh, jiwa merdekanya memuncak pada peran vital PDRI di masa kemerdekaan. Kini, Sumatra modern terus merawat warisan budaya sepuluh provinsinya—membentang dari megahnya kaldera Danau Toba hingga puncak Gunung Kerinci.' }] },
    { name: 'MANUSIA PURBA HARAU', objects: [{ id: 13, image: '/images/zones/autoguide-image-(13).jpeg', description: 'Di kawasan megah Lembah Harau dan pesisir Sumatra Barat, tersimpan jejak transisi besar peradaban purba Nusantara. Penemuan alat-alat batu kuno menjadi saksi bisu peralihan gaya hidup pemburu-peramu menuju pola hunian yang lebih menetap. Revolusi ini memuncak dengan hadirnya mahakarya artefak perunggu di kawasan pesisir, menandai kemajuan pesat teknologi dan lahirnya jaringan perdagangan maritim. Kisah dari Lembah Harau ini membuktikan bahwa sejak ribuan tahun silam, Sumatra Barat telah menjadi panggung dinamis bagi inovasi, adaptasi, dan evolusi masyarakat terstruktur di Asia Tenggara.' }] },
    { name: 'SULAWESI', objects: [{ id: 14, image: '/images/zones/autoguide-image-(1).jpeg', description: 'Sulawesi, pulau berwujud unik di simpul maritim Nusantara, menyimpan peradaban yang berakar dari lukisan gua prasejarah tertua di Maros-Pangkep. Jejak pelaut Austronesia ini melahirkan keperkasaan Kerajaan Luwu hingga kedigdayaan maritim Kesultanan Gowa-Tallo di bawah kepemimpinan heroik Sultan Hasanuddin. Masuknya Islam di abad ke-16 semakin mengukuhkan wilayah ini sebagai urat nadi perniagaan rempah. Mengarungi kerasnya pusaran kolonialisme, jiwa tangguh para pelaut tak pernah surut; kini mekar di Sulawesi modern yang merayakan keberagaman magis Bugis, Makassar, Toraja, hingga suku Bajo sang pengembara samudra.' }] },
    { name: 'KALIMANTAN', objects: [{ id: 15, image: '/images/zones/autoguide-image-(2).jpeg', description: 'Kalimantan menyimpan epik peradaban yang berdenyut selaras dengan urat nadi sungai-sungai raksasanya. Kisahnya bermula dari lukisan gua purba dan tradisi suku Dayak, sebelum menorehkan sejarah sebagai rumah bagi Kutai Martadipura, kerajaan Hindu tertua di Nusantara. Arus waktu dan pesona rempah kemudian mengundang jaringan niaga Islam yang melahirkan kesultanan makmur seperti Banjar dan Pontianak. Melewati masa kelam kolonialisme dan perlawanan heroik Pangeran Antasari, jantung hutan tropis ini kini menatap masa depan gemilang sebagai Ibu Kota Nusantara (IKN), seraya terus melestarikan pesona suku dan kekayaan alam liarnya.' }] },
    { name: 'SEJARAH KALIMANTAN', objects: [{ id: 16, image: '/images/zones/autoguide-image-(3).jpeg', description: 'Pulau Kalimantan menyimpan jejak peradaban purba di belantara hutan tropisnya, membentang dari tradisi megalitik hingga pesona lukisan gua kuno. Melintasi zaman, sungai-sungai raksasa menjadi urat nadi kehidupan yang mengubah pesisirnya menjadi jalur niaga vital, melahirkan kerajaan-kerajaan megah seperti Kutai. Sebuah harmoni budaya tercipta dengan indah; ketika suku Dayak di pedalaman teguh menjaga sakralnya tradisi leluhur, wilayah pesisirnya mekar menjadi perpaduan multikultural dari jejak para pelaut Asia dan Eropa.' }] },
    { name: 'SUKU DAYAK KALIMANTAN', objects: [{ id: 17, image: '/images/zones/autoguide-image-(4).jpeg', description: 'Jauh di pedalaman dan hulu sungai raksasa Kalimantan, Suku Dayak telah mendiami belantara hutan tropis selama ribuan tahun. Sebutan kolektif ini menaungi beragam sub-suku yang hidup harmonis, menjadikan alam bukan sekadar sumber kehidupan, melainkan ruang spiritual yang sakral. Identitas luhur mereka terukir indah melalui kemegahan rumah panjang, seni tato tradisional, hingga pusaka mandau dan perisai bermotif alam. Melalui ritual suci seperti upacara Tiwah dan perayaan panen, masyarakat Dayak terus merawat keseimbangan abadi antara manusia, para leluhur, dan roh penjaga alam.' }] },
    { name: 'PELINDUNG & PENOLAK BALAK', objects: [{ id: 18, image: '/images/zones/autoguide-image-(5).jpeg', description: 'Di pedalaman hutan belantara Kalimantan, berdiri sebuah arca batu unik wujud sang kucing hutan yang menjadi saksi bisu tradisi spiritual kuno masyarakat Dayak. Sosok sakral yang melambangkan kewaspadaan dan ketangkasan gaib ini dipuja sebagai pelindung kampung dan penolak segala bala. Lebih dari sekadar artefak, arca ini adalah wujud abadi dari keharmonisan yang mendalam antara manusia, roh penjaga, dan hutan yang telah memeluk kehidupan mereka selama ribuan tahun.' }] },
    { name: 'PAPUA', objects: [{ id: 19, image: '/images/zones/autoguide-image-(6).jpeg', description: 'Di ufuk paling timur Nusantara, Papua menyimpan epik peradaban kuno yang telah berdenyut sejak 40.000 tahun silam. Dari kedalaman lembah hingga pesisirnya, ratusan suku adat seperti Dani, Asmat, dan Amungme teguh merawat tradisi komunal dan ikatan batin dengan alam leluhur. Melintasi era penjelajahan bangsa Eropa dan masa kolonial Belanda, arus sejarah pada akhirnya membawa wilayah ini terintegrasi ke dalam pangkuan Ibu Pertiwi, didorong oleh perjuangan tokoh pahlawan seperti J.A. Dimara. Kini, Papua modern berdiri megah memancarkan pesonanya—sebuah simfoni kekayaan budaya dan keajaiban alam yang membentang dari Lembah Baliem hingga Danau Sentani.' }] },
    { name: 'ASAL USUL WAYANG', objects: [{ id: 20, image: '/images/zones/autoguide-image-(7).jpeg', description: 'Wayang, mahakarya seni Nusantara yang bermakna "bayangan" atau "roh", merupakan harmoni luhur antara cerita, alunan gamelan, dan filosofi kehidupan. Lahir di era Hindu-Buddha pada abad ke-9 dengan membawakan epos agung Ramayana dan Mahabharata, seni ini bertransformasi secara anggun di abad ke-15 ketika para Wali Songo menjadikannya medium dakwah Islam yang damai. Dari siluet magis wayang kulit di Jawa Tengah dan Timur hingga rupa rupawan wayang golek di Jawa Barat, warisan yang kini diakui agung oleh UNESCO ini terus abadi—bukan sekadar hiburan rakyat, melainkan pilar pendidikan moral dan cermin kearifan spiritual bangsa yang tak lekang oleh waktu.' }] },
    { name: 'LAKSAMANA CHENG HO', objects: [{ id: 21, image: '/images/zones/autoguide-image-(8).jpeg', description: 'Laksamana Cheng Ho, pelaut Muslim agung dari Dinasti Ming, menorehkan jejak epik di perairan Nusantara melalui tujuh pelayaran bersejarahnya antara tahun 1405 hingga 1433. Membawa misi diplomasi damai, persahabatan, dan pengamanan jalur niaga, armada raksasanya merajut hubungan erat dengan kerajaan-kerajaan terkemuka seperti Majapahit, Samudera Pasai, dan Malaka. Ekspedisi monumental ini tidak sekadar memperluas pengaruh politik Tiongkok tanpa penjajahan, melainkan juga mengukuhkan posisi Nusantara sebagai simpul strategis yang vital dalam jaringan maritim dunia pada abad ke-15.' }] },
    { name: 'BUDAYA PERANAKAN', objects: [{ id: 22, image: '/images/zones/autoguide-image-(9).jpeg', description: 'Budaya Peranakan adalah mahakarya akulturasi indah yang lahir dari perpaduan harmonis antara pendatang Tionghoa dan tradisi lokal Nusantara. Pertemuan dua dunia ini melahirkan warisan seni yang menawan, mulai dari alunan musik Gambang Kromong khas Betawi yang menggabungkan instrumen dawai dan gamelan, hingga pertunjukan Wayang Potehi di kawasan pesisir Jawa. Semarak perpaduan ini juga hidup dalam kemeriahan tradisi Cap Go Meh dan tarian Barongsai, serta terlukis anggun pada lembaran Batik Peranakan yang memadukan motif mitologi Tiongkok dengan corak warna Nusantara yang cerah.' }] },
    { name: 'WAYANG POTEHI', objects: [{ id: 23, image: '/images/zones/autoguide-image-(10).jpeg', description: 'Wayang Potehi, seni boneka tangan klasik yang dibawa oleh imigran Tionghoa ke kota-kota pelabuhan Nusantara pada abad ke-17 hingga ke-18, telah mekar menjadi mahakarya akulturasi budaya yang memukau. Berawal dari ritual perayaan kelenteng seperti Imlek dan Cap Go Meh yang membawakan epik legenda Tiongkok, seni ini secara perlahan dan anggun membaur dengan jiwa lokal Nusantara. Harmoni ini terwujud menawan dalam perpaduan dinamis antara instrumen musik tradisional Tiongkok dan alunan gamelan Jawa, serta adaptasi cerita yang merangkul kearifan masyarakat setempat.' }] },
    { name: 'TIMELINE WAYANG POTEHI', objects: [{ id: 24, image: '/images/zones/autoguide-image-(11).jpeg', description: 'Memasuki abad ke-20, seni Wayang Potehi mulai terorganisasi secara rapi melalui berbagai paguyuban di kota-kota besar Nusantara, menjaga nyala tradisi di tengah dinamika perubahan sosial dan politik bangsa. Mengalami masa kebangkitan kultural pada era 1970-an, kesenian ini menemukan kembali panggungnya dalam kemeriahan perayaan Imlek dan Cap Go Meh. Kini, di era digital, Wayang Potehi telah bertransformasi menjadi warisan budaya hidup yang melampaui batas etnis—merajut kisah klasik Tiongkok dengan tema lokal dan sejarah Nusantara.' }] },
    { name: 'KEN DEDES', objects: [{ id: 25, image: '/images/zones/autoguide-image-(12).jpeg', description: 'Ken Dedes, sang permaisuri agung dari abad ke-13, berdiri sebagai sosok sentral dalam pusaran berdirinya Kerajaan Singhasari. Dikenal memiliki kecantikan memukau yang memancarkan prabha atau sinar kemuliaan, kisahnya diwarnai intrik kekuasaan yang dramatis ketika ia dipersunting oleh Ken Arok setelah tragedi pembunuhan penguasa Tumapel, Tunggul Ametung. Seperti yang dikisahkan dengan penuh misteri dan ramalan dalam kitab Pararaton, dari garis keturunannyalah lahir raja-raja besar penguasa Singhasari dan Majapahit.' }] },
    { name: 'DEWI PARWATI', objects: [{ id: 26, image: '/images/zones/autoguide-image-(13).jpeg', description: 'Dewi Parwati, lambang agung cinta, kesetiaan, dan kekuatan ilahi (Shakti), dihormati dalam agama Hindu sebagai pendamping abadi Dewa Siwa. Kisah pengabdiannya bermula dari pertapaan berat sang putri Raja Himawan ini demi meluluhkan hati Siwa, sang pertapa agung yang hidup menyendiri. Dari penyatuan suci mereka lahirlah dewa-dewa besar penguasa kebijaksanaan dan peperangan, yakni Ganesha dan Kartikeya. Di balik pesona kelembutannya, Parwati menyimpan wujud perkasa pembinasakan kejahatan dalam rupa Durga dan Kali.' }] },
    { name: 'PERJALANAN LELUHUR NIAS', objects: [{ id: 27, image: '/images/zones/autoguide-image-(1).jpeg', description: 'Berakar dari jejak migrasi purba Austronesia, Pulau Nias melahirkan peradaban luhur yang menjunjung tinggi keberanian, kehormatan, dan solidaritas komunal. Semangat pantang menyerah masyarakatnya terukir abadi dalam ketangguhan arsitektur Omo Hada dan heroisme tradisi Fahombo Batu. Hingga detik ini, warisan agung para leluhur terus berdenyut, merawat harmoni suci antara manusia, alam, dan pendahulu, serta menjadi kepingan yang memperkaya indahnya mosaik peradaban Nusantara.' }] }
];

const getObjectImage = (object: ZoneObject) => {
    if (object.image && object.image !== '') return object.image;
    return DUMMY_LOGO;
};

const findObjectById = (id: number): { object: ZoneObject | null; zone: string; zoneIndex: number } => {
    for (let i = 0; i < museumData.length; i++) {
        const found = museumData[i].objects.find((obj) => obj.id === id);
        if (found) return { object: found, zone: museumData[i].name, zoneIndex: i };
    }
    return { object: null, zone: '', zoneIndex: -1 };
};

export default function ObjectPage() {
    const { id } = useParams<{ id: string }>();
    const [copied, setCopied] = useState(false);
    const { currentLang, getDescription, prefetchTranslation } = useTranslationContext();

    const objectId = id ? parseInt(id, 10) : null;
    const { object, zone, zoneIndex } = objectId ? findObjectById(objectId) : { object: null, zone: '', zoneIndex: -1 };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        if (object && zone) prefetchTranslation(zone, object.description);
    }, [currentLang, zone, object, prefetchTranslation]);

    const handleShare = async () => {
        const shareUrl = `${window.location.origin}/object/${objectId}`;
        try {
            await navigator.clipboard.writeText(shareUrl);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error('Failed to copy:', err);
        }
    };

    if (!object) {
        return (
            <div className="bg-[#F4EFE6] min-h-screen pt-20 pb-12">
                <div className="max-w-[1200px] mx-auto px-4 py-12 text-center">
                    <h1 className="font-['Cinzel'] text-3xl text-[#8C6B3E] mb-4">Object Not Found</h1>
                    <p className="text-[#5A5A5A] mb-8">The object with ID {id} was not found in our collection.</p>
                    <Link to="/auto-guide" className="inline-flex items-center gap-2 px-6 py-3 bg-[#8C6B3E] text-white rounded hover:bg-[#7A5F36] transition-colors">
                        <ArrowLeft className="w-4 h-4" />
                        Back to Auto Guide
                    </Link>
                </div>
            </div>
        );
    }

    const description = getDescription(zone, object.description);

    return (
        <div className="bg-[#F4EFE6] min-h-screen pt-20 pb-12">
            <div className="bg-[#E7DED0] py-3 px-4">
                <div className="max-w-[1200px] mx-auto">
                    <div className="flex items-center gap-2 text-sm">
                        <Link to="/" className="text-[#8C6B3E] hover:underline">Home</Link>
                        <span className="text-[#5A5A5A]">/</span>
                        <Link to="/auto-guide" className="text-[#8C6B3E] hover:underline">Auto Guide</Link>
                        <span className="text-[#5A5A5A]">/</span>
                        <span className="text-[#5A5A5A]">{zone}</span>
                    </div>
                </div>
            </div>

            <div className="relative bg-[#8C6B3E] text-white py-12 px-4">
                <div className="max-w-[1200px] mx-auto">
                    <div className="flex items-center justify-between gap-4 mb-4">
                        <div className="flex items-center gap-2 text-sm opacity-80">
                            <MapPin className="w-4 h-4" />
                            <span>{zone}</span>
                        </div>
                        <ContentLanguageSwitcher />
                    </div>
                    <h1 className="font-['Cinzel'] text-4xl md:text-5xl mb-2">{zone}</h1>
                    <p className="text-sm opacity-80">Zona #{zoneIndex + 1}</p>
                </div>
            </div>

            <div className="max-w-[1200px] mx-auto px-4 py-12">
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="w-full h-[400px] md:h-[500px] bg-[#8C6B3E] flex items-center justify-center p-8">
                        <img src={getObjectImage(object)} alt={zone} className="w-full h-full object-cover" />
                    </div>

                    <div className="bg-[#F4EFE6] p-4 md:p-6 border-b border-[#E7DED0]">
                        <AudioPlayer zoneName={zone} />
                    </div>

                    <div className="p-6 md:p-8">
                        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                            <div>
                                <h2 className="font-['Cinzel'] text-2xl text-[#2B2B2B] mb-2">{zone}</h2>
                                <p className="text-[#8C6B3E] font-medium">{zone}</p>
                            </div>

                            <button
                                onClick={handleShare}
                                className="inline-flex items-center gap-2 px-4 py-2 bg-[#8C6B3E] text-white rounded hover:bg-[#7A5F36] transition-colors"
                            >
                                {copied ? (
                                    <>
                                        <Check className="w-4 h-4" />
                                        Link Copied!
                                    </>
                                ) : (
                                    <>
                                        <Share2 className="w-4 h-4" />
                                        Share Link
                                    </>
                                )}
                            </button>
                        </div>

                        <div className="prose max-w-none">
                            <p className="text-[#2B2B2B] leading-relaxed text-lg">{description}</p>
                        </div>
                    </div>
                </div>

                <div className="mt-8 flex gap-4">
                    <Link to="/auto-guide" className="inline-flex items-center gap-2 px-6 py-3 bg-[#8C6B3E] text-white rounded hover:bg-[#7A5F36] transition-colors">
                        <ArrowLeft className="w-4 h-4" />
                        Back to Auto Guide
                    </Link>
                </div>
            </div>
        </div>
    );
}
