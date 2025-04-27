import { MENTORS } from '~/constant/mentor';
import { MentorCard } from './card/mentor-card';

export function Mentor() {
  return (
    <section
      id="mentor"
      className="py-16 bg-gradient-to-b from-white to-main-light"
    >
      <div className="container mx-auto px-4">
        {/* HEADER */}
        <div className="text-center mb-16">
          <h2 className="section-subtitle">Pengajar Kami</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Belajar dari tim pengajar yang berpengalaman di bidang kecantikan
            dan tata rias
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
          {MENTORS.map((mentor, index) => (
            <MentorCard key={index} mentor={mentor} />
          ))}
        </div>
      </div>
    </section>
  );
}
