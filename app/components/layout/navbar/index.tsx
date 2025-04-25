import { Search } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router';
import { TopBar } from './topbar';
import { useScroll } from '~/hooks/useScroll';

const navigation = [
  {
    name: 'Home',
    href: '/',
  },
  {
    name: 'Tentang Kami',
    href: '/tentang-kami',
  },
  {
    name: 'Program Kursus',
    href: '/program-kursus',
  },
  {
    name: 'Galeri dan Update',
    href: '/galeri-update',
  },
  {
    name: 'Info & Promo',
    href: '/info-promo',
  },
  {
    name: 'Hubungi Kami',
    href: '/hubungi-kami',
  },
];

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isScrolling = useScroll();

  return (
    <>
      {/* Top bar */}

      <TopBar />

      <header
        className={`w-full sticky top-0 z-50 bg-white ${
          isScrolling ? 'shadow-md' : ''
        } transition-all duration-300 ease-in-out`}
      >
        {/* Main navigation */}
        <nav
          className={`max-w-7xl mx-auto w-full px-4 sm:px-16 ${
            isScrolling ? 'py-0' : 'py-4'
          } flex justify-between items-center`}
        >
          <div className="logo">
            <Link
              to="/"
              className="block transition-transform duration-300 ease-in-out hover:scale-105"
            >
              <img
                src="/logo.png"
                alt="Medina Studio Logo"
                width={60}
                className="h-15 w-auto"
                loading="lazy"
                decoding="async"
              />
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden transition-transform duration-300 ease-in-out hover:scale-110"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={`transition-transform duration-300 ease-in-out ${
                isMenuOpen ? 'rotate-90' : ''
              }`}
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </button>

          {/* Desktop navigation */}
          <div className="hidden lg:flex items-center gap-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="uppercase text-sm font-medium transition-all duration-300 ease-in-out hover:text-main-color border-b-2 border-transparent hover:border-secondary-color pb-1"
              >
                {item.name}
              </Link>
            ))}

            <button
              aria-label="Search"
              className="transition-transform duration-300 ease-in-out hover:scale-110"
            >
              <Search className="h-5 w-5" />
            </button>
          </div>

          {/* Mobile navigation */}
          <div
            className={`absolute top-[60px] left-0 right-0 bg-white shadow-md z-50 md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
              isMenuOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <div className="flex flex-col p-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="py-2 uppercase text-sm font-medium transition-colors duration-200 hover:text-gray-600"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}

              <button className="flex items-center gap-2 py-2 uppercase text-sm font-medium transition-colors duration-200 hover:text-gray-600">
                <Search className="h-4 w-4" />
                Search
              </button>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
