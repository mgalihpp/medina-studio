import { DetailProgram } from '~/features/detail-program';
import type { Route } from './+types/detail-program';

export function meta({ params }: Route.MetaArgs) {
  console.log('params', params);

  return [
    { title: 'Medina Studio - Detail Program' },
    {
      name: 'description',
      content:
        'Temukan berbagai program kursus berkualitas di Medina Studio untuk meningkatkan keterampilan Anda.',
    },
  ];
}

export default function DetailProgramPage() {
  return <DetailProgram />;
}
