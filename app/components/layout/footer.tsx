import { ArrowUp, Instagram, Linkedin } from 'lucide-react';
import { Link } from 'react-router';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-main-color text-white py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Company Info */}
        <div className="mb-16 w-full flex flex-col sm:flex-row gap-8 sm:gap-0 max-sm:items-center justify-between">
          <div className="flex flex-col gap-2">
            <div className="relative overflow-hidden w-24 h-24 rounded-full mb-4">
              <img
                src="logo.png"
                alt="Logo Medina Group"
                className="object-cover h-full w-full"
                loading="lazy"
                decoding="async"
              />
            </div>
            <p className="max-w-2xl">
              Kami adalah tempat kursus tata rias dan busana profesional yang
              berkomitmen untuk membantu Anda meraih impian di dunia kecantikan.
            </p>
          </div>
          <button
            onClick={scrollToTop}
            className="w-20 h-20 rounded-full border-2 border-white flex items-center justify-center hover:bg-main-color hover:scale-105 group transition-all duration-300 ease-in-out"
            aria-label="Back to top"
          >
            <ArrowUp
              size={24}
              className="group-hover:scale-[175%] transition-transform duration-300 ease-in-out"
            />
          </button>
        </div>

        {/* Footer Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {/* Information Column */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Informasi</h3>
            <ul className="space-y-2 text-sm font-normal">
              <li>
                <Link to="/faq" className="hover:underline">
                  FAQ's
                </Link>
              </li>
              <li>
                <Link to="/terms" className="hover:underline">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="hover:underline">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Get To Known us Column */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Kenali Kami</h3>
            <ul className="space-y-2 text-sm font-normal">
              <li>
                <Link to="/about" className="hover:underline">
                  Tentang kami
                </Link>
              </li>
              <li>
                <Link to="/news" className="hover:underline">
                  Berita & Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Our Brand Column */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Program kursus</h3>
            <ul className="space-y-2 text-sm font-normal">
              <li>
                <a href="#" className="hover:underline">
                  Kelas Reguler
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Kelas Pendek
                </a>
              </li>
            </ul>
          </div>

          {/* Get In Touch Column */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Hubungi kami</h3>
            <ul className="space-y-2 text-sm font-normal">
              <li>
                <a href="mailto:cs@medinagroup.id" className="hover:underline">
                  cs@medinagroup.id
                </a>
              </li>
              <li>
                <a href="tel:+6285121045083" className="hover:underline">
                  +62-851-2104-5083
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-white/20 pt-8">
          <p className="text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Medina Group. All Rights Reserved.
          </p>

          {/* Social Media & Back to Top */}
          <div className="flex items-center space-x-4">
            <div className="flex space-x-4 mr-8">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white/80"
              >
                <Instagram size={24} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white/80"
              >
                <Linkedin size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
