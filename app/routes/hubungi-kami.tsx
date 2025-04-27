import { Contact } from '~/features/home/components/contact';
import type { Route } from './+types/hubungi-kami';
import { DEFAULT_META } from '~/constant/site';

export function meta({}: Route.MetaArgs) {
  return DEFAULT_META;
}

export default function HubungiKamiPage() {
  return <Contact />;
}
