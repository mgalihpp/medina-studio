import { useState, useCallback } from 'react';
import { RippleButton } from '~/components/ripple-button';
import { GALLERY_IMAGES } from '~/constant/galeri';
import { GalleryItem } from './components/galeri-item';
import { GalleryModal } from './components/galeri-modal';
import { SectionHeader } from '~/components/layout/header';

interface GaleriProps {
  label?: string;
  images?: Galeri[];
  title?: string;
  description?: string;
  initialImagesToShow?: number;
}

export function Galeri({
  label = 'Galeri',
  images = GALLERY_IMAGES,
  title = 'Foto Galeri Kami',
  description = 'Jelajahi koleksi foto kami yang menampilkan keindahan tata rias, busana, serta program kursus unggulan.',
  initialImagesToShow = 10,
}: GaleriProps) {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [currentImage, setCurrentImage] = useState<Galeri | null>(null);
  const [showMore, setShowMore] = useState(false);

  // Memoize these functions to prevent unnecessary re-renders
  const handleImageClick = useCallback((id: number) => {
    setSelectedImage(id);
    setCurrentImage(images.find((img) => img.id === id) || null);
  }, []);

  const handleCloseModal = useCallback(() => {
    setSelectedImage(null);
    setCurrentImage(null);
  }, []);

  const handleShowMore = useCallback(() => {
    setShowMore(true);
  }, []);

  // Calculate these values only when dependencies change
  const displayedImages = showMore
    ? images
    : images.slice(0, initialImagesToShow);

  return (
    <div className="container mx-auto px-4 py-16 max-w-6xl">
      <SectionHeader label={label} title={title} description={description} />

      <div className="columns-4 gap-4">
        {displayedImages.map((image) => (
          <div key={image.id} className="mb-4 break-inside-avoid">
            <GalleryItem image={image} onClick={handleImageClick} />
          </div>
        ))}
      </div>

      {!showMore && images.length > initialImagesToShow && (
        <div className="flex justify-center mt-8">
          <RippleButton onClick={handleShowMore}>
            Tampilkan Lebih Banyak
          </RippleButton>
        </div>
      )}

      <GalleryModal
        image={currentImage!}
        isOpen={selectedImage !== null}
        onClose={handleCloseModal}
      />
    </div>
  );
}
