import { useState } from 'react';
import { motion } from 'framer-motion';
import { Clock, Users, CalendarDays, ChevronRight } from 'lucide-react';
import { CourseCard } from './card/course-card';
import { RippleButton } from '~/components/ripple-button';

const CourseTab = ({ active, title, onClick }: CourseTabProps) => (
  <button
    onClick={onClick}
    className={`relative px-6 py-3 text-lg font-medium transition-all duration-300 ${
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

export function Program() {
  const [activeTab, setActiveTab] = useState('regular');

  const courseTypes: courses[] = [
    {
      id: 'regular',
      title: 'Kelas Reguler',
      subtitle: 'Full-Time',
      description:
        'Kelas dengan kurikulum terstruktur dan jangka waktu lebih panjang agar peserta mendapatkan pemahaman mendalam mengenai teori, aplikasi dan tradisi di balik tata rias pengantin tradisional dan modern.',
      image: '/ngajar1.jpg',
      duration: '3-6 bulan',
      schedule: '3x pertemuan per minggu',
      students: '8-12 peserta per kelas',
      features: [
        'Kurikulum lengkap dan terstruktur',
        'Praktik intensif dengan model',
        'Materi teori dan aplikasi mendalam',
        'Sertifikat resmi kelulusan',
        'Kesempatan magang di industri',
      ],
      courses: [
        {
          title: 'Tata Rias Pengantin Tradisional',
          image:
            'https://c.superprof.com/i/a/24287274/11117794/600/20221222101024/instruktur-yang-mengajarkan-tata-rias-pengantin-tradisional-dan-modern-mengajarkan-detail-dari-dasar-hingga-mahir-pengalaman-mengajar.jpg',
          duration: '6 bulan',
        },
        {
          title: 'Tata Rias Pengantin Modern',
          image:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLdrGUCs5Fmm-_g5hNeyJqjRJep4-EaDQ0bw&s',
          duration: '4 bulan',
        },
        {
          title: 'Makeup Artistry Profesional',
          image:
            'https://glints.com/id/lowongan/wp-content/uploads/2023/04/beautiful-woman-face-hand-make-up.jpg',
          duration: '3 bulan',
        },
      ],
    },
    {
      id: 'private',
      title: 'Kelas Pendek',
      subtitle: 'Privat',
      description:
        'Kelas dengan jangka waktu lebih pendek dan materi yang terfokus sesuai dengan kebutuhan peserta. Ideal untuk yang ingin mempelajari keterampilan spesifik atau memiliki keterbatasan waktu.',
      image:
        'https://assets.promediateknologi.id/crop/0x0:0x0/0x0/webp/photo/p2/47/2023/09/28/Relawan-Ganjar-beauty0-261277755.jpg',
      duration: '1-4 minggu',
      schedule: 'Fleksibel',
      students: '1-4 peserta per kelas',
      features: [
        'Materi disesuaikan kebutuhan',
        'Jadwal fleksibel',
        'Fokus pada keterampilan spesifik',
        'Bimbingan personal intensif',
        'Sertifikat kehadiran',
      ],
      courses: [
        {
          title: 'Basic Makeup Class',
          image:
            'https://i.pinimg.com/736x/f5/d4/26/f5d426b83d3fe93ca52c9a792ae1e1ec.jpg',
          duration: '1 minggu',
        },
        {
          title: 'Wedding Makeup Intensif',
          image:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ92o3tNklSKcOMj4kLeBinAmlIVRVU7lKyNg&s',
          duration: '2 minggu',
        },
        {
          title: 'Hair Styling Spesialis',
          image:
            'https://images.squarespace-cdn.com/content/v1/634656f4a9fabf53c7813703/1723013103804-ARCU0Z29OYAQJQRZ812S/styling+rambut+terdekat.jpg',
          duration: '2 minggu',
        },
      ],
    },
  ];

  const activeCourse = courseTypes.find((course) => course.id === activeTab);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="section-subtitle">Program Kursus</h2>
            {/* <div className="w-24 h-1 bg-secondary-color mx-auto mb-4"></div> */}

            <p className="text-gray-600 max-w-2xl mx-auto">
              Pilih program kursus yang sesuai dengan kebutuhan dan tujuan karir
              Anda di bidang tata rias
            </p>
          </motion.div>

          {/* Tabs */}
          <div className="flex justify-center mb-12 border-b border-gray-200">
            {courseTypes.map((course) => (
              <CourseTab
                key={course.id}
                title={course.title}
                active={activeTab === course.id}
                onClick={() => setActiveTab(course.id)}
              />
            ))}
          </div>

          {activeCourse && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              {/* Left side - Image */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="relative"
              >
                <div className="relative w-full overflow-hidden rounded-lg shadow-xl">
                  <img
                    src={activeCourse.image || '/placeholder.svg'}
                    alt={`${activeCourse.title} - Medina Studio`}
                    className="object-cover h-[400px] w-full"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-6">
                    <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                      {activeCourse.title}
                    </h3>
                    <p className="text-white/90 text-lg">
                      {activeCourse.subtitle}
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Right side - Content */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="space-y-6"
              >
                <p className="text-gray-700 leading-relaxed">
                  {activeCourse.description}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                      <Clock className="h-5 w-5 text-secondary-color" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Durasi</p>
                      <p className="font-medium text-xs">
                        {activeCourse.duration}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                      <CalendarDays className="h-5 w-5 text-secondary-color" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Jadwal</p>
                      <p className="font-medium text-xs">
                        {activeCourse.schedule}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                      <Users className="h-5 w-5 text-secondary-color" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Kapasitas</p>
                      <p className="font-medium text-xs">
                        {activeCourse.students}
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold mb-3">Fitur Program:</h4>
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
                        <span>{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4">
                  <RippleButton>Daftar Sekarang</RippleButton>
                </div>
              </motion.div>
            </div>
          )}

          {/* Course Cards */}
          <CourseCard activeCourse={activeCourse!} />
        </div>
      </div>
    </section>
  );
}
