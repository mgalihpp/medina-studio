import { cn } from '~/lib/utils';

export function RippleButton({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <button
      className={cn(
        'relative px-8 py-3 bg-main-color text-white rounded-md hover:bg-secondary-color transition-colors duration-300 shadow-md overflow-hidden',
        className
      )}
      onClick={(e) => {
        // Fungsi untuk membuat efek ripple
        const button = e.currentTarget;
        const ripple = document.createElement('span');
        const diameter = Math.max(button.clientWidth, button.clientHeight);
        const radius = diameter / 2;

        ripple.style.width = ripple.style.height = `${diameter}px`;
        ripple.style.left = `${
          e.clientX - button.getBoundingClientRect().left - radius
        }px`;
        ripple.style.top = `${
          e.clientY - button.getBoundingClientRect().top - radius
        }px`;
        ripple.classList.add('ripple');

        button.appendChild(ripple);

        // Hapus ripple setelah animasi selesai
        setTimeout(() => {
          ripple.remove();
        }, 600);
      }}
    >
      {children}
    </button>
  );
}
