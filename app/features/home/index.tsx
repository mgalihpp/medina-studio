import { AboutUs } from './components/about-us';
import { Blog } from './components/blog';
import { Contact } from './components/contact';
import { Faq } from './components/faq';
import { Features } from './components/features';
import { Galeri } from './components/galeri';
import { Hero } from './components/hero';
import { Mentor } from './components/mentor';
import { Program } from './components/program';

export function Home() {
  return (
    <>
      <Hero />
      <AboutUs />
      <Features />
      <Program />
      <Mentor />
      <Galeri />
      <Blog />
      <Faq />
      <Contact />
    </>
  );
}
