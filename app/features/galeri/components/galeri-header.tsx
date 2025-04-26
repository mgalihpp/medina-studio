interface GalleryHeaderProps {
  title: string;
  description: string;
}

export function GalleryHeader({ title, description }: GalleryHeaderProps) {
  return (
    <div className="text-center mb-12">
      <div className="inline-block bg-main-light text-secondary-color px-4 py-1 rounded-full text-sm font-medium mb-4">
        Galeri
      </div>
      <h1 className="text-4xl font-bold mb-4">{title}</h1>
      <p className="text-gray-600 max-w-2xl mx-auto mb-4">{description}</p>
    </div>
  );
}
