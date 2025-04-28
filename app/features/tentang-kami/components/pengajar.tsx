import { Instagram, Linkedin, Twitter } from 'lucide-react';
import { useState } from 'react';
import { RippleButton } from '~/components/ripple-button';

type Teacher = {
  id: number;
  name: string;
  role: string;
  bio: string;
  image: string;
};

export function Pengajar() {
  const [hoveredTeacher, setHoveredTeacher] = useState<number | null>(null);

  const teachers: Teacher[] = [
    {
      id: 1,
      name: 'Sri Widiani',
      role: 'Instruktur Tata Rias dan Busana',
      bio: 'Lulusan dari Instituto Di Muda Burgo Milan, Italia dan telah berpengalaman mengajar lebih 6 tahun mengajar, termasuk di Paris de La Mode School, Italian Fashion School Jakarta, Instituto di Moda Burgo Jakarta dan lainnya.',
      image: '/img/mentor/widi.jpg',
    },
    {
      id: 2,
      name: 'Siska Handayani',
      role: 'Instruktur Henna',
      bio: 'Henna Artist dengan pengalaman lebih dari 3 tahun dan menguasai berbagai jenis Henna, termasuk Henna Putih dan Henna Biru.',
      image: '/img/mentor/siska.jpg',
    },
  ];

  return (
    <section id="pengajar" className="container mx-auto px-4 py-16 max-w-6xl">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="lg:pr-8 flex justify-center flex-col max-sm:col-span-1 max-lg:col-span-2 max-lg:text-center">
          <h2 className="section-title mb-4">Kenali para pengajar kami</h2>
          <p className="text-gray-600 mb-8">
            Para profesional berpengalaman yang mendedikasikan diri untuk
            mengembangkan bakat dan keterampilan siswa kami.
          </p>
          <RippleButton className="py-3">Bergabung dengan kami</RippleButton>
        </div>

        {teachers.map((teacher) => (
          <div
            key={teacher.id}
            className="relative rounded-2xl overflow-hidden transition-all duration-300 h-[500px]"
            onMouseEnter={() => setHoveredTeacher(teacher.id)}
            onMouseLeave={() => setHoveredTeacher(null)}
          >
            <img
              src={teacher.image || '/placeholder.svg'}
              alt={teacher.name}
              className="object-cover h-full w-full"
            />

            <div
              className={`absolute bottom-0 left-0 right-0 transition-all duration-300 ease-in-out
                  ${
                    hoveredTeacher === teacher.id
                      ? 'bg-emerald-100/95 h-48 p-6'
                      : 'bg-white/80 h-24 p-4'
                  }`}
            >
              <h3 className="font-medium sm:text-lg text-gray-800">
                {teacher.name}
              </h3>
              <p className="text-gray-600">{teacher.role}</p>

              {hoveredTeacher === teacher.id && (
                <>
                  <p className="mt-2 text-gray-600 text-sm">{teacher.bio}</p>
                  <div className="flex gap-2 mt-3">
                    <button className="p-1 rounded-full hover:bg-main-light transition-colors">
                      <Instagram className="h-5 w-5 text-gray-700" />
                    </button>
                    <button className="p-1 rounded-full hover:bg-main-light transition-colors">
                      <Twitter className="h-5 w-5 text-gray-700" />
                    </button>
                    <button className="p-1 rounded-full hover:bg-main-ligh transition-colors">
                      <Linkedin className="h-5 w-5 text-gray-700" />
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
