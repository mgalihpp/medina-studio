import { motion } from 'framer-motion';
import { Clock, CalendarDays, Users, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router';
import { RippleButton } from '~/components/ripple-button';

const itemVariant = {
  hidden: { opacity: 0, x: 20 },
  show: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, delay: i * 0.1 },
  }),
};

export function ProgramContent({ kelas }: { kelas: Kelas }) {
  const navigate = useNavigate();

  const handleLebihDetailClick = () => {
    navigate('/program-kursus#program-kursus');
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="space-y-6"
    >
      <motion.p
        variants={itemVariant}
        custom={0}
        className="text-gray-700 leading-relaxed text-sm sm:text-base"
      >
        {kelas.description}
      </motion.p>

      <motion.div
        variants={itemVariant}
        custom={1}
        className="grid grid-cols-1 md:grid-cols-3 gap-4 py-4"
      >
        {/* Info Items */}
        {[
          { icon: <Clock />, label: 'Durasi', value: kelas.duration },
          {
            icon: <CalendarDays />,
            label: 'Jadwal',
            value: kelas.schedule,
          },
          { icon: <Users />, label: 'Kapasitas', value: kelas.students },
        ].map((item, idx) => (
          <div key={idx} className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
              {item.icon}
            </div>
            <div>
              <p className="text-sm text-gray-500">{item.label}</p>
              <p className="font-medium text-xs">{item.value}</p>
            </div>
          </div>
        ))}
      </motion.div>

      <motion.div variants={itemVariant} custom={2}>
        <h4 className="sm:text-lg font-semibold mb-3">Fitur Program:</h4>
        <ul className="space-y-2">
          {kelas.features.map((feature, index) => (
            <motion.li
              key={index}
              variants={itemVariant}
              custom={3 + index}
              className="flex items-center"
            >
              <ChevronRight className="h-5 w-5 text-secondary-color mr-2 flex-shrink-0" />
              <span className="text-sm">{feature}</span>
            </motion.li>
          ))}
        </ul>
      </motion.div>

      <motion.div variants={itemVariant} custom={5}>
        <RippleButton onClick={handleLebihDetailClick}>
          Lebih Detail
        </RippleButton>
      </motion.div>
    </motion.div>
  );
}
