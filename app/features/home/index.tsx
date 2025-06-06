import { Pengajar } from '~/components/pengajar';
import { AboutUs } from './components/about-us';
import { Blog } from './components/blog';
import { Contact } from './components/contact';
import { Faq } from '~/components/faq';
import { Features } from './components/features';
import { Galeri } from './components/galeri';
import { Hero } from './components/hero';
import { Program } from './components/program';
import { Promo } from '~/components/promo';

export function Home() {
  return (
    <>
      <Hero />
      <AboutUs />
      <Features />
      <Program />
      <Promo />
      <Pengajar />
      <Galeri />
      <Blog />
      <Faq />
      <Contact />
    </>
  );
}
