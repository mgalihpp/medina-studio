import { memo } from 'react';

interface GalleryItemProps {
  image: Galeri;
  onClick: (id: number) => void;
}

// Using memo to prevent unnecessary re-renders when other gallery items change
export const GalleryItem = memo(function GalleryItem({
  image,
  onClick,
}: GalleryItemProps) {
  return (
    <div
      className={`relative rounded-xl overflow-hidden cursor-pointer ${
        image.size === 'wide'
          ? 'col-span-2 md:col-span-4'
          : image.size === 'large'
          ? 'col-span-2'
          : ''
      }`}
      onClick={() => onClick(image.id)}
    >
      <div className="group relative">
        <img
          src={image.src || '/placeholder.svg'}
          alt={image.alt}
          width={image.size === 'wide' ? 1200 : 600}
          height={350}
          className="w-full h-[350px] object-cover transition-transform group-hover:scale-105 duration-300 ease-in-out will-change-transform"
          loading="lazy"
          decoding="async"
        />
        {/* Optional overlay for better hover effect */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
      </div>
    </div>
  );
});

GalleryItem.displayName = 'GalleryItem';
