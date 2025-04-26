import { ProgramKursus } from '~/features/program-kursus';
import type { Route } from './+types/program-kursus';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Medina Studio - Program Kursus' },
    {
      name: 'description',
      content:
        'Temukan berbagai program kursus berkualitas di Medina Studio untuk meningkatkan keterampilan Anda.',
    },
  ];
}

export default function ProgramKursusPage() {
  return <ProgramKursus />;
}
