export const TIPE_KELAS: Kelas[] = [
  {
    id: 'reguler',
    title: 'Kelas Reguler',
    subtitle: 'Full-Time',
    description:
      'Kelas dengan kurikulum terstruktur dan jangka waktu lebih panjang agar peserta mendapatkan pemahaman mendalam mengenai teori, aplikasi dan tradisi di balik tata rias pengantin tradisional dan modern.',
    image: '/img/ngajar/ngajar1.jpg',
    duration: '3-6 bulan',
    schedule: '3x pertemuan per minggu',
    students: '8-12 peserta per kelas',
    features: [
      'Kurikulum lengkap dan terstruktur',
      'Praktik intensif dengan model',
      'Materi teori dan aplikasi mendalam',
      'Sertifikat resmi kelulusan',
      'Kesempatan magang di industri',
    ],
  },
  {
    id: 'pendek',
    title: 'Kelas Pendek',
    subtitle: 'Privat',
    description:
      'Kelas dengan jangka waktu lebih pendek dan materi yang terfokus sesuai dengan kebutuhan peserta. Ideal untuk yang ingin mempelajari keterampilan spesifik atau memiliki keterbatasan waktu.',
    image:
      'https://assets.promediateknologi.id/crop/0x0:0x0/0x0/webp/photo/p2/47/2023/09/28/Relawan-Ganjar-beauty0-261277755.jpg',
    duration: '1-4 minggu',
    schedule: 'Fleksibel',
    students: '1-4 peserta per kelas',
    features: [
      'Materi disesuaikan kebutuhan',
      'Jadwal fleksibel',
      'Fokus pada keterampilan spesifik',
      'Bimbingan personal intensif',
      'Sertifikat kehadiran',
    ],
  },
];

export const PROGRAM_KURSUS: Course[] = [
  {
    title: 'Tata Rias Pengantin',
    duration: '6 bulan',
    schedule: '3x pertemuan per minggu (Senin, Rabu, Jumat)',
    price: 'Rp 12.500.000',
    description:
      'Pelajari teknik tata rias pengantin modern dan tradisional dari ahli kami.',
    image:
      'https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//catalog-image/95/MTA-104176209/brd-21979_viva-pidih-hitam-rias-pengantin-tradisional-9g-viva-pideh-lotho-tata-rias-pengantin-tradisional-9gr_full02.jpg',
    instructors: [
      {
        name: 'Siti Rahayu',
        role: 'Pengajar Senior Tata Rias',
        image: '/img/mentor/widi.jpg',
      },
      {
        name: 'Dewi Kartika',
        role: 'Pakar Busana Tradisional',
        image: '/img/mentor/siska.jpg',
      },
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
    facilities: [
      'Studio rias profesional dengan pencahayaan standar industri',
      'Alat dan bahan makeup premium',
      'Koleksi busana tradisional lengkap',
      'Akses ke perpustakaan referensi tata rias tradisional',
      'Sesi foto profesional untuk portofolio',
    ],
    benefits: [
      'Sertifikat profesi yang diakui secara nasional',
      'Kesempatan magang di vendor pernikahan terkemuka',
      'Jaringan dengan profesional industri',
      'Bimbingan karir dan peluang kerja',
      'Akses seumur hidup ke kelas penyegaran',
    ],
  },
  {
    title: 'Desain Busana',
    duration: '6 bulan',
    schedule: '3x pertemuan per minggu (Senin, Rabu, Jumat)',
    price: 'Rp 12.500.000',
    description:
      'Belajar desain busana dari dasar hingga mahir dengan pengajar profesional.',
    image:
      'https://mommiesdaily.com/wp-content/uploads/2023/07/asian-tailor-woman-working-clothes-tailoring-atelier.jpg',
    instructors: [
      {
        name: 'Siti Rahayu',
        role: 'Pengajar Senior Tata Rias',
        image: '/img/mentor/widi.jpg',
      },
      {
        name: 'Dewi Kartika',
        role: 'Pakar Busana Tradisional',
        image: '/img/mentor/siska.jpg',
      },
    ],
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
    facilities: [
      'Studio rias profesional dengan pencahayaan standar industri',
      'Alat dan bahan makeup premium',
      'Koleksi busana tradisional lengkap',
      'Akses ke perpustakaan referensi tata rias tradisional',
      'Sesi foto profesional untuk portofolio',
    ],
    benefits: [
      'Sertifikat profesi yang diakui secara nasional',
      'Kesempatan magang di vendor pernikahan terkemuka',
      'Jaringan dengan profesional industri',
      'Bimbingan karir dan peluang kerja',
      'Akses seumur hidup ke kelas penyegaran',
    ],
  },
  {
    title: 'Henna Art',
    duration: '6 bulan',
    schedule: '3x pertemuan per minggu (Senin, Rabu, Jumat)',
    price: 'Rp 12.500.000',
    description:
      'Kuasai seni menghias tangan dan tubuh dengan henna, mulai dari teknik dasar hingga desain yang lebih rumit dan artistik.',
    image:
      'https://i.pinimg.com/736x/61/df/97/61df9726d304f6cfda45a8499fbf823a.jpg',
    instructors: [
      {
        name: 'Siti Rahayu',
        role: 'Pengajar Senior Tata Rias',
        image: '/img/mentor/widi.jpg',
      },
      {
        name: 'Dewi Kartika',
        role: 'Pakar Busana Tradisional',
        image: '/img/mentor/siska.jpg',
      },
    ],
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
    facilities: [
      'Studio rias profesional dengan pencahayaan standar industri',
      'Alat dan bahan makeup premium',
      'Koleksi busana tradisional lengkap',
      'Akses ke perpustakaan referensi tata rias tradisional',
      'Sesi foto profesional untuk portofolio',
    ],
    benefits: [
      'Sertifikat profesi yang diakui secara nasional',
      'Kesempatan magang di vendor pernikahan terkemuka',
      'Jaringan dengan profesional industri',
      'Bimbingan karir dan peluang kerja',
      'Akses seumur hidup ke kelas penyegaran',
    ],
  },
  {
    title: 'Menjahit',
    duration: '6 bulan',
    schedule: '3x pertemuan per minggu (Senin, Rabu, Jumat)',
    price: 'Rp 12.500.000',
    description:
      'Kami akan membahas berbagai teknik menjahit, serta tips dan trik dalam membuat pakaian yang indah dan berkualitas.',
    image:
      'https://cdn1-production-images-kly.akamaized.net/IPD56eznAQRXmPj04MWMbI4ssOQ=/1200x675/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/3106008/original/011455000_1587227623-sewing-machine-4966931_960_720.jpg',
    instructors: [
      {
        name: 'Siti Rahayu',
        role: 'Pengajar Senior Tata Rias',
        image: '/img/mentor/widi.jpg',
      },
      {
        name: 'Dewi Kartika',
        role: 'Pakar Busana Tradisional',
        image: '/img/mentor/siska.jpg',
      },
    ],
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
    facilities: [
      'Studio rias profesional dengan pencahayaan standar industri',
      'Alat dan bahan makeup premium',
      'Koleksi busana tradisional lengkap',
      'Akses ke perpustakaan referensi tata rias tradisional',
      'Sesi foto profesional untuk portofolio',
    ],
    benefits: [
      'Sertifikat profesi yang diakui secara nasional',
      'Kesempatan magang di vendor pernikahan terkemuka',
      'Jaringan dengan profesional industri',
      'Bimbingan karir dan peluang kerja',
      'Akses seumur hidup ke kelas penyegaran',
    ],
  },
];
