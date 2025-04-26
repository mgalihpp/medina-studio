import type { MouseEventHandler } from 'react';
import { Link } from 'react-router';
import { cn } from '~/lib/utils';

export function RippleButton({
  children,
  className,
  asLink = false,
  href,
  onClick,
}: {
  children: React.ReactNode;
  className?: string;
  asLink?: boolean;
  href?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}) {
  if (asLink && !href) {
    throw new Error('The "href" prop is required when "asLink" is true.');
  }

  const handleRippleEffect = (
    e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>
  ) => {
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

    // Remove ripple after animation
    ripple.addEventListener('animationend', () => {
      ripple.remove();
    });

    onClick?.(e as unknown as React.MouseEvent<HTMLButtonElement>);
  };

  const commonProps = {
    className: cn(
      'relative px-8 py-3 bg-main-color text-white rounded-md hover:bg-secondary-color transition-colors duration-300 shadow-md overflow-hidden',
      className
    ),
    onClick: handleRippleEffect,
  };

  return asLink ? (
    <Link to={href as string} {...commonProps}>
      {children}
    </Link>
  ) : (
    <button {...commonProps}>{children}</button>
  );
}
