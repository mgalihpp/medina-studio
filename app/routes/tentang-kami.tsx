import { DEFAULT_META } from '~/constant/site';
import type { Route } from './+types/home';
import { TentangKami } from '~/features/tentang-kami';

export function meta({}: Route.MetaArgs) {
  return DEFAULT_META;
}

export default function TentangKamiPage() {
  return <TentangKami />;
}
