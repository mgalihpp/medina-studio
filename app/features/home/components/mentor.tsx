import { MENTORS } from '~/constant/mentor';
import { MentorCard } from './card/mentor-card';
import { motion } from 'framer-motion'; // << Tambahkan ini

export function Mentor() {
  return (
    <section
      id="mentor"
      className="py-16 bg-gradient-to-b from-white to-main-light"
    >
      <div className="container mx-auto px-4">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-subtitle">Pengajar Kami</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Belajar dari tim pengajar yang berpengalaman di bidang kecantikan
            dan tata rias
          </p>
        </motion.div>

        {/* Mentor Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: { transition: { staggerChildren: 0.2 } },
          }}
        >
          {MENTORS.map((mentor, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              <MentorCard mentor={mentor} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
