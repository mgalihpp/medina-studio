import { Menu, Search, X, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router';
import { TopBar } from './topbar';
import { useScroll } from '~/hooks/useScroll';
import { cn } from '~/lib/utils';
import { NAVIGATION } from '~/constant/navigation';

// Submenu untuk Program Kursus dengan deskripsi
const PROGRAM_SUBMENU = [
  {
    name: 'Tata Rias Pengantin',
    href: '/program-kursus/tata-rias-pengantin',
    description:
      'Pelajari teknik tata rias pengantin modern dan tradisional dari ahli kami.',
  },
  {
    name: 'Desain Busana',
    href: '/program-kursus/desain-busana',
    description:
      'Belajar desain busana dari dasar hingga mahir dengan pengajar profesional.',
  },
  {
    name: 'Henna Art',
    href: '/program-kursus/henna-art',
    description:
      'Kuasai seni menghias tangan dan tubuh dengan henna, mulai dari teknik dasar hingga desain yang lebih rumit dan artistik.',
  },
  {
    name: 'Menjahit',
    href: '/program-kursus/menjahit',
    description:
      'Kami akan membahas berbagai teknik menjahit, serta tips dan trik dalam membuat pakaian yang indah dan berkualitas.',
  },
];

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false); // State untuk submenu
  const isScrolling = useScroll();
  const { pathname } = useLocation();

  return (
    <>
      {/* Top bar */}
      <TopBar />

      <header
        className={`w-full sticky top-0 z-50 bg-white ${
          isScrolling || pathname !== '/' ? 'shadow-md' : ''
        } transition-all duration-300 ease-in-out`}
      >
        {/* Main navigation */}
        <nav
          className={`max-w-7xl mx-auto w-full px-4 sm:px-16 ${
            isScrolling || pathname !== '/' ? 'py-0' : 'py-4'
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
            className="lg:hidden relative w-8 h-8"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            <span
              className={`absolute inset-0 transition-opacity duration-300 ease-in-out ${
                isMenuOpen ? 'opacity-0 scale-90' : 'opacity-100 scale-100'
              }`}
            >
              <Menu className="w-full h-full" />
            </span>
            <span
              className={`absolute inset-0 transition-opacity duration-300 ease-in-out ${
                isMenuOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
              }`}
            >
              <X className="w-full h-full" />
            </span>
          </button>

          {/* Desktop navigation */}
          <div className="hidden lg:flex items-center gap-6">
            {NAVIGATION.map((item) => {
              if (item.name === 'Program Kursus') {
                return (
                  <div
                    key={item.name}
                    className="relative group"
                    onClick={() => setIsSubmenuOpen((prev) => !prev)}
                  >
                    <div className="flex items-center gap-1 cursor-pointer">
                      {/* <Link
                        to={item.href}
                        className={cn(
                          'uppercase text-sm font-medium transition-all duration-300 ease-in-out hover:text-main-color border-b-2 border-transparent hover:border-secondary-color pb-1',
                          {
                            'text-main-color border-secondary-color':
                              item.href === pathname,
                          }
                        )}
                      >
                        {item.name}
                      </Link> */}
                      <span className="uppercase text-sm font-medium pb-1">
                        {item.name}
                      </span>
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-300 ${
                          isSubmenuOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </div>

                    {/* Dropdown untuk desktop */}
                    <div
                      className={`absolute right-1/2 translate-x-1/2 z-10 mt-6 min-w-xl w-full bg-white text-primary rounded-lg shadow-lg transition-all duration-300 ease-in-out ${
                        isSubmenuOpen
                          ? 'opacity-100 max-h-[400px]'
                          : 'opacity-0 max-h-0 pointer-events-none'
                      }`}
                    >
                      <div className="p-4 grid grid-cols-2">
                        {PROGRAM_SUBMENU.map((subItem) => (
                          <Link
                            key={subItem.name}
                            to={subItem.href}
                            className="block py-2 px-3 rounded-md hover:bg-main-light/90 transition-colors duration-200 group"
                          >
                            <p className="text-base font-medium">
                              {subItem.name}
                            </p>
                            <p className="text-sm text-gray-500 group-hover:text-secondary-color">
                              {subItem.description}
                            </p>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={cn(
                    'uppercase text-sm font-medium transition-all duration-300 ease-in-out hover:text-main-color border-b-2 border-transparent hover:border-secondary-color pb-1',
                    {
                      'text-main-color border-secondary-color':
                        item.href === pathname,
                    }
                  )}
                >
                  {item.name}
                </Link>
              );
            })}

            <button
              aria-label="Search"
              className="transition-transform duration-300 ease-in-out hover:scale-110"
            >
              <Search className="h-5 w-5" />
            </button>
          </div>

          {/* Mobile navigation */}
          <div
            className={`absolute left-0 right-0 bg-white shadow-md z-50 lg:hidden transition-all duration-300 ease-in-out overflow-hidden ${
              isMenuOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
            } ${isScrolling || pathname !== '/' ? 'top-[60px]' : 'top-[92px]'}`}
          >
            <div className="flex flex-col p-4">
              {NAVIGATION.map((item) => {
                if (item.name === 'Program Kursus') {
                  return (
                    <div key={item.name}>
                      <div
                        className="flex items-center justify-between py-2 uppercase text-sm font-medium cursor-pointer"
                        onClick={() => setIsSubmenuOpen((prev) => !prev)}
                      >
                        <span>{item.name}</span>
                        <ChevronDown
                          className={`w-4 h-4 transition-transform duration-300 ${
                            isSubmenuOpen ? 'rotate-180' : ''
                          }`}
                        />
                      </div>

                      {/* Submenu untuk mobile */}
                      <div
                        className={`flex flex-col pl-4 transition-all duration-300 ease-in-out ${
                          isSubmenuOpen ? 'max-h-[400px]' : 'max-h-0'
                        } overflow-hidden`}
                      >
                        {PROGRAM_SUBMENU.map((subItem) => (
                          <Link
                            key={subItem.name}
                            to={subItem.href}
                            className="py-2 text-sm text-gray-700 hover:text-gray-600 transition-colors duration-200"
                            onClick={() => {
                              setIsMenuOpen(false);
                              setIsSubmenuOpen(false);
                            }}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  );
                }

                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="py-2 uppercase text-sm font-medium transition-colors duration-200 hover:text-gray-600"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                );
              })}

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
