import { motion } from 'framer-motion';

const imageVariant = {
  hidden: { opacity: 0, scale: 0.95 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

export function ProgramImage({ activeCourse }: { activeCourse: courses }) {
  return (
    <motion.div
      variants={imageVariant}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="relative h-96"
    >
      <div
        className="relative w-full h-full overflow-hidden rounded-lg shadow-xl"
        style={{
          backgroundImage: `url(${activeCourse.image || '/placeholder.svg'})`,
          backgroundSize: '100% 100%',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          aspectRatio: '16 / 9',
        }}
        role="img"
        aria-label={`${activeCourse.title} - ${activeCourse.subtitle}`}
      >
        {/* Hidden img tag for SEO and accessibility */}
        <img
          src={activeCourse.image || '/placeholder.svg'}
          alt={`${activeCourse.title} - ${activeCourse.subtitle} at Medina Studio`}
          className="absolute opacity-0 w-full h-full"
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
