import { useState } from 'react';
import { motion } from 'framer-motion';
import { CourseTab } from '~/components/course-tab';
import { courseTypes } from '~/constant/couse';
import { ProgramContent } from './program/program-content';
import { ProgramImage } from './program/program-image';

const containerVariant = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariant = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function Program() {
  const [activeTab, setActiveTab] = useState('reguler');
  const activeCourse = courseTypes.find((course) => course.id === activeTab);

  return (
    <section id="program" className="py-16 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            variants={itemVariant}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="section-subtitle">Program Kursus</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Pilih program kursus yang sesuai dengan kebutuhan dan tujuan karir
              Anda di bidang tata rias
            </p>
          </motion.div>

          {/* Tabs */}
          <motion.div
            className="flex justify-center mb-12 border-b border-gray-200"
            variants={containerVariant}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {courseTypes.map((course) => (
              <motion.div key={course.id} variants={itemVariant}>
                <CourseTab
                  title={course.title}
                  active={activeTab === course.id}
                  onClick={() => setActiveTab(course.id)}
                />
              </motion.div>
            ))}
          </motion.div>

          {/* Content */}
          {activeCourse && (
            <motion.div
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-sm:items-center mb-16"
              variants={containerVariant}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <ProgramImage activeCourse={activeCourse} />
              <ProgramContent activeCourse={activeCourse} />
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
