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
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const img = imgRef.current;
    if (img && img.complete) {
      setAspectRatio(img.naturalWidth / img.naturalHeight);
      setIsLoaded(true);
    }
  }, []);

  const handleImageLoad = () => {
    const img = imgRef.current;
    if (img) {
      setAspectRatio(img.naturalWidth / img.naturalHeight);
      setIsLoaded(true);
    }
  };

  return (
    <div
      className="relative rounded-xl overflow-hidden cursor-pointer"
      onClick={() => onClick(image.id)}
      style={aspectRatio ? { aspectRatio: `${aspectRatio}` } : undefined}
    >
      <div className="group relative w-full h-full">
        {/* SKELETON */}
        {!isLoaded && (
          <div className="absolute inset-0 bg-gray-200 animate-pulse" />
        )}

        {/* IMAGE */}
        <img
          ref={imgRef}
          src={image.src || '/placeholder.svg'}
          alt={image.alt}
          className={`w-full h-full transition-transform group-hover:scale-105 duration-300 ease-in-out will-change-transform ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          loading="eager"
          decoding="auto"
          onLoad={handleImageLoad}
        />

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
      </div>
    </div>
  );
});

GalleryItem.displayName = 'GalleryItem';
