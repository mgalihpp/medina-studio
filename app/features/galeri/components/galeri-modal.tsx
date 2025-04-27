import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '~/components/ui/dialog';
import { useCallback } from 'react';

interface Galeri {
  src: string;
  alt: string;
}

interface GalleryModalProps {
  image: Galeri | null;
  isOpen: boolean;
  onClose: () => void;
}

export function GalleryModal({ image, isOpen, onClose }: GalleryModalProps) {
  const handleOpenChange = useCallback(
    (open: boolean) => {
      if (!open) onClose();
    },
    [onClose]
  );

  if (!image) return null;

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogContent
        className="max-w-5xl max-sm:w-[90vw] p-0 bg-transparent border-none shadow-none ring-0 outline-none"
        hiddenClose
      >
        <DialogHeader className="hidden">
          <DialogTitle>
            <DialogDescription></DialogDescription>
          </DialogTitle>
        </DialogHeader>
        <div className="relative bg-transparent overflow-hidden rounded-lg w-fit">
          <div className="relative max-h-[80dvh] sm:max-h-[90dvh]">
            <img
              src={image.src || '/placeholder.svg'}
              alt={image.alt}
              className="h-full object-contain"
              sizes="100vw"
              loading="lazy"
              decoding="auto"
            />
          </div>

          {/* <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-white/50 backdrop-blur-sm text-gray-800 p-2 px-4 inline-block w-auto max-w-[80%] rounded-t-md">
            <p className="text-base font-medium text-center whitespace-nowrap overflow-hidden text-ellipsis">
              {image.alt}
            </p>
          </div> */}
        </div>
      </DialogContent>
    </Dialog>
  );
}
