import type { Route } from './+types/not-found';
import { DEFAULT_META } from '~/constant/site';
import { NotFound } from '~/components/layout/notfound';

export function meta({}: Route.MetaArgs) {
  return DEFAULT_META;
}

export default function NotFoundPage() {
  return <NotFound />;
}
