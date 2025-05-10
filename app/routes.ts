import {
  type RouteConfig,
  index,
  prefix,
  route,
} from '@react-router/dev/routes';

export default [
  index('routes/home.tsx'),
  route('/tentang-kami', 'routes/tentang-kami.tsx'),
  route('/galeri', 'routes/galeri.tsx'),

  ...prefix('/program-kursus', [
    index('routes/program-kursus.tsx'),
    route(':program', 'routes/detail-program.tsx'),
  ]),
  route('/blog', 'routes/berita.tsx'),
  route('/hubungi-kami', 'routes/hubungi-kami.tsx'),
  route('/*', 'routes/not-found.tsx'),
] satisfies RouteConfig;
