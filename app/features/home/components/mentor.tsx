import { Avatar, AvatarImage, AvatarFallback } from '~/components/ui/avatar';
import { Card, CardHeader, CardContent } from '~/components/ui/card';
import { GraduationCap } from 'lucide-react';

const mentors = [
  {
    name: 'Sri Widiani',
    role: 'Instruktur Tata Rias dan Busana',
    image: '/img/mentor/widi.jpg',
    specialization:
      'Instruktur model dan tata rias di sekolah nasional dan internasional',
    experience: '7+ tahun pengalaman',
  },
  {
    name: 'Siska Handayani',
    role: 'Instruktur Henna',
    image: '/img/mentor/siska.jpg',
    specialization: 'Henna Artist di berbagai jenis tata rias pengantin',
    experience: '3+ tahun pengalaman',
  },
];

export function Mentor() {
  return (
    <section
      id="mentor"
      className="py-24 bg-gradient-to-b from-white to-main-light"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-subtitle">Pengajar Kami</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Belajar dari tim pengajar yang berpengalaman di bidang kecantikan
            dan tata rias
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
          {mentors.map((mentor, index) => (
            <Card
              key={index}
              className="bg-white hover:shadow-lg transition-shadow duration-300"
            >
              <CardHeader className="text-center pb-2">
                <Avatar className="w-32 h-32 mx-auto mb-4">
                  <AvatarImage
                    src={mentor.image}
                    alt={mentor.name}
                    className="object-cover"
                  />
                  <AvatarFallback>
                    <GraduationCap className="w-16 h-16 text-main-color" />
                  </AvatarFallback>
                </Avatar>
                <h3 className="font-bold text-xl text-secondary-color">
                  {mentor.name}
                </h3>
                <p className="text-main-color font-medium">{mentor.role}</p>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 mb-2">{mentor.specialization}</p>
                <p className="text-sm text-secondary-color/90 font-semibold">
                  {mentor.experience}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
