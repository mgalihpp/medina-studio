import { type RouteConfig, index, route } from '@react-router/dev/routes';

export default [
  index('routes/home.tsx'),
  route('/tentang-kami', 'routes/tentang-kami.tsx'),
  route('/galeri', 'routes/galeri.tsx'),
  // route('/program-kursus', 'routes/program-kursus.tsx'),
  // route(
  //   '/program-kursus/kelas-reguler',
  //   'routes/program-kursus/kelas-reguler.tsx'
  // ),
  // route(
  //   '/program-kursus/kelas-pendek',
  //   'routes/program-kursus/kelas-pendek.tsx'
  // ),
  // route(
  //   '/program-kursus/kelas-pendek/:slug',
  //   'routes/program-kursus/kelas-pendek/[slug].tsx'
  // ),
  // route(
  //   '/program-kursus/kelas-reguler/:slug',
  //   'routes/program-kursus/kelas-reguler/[slug].tsx'
  // ),
  // route('/berita', 'routes/berita.tsx'),
  // route('/hubungi-kami', 'routes/hubungi-kami.tsx'),
] satisfies RouteConfig;
