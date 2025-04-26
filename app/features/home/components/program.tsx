import { useState } from 'react';
import { motion } from 'framer-motion';
import { Clock, Users, CalendarDays, ChevronRight } from 'lucide-react';
import { CourseCard } from './card/course-card';
import { RippleButton } from '~/components/ripple-button';
import { useNavigate } from 'react-router';
import { CourseTab } from '~/components/course-tab';
import { courseTypes } from '~/constant/couse';

export function Program() {
  const [activeTab, setActiveTab] = useState('regular');
  const navigate = useNavigate();

  const handleLebihDetailClick = () => {
    navigate('/program-kursus');
  };

  const activeCourse = courseTypes.find((course) => course.id === activeTab);

  return (
    <section id="program" className="py-16 bg-white">
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
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-sm:items-center mb-16">
              {/* Left side - Image */}
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
                  <h4 className="sm:text-lg font-semibold mb-3">
                    Fitur Program:
                  </h4>
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
            </div>
          )}

          {/* Course Cards */}
          {/* <CourseCard activeCourse={activeCourse!} /> */}
        </div>
      </div>
    </section>
  );
}
