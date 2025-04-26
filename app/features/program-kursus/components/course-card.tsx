import { Card } from '~/components/ui/card';
import { Clock } from 'lucide-react';
import { Link } from 'react-router';

interface CourseCardProps {
  title: string;
  duration: string;
  image?: string;
}

export function CourseCard({ title, duration, image }: CourseCardProps) {
  return (
    <Link
      to="/program/1"
      className="block group transform transition-all duration-300 hover:-translate-y-1"
    >
      <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg bg-white">
        <div
          className="h-48 bg-cover bg-center bg-purple-100 transition-transform duration-300 group-hover:scale-105"
          style={{
            backgroundImage: image ? `url(${image})` : 'none',
          }}
        />
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-4 group-hover:text-purple-600 transition-colors">
            {title}
          </h3>
          <div className="flex items-center gap-2 text-gray-600">
            <Clock className="w-4 h-4" />
            <span>{duration}</span>
          </div>
        </div>
      </Card>
    </Link>
  );
}
