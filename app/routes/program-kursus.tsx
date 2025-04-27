import { ProgramKursus } from '~/features/program-kursus';
import type { Route } from './+types/program-kursus';
import { DEFAULT_META } from '~/constant/site';

export function meta({}: Route.MetaArgs) {
  return DEFAULT_META;
}

export default function ProgramKursusPage() {
  return <ProgramKursus />;
}
