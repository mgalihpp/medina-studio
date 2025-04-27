import { Galeri } from '~/features/galeri';
import type { Route } from './+types/galeri';
import { DEFAULT_META } from '~/constant/site';

export function meta({}: Route.MetaArgs) {
  return DEFAULT_META;
}

export default function GaleriPage() {
  return <Galeri />;
}
