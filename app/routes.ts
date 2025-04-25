import { type RouteConfig, index, route } from '@react-router/dev/routes';

export default [
  index('routes/home.tsx'),
  route('/tentang-kami', 'routes/tentang-kami.tsx'),
] satisfies RouteConfig;
