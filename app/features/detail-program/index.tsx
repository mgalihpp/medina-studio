import { Button } from '~/components/ui/button';
import { Card } from '~/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '~/components/ui/tabs';
import { AspectRatio } from '~/components/ui/aspect-ratio';
import {
  Phone,
  Building,
  Users,
  Book,
  Star,
  CheckCircle,
  ChevronLeft,
} from 'lucide-react';
import { ScrollArea, ScrollBar } from '~/components/ui/scroll-area';
import { Link, useParams } from 'react-router';
import { Avatar, AvatarFallback, AvatarImage } from '~/components/ui/avatar';
import { RippleButton } from '~/components/ripple-button';
import { PROGRAM_KURSUS } from '~/constant/course';
import { NotFound } from '~/components/layout/notfound';

export function DetailProgram() {
  const { program } = useParams();

  const currentProgram = PROGRAM_KURSUS.find(
    (item) => item.title.toLowerCase().replace(/\s+/g, '-') === program
  );

  if (!currentProgram) {
    return <NotFound />;
  }

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="pl-8">
          <Link to="/program-kursus">
            <RippleButton className="px-2 py-2 flex items-center gap-2 text-xs">
              <ChevronLeft className="size-4" /> Kembali
            </RippleButton>
          </Link>
        </div>

        <div className="grid md:grid-cols-8 gap-8">
          <div className="col-span-5 md:col-span-4 lg:col-span-5 flex flex-col h-full">
            <Card className="p-8 border-none shadow-none outline-none">
              <div className="space-y-6">
                <div>
                  <h1 className="section-title">
                    {program
                      ?.replace(/-/g, ' ')
                      .replace(/\b\w/g, (char) => char.toUpperCase())}
                  </h1>
                </div>
                <p className="text-gray-600 text-sm sm:text-base">
                  {currentProgram.description}
                </p>
              </div>

              <div className="mt-4">
                <Tabs defaultValue="curriculum" className="w-full">
                  <ScrollArea>
                    <div className="relative h-10 w-full">
                      <TabsList className="max-md:absolute h-10 flex gap-2 min-w-0 md:w-full">
                        <TabsTrigger value="curriculum" className="gap-2">
                          <Book className="w-4 h-4" />
                          Kurikulum
                        </TabsTrigger>
                        <TabsTrigger value="instructors" className="gap-2">
                          <Users className="w-4 h-4" />
                          Pengajar
                        </TabsTrigger>
                        <TabsTrigger value="facilities" className="gap-2">
                          <Building className="w-4 h-4" />
                          Fasilitas
                        </TabsTrigger>
                        <TabsTrigger value="benefits" className="gap-2">
                          <Star className="w-4 h-4" />
                          Manfaat
                        </TabsTrigger>
                      </TabsList>
                    </div>
                    <ScrollBar orientation="horizontal" />
                  </ScrollArea>
                  <TabsContent value="instructors" className="mt-12 sm:mt-6">
                    <h2 className="text-2xl font-bold mb-6">
                      Pengajar Program
                    </h2>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      {currentProgram.instructors.map((instructor, index) => (
                        <div
                          key={index}
                          className="flex items-center p-4 border rounded-lg"
                        >
                          <div className="mr-4">
                            <Avatar className="size-16">
                              <AvatarImage
                                className="object-cover"
                                src={instructor.image}
                                alt={instructor.name}
                              />
                              <AvatarFallback>
                                {instructor.name.charAt(0)}
                              </AvatarFallback>
                            </Avatar>
                          </div>
                          <div>
                            <h3 className="font-medium">{instructor.name}</h3>
                            <p className="text-sm text-gray-500">
                              {instructor.role}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </TabsContent>
                  <TabsContent value="curriculum" className="mt-6">
                    <h2 className="text-2xl font-bold mb-6">
                      Kurikulum Program
                    </h2>
                    <div className="space-y-8">
                      {currentProgram.syllabus.map((module, index) => (
                        <div
                          key={index}
                          className="border-b pb-6 last:border-0"
                        >
                          <h3 className="text-lg font-semibold mb-2">
                            {module.title}
                          </h3>
                          <p className="text-sm text-gray-500 mb-4">
                            {module.weeks}
                          </p>
                          <ul className="space-y-2">
                            {module.topics.map((topic, i) => (
                              <li key={i} className="flex items-start">
                                <CheckCircle className="h-5 w-5 text-emerald-500 mr-2 flex-shrink-0 mt-0.5" />
                                <span>{topic}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </TabsContent>
                  <TabsContent value="facilities" className="mt-6">
                    <div className="space-y-4">
                      <h3 className="text-xl font-semibold">
                        Fasilitas Lengkap
                      </h3>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="p-4 border rounded-lg">
                          <h4 className="font-medium mb-2">Studio Makeup</h4>
                          <p className="text-gray-600 text-sm">
                            Studio ber-AC dengan pencahayaan professional
                          </p>
                        </div>
                        <div className="p-4 border rounded-lg">
                          <h4 className="font-medium mb-2">Peralatan Makeup</h4>
                          <p className="text-gray-600 text-sm">
                            Peralatan makeup lengkap dan berkualitas
                          </p>
                        </div>
                        <div className="p-4 border rounded-lg">
                          <h4 className="font-medium mb-2">Area Praktik</h4>
                          <p className="text-gray-600 text-sm">
                            Ruang praktik yang nyaman dan luas
                          </p>
                        </div>
                        <div className="p-4 border rounded-lg">
                          <h4 className="font-medium mb-2">Ruang Diskusi</h4>
                          <p className="text-gray-600 text-sm">
                            Ruang diskusi dan konsultasi
                          </p>
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                  <TabsContent value="benefits" className="mt-6">
                    <h2 className="text-2xl font-bold mb-6">Manfaat Program</h2>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {currentProgram.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-emerald-500 mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-sm">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </TabsContent>
                </Tabs>
              </div>
            </Card>
          </div>

          <div className="space-y-6 col-span-5 md:col-span-4 lg:col-span-3">
            <div className="md:sticky md:top-20">
              <Card className="overflow-hidden py-0 gap-0">
                <div className="relative h-60 w-full overflow-hidden">
                  <img
                    src={currentProgram.image || '/placeholder.svg'}
                    alt={currentProgram.title}
                    loading="lazy"
                    decoding="async"
                    height={500}
                    width={800}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="p-6 space-y-6">
                  <div className="space-y-4">
                    <div className="flex justify-between flex-wrap py-3 border-b">
                      <span className="font-medium">Durasi Program</span>
                      <span className="text-gray-600 text-sm">
                        {currentProgram.duration}
                      </span>
                    </div>
                    <div className="flex justify-between flex-wrap py-3 border-b">
                      <span className="font-medium">Jadwal</span>
                      <span className="text-gray-600 text-sm">
                        3x pertemuan per minggu
                      </span>
                    </div>
                    <div className="flex justify-between flex-wrap py-3 border-b">
                      <span className="font-medium">Kapasitas</span>
                      <span className="text-gray-600 text-sm">
                        8-12 peserta per kelas
                      </span>
                    </div>
                    <div className="flex justify-between flex-wrap py-3 border-b">
                      <span className="font-medium">Biaya</span>
                      <span className="text-gray-600 text-sm">
                        {currentProgram.price}
                      </span>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <RippleButton className="w-full bg-main-color hover:bg-secondary-color text-base">
                      Daftar Sekarang
                    </RippleButton>
                    <div className="grid">
                      <Button variant="outline" className="flex gap-2 h-12">
                        <Phone className="w-4 h-4" />
                        Hubungi Kami
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>

        <div className="mt-16">{/* <RelatedPrograms /> */}</div>
      </div>
    </div>
  );
}
