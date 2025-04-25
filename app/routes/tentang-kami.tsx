import type { Route } from './+types/home';
import { TentangKami } from '~/features/tentang-kami';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Medina Studio - Tentang Kami' },
    {
      name: 'description',
      content:
        'Kursus Tata Rias dan Busana Berkualitas dan Terjangkau di Tangerang',
    },
  ];
}

export default function TentangKamiPage() {
  return <TentangKami />;
}
