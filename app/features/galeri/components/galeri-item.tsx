import { memo, useState, useEffect, useRef } from 'react';

interface GalleryItemProps {
  image: Galeri;
  onClick: (id: number) => void;
}

export const GalleryItem = memo(function GalleryItem({
  image,
  onClick,
}: GalleryItemProps) {
  const imgRef = useRef<HTMLImageElement>(null);
  const [aspectRatio, setAspectRatio] = useState<number | null>(null);

  useEffect(() => {
    const img = imgRef.current;
    if (img && img.complete) {
      // kalau gambarnya sudah load
      setAspectRatio(img.naturalWidth / img.naturalHeight);
    }
  }, []);

  const handleImageLoad = () => {
    const img = imgRef.current;
    if (img) {
      setAspectRatio(img.naturalWidth / img.naturalHeight);
    }
  };

  return (
    <div
      className="relative rounded-xl overflow-hidden cursor-pointer"
      onClick={() => onClick(image.id)}
      style={aspectRatio ? { aspectRatio: `${aspectRatio}` } : undefined}
    >
      <div className="group relative w-full h-full">
        <img
          ref={imgRef}
          src={image.src || '/placeholder.svg'}
          alt={image.alt}
          className="w-full h-full transition-transform group-hover:scale-105 duration-300 ease-in-out will-change-transform"
          loading="lazy"
          decoding="async"
          onLoad={handleImageLoad}
        />
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
      </div>
    </div>
  );
});

GalleryItem.displayName = 'GalleryItem';
