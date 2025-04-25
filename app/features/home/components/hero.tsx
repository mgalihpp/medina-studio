import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router';

interface CarouselItem {
  id: number;
  image: string;
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
}

const carouselItems: CarouselItem[] = [
  {
    id: 1,
    image:
      'https://cdn0-production-images-kly.akamaized.net/jRcvvUgZ7fFkb1N0oJrC8ZBf_Vo=/1200x900/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/5001579/original/003005800_1731383526-fungsi-tata-rias-dalam-seni-tari-adalah.jpg',
    title: 'Selamat Datang di Medina Group',
    description:
      'Kami adalah perusahaan yang bergerak di bidang kecantikan dan kesehatan',
    buttonText: 'Lebih lanjut',
    buttonLink: '/tentang-kami/#aboutus',
  },
  {
    id: 2,
    image:
      'https://highlight.id/wp-content/uploads/2020/01/sekolah-lembaga-akademi-pendidikan-program-kursus-kecantikan-beauty-school-indonesia_22-640x384.jpg',
    title: 'Program Kursus',
    description: 'Ikuti program kursus kecantikan dan kesehatan kami',
    buttonText: 'Liat Program',
    buttonLink: '/services',
  },
  {
    id: 3,
    image:
      'https://foto.kontan.co.id/7HlJw0gJYjj2Lm6r_v5wwyRg5lw=/smart/2022/01/13/950070032p.jpg',
    title: 'Promo Terbaru',
    description: 'Liat tawaran dan promo terbaru kami',
    buttonText: 'Lihat tawaran',
    buttonLink: '/promotions',
  },
];

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const totalSlides = carouselItems.length;

  const goToSlide = useCallback(
    (index: number) => {
      if (isAnimating) return;

      setIsAnimating(true);
      setCurrentSlide(index);

      setTimeout(() => {
        setIsAnimating(false);
      }, 500); // Match this with the CSS transition duration
    },
    [isAnimating]
  );

  const nextSlide = useCallback(() => {
    const newIndex = (currentSlide + 1) % totalSlides;
    goToSlide(newIndex);
  }, [currentSlide, totalSlides, goToSlide]);

  const prevSlide = useCallback(() => {
    const newIndex = (currentSlide - 1 + totalSlides) % totalSlides;
    goToSlide(newIndex);
  }, [currentSlide, totalSlides, goToSlide]);

  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <div className="relative w-full h-[500px] md:h-[calc(100dvh-132px)] overflow-hidden">
      {/* Carousel slides */}
      <div className="relative w-full h-full">
        {carouselItems.map((item, index) => (
          <div
            key={item.id}
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ease-in-out ${
              index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            {/* Background image */}
            <div className="absolute inset-0">
              <img
                src={item.image || '/placeholder.svg'}
                alt={item.title}
                className="object-cover w-full h-full"
                loading="lazy"
                decoding="async"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
            </div>

            {/* Content */}
            <div className="relative z-20 flex flex-col justify-center h-full max-w-screen-lg mx-auto px-4 md:px-8">
              <div className="max-w-lg text-white">
                <h1
                  className={`text-2xl sm:text-3xl md:text-5xl font-bold mb-4 transform transition-all duration-700 delay-100 ${
                    index === currentSlide
                      ? 'translate-y-0 opacity-100'
                      : 'translate-y-10 opacity-0'
                  }`}
                >
                  {item.title}
                </h1>
                <p
                  className={`text-lg md:text-xl mb-6 transform transition-all duration-700 delay-200 ${
                    index === currentSlide
                      ? 'translate-y-0 opacity-100'
                      : 'translate-y-10 opacity-0'
                  }`}
                >
                  {item.description}
                </p>
                <Link
                  to={item.buttonLink}
                  className={`group relative inline-flex items-center border border-white text-white bg-transparent px-6 py-3 rounded-full font-medium hover:bg-white hover:text-primary transition-all duration-200 transform ease-in-out ${
                    index === currentSlide
                      ? 'translate-y-0 opacity-100 delay-300'
                      : 'translate-y-10 opacity-0'
                  }`}
                >
                  {/* TEXT */}
                  <span className="transition-all duration-200 group-hover:mr-4 ease-in-out">
                    {item.buttonText}
                  </span>

                  {/* ICON */}
                  <ChevronRight className="w-0 overflow-hidden group-hover:w-6 group-hover:opacity-100 translate-x-[-8px] group-hover:translate-x-0 transition-all duration-200 ease-in-out" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation arrows */}
      <button
        onClick={prevSlide}
        className="max-sm:hidden absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 rounded-full p-2 backdrop-blur-sm transition-all duration-300 text-white"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="max-sm:hidden absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 rounded-full p-2 backdrop-blur-sm transition-all duration-300 text-white"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
        {carouselItems.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-white w-8' : 'bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
