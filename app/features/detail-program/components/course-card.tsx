import { Link } from 'react-router';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '~/components/ui/card';
import { Button } from '~/components/ui/button';
import { RippleButton } from '~/components/ripple-button';
import { motion } from 'framer-motion';
import { Clock } from 'lucide-react';

export type CourseType = {
  id: string;
  title: string;
  description: string;
  image: string;
  duration: string;
  level: string;
};

interface CourseCardProps {
  course: CourseType;
}

export function CourseCard({ course }: CourseCardProps) {
  return (
    <motion.div
      key={course.id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
    >
      <div className="relative h-48 w-full overflow-hidden">
        <img
          src={course.image || '/placeholder.svg'}
          alt={course.title}
          loading="lazy"
          decoding="async"
          width={800}
          height={500}
          className="w-full object-cover h-full"
        />
      </div>
      <div className="p-6">
        <h4 className="text-xl font-semibold mb-2 line-clamp-1">
          {course.title}
        </h4>
        <p className="line-clamp-2 mb-2 text-gray-600">{course.description}</p>
        <div className="flex items-center text-sm text-gray-500 mb-4">
          <Clock className="w-4 h-4 mr-2 text-secondary-color" />
          <span>{course.duration}</span>
        </div>
        <Link
          to={`/program-kursus/${course.title
            .toLowerCase()
            .replace(/\s+/g, '-')}`}
        >
          <RippleButton className="w-full py-2">Detail Program</RippleButton>
        </Link>
      </div>
    </motion.div>
  );
}
