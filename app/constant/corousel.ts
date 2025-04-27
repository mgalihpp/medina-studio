interface CarouselItem {
  id: number;
  image: string;
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
}

export const COROUSEL_ITEMS: CarouselItem[] = [
  {
    id: 1,
    image:
      'https://cdn0-production-images-kly.akamaized.net/jRcvvUgZ7fFkb1N0oJrC8ZBf_Vo=/1200x900/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/5001579/original/003005800_1731383526-fungsi-tata-rias-dalam-seni-tari-adalah.jpg',
    title: 'Medina Group',
    description:
      'Kami adalah tempat kursus tata rias dan busana profesional yang telah berdiri sejak tahun 2017',
    buttonText: 'Lebih lanjut',
    buttonLink: '/tentang-kami/#aboutus',
  },
  {
    id: 2,
    image:
      'https://highlight.id/wp-content/uploads/2020/01/sekolah-lembaga-akademi-pendidikan-program-kursus-kecantikan-beauty-school-indonesia_22-640x384.jpg',
    title: 'Program Kursus',
    description: 'Ikuti program kursus tata rias dan busana kami',
    buttonText: 'Lihat Program',
    buttonLink: '/program-kursus',
  },
  {
    id: 3,
    image:
      'https://foto.kontan.co.id/7HlJw0gJYjj2Lm6r_v5wwyRg5lw=/smart/2022/01/13/950070032p.jpg',
    title: 'Promo Terbaru',
    description: 'Lihat tawaran dan promo terbaru kami',
    buttonText: 'Lihat tawaran',
    buttonLink: '/blog',
  },
];
