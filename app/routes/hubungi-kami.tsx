import { Contact } from '~/features/home/components/contact';
import type { Route } from './+types/hubungi-kami';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Medina Studio - Hubungi Kami' },
    {
      name: 'description',
      content:
        'Medina Studio adalah tempat kursus tata rias dan busana profesional yang telah berdiri sejak tahun XXXX.',
    },
  ];
}

export default function HubungiKamiPage() {
  return <Contact />;
}
