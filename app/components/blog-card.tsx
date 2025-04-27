import { useState } from 'react';
import { motion } from 'framer-motion';

import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router';

export function BlogCard({ post }: { post: Blog }) {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  return (
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
        <p className="text-gray-600 mb-4 line-clamp-2 text-sm">
          {post.excerpt}
        </p>
        <Link
          to={`/blog/${post.slug}`}
          className="inline-flex items-center gap-2 px-6 py-2 bg-main-color text-white rounded-full hover:bg-secondary-color transition-colors duration-300 group"
        >
          <span>Read more</span>
          <ArrowUpRight className="h-4 w-4 group-hover:rotate-[45deg] transition-transform duration-300 ease-in-out" />
        </Link>
      </div>
    </motion.div>
  );
}
