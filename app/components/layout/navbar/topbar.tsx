import { Phone, Mail, MapPin } from 'lucide-react';
import { useLocation } from 'react-router';

export function TopBar() {
  const { pathname } = useLocation();

  if (pathname !== '/') return null;

  return (
    <div className="max-md:hidden w-full bg-main-light text-primary md:px-8 lg:px-16 py-2 flex justify-between items-center text-sm">
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-1 text-xs">
          <Phone className="size-3" />
          +62 812-3456-7890
        </div>
        <a
          href="mailto:info@salonanata.com"
          className="flex items-center gap-1 text-xs"
        >
          <Mail className="size-3" />
          info@salonanata.com
        </a>
        <div className="flex items-center gap-1 text-xs">
          <MapPin className="size-3" />
          Jl. Gardenia Raya RT 002 RW 001, Tangerang 15710 Banten
        </div>
      </div>
      <div className="contact flex items-center gap-4">
        <a
          href="https://instagram.com"
          aria-label="Instagram"
          className="bg-white rounded-full p-1"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-main-color"
          >
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
          </svg>
        </a>
      </div>
    </div>
  );
}
