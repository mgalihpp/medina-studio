import { DetailProgram } from '~/features/detail-program';
import type { Route } from './+types/detail-program';
import { DEFAULT_META } from '~/constant/site';

export function meta({ params }: Route.MetaArgs) {
  return DEFAULT_META;
}

export default function DetailProgramPage() {
  return <DetailProgram />;
}
