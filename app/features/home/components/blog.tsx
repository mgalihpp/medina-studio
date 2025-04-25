import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router';

// Data blog posts
const blogPosts = [
  {
    id: 1,
    title: '5 Hal Yang Pantang Dilakukan Wanita 7 Hari Sebelum Pernikahan',
    excerpt:
      'Berbagai pantangan yang harus diperhatikan calon pengantin wanita satu minggu sebelum menjelang hari pernikahan.',
    image: 'https://sanggarliza.co.id/apps/assets/images/blog/post-5.jpg',
    slug: 'serba-serbi-tentang-kerutan',
  },
  {
    id: 2,
    title: 'Persiapan Mental Dahulu Nikah Kemudian.',
    excerpt:
      'Mempersiapkan pernikahan memang selalu challenging untuk dilakukan, bahkan beberapa pasangan menyebut fase ini sebagai fase',
    image: 'https://sanggarliza.co.id/apps/assets/images/blog/post-2.jpg',
    slug: 'alasan-kenapa-skin-barrier-harus-dirawat',
  },
  {
    id: 3,
    title: 'Konsep Pernikahan Happy Saat Pandemi',
    excerpt:
      'Hands up dong untuk calon manten yang harus rombak konsep pernikahan karena adanya pandemi ini. Tenang kamu engga sendiri. Beberapa pasangan harus me-reschedule bahkan menunda pernikahannya karena hal yan',
    image: 'https://sanggarliza.co.id/apps/assets/images/blog/post-1.jpg',
    slug: 'ss-akan-buka-store-di-jakarta',
  },
];

export function Blog() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="flex justify-between items-end mb-10">
            <div>
              <p className="section-subtitle">Berita & Blog</p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-gray-900">
                <span className="text-main-color">Berita & Blog</span> Terbaru
                Kami
              </h2>
            </div>
            <Link
              to="/blog"
              className="hidden sm:flex items-center gap-2 px-6 py-3 bg-main-color text-white rounded-full hover:bg-secondary-color/90 transition-colors duration-300"
            >
              <span>Lihat Semua</span>
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <motion.div
                key={post.id}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: post.id * 0.1 }}
                viewport={{ once: true }}
                onMouseEnter={() => setHoveredCard(post.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Image */}
                <div className="relative h-56 w-full overflow-hidden">
                  <img
                    src={post.image || '/placeholder.svg?height=300&width=400'}
                    alt={post.title}
                    className={`object-cover h-full w-full transition-transform duration-700 ${
                      hoveredCard === post.id ? 'scale-110' : 'scale-100'
                    }`}
                    loading="lazy"
                    decoding="async"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <Link
                    to={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-2 px-6 py-2 bg-main-color text-white rounded-full hover:bg-secondary-color transition-colors duration-300"
                  >
                    <span>Read more</span>
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
