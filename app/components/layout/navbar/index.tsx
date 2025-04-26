import { Menu, Search, X } from 'lucide-react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router';
import { TopBar } from './topbar';
import { useScroll } from '~/hooks/useScroll';
import { cn } from '~/lib/utils';
import { NAVIGATION } from '~/constant/navigation';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isScrolling = useScroll();
  const { pathname } = useLocation();

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
            {NAVIGATION.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  'uppercase text-sm font-medium transition-all duration-300 ease-in-out hover:text-main-color border-b-2 border-transparent hover:border-secondary-color pb-1',
                  {
                    'text-main-colo border-secondary-color':
                      item.href === pathname,
                  }
                )}
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
            className={`absolute left-0 right-0 bg-white shadow-md z-50 lg:hidden transition-all duration-300 ease-in-out overflow-hidden ${
              isMenuOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
            } ${isScrolling ? 'top-[60px]' : 'top-[92px]'}`}
          >
            <div className="flex flex-col p-4">
              {NAVIGATION.map((item) => (
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
