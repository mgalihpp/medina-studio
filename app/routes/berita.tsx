import { Berita } from '~/features/berita';
import type { Route } from './+types/berita';
import { DEFAULT_META } from '~/constant/site';

export function meta({}: Route.MetaArgs) {
  return DEFAULT_META;
}

export default function BeritaPage() {
  return <Berita />;
}
