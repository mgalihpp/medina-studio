import { motion } from 'framer-motion';
import { Clock, CalendarDays, Users, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router';
import { RippleButton } from '~/components/ripple-button';

export function ProgramContent({ activeCourse }: { activeCourse: courses }) {
  const navigate = useNavigate();

  const handleLebihDetailClick = () => {
    navigate('/program-kursus');
  };
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="space-y-6"
    >
      <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
        {activeCourse.description}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-4">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
            <Clock className="h-5 w-5 text-secondary-color" />
          </div>
          <div>
            <p className="text-sm text-gray-500">Durasi</p>
            <p className="font-medium text-xs">{activeCourse.duration}</p>
          </div>
        </div>
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
            <CalendarDays className="h-5 w-5 text-secondary-color" />
          </div>
          <div>
            <p className="text-sm text-gray-500">Jadwal</p>
            <p className="font-medium text-xs">{activeCourse.schedule}</p>
          </div>
        </div>
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
            <Users className="h-5 w-5 text-secondary-color" />
          </div>
          <div>
            <p className="text-sm text-gray-500">Kapasitas</p>
            <p className="font-medium text-xs">{activeCourse.students}</p>
          </div>
        </div>
      </div>

      <div>
        <h4 className="sm:text-lg font-semibold mb-3">Fitur Program:</h4>
        <ul className="space-y-2">
          {activeCourse.features.map((feature, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
              className="flex items-center"
            >
              <ChevronRight className="h-5 w-5 text-secondary-color mr-2 flex-shrink-0" />
              <span className="text-sm">{feature}</span>
            </motion.li>
          ))}
        </ul>
      </div>

      <div className="pt-4">
        <RippleButton onClick={handleLebihDetailClick}>
          Lebih Detail
        </RippleButton>
      </div>
    </motion.div>
  );
}
