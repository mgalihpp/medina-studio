import { motion } from 'framer-motion';
import { Clock } from 'lucide-react';
import { Link } from 'react-router';
import { RippleButton } from '~/components/ripple-button';

export function CourseCard({ activeCourse }: { activeCourse: courses }) {
  const linkToDetailProgram = `${activeCourse.title
    .toLowerCase()
    .replace(/\s+/g, '-')}`;

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
                decoding="auto"
              />
            </div>
            <div className="p-6">
              <h4 className="text-xl font-semibold mb-2">{course.title}</h4>
              <div className="flex items-center text-sm text-gray-500 mb-4">
                <Clock className="w-4 h-4 mr-2 text-secondary-color" />
                <span>{course.duration}</span>
              </div>
              <Link
                to={`${linkToDetailProgram}/${course.title
                  .toLowerCase()
                  .replace(/\s+/g, '-')}`}
              >
                <RippleButton className="w-full py-2">
                  Detail Program
                </RippleButton>
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
