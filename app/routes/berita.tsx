import { Berita } from '~/features/berita';
import type { Route } from './+types/berita';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Medina Studio - Berita' },
    {
      name: 'description',
      content:
        'Medina Studio adalah tempat kursus tata rias dan busana profesional yang telah berdiri sejak tahun XXXX.',
    },
  ];
}

export default function BeritaPage() {
  return <Berita />;
}
