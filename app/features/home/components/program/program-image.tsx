import { motion } from 'framer-motion';

const imageVariant = {
  hidden: { opacity: 0, scale: 0.95 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

export function ProgramImage({ kelas }: { kelas: Kelas }) {
  return (
    <motion.div
      variants={imageVariant}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="relative h-96 overflow-hidden rounded-lg"
    >
      {/* Hidden img tag for SEO and accessibility */}
      <img
        src={kelas.image || '/placeholder.svg'}
        alt={`${kelas.title} - ${kelas.subtitle} at Medina Studio`}
        className="absolute w-full h-full"
        loading="lazy"
        decoding="async"
        width={1025}
        height={861}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-6">
        <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
          {kelas.title}
        </h3>
        <p className="text-white/90 text-lg">{kelas.subtitle}</p>
      </div>
    </motion.div>
  );
}
