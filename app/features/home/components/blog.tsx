import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router';
import { BlogCard } from '~/components/blog-card';
import { BLOG_POSTS } from '~/constant/blog';

export function Blog() {
  return (
    <section id="blog" className="py-16 bg-white">
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
            {BLOG_POSTS.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
