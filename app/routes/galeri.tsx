import { Galeri } from '~/features/galeri';
import type { Route } from './+types/galeri';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Medina Studio - Galeri' },
    {
      name: 'description',
      content:
        'Galeri foto dan video dari kursus tata rias dan busana profesional di Medina Studio.',
    },
  ];
}

export default function GaleriPage() {
  return <Galeri />;
}
