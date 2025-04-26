import { motion } from 'framer-motion';

export const CourseTab = ({ active, title, onClick }: CourseTabProps) => (
  <button
    onClick={onClick}
    className={`relative px-6 py-3 sm:text-lg font-medium transition-all duration-300 ${
      active ? 'text-secondary-color' : 'text-gray-500 hover:text-gray-700'
    }`}
  >
    {title}
    {active && (
      <motion.div
        layoutId="activeTab"
        className="absolute bottom-0 left-0 right-0 h-0.5 bg-secondary-color"
        initial={false}
        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
      />
    )}
  </button>
);
