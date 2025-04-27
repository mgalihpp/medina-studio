import { Home } from '~/features/home';
import type { Route } from './+types/home';
import { DEFAULT_META } from '~/constant/site';

export function meta({}: Route.MetaArgs) {
  return DEFAULT_META;
}

export default function HomePage() {
  return <Home />;
}
