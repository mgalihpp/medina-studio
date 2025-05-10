// import { Button } from '~/components/ui/button';
// import { Card } from '~/components/ui/card';
// import { Tabs, TabsContent, TabsList, TabsTrigger } from '~/components/ui/tabs';
// import { AspectRatio } from '~/components/ui/aspect-ratio';
// import {
//   Phone,
//   Building,
//   Users,
//   Book,
//   Star,
//   CheckCircle,
//   ChevronLeft,
// } from 'lucide-react';
// import { ScrollArea, ScrollBar } from '~/components/ui/scroll-area';
// import { Link, useParams } from 'react-router';
// import { Avatar, AvatarFallback, AvatarImage } from '~/components/ui/avatar';
// import { RippleButton } from '~/components/ripple-button';
// import { PROGRAM_KURSUS } from '~/constant/course';
// import { NotFound } from '~/components/layout/notfound';

// export function DetailProgram() {
//   const { program } = useParams();

//   const currentProgram = PROGRAM_KURSUS.find(
//     (item) => item.title.toLowerCase().replace(/\s+/g, '-') === program
//   );

//   if (!currentProgram) {
//     return <NotFound />;
//   }

//   return (
//     <div className="min-h-screen bg-gray-50 py-16 px-4 md:px-8">
//       <div className="max-w-7xl mx-auto">
//         <div className="pl-8">
//           <Link to="/program-kursus">
//             <RippleButton className="px-2 py-2 flex items-center gap-2 text-xs">
//               <ChevronLeft className="size-4" /> Kembali
//             </RippleButton>
//           </Link>
//         </div>

//         <div className="grid md:grid-cols-8 gap-8">
//           <div className="col-span-5 md:col-span-4 lg:col-span-5 flex flex-col h-full">
//             <Card className="p-8 border-none shadow-none outline-none">
//               <div className="space-y-6">
//                 <div>
//                   <h1 className="section-title">
//                     {program
//                       ?.replace(/-/g, ' ')
//                       .replace(/\b\w/g, (char) => char.toUpperCase())}
//                   </h1>
//                 </div>
//                 <p className="text-gray-600 text-sm sm:text-base">
//                   {currentProgram.description}
//                 </p>
//               </div>

//               <div className="mt-4">
//                 <Tabs defaultValue="curriculum" className="w-full">
//                   <ScrollArea>
//                     <div className="relative h-10 w-full">
//                       <TabsList className="max-md:absolute h-10 flex gap-2 min-w-0 md:w-full">
//                         <TabsTrigger value="curriculum" className="gap-2">
//                           <Book className="w-4 h-4" />
//                           Kurikulum
//                         </TabsTrigger>
//                         <TabsTrigger value="instructors" className="gap-2">
//                           <Users className="w-4 h-4" />
//                           Pengajar
//                         </TabsTrigger>
//                         <TabsTrigger value="facilities" className="gap-2">
//                           <Building className="w-4 h-4" />
//                           Fasilitas
//                         </TabsTrigger>
//                         <TabsTrigger value="benefits" className="gap-2">
//                           <Star className="w-4 h-4" />
//                           Manfaat
//                         </TabsTrigger>
//                       </TabsList>
//                     </div>
//                     <ScrollBar orientation="horizontal" />
//                   </ScrollArea>
//                   <TabsContent value="instructors" className="mt-12 sm:mt-6">
//                     <h2 className="text-2xl font-bold mb-6">
//                       Pengajar Program
//                     </h2>
//                     <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//                       {currentProgram.instructors.map((instructor, index) => (
//                         <div
//                           key={index}
//                           className="flex items-center p-4 border rounded-lg"
//                         >
//                           <div className="mr-4">
//                             <Avatar className="size-16">
//                               <AvatarImage
//                                 className="object-cover"
//                                 src={instructor.image}
//                                 alt={instructor.name}
//                               />
//                               <AvatarFallback>
//                                 {instructor.name.charAt(0)}
//                               </AvatarFallback>
//                             </Avatar>
//                           </div>
//                           <div>
//                             <h3 className="font-medium">{instructor.name}</h3>
//                             <p className="text-sm text-gray-500">
//                               {instructor.role}
//                             </p>
//                           </div>
//                         </div>
//                       ))}
//                     </div>
//                   </TabsContent>
//                   <TabsContent value="curriculum" className="mt-6">
//                     <h2 className="text-2xl font-bold mb-6">
//                       Kurikulum Program
//                     </h2>
//                     <div className="space-y-8">
//                       {currentProgram.syllabus.map((module, index) => (
//                         <div
//                           key={index}
//                           className="border-b pb-6 last:border-0"
//                         >
//                           <h3 className="text-lg font-semibold mb-2">
//                             {module.title}
//                           </h3>
//                           <p className="text-sm text-gray-500 mb-4">
//                             {module.weeks}
//                           </p>
//                           <ul className="space-y-2">
//                             {module.topics.map((topic, i) => (
//                               <li key={i} className="flex items-start">
//                                 <CheckCircle className="h-5 w-5 text-emerald-500 mr-2 flex-shrink-0 mt-0.5" />
//                                 <span>{topic}</span>
//                               </li>
//                             ))}
//                           </ul>
//                         </div>
//                       ))}
//                     </div>
//                   </TabsContent>
//                   <TabsContent value="facilities" className="mt-6">
//                     <div className="space-y-4">
//                       <h3 className="text-xl font-semibold">
//                         Fasilitas Lengkap
//                       </h3>
//                       <div className="grid md:grid-cols-2 gap-6">
//                         <div className="p-4 border rounded-lg">
//                           <h4 className="font-medium mb-2">Studio Makeup</h4>
//                           <p className="text-gray-600 text-sm">
//                             Studio ber-AC dengan pencahayaan professional
//                           </p>
//                         </div>
//                         <div className="p-4 border rounded-lg">
//                           <h4 className="font-medium mb-2">Peralatan Makeup</h4>
//                           <p className="text-gray-600 text-sm">
//                             Peralatan makeup lengkap dan berkualitas
//                           </p>
//                         </div>
//                         <div className="p-4 border rounded-lg">
//                           <h4 className="font-medium mb-2">Area Praktik</h4>
//                           <p className="text-gray-600 text-sm">
//                             Ruang praktik yang nyaman dan luas
//                           </p>
//                         </div>
//                         <div className="p-4 border rounded-lg">
//                           <h4 className="font-medium mb-2">Ruang Diskusi</h4>
//                           <p className="text-gray-600 text-sm">
//                             Ruang diskusi dan konsultasi
//                           </p>
//                         </div>
//                       </div>
//                     </div>
//                   </TabsContent>
//                   <TabsContent value="benefits" className="mt-6">
//                     <h2 className="text-2xl font-bold mb-6">Manfaat Program</h2>
//                     <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                       {currentProgram.benefits.map((benefit, index) => (
//                         <li key={index} className="flex items-start">
//                           <CheckCircle className="h-5 w-5 text-emerald-500 mr-2 flex-shrink-0 mt-0.5" />
//                           <span className="text-sm">{benefit}</span>
//                         </li>
//                       ))}
//                     </ul>
//                   </TabsContent>
//                 </Tabs>
//               </div>
//             </Card>
//           </div>

//           <div className="space-y-6 col-span-5 md:col-span-4 lg:col-span-3">
//             <div className="md:sticky md:top-20">
//               <Card className="overflow-hidden py-0 gap-0">
//                 <div className="relative h-60 w-full overflow-hidden">
//                   <img
//                     src={currentProgram.image || '/placeholder.svg'}
//                     alt={currentProgram.title}
//                     loading="lazy"
//                     decoding="async"
//                     height={500}
//                     width={800}
//                     className="object-cover w-full h-full"
//                   />
//                 </div>
//                 <div className="p-6 space-y-6">
//                   <div className="space-y-4">
//                     <div className="flex justify-between flex-wrap py-3 border-b">
//                       <span className="font-medium">Durasi Program</span>
//                       <span className="text-gray-600 text-sm">
//                         {currentProgram.duration}
//                       </span>
//                     </div>
//                     <div className="flex justify-between flex-wrap py-3 border-b">
//                       <span className="font-medium">Jadwal</span>
//                       <span className="text-gray-600 text-sm">
//                         3x pertemuan per minggu
//                       </span>
//                     </div>
//                     <div className="flex justify-between flex-wrap py-3 border-b">
//                       <span className="font-medium">Kapasitas</span>
//                       <span className="text-gray-600 text-sm">
//                         8-12 peserta per kelas
//                       </span>
//                     </div>
//                     <div className="flex justify-between flex-wrap py-3 border-b">
//                       <span className="font-medium">Biaya</span>
//                       <span className="text-gray-600 text-sm">
//                         {currentProgram.price}
//                       </span>
//                     </div>
//                   </div>
//                   <div className="space-y-4">
//                     <RippleButton className="w-full bg-main-color hover:bg-secondary-color text-base">
//                       Daftar Sekarang
//                     </RippleButton>
//                     <div className="grid">
//                       <Button variant="outline" className="flex gap-2 h-12">
//                         <Phone className="w-4 h-4" />
//                         Hubungi Kami
//                       </Button>
//                     </div>
//                   </div>
//                 </div>
//               </Card>
//             </div>
//           </div>
//         </div>

//         <div className="mt-16">{/* <RelatedPrograms /> */}</div>
//       </div>
//     </div>
//   );
// }

import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import RegistrationForm from './components/registration-form';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '~/components/ui/tabs';
import type { CourseType } from './components/course-card';
import PriceDisplay from './components/price-display';
import { PROMO_DISCOUNT } from '~/constant/discount';
import { ScrollArea, ScrollBar } from '~/components/ui/scroll-area';
import { NotFound } from '~/components/layout/notfound';
import { CheckCircle } from 'lucide-react';
import { CourseCard } from './components/course-card';
import { Avatar, AvatarFallback, AvatarImage } from '~/components/ui/avatar';

type CourseDetailProps = {
  id: string;
  title: string;
  description: string;
  image: string;
  duration: string;
  level: string;
  longDescription: string;
  curriculum: string[];
  syllabus: SyllabusItem[];
  requirements: string[];
  benefits: string[];
  instructors: Instructor[];
  price: {
    regular: string;
    private: string;
  };
};

interface CourseDetailType extends CourseType {
  longDescription: string;
  syllabus: SyllabusItem[];
  curriculum: string[];
  requirements: string[];
  instructors: Instructor[];
  benefits: string[];
  price: {
    regular: string;
    private: string;
  };
}

const coursesData: CourseDetailType[] = [
  {
    id: 'tata-rias-pengantin',
    title: 'Tata Rias Pengantin',
    description:
      'Pelajari teknik tata rias pengantin modern dan tradisional dari ahli kami.',
    image:
      'https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//catalog-image/95/MTA-104176209/brd-21979_viva-pidih-hitam-rias-pengantin-tradisional-9g-viva-pideh-lotho-tata-rias-pengantin-tradisional-9gr_full02.jpg',
    duration: '3 bulan',
    level: 'Pemula - Menengah',
    longDescription:
      'Kursus Tata Rias Pengantin di Medina Studio dirancang untuk membekali Anda dengan keterampilan komprehensif dalam seni merias pengantin. Mulai dari teknik dasar hingga gaya riasan modern dan tradisional dari berbagai daerah di Indonesia. Kursus ini mencakup teori dan praktek intensif dengan bimbingan langsung dari pengajar profesional yang berpengalaman di industri pernikahan. Anda akan belajar tentang analisis wajah, color matching, teknik contouring khusus pengantin, pengaplikasian foundation tahan lama, dan berbagai teknik riasan mata yang sesuai untuk berbagai jenis pernikahan, baik indoor maupun outdoor.',
    curriculum: [
      'Pengenalan alat dan bahan tata rias pengantin',
      'Teknik dasar skin preparation dan base makeup untuk pengantin',
      'Teknik riasan mata dan bibir untuk pengantin',
      'Teknik contouring dan highlighting untuk fotografi pernikahan',
      'Tata rias pengantin tradisional Jawa',
      'Tata rias pengantin tradisional Sunda',
      'Tata rias pengantin modern',
      'Teknik pemasangan aksesoris kepala dan veil',
      'Praktek tata rias pengantin lengkap (simulasi hari pernikahan)',
      'Manajemen bisnis tata rias pengantin dan pemasaran',
    ],
    syllabus: [
      {
        title: 'Modul 1: Pengenalan Tata Rias Pengantin Tradisional',
        weeks: 'Minggu 1-2',
        topics: [
          'Sejarah dan filosofi tata rias pengantin tradisional',
          'Pengenalan alat dan bahan tata rias tradisional',
          'Teknik dasar tata rias wajah untuk pengantin',
        ],
      },
      {
        title: 'Modul 2: Tata Rias Pengantin Jawa',
        weeks: 'Minggu 3-6',
        topics: [
          'Tata rias pengantin Yogyakarta (Paes Ageng)',
          'Tata rias pengantin Solo (Basahan dan Putri)',
          'Teknik sanggul dan pemasangan aksesoris kepala',
          'Busana dan perlengkapan pengantin Jawa',
        ],
      },
      {
        title: 'Modul 3: Tata Rias Pengantin Sunda',
        weeks: 'Minggu 7-10',
        topics: [
          'Tata rias pengantin Sunda Siger',
          'Tata rias pengantin Sunda Putri',
          'Teknik draping dan pemakaian selendang',
          'Aksesoris dan perhiasan khas Sunda',
        ],
      },
      {
        title: 'Modul 4: Tata Rias Pengantin Sumatera',
        weeks: 'Minggu 11-14',
        topics: [
          'Tata rias pengantin Minangkabau',
          'Tata rias pengantin Palembang',
          'Teknik pemasangan sunting dan mahkota',
          'Busana dan aksesoris khas Sumatera',
        ],
      },
      {
        title: 'Modul 5: Tata Rias Pengantin Indonesia Timur',
        weeks: 'Minggu 15-18',
        topics: [
          'Tata rias pengantin Bali',
          'Tata rias pengantin Sulawesi (Bugis dan Makassar)',
          'Teknik pemasangan perhiasan dan aksesoris',
          'Busana dan perlengkapan pengantin Indonesia Timur',
        ],
      },
      {
        title: 'Modul 6: Proyek Akhir dan Sertifikasi',
        weeks: 'Minggu 19-24',
        topics: [
          'Praktik tata rias pengantin lengkap',
          'Manajemen bisnis tata rias pengantin',
          'Fotografi tata rias pengantin',
          'Ujian sertifikasi dan proyek akhir',
        ],
      },
    ],
    requirements: [
      'Tidak ada syarat khusus, terbuka untuk pemula',
      'Usia minimal 17 tahun',
      'Memiliki ketertarikan dalam bidang kecantikan dan tata rias',
      'Membawa buku catatan dan alat tulis',
      'Disarankan membawa kamera untuk dokumentasi hasil karya',
    ],
    benefits: [
      'Menguasai teknik tata rias pengantin modern dan tradisional',
      'Sertifikat resmi yang diakui industri',
      'Kesempatan magang di salon partner kami',
      'Jaringan dengan vendor pernikahan',
      'Mendapatkan starter kit makeup profesional',
      'Konsultasi karir dan pengembangan bisnis',
    ],
    instructors: [
      {
        name: 'Sri Widiani',
        role: 'Instruktur Tata Rias dan Busana',
        bio: 'Lulusan dari Instituto Di Muda Burgo Milan, Italia dan telah berpengalaman mengajar lebih 6 tahun mengajar, termasuk di Paris de La Mode School, Italian Fashion School Jakarta, Instituto di Moda Burgo Jakarta dan lainnya.',
        image: '/img/mentor/widi.jpg',
      },
    ],
    price: {
      regular: 'Rp 7.500.000',
      private: 'Rp 15.000.000',
    },
  },
  {
    id: 'desain-busana',
    title: 'Desain Busana',
    description:
      'Belajar desain busana dari dasar hingga mahir dengan pengajar profesional.',
    image:
      'https://mommiesdaily.com/wp-content/uploads/2023/07/asian-tailor-woman-working-clothes-tailoring-atelier.jpg',
    duration: '4 bulan',
    level: 'Semua Level',
    longDescription:
      'Kursus Desain Busana kami dirancang untuk mengembangkan kreativitas dan keterampilan teknis Anda dalam menciptakan busana yang indah dan fungsional. Dengan kurikulum yang komprehensif, Anda akan belajar dari konsep dasar desain hingga teknik produksi tingkat lanjut. Para pengajar kami adalah desainer berpengalaman yang akan membimbing Anda melalui proses penuh dari sketsa awal hingga produksi garmen. Anda akan mengeksplorasi berbagai gaya dan material, serta belajar cara mengembangkan koleksi yang kohesif sesuai dengan tren pasar saat ini. Kursus ini cocok untuk pemula yang ingin memulai karir di industri fashion maupun desainer yang ingin meningkatkan keterampilan mereka.',
    syllabus: [
      {
        title: 'Modul 1: Dasar-Dasar Desain Busana',
        weeks: 'Minggu 1-3',
        topics: [
          'Pengenalan elemen-elemen desain (garis, bentuk, warna, tekstur)',
          'Prinsip-prinsip desain (harmoni, proporsi, ritme, penekanan)',
          'Sketsa dasar tubuh dan proporsi ideal',
          'Penggunaan alat dan bahan desain',
        ],
      },
      {
        title: 'Modul 2: Menggambar Busana (Fashion Illustration)',
        weeks: 'Minggu 4-7',
        topics: [
          'Teknik menggambar flat sketch (gambar teknik busana)',
          'Teknik draping sederhana pada manekin',
          'Mengembangkan ide desain menjadi sketsa busana',
          'Memberikan detail dan finishing pada ilustrasi',
        ],
      },
      {
        title: 'Modul 3: Pengetahuan Bahan Tekstil',
        weeks: 'Minggu 8-9',
        topics: [
          'Jenis-jenis serat tekstil (alami dan sintetis)',
          'Karakteristik berbagai macam kain',
          'Pemilihan bahan yang sesuai dengan desain',
          'Perawatan dan penanganan bahan tekstil',
        ],
      },
      {
        title: 'Modul 4: Teknik Menjahit Dasar',
        weeks: 'Minggu 10-12',
        topics: [
          'Pengenalan mesin jahit dan perlengkapannya',
          'Teknik menjahit lurus, obras, dan neci dasar',
          'Membuat pola dasar busana (rok, blus)',
          'Proses pembuatan busana sederhana',
        ],
      },
      {
        title: 'Modul 5: Pengembangan Desain dan Koleksi',
        weeks: 'Minggu 13-16',
        topics: [
          'Mencari inspirasi dan tren fashion',
          'Membuat mood board dan konsep desain',
          'Mengembangkan mini koleksi (3-5 desain)',
          'Presentasi dan evaluasi desain',
        ],
      },
    ],
    curriculum: [
      'Dasar-dasar desain busana dan sketsa mode',
      'Teori warna dan tekstur dalam fashion',
      'Analisis tren fashion dan forecasting',
      'Pemilihan bahan dan tekstil',
      'Teknik draping dan pola dasar',
      'Pengembangan desain dan variasi pola',
      'Teknik menjahit untuk berbagai jenis busana',
      'Desain busana pesta dan pernikahan',
      'Pengembangan koleksi fashion',
      'Presentasi portofolio dan pemasaran diri sebagai desainer',
    ],
    requirements: [
      'Terbuka untuk semua level pengalaman',
      'Usia minimal 16 tahun',
      'Membawa peralatan menggambar dasar',
      'Notebook untuk catatan dan sketsa',
      'Semangat belajar dan kreativitas',
    ],
    benefits: [
      'Menguasai proses desain busana dari konsep hingga produksi',
      'Membangun portofolio profesional',
      'Memahami bisnis fashion dan pemasaran',
      'Kesempatan magang di rumah mode',
      'Jaringan dengan profesional industri fashion',
      'Sertifikat yang diakui industri',
    ],
    instructors: [
      {
        name: 'Sri Widiani',
        role: 'Instruktur Tata Rias dan Busana',
        bio: 'Lulusan dari Instituto Di Muda Burgo Milan, Italia dan telah berpengalaman mengajar lebih 6 tahun mengajar, termasuk di Paris de La Mode School, Italian Fashion School Jakarta, Instituto di Moda Burgo Jakarta dan lainnya.',
        image: '/img/mentor/widi.jpg',
      },
    ],
    price: {
      regular: 'Rp 9.500.000',
      private: 'Rp 18.000.000',
    },
  },
  {
    id: 'henna-art',
    title: 'Henna Art',
    description:
      'Kuasai seni menghias tangan dan tubuh dengan henna, mulai dari teknik dasar hingga desain yang lebih rumit.',
    image:
      'https://i.pinimg.com/736x/61/df/97/61df9726d304f6cfda45a8499fbf823a.jpg',
    duration: '1 bulan',
    level: 'Pemula - Mahir',
    longDescription:
      'Kursus Henna Art kami memperkenalkan Anda pada seni menghias tubuh tradisional yang telah berusia ribuan tahun dan kini menjadi tren populer di acara pernikahan dan perayaan khusus. Dari teknik dasar hingga desain kompleks, Anda akan mempelajari cara membuat motif tradisional dan kontemporer menggunakan pasta henna. Kursus ini mencakup pemahaman mendalam tentang bahan-bahan henna berkualitas, teknik mencampur pasta yang sempurna, dan metode aplikasi untuk hasil yang optimal. Melalui latihan intensif dan bimbingan personal, Anda akan mengembangkan gaya unik Anda sendiri dan mempelajari cara mendirikan bisnis henna yang sukses.',
    syllabus: [
      {
        title: 'Modul 1: Pengenalan Seni Henna',
        weeks: 'Minggu 1-2',
        topics: [
          'Sejarah dan budaya henna di berbagai negara',
          'Jenis-jenis henna alami dan perbedaannya',
          'Pengenalan alat dan bahan untuk henna art',
          'Cara membuat pasta henna alami yang aman',
          'Tips menjaga kualitas pasta henna',
        ],
      },
      {
        title: 'Modul 2: Teknik Dasar Menggambar Henna',
        weeks: 'Minggu 3-4',
        topics: [
          'Latihan membuat garis lurus, lengkung, dan titik',
          'Teknik mengisi area dengan henna secara merata',
          'Cara memegang cone henna yang benar',
          'Mengontrol tekanan untuk menghasilkan ketebalan garis yang berbeda',
          'Latihan di atas kertas dan media latihan lainnya',
        ],
      },
      {
        title: 'Modul 3: Desain Henna Dasar',
        weeks: 'Minggu 5-6',
        topics: [
          'Pengenalan motif-motif henna sederhana (bunga, daun, sulur)',
          'Cara menyusun motif menjadi desain yang menarik',
          'Teknik membuat desain henna simetris',
          'Mengaplikasikan desain dasar pada tangan dan kaki',
          'Tips mengatasi kesalahan saat menggambar henna',
        ],
      },
      {
        title: 'Modul 4: Desain Henna Tingkat Lanjut',
        weeks: 'Minggu 7-9',
        topics: [
          'Pengembangan motif-motif henna yang lebih kompleks',
          'Menggabungkan berbagai motif dalam satu desain',
          'Teknik shading dan highlighting dalam henna art',
          'Membuat desain henna dengan tema tertentu (floral, tribal, geometric)',
          'Inspirasi desain dari berbagai budaya',
        ],
      },
      {
        title: 'Modul 5: Aplikasi Henna Profesional dan Perawatan',
        weeks: 'Minggu 10-12',
        topics: [
          'Persiapan kulit sebelum aplikasi henna',
          'Teknik mengaplikasikan henna pada berbagai bagian tubuh',
          'Cara mengeringkan dan menjaga henna agar warnanya maksimal',
          'Tips menghilangkan henna dengan aman',
          'Praktek aplikasi henna pada model',
        ],
      },
      {
        title: 'Modul 6: Kreasi Desain Henna Artistik',
        weeks: 'Minggu 13-15',
        topics: [
          'Mengembangkan gaya desain henna pribadi',
          'Eksperimen dengan kombinasi motif dan teknik',
          'Membuat desain henna untuk acara-acara khusus (pernikahan, festival)',
          'Mencari referensi dan inspirasi desain terkini',
          'Presentasi portofolio desain henna',
        ],
      },
      {
        title: 'Modul 7: Bisnis dan Pemasaran Henna Art (Opsional)',
        weeks: 'Minggu 16',
        topics: [
          'Membangun portofolio henna art',
          'Strategi pemasaran jasa henna art',
          'Menentukan harga layanan henna',
          'Etika profesional dalam bisnis henna art',
          'Tips membangun relasi dengan klien',
        ],
      },
    ],
    curriculum: [
      'Pengenalan sejarah dan budaya henna',
      'Bahan-bahan dan alat untuk seni henna',
      'Teknik pencampuran pasta henna yang optimal',
      'Teknik dasar aplikasi dan control cone',
      'Motif dasar dan pengembangan pola',
      'Desain tradisional India dan Maroko',
      'Motif kontemporer dan fusion',
      'Teknik pewarnaan dan perawatan',
      'Henna untuk acara pernikahan',
      'Pengembangan bisnis dan pemasaran jasa henna',
    ],
    requirements: [
      'Tidak diperlukan pengalaman sebelumnya',
      'Kesabaran dan ketelitian',
      'Notebook untuk sketsa dan catatan',
      'Kemampuan duduk dan berkonsentrasi untuk waktu yang lama',
      'Minat pada seni dan desain',
    ],
    benefits: [
      'Menguasai teknik aplikasi henna profesional',
      'Kemampuan menciptakan desain kustom',
      'Pemahaman tentang bahan henna berkualitas',
      'Sertifikat penyelesaian kursus',
      'Starter kit henna profesional',
      'Pengetahuan pemasaran dan pengembangan usaha henna',
    ],
    instructors: [
      {
        name: 'Siska Handayani',
        role: 'Instruktur Henna',
        bio: 'Henna Artist dengan pengalaman lebih dari 3 tahun dan menguasai berbagai jenis Henna, termasuk Henna Putih dan Henna Biru.',
        image: '/img/mentor/siska.jpg',
      },
    ],
    price: {
      regular: 'Rp 5.500.000',
      private: 'Rp 12.000.000',
    },
  },
  {
    id: 'menjahit',
    title: 'Menjahit',
    description:
      'Kami akan membahas berbagai teknik menjahit, serta tips dan trik dalam membuat pakaian yang indah.',
    image:
      'https://cdn1-production-images-kly.akamaized.net/IPD56eznAQRXmPj04MWMbI4ssOQ=/1200x675/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/3106008/original/011455000_1587227623-sewing-machine-4966931_960_720.jpg',
    duration: '2 bulan',
    level: 'Pemula - Menengah',
    longDescription:
      'Kursus Menjahit kami dirancang untuk mengajarkan Anda keterampilan yang berharga dalam membuat dan memodifikasi pakaian. Mulai dari dasar-dasar menggunakan mesin jahit hingga teknik menjahit tingkat lanjut, kursus ini menyediakan pelatihan praktis yang komprehensif. Anda akan belajar membaca dan menerapkan pola, memilih kain yang tepat, dan menggunakan berbagai teknik jahitan untuk menciptakan pakaian dan aksesori yang profesional. Dengan ukuran kelas kecil, kami memastikan setiap siswa mendapatkan perhatian individu dan dapat mengembangkan keterampilannya dengan kecepatan yang nyaman. Kelas ini ideal untuk pemula maupun mereka yang ingin menyempurnakan teknik yang sudah dimiliki.',
    syllabus: [
      {
        title: 'Modul 1: Pengenalan Dasar Menjahit',
        weeks: 'Minggu 1-2',
        topics: [
          'Pengenalan mesin jahit dan fungsinya',
          'Mengenal berbagai jenis jarum dan benang',
          'Latihan dasar mengoperasikan mesin jahit',
          'Teknik menjahit lurus dan berbelok',
          'Membuat jahitan pengaman',
        ],
      },
      {
        title: 'Modul 2: Peralatan dan Bahan Menjahit',
        weeks: 'Minggu 3',
        topics: [
          'Pengenalan alat-alat bantu menjahit (gunting kain, meteran, pendedel, dll.)',
          'Mengenal berbagai jenis kain dan karakteristiknya',
          'Cara mengambil ukuran tubuh yang benar',
          'Membuat pola dasar sederhana (garis lurus dan lengkung)',
        ],
      },
      {
        title: 'Modul 3: Teknik Menjahit Dasar',
        weeks: 'Minggu 4-6',
        topics: [
          'Teknik menjahit kampuh terbuka dan tertutup',
          'Cara memasang kancing dan lubang kancing manual',
          'Teknik menjahit keliman',
          'Membuat lipit dan kerutan sederhana',
          'Menjahit resleting biasa',
        ],
      },
      {
        title: 'Modul 4: Membuat Pakaian Sederhana',
        weeks: 'Minggu 7-9',
        topics: [
          'Membuat pola dasar rok lurus',
          'Proses menjahit rok lurus langkah demi langkah',
          'Membuat pola dasar blus sederhana',
          'Proses menjahit blus sederhana langkah demi langkah',
          'Finishing dan penyetrikaan pakaian',
        ],
      },
      {
        title: 'Modul 5: Teknik Menjahit Tingkat Lanjut',
        weeks: 'Minggu 10-12',
        topics: [
          'Menjahit resleting jepang',
          'Memasang kerah kemeja dasar',
          'Memasang manset',
          'Membuat saku tempel dan saku bobok',
          'Teknik menjahit dengan kain stretch',
        ],
      },
      {
        title: 'Modul 6: Modifikasi Pola dan Desain',
        weeks: 'Minggu 13-15',
        topics: [
          'Cara membesarkan dan mengecilkan pola',
          'Membuat variasi model rok',
          'Membuat variasi model blus',
          'Mengenal dasar-dasar draping sederhana',
          'Mengembangkan ide desain menjadi pola',
        ],
      },
      {
        title: 'Modul 7: Proyek Menjahit Akhir',
        weeks: 'Minggu 16',
        topics: [
          'Perencanaan proyek menjahit (pemilihan desain dan bahan)',
          'Proses pembuatan pakaian dengan teknik yang telah dipelajari',
          'Presentasi dan evaluasi hasil jahitan',
          'Tips perawatan pakaian hasil jahitan sendiri',
        ],
      },
    ],
    curriculum: [
      'Pengenalan mesin jahit dan peralatan menjahit',
      'Dasar-dasar menjahit manual dan dengan mesin',
      'Membaca dan mengaplikasikan pola',
      'Modifikasi pola dasar',
      'Teknik memotong dan menyiapkan kain',
      'Teknik jahitan dasar (sambungan, kelim, ritsleting)',
      'Pembuatan rok dan celana dasar',
      'Pembuatan blus dan kemeja',
      'Teknik penyelesaian dan finishing profesional',
      'Proyek akhir: Membuat pakaian lengkap',
    ],
    requirements: [
      'Tidak diperlukan pengalaman menjahit sebelumnya',
      'Usia minimal 15 tahun',
      'Kemampuan mengikuti instruksi dengan teliti',
      'Notebook untuk catatan',
      'Kesediaan membeli beberapa bahan untuk proyek pribadi',
    ],
    benefits: [
      'Kemampuan membuat dan memodifikasi pakaian sendiri',
      'Penghematan biaya dengan memperbaiki dan menyesuaikan pakaian',
      'Keterampilan yang bernilai untuk karir di industri fashion',
      'Sertifikat penyelesaian kursus',
      'Pemahaman tentang kualitas pakaian dan konstruksi garmen',
      'Kemampuan mengekspresikan kreativitas melalui fashion',
    ],
    instructors: [
      {
        name: 'Sri Widiani',
        role: 'Instruktur Tata Rias dan Busana',
        bio: 'Lulusan dari Instituto Di Muda Burgo Milan, Italia dan telah berpengalaman mengajar lebih 6 tahun mengajar, termasuk di Paris de La Mode School, Italian Fashion School Jakarta, Instituto di Moda Burgo Jakarta dan lainnya.',
        image: '/img/mentor/widi.jpg',
      },
      {
        name: 'Siska Handayani',
        role: 'Instruktur Henna',
        bio: 'Henna Artist dengan pengalaman lebih dari 3 tahun dan menguasai berbagai jenis Henna, termasuk Henna Putih dan Henna Biru.',
        image: '/img/mentor/siska.jpg',
      },
    ],
    price: {
      regular: 'Rp 6.500.000',
      private: 'Rp 14.000.000',
    },
  },
];

export function DetailProgram() {
  const { program } = useParams<{ program: string }>();
  const [course, setCourse] = useState<CourseDetailProps | null>(null);

  useEffect(() => {
    const foundCourse = coursesData.find(
      (c: CourseType & Partial<CourseDetailProps>) => c.id === program
    );

    if (foundCourse) {
      setCourse(foundCourse as CourseDetailProps);
    } else {
      console.error('Course not found with ID:', program);
    }
  }, [program]);

  if (!course) {
    return <NotFound />;
  }

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="bg-secondary-color text-white py-12">
        <div className="container mx-auto max-w-6xl w-full px-4">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="lg:w-1/2">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                {course.title}
              </h1>
              <p className="text-lg opacity-90 mb-6">{course.description}</p>
              <div className="flex flex-wrap gap-4 mb-6">
                <div className="bg-white/10 px-4 py-2 rounded-full">
                  <span className="text-sm font-medium">
                    Durasi: {course.duration}
                  </span>
                </div>
                <div className="bg-white/10 px-4 py-2 rounded-full">
                  <span className="text-sm font-medium">
                    Level: {course.level}
                  </span>
                </div>
                <div className="bg-main-light text-primary px-4 py-2 rounded-full">
                  <span className="text-sm font-medium">
                    Promo: Diskon {PROMO_DISCOUNT}%!
                  </span>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full object-cover"
                  style={{ height: '300px' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="container mx-auto max-w-6xl w-full px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left Column: Course Details */}
            <div className="lg:w-2/3">
              <Tabs defaultValue="overview" className="w-full">
                <ScrollArea>
                  <div className="relative h-10 w-full">
                    <TabsList className="max-md:absolute h-10 flex gap-2 min-w-0 md:w-full mb-6">
                      <TabsTrigger value="overview">Ringkasan</TabsTrigger>
                      <TabsTrigger value="curriculum">Kurikulum</TabsTrigger>
                      <TabsTrigger value="requirements">
                        Persyaratan
                      </TabsTrigger>
                      <TabsTrigger value="instructor">Pengajar</TabsTrigger>
                    </TabsList>
                  </div>
                  <ScrollBar orientation="horizontal" />
                </ScrollArea>

                {/* Overview Tab */}
                <TabsContent value="overview" className="space-y-6">
                  <div>
                    <h2 className="text-2xl font-bold text-main-color mb-4">
                      Tentang Kursus Ini
                    </h2>
                    <p className="text-gray-600">{course.longDescription}</p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-main-color mb-3">
                      Manfaat Kursus
                    </h3>
                    <ul className="space-y-2">
                      {course.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <span className="text-secondary-color mt-1">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                          </span>
                          <span className="text-gray-600">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-main-color mb-3">
                      Pilihan Kelas
                    </h3>
                    <PriceDisplay
                      regularPrice={course.price.regular}
                      privatePrice={course.price.private}
                      hasPromo={true}
                      promoDiscount={PROMO_DISCOUNT}
                    />
                  </div>
                </TabsContent>

                {/* Curriculum Tab */}
                <TabsContent value="curriculum">
                  <h2 className="text-2xl font-bold text-main-color mb-4">
                    Kurikulum Kursus
                  </h2>
                  <div className="space-y-8">
                    {course.syllabus.map((module, index) => (
                      <div key={index} className="border-b pb-6 last:border-0">
                        <h3 className="text-lg font-semibold mb-2">
                          {module.title}
                        </h3>
                        <p className="text-sm text-gray-500 mb-4">
                          {module.weeks}
                        </p>
                        <ul className="space-y-2">
                          {module.topics.map((topic, i) => (
                            <li key={i} className="flex items-start">
                              <CheckCircle className="h-5 w-5 text-emerald-500 mr-2 flex-shrink-0 mt-0.5" />
                              <span>{topic}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </TabsContent>

                {/* Requirements Tab */}
                <TabsContent value="requirements">
                  <h2 className="text-2xl font-bold text-main-color mb-4">
                    Persyaratan Kursus
                  </h2>
                  <ul className="space-y-2">
                    {course.requirements.map((req, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="text-secondary-color mt-1">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <circle cx="12" cy="12" r="10"></circle>
                            <line x1="12" y1="16" x2="12" y2="12"></line>
                            <line x1="12" y1="8" x2="12.01" y2="8"></line>
                          </svg>
                        </span>
                        <span className="text-gray-600">{req}</span>
                      </li>
                    ))}
                  </ul>
                </TabsContent>

                {/* Instructor Tab */}
                <TabsContent value="instructor">
                  <h2 className="text-2xl font-bold text-main-color mb-4">
                    Pengajar
                  </h2>
                  {course.instructors.map((instructor, index) => (
                    <div
                      key={index}
                      className="flex flex-col md:flex-row gap-6 mb-6"
                    >
                      <Avatar className="size-16">
                        <AvatarImage
                          className="object-cover"
                          src={instructor.image}
                          alt={instructor.name}
                        />
                        <AvatarFallback>
                          {instructor.name.charAt(0)}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="text-xl font-bold mb-2">
                          {instructor.name}
                        </h3>
                        <p className="text-gray-500 mb-3">{instructor.role}</p>
                        <p className="text-gray-600 mb-4">
                          Indah memiliki lebih dari 10 tahun pengalaman dalam
                          industri kecantikan dan tata rias. Dia telah merias
                          berbagai selebriti dan model untuk acara besar, serta
                          memiliki pengalaman mengajar di berbagai institusi
                          terkemuka.
                        </p>
                        <div className="flex space-x-3">
                          <a
                            href="#"
                            className="text-blue-500 hover:text-blue-700"
                          >
                            <span>LinkedIn</span>
                          </a>
                          <a
                            href="#"
                            className="text-pink-500 hover:text-pink-700"
                          >
                            <span>Instagram</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </TabsContent>
              </Tabs>
            </div>

            {/* Right Column: Registration Form */}
            <div className="lg:w-1/3">
              <RegistrationForm
                courseTitle={course.title}
                courseId={course.id}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Related Courses */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto max-w-6xl w-full px-4">
          <h2 className="text-2xl font-bold text-main-color mb-6">
            Kursus Lainnya
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {coursesData
              .filter((c) => c.id !== program)
              .slice(0, 3)
              .map((relatedCourse) => (
                <CourseCard key={relatedCourse.id} course={relatedCourse} />
              ))}
          </div>
        </div>
      </section>
    </div>
  );
}
