import { useState } from 'react';
import { motion } from 'framer-motion';
import { CourseTab } from '~/components/course-tab';
import { courseTypes } from '~/constant/couse';
import { ProgramContent } from './program/program-content';
import { ProgramImage } from './program/program-image';

export function Program() {
  const [activeTab, setActiveTab] = useState('regular');

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
              <ProgramImage activeCourse={activeCourse} />

              {/* Right side - Content */}
              <ProgramContent activeCourse={activeCourse} />
            </div>
          )}

          {/* Course Cards */}
          {/* <CourseCard activeCourse={activeCourse!} /> */}
        </div>
      </div>
    </section>
  );
}
