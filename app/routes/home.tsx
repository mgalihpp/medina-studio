import { Home } from '~/features/home';
import type { Route } from './+types/home';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Medina Studio - Kursus Tata Rias & Busana Profesional' },
    {
      name: 'description',
      content:
        'Medina Studio adalah tempat kursus tata rias dan busana profesional yang telah berdiri sejak tahun XXXX.',
    },
  ];
}

export default function HomePage() {
  return <Home />;
}
