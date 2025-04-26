import { useState } from 'react';
import { CourseTab } from '~/components/course-tab';
import { SectionHeader } from '~/components/layout/header';
import { courseTypes } from '~/constant/couse';
import { ProgramCard } from './components/program-card';
import { CourseCard } from '~/features/home/components/card/course-card';

interface ProgramKursusProps {
  label?: string;
  title?: string;
  description?: string;
}

export function ProgramKursus({
  label = 'Program Kursus',
  title = 'Program Kursus Unggulan',
  description = 'Jelajahi program kursus unggulan kami yang dirancang untuk membantu Anda mencapai keahlian dalam tata rias dan busana.',
}: ProgramKursusProps) {
  const [activeTab, setActiveTab] = useState('regular');
  const activeCourse = courseTypes.find((course) => course.id === activeTab);
  return (
    <section
      id="program-kursus"
      className="container mx-auto max-w-6xl py-16 px-4"
    >
      <SectionHeader label={label} title={title} description={description} />
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

      <div className="mb-16">
        {activeCourse && (
          <ProgramCard
            title={activeCourse.title}
            type={activeCourse.subtitle}
            description={activeCourse.description}
            duration={activeCourse.duration}
            schedule={activeCourse.schedule}
            capacity={activeCourse.students}
            features={activeCourse.features}
          />
        )}
      </div>

      <CourseCard activeCourse={activeCourse!} />
    </section>
  );
}
