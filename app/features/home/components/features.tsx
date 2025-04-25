import { motion, useAnimation, useInView } from 'framer-motion';
import { Award, BookOpen, School, GraduationCap } from 'lucide-react';
import { useRef, useEffect, useState } from 'react';

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export function Features() {
  const features = [
    {
      icon: <GraduationCap className="w-8 h-8 text-gray-900" />,
      title: 'Pengajar Berpengalaman',
      description:
        'Dipandu oleh instruktur profesional yang sudah berpengalaman luas di industri kecantikan dan fashion.',
    },
    {
      icon: <BookOpen className="w-8 h-8 text-gray-900" />,
      title: 'Kurikulum Terstruktur',
      description:
        'Materi pembelajaran yang terstruktur dan selalu diupdate mengikuti tren terbaru dalam dunia kecantikan dan fashion.',
    },
    {
      icon: <School className="w-8 h-8 text-gray-900" />,
      title: 'Fasilitas Lengkap',
      description:
        'Dilengkapi dengan studio rias, ruang praktik, dan peralatan modern untuk mendukung proses belajar Anda.',
    },
    {
      icon: <Award className="w-8 h-8 text-gray-900" />,
      title: 'Sertifikat Resmi',
      description:
        'Dapatkan sertifikat resmi yang diakui industri setelah menyelesaikan program kursus.',
    },
  ];

  return (
    <section id="features" className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2 className="section-subtitle" variants={childVariants}>
            KEUNGGULAN KAMI
          </motion.h2>
          <motion.h3 className="section-title" variants={childVariants}>
            Mengapa Memilih Medina Studio?
          </motion.h3>
          <motion.p className="text-gray-600 mt-4" variants={childVariants}>
            Kami memiliki berbagai keunggulan yang membuat Medina Studio menjadi
            tempat terbaik untuk belajar tata rias dan busana.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const FeatureCard = ({ icon, title, description, delay }: FeatureCardProps) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [controls, isInView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.6,
            delay: delay * 0.2,
            ease: [0.22, 1, 0.36, 1],
          },
        },
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-500 p-6 border border-gray-100  overflow-hidden relative"
    >
      {/* Background pattern */}
      <div className="absolute -right-12 -bottom-12 w-40 h-40 bg-main-color/5 rounded-full group-hover:scale-150 transition-transform duration-700 ease-out"></div>

      {/* Icon with animated background */}
      <div className="relative z-10 mb-6">
        <div className="w-16 h-16 flex items-center justify-center rounded-full bg-main-color/10 group-hover:bg-secondary-color/30 transition-colors duration-300">
          <motion.div
            animate={isHovered ? { rotate: 5, scale: 1.1 } : {}}
            initial={{ rotate: 0, scale: 1 }}
            transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            className="text-main-color"
          >
            {icon}
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <h3 className="text-xl font-semibold mb-3 text-gray-900 group-hover:text-main-color transition-colors duration-300">
        {title}
      </h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>

      {/* Animated line */}
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: '30%' }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="h-0.5 bg-main-color/30 mt-5"
      />
    </motion.div>
  );
};
