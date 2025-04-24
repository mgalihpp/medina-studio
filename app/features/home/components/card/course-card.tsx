import { motion } from 'framer-motion';
import { Clock } from 'lucide-react';

export function CourseCard({ activeCourse }: { activeCourse: courses }) {
  return (
    <div>
      <h3 className="section-title text-center mb-12">
        Program {activeCourse?.title} yang Tersedia
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {activeCourse?.courses.map((course, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
          >
            <div className="relative h-48 w-full overflow-hidden">
              <img
                src={course.image || '/placeholder.svg'}
                alt={course.title}
                className="object-cover w-full h-full"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="p-6">
              <h4 className="text-xl font-semibold mb-2">{course.title}</h4>
              <div className="flex items-center text-sm text-gray-500 mb-4">
                <Clock className="w-4 h-4 mr-2 text-secondary-color" />
                <span>{course.duration}</span>
              </div>
              <button className="w-full py-2 bg-secondary-color text-white rounded hover:bg-secondary-color/90 transition-colors duration-300">
                Detail Program
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
