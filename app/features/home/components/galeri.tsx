import { useState, useRef } from 'react';
import { motion, type PanInfo } from 'framer-motion';
import { ChevronLeft, ChevronRight, ArrowUpRight } from 'lucide-react';
import { useIsMobile } from '~/hooks/useMobile';

// Data untuk carousel di bagian atas
const carouselItems = [
  {
    id: 1,
    title: 'Tata Rias Pengantin',
    description:
      'Koleksi hasil karya siswa kami dalam tata rias pengantin tradisional dan modern yang elegan.',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_y_08xUl9e9Mq0W_uT9v1o4R5tTkWnM0FRQ&s',
    link: '/galeri/wedding',
  },
  {
    id: 2,
    title: 'Makeup Artistry',
    description:
      'Eksplorasi kreativitas makeup artistry untuk berbagai kesempatan dari natural hingga bold look.',
    image:
      'https://media.amway.id/sys-master/images/hd4/hda/10731172659230/5_317620_Artistry%20New%20Brush%20Set_amway-WF_Product_1000Wx1000H',
    link: '/galeri/makeup',
  },
  {
    id: 3,
    title: 'Hair Styling',
    description:
      'Berbagai teknik dan gaya penataan rambut yang trendy dan sesuai dengan berbagai acara.',
    image:
      'https://hips.hearstapps.com/hmg-prod/images/person-styling-hair-royalty-free-image-1608056805.',
    link: '/galeri/hair',
  },
  {
    id: 4,
    title: 'Beauty Class',
    description:
      'Suasana belajar yang menyenangkan dalam kelas-kelas yang kami selenggarakan.',
    image:
      'https://umsida.ac.id/wp-content/uploads/2024/01/DSC00698-1-1024x580-1.jpg',
    link: '/galeri/class',
  },
];

// Data untuk featured item di bagian bawah (full width)
const featuredItem = {
  title: 'Medina Bridal Collection',
  description:
    'Koleksi tata rias pengantin eksklusif yang menggabungkan elemen tradisional dan modern untuk tampilan yang elegan dan timeless.',
  image:
    'https://awsimages.detik.net.id/community/media/visual/2023/07/22/potret-salon-kecantikan-di-afghanistan-yang-dilarang-taliban-2.jpeg?w=600&q=90',
  link: '/collection/bridal',
};

export function Galeri() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();

  // Jumlah item yang ditampilkan per slide
  const itemsPerSlide = isMobile ? 1 : 2;

  // Total slide yang tersedia
  const totalSlides = carouselItems.length - (itemsPerSlide - 1);

  // Fungsi untuk navigasi carousel
  const nextSlide = () => {
    if (currentIndex < totalSlides - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      setCurrentIndex(totalSlides - 1);
    }
  };

  // Fungsi untuk menangani akhir drag
  const handleDragEnd = (
    event: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) => {
    setIsDragging(false);

    if (carouselRef.current) {
      const threshold = 100; // pixel

      if (Math.abs(info.offset.x) > threshold) {
        if (info.offset.x > 0 && currentIndex > 0) {
          // Drag ke kanan, pindah ke slide sebelumnya
          setCurrentIndex(currentIndex - 1);
        } else if (info.offset.x < 0 && currentIndex < totalSlides - 1) {
          // Drag ke kiri, pindah ke slide berikutnya
          setCurrentIndex(currentIndex + 1);
        }
      }
    }
  };
  return (
    <section id="galeri" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Galeri
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Jelajahi kegiatan dari Medina Studio yang menampilkan keindahan
              seni tata rias
            </p>
          </motion.div>

          {/* Top Carousel */}
          <div className="relative mb-8">
            {/* Carousel Container */}
            <motion.div
              ref={carouselRef}
              className="overflow-hidden"
              whileTap={{ cursor: 'grabbing' }}
            >
              <motion.div
                className="flex gap-6"
                animate={{
                  x: `-${currentIndex * (100 / itemsPerSlide)}%`,
                }}
                transition={{
                  type: 'spring',
                  stiffness: 300,
                  damping: 30,
                  duration: 0.5,
                }}
                drag="x"
                dragConstraints={{
                  right: 0,
                  left: -(
                    (carouselItems.length - itemsPerSlide) *
                      (100 / itemsPerSlide) +
                    '%'
                  ),
                }}
                dragElastic={0.1}
                onDragStart={() => setIsDragging(true)}
                onDragEnd={handleDragEnd}
                whileTap={{ cursor: 'grabbing' }}
              >
                {carouselItems.map((item, index) => (
                  <motion.div
                    key={item.id}
                    className="max-sm:min-w-full min-w-[calc(50%-12px)] md:min-w-[calc(50%-12px)] relative rounded-xl overflow-hidden shadow-lg group"
                    transition={{ duration: 0.3 }}
                  >
                    <div className="relative h-[300px] w-full">
                      <img
                        src={item.image || '/placeholder.svg'}
                        alt={item.title}
                        className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                        decoding="async"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                      <div className="absolute bottom-0 left-0 p-6 text-white max-w-full">
                        <h3 className="text-2xl font-semibold mb-2">
                          {item.title}
                        </h3>
                        <p className="text-white/80 line-clamp-2">
                          {item.description}
                        </p>
                      </div>
                      {/* <a
                        href={item.link}
                        className="absolute bottom-6 right-6 w-12 h-12 bg-main-color rounded-full flex items-center justify-center transition-transform duration-300"
                      >
                        <ArrowUpRight className="h-5 w-5 text-white group-hover:rotate-[45deg] transition-transform ease-in-out duration-300" />
                      </a> */}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/20 hover:bg-white/30 rounded-full p-2 backdrop-blur-sm transition-all duration-300 text-white shadow-lg"
              aria-label="Previous slide"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/20 hover:bg-white/30 rounded-full p-2 backdrop-blur-sm transition-all duration-300 text-white shadow-lg"
              aria-label="Next slide"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            {/* Indicators */}
            <div className="flex justify-center mt-4 space-x-2">
              {Array.from({ length: totalSlides }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'bg-secondary-color w-8'
                      : 'bg-secondary-color/30'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Featured Item (Full Width) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative rounded-xl overflow-hidden shadow-lg group"
          >
            <div className="relative h-[250px] md:h-[500px] w-full">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/R8kAyTsXg3w?si=XdpBI9hYEJW0xgKR"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
              {/* <img
                src={featuredItem.image || '/placeholder.svg'}
                alt={featuredItem.title}
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
              <div className="absolute bottom-0 left-0 p-8 text-white max-w-2xl">
                <h3 className="text-2xl sm:text-3xl font-semibold mb-3">
                  {featuredItem.title}
                </h3>
                <p className="text-white/80 sm:text-lg mb-6 text-sm">
                  {featuredItem.description}
                </p>
              </div>
              <a
                href={featuredItem.link}
                className="absolute bottom-8 right-8 w-14 h-14 bg-main-color rounded-full flex items-center justify-center transition-transform duration-300"
              >
                <ArrowUpRight className="h-6 w-6 text-white group-hover:rotate-45 transition-transform duration-300" />
              </a> */}
            </div>
          </motion.div>

          {/* View All Button */}
          <div className="text-center mt-10">
            <a
              href="/galeri"
              className="inline-block px-8 py-3 border-2 border-secondary-color text-secondary-color font-medium rounded-md hover:bg-secondary-color hover:text-white transition-colors duration-300"
            >
              Lihat Semua Galeri
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
