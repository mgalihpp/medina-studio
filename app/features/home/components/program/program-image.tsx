import { motion } from 'framer-motion';

export function ProgramImage({ activeCourse }: { activeCourse: courses }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="relative h-96"
    >
      <div className="relative w-full h-full overflow-hidden rounded-lg shadow-xl">
        <img
          src={activeCourse.image || '/placeholder.svg'}
          alt={`${activeCourse.title} - Medina Studio`}
          className="object-cover h-full w-full"
          loading="lazy"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-6">
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
            {activeCourse.title}
          </h3>
          <p className="text-white/90 text-lg">{activeCourse.subtitle}</p>
        </div>
      </div>
    </motion.div>
  );
}
