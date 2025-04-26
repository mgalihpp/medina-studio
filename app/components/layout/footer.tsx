import { ArrowUp, Instagram, Linkedin } from 'lucide-react';
import { Link } from 'react-router';
import { FOOTER_INFO, FOOTER_NAVIGATION } from '~/constant/footer';

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
                src="/logo.png"
                alt="Logo Medina Group"
                className="object-cover h-full w-full"
                loading="lazy"
                decoding="async"
              />
            </div>
            <p className="max-w-2xl sm:text-base text-sm">{FOOTER_INFO}</p>
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
          {FOOTER_NAVIGATION.map((footerNav) => (
            <div key={footerNav.label}>
              <h3 className="text-xl font-semibold mb-4">{footerNav.label}</h3>
              <ul className="space-y-2 text-sm font-normal">
                {footerNav.items.map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.href}
                      className="hover:underline sm:text-base text-sm"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* <div>
            <h3 className="text-xl font-semibold mb-4">Kenali Kami</h3>
            <ul className="space-y-2 text-sm font-normal">
              <li>
                <Link
                  to="/about"
                  className="hover:underline sm:text-base text-sm"
                >
                  Tentang kami
                </Link>
              </li>
              <li>
                <Link
                  to="/news"
                  className="hover:underline sm:text-base text-sm"
                >
                  Berita & Blog
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Program kursus</h3>
            <ul className="space-y-2 text-sm font-normal">
              <li>
                <a href="#" className="hover:underline sm:text-base text-sm">
                  Kelas Reguler
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline sm:text-base text-sm">
                  Kelas Pendek
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Hubungi kami</h3>
            <ul className="space-y-2 text-sm font-normal">
              <li>
                <a
                  href="mailto:cs@medinagroup.id"
                  className="hover:underline sm:text-base text-sm"
                >
                  cs@medinagroup.id
                </a>
              </li>
              <li>
                <a
                  href="tel:+6285121045083"
                  className="hover:underline sm:text-base text-sm"
                >
                  +62-851-2104-5083
                </a>
              </li>
            </ul>
          </div> */}
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-white/20 pt-8">
          <p className="sm:text-base text-sm mb-4 md:mb-0">
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
