import { Button } from '~/components/ui/button';
import { Card } from '~/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '~/components/ui/tabs';
import { AspectRatio } from '~/components/ui/aspect-ratio';
import {
  Mail,
  Phone,
  Building,
  Users,
  Book,
  Star,
  CheckCircle,
} from 'lucide-react';
import { Badge } from '~/components/ui/badge';
import { ScrollArea, ScrollBar } from '~/components/ui/scroll-area';
import { useParams } from 'react-router';
import type { Route } from '../../routes/+types/detail-program';
import { Avatar, AvatarFallback, AvatarImage } from '~/components/ui/avatar';
import { RippleButton } from '~/components/ripple-button';
// import { useToast } from "@/hooks/use-toast";
// import RelatedPrograms from "@/components/RelatedPrograms";

export function DetailProgram() {
  const { kelas, program } = useParams();

  //   const { toast } = useToast();

  //   const handleContact = () => {
  //     toast({
  //       title: "Contact Info",
  //       description: "Our team will contact you shortly!",
  //     });
  //   };

  const PROGRAM = {
    title: 'Tata Rias Pengantin Tradisional',
    duration: '6 bulan',
    schedule: '3x pertemuan per minggu (Senin, Rabu, Jumat)',
    price: 'Rp 12.500.000',
    description:
      'Program Tata Rias Pengantin Tradisional di Medina Studio dirancang untuk membekali Anda dengan keterampilan dan pengetahuan mendalam tentang tata rias pengantin dari berbagai budaya Indonesia. Anda akan mempelajari teknik-teknik tradisional yang diwariskan turun-temurun, serta cara mengaplikasikannya dengan sentuhan modern tanpa menghilangkan nilai budayanya.',
    image: '/placeholder.svg?height=500&width=800',
    instructors: [
      {
        name: 'Siti Rahayu',
        role: 'Pengajar Senior Tata Rias',
        image: '/img/mentor/widi.jpg',
      },
      {
        name: 'Dewi Kartika',
        role: 'Pakar Busana Tradisional',
        image: '/img/mentor/siska.jpg',
      },
    ],
    syllabus: [
      {
        title: 'Modul 1: Pengenalan Tata Rias Pengantin Tradisional',
        weeks: 'Minggu 1-2',
        topics: [
          'Sejarah dan filosofi tata rias pengantin tradisional',
          'Pengenalan alat dan bahan tata rias tradisional',
          'Teknik dasar tata rias wajah untuk pengantin',
        ],
      },
      {
        title: 'Modul 2: Tata Rias Pengantin Jawa',
        weeks: 'Minggu 3-6',
        topics: [
          'Tata rias pengantin Yogyakarta (Paes Ageng)',
          'Tata rias pengantin Solo (Basahan dan Putri)',
          'Teknik sanggul dan pemasangan aksesoris kepala',
          'Busana dan perlengkapan pengantin Jawa',
        ],
      },
      {
        title: 'Modul 3: Tata Rias Pengantin Sunda',
        weeks: 'Minggu 7-10',
        topics: [
          'Tata rias pengantin Sunda Siger',
          'Tata rias pengantin Sunda Putri',
          'Teknik draping dan pemakaian selendang',
          'Aksesoris dan perhiasan khas Sunda',
        ],
      },
      {
        title: 'Modul 4: Tata Rias Pengantin Sumatera',
        weeks: 'Minggu 11-14',
        topics: [
          'Tata rias pengantin Minangkabau',
          'Tata rias pengantin Palembang',
          'Teknik pemasangan sunting dan mahkota',
          'Busana dan aksesoris khas Sumatera',
        ],
      },
      {
        title: 'Modul 5: Tata Rias Pengantin Indonesia Timur',
        weeks: 'Minggu 15-18',
        topics: [
          'Tata rias pengantin Bali',
          'Tata rias pengantin Sulawesi (Bugis dan Makassar)',
          'Teknik pemasangan perhiasan dan aksesoris',
          'Busana dan perlengkapan pengantin Indonesia Timur',
        ],
      },
      {
        title: 'Modul 6: Proyek Akhir dan Sertifikasi',
        weeks: 'Minggu 19-24',
        topics: [
          'Praktik tata rias pengantin lengkap',
          'Manajemen bisnis tata rias pengantin',
          'Fotografi tata rias pengantin',
          'Ujian sertifikasi dan proyek akhir',
        ],
      },
    ],
    facilities: [
      'Studio rias profesional dengan pencahayaan standar industri',
      'Alat dan bahan makeup premium',
      'Koleksi busana tradisional lengkap',
      'Akses ke perpustakaan referensi tata rias tradisional',
      'Sesi foto profesional untuk portofolio',
    ],
    benefits: [
      'Sertifikat profesi yang diakui secara nasional',
      'Kesempatan magang di vendor pernikahan terkemuka',
      'Jaringan dengan profesional industri',
      'Bimbingan karir dan peluang kerja',
      'Akses seumur hidup ke kelas penyegaran',
    ],
  };

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-5 gap-8">
          <div className="col-span-3 flex flex-col h-full">
            <Card className="p-8">
              <div className="space-y-6">
                <div>
                  <h1 className="section-title">
                    {program
                      ?.replace(/-/g, ' ')
                      .replace(/\b\w/g, (char) => char.toUpperCase())}
                  </h1>
                  <Badge className="bg-main-light text-secondary-color py-1">
                    {kelas
                      ?.replace(/-/g, ' ')
                      .replace(/\b\w/g, (char) => char.toUpperCase())}
                  </Badge>
                </div>
                <p className="text-gray-600 text-sm sm:text-base">
                  Program ini dirancang untuk memberikan pemahaman mendalam
                  tentang tata rias pengantin tradisional. Peserta akan
                  mempelajari teknik dan filosofi di balik tata rias pengantin
                  tradisional.
                </p>
              </div>
            </Card>

            <Card className="p-8 mt-8 h-full">
              <Tabs defaultValue="instructors" className="w-full">
                <ScrollArea>
                  <div className="relative h-10 w-full">
                    <TabsList className="max-md:absolute h-10 flex gap-2 min-w-0 md:w-full">
                      <TabsTrigger value="instructors" className="gap-2">
                        <Users className="w-4 h-4" />
                        Pengajar
                      </TabsTrigger>
                      <TabsTrigger value="curriculum" className="gap-2">
                        <Book className="w-4 h-4" />
                        Kurikulum
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
                  <h2 className="text-2xl font-bold mb-6">Pengajar Program</h2>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {PROGRAM.instructors.map((instructor, index) => (
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
                  <h2 className="text-2xl font-bold mb-6">Kurikulum Program</h2>
                  <div className="space-y-8">
                    {PROGRAM.syllabus.map((module, index) => (
                      <div key={index} className="border-b pb-6 last:border-0">
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
                    <h3 className="text-xl font-semibold">Fasilitas Lengkap</h3>
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
                    {PROGRAM.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-emerald-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </TabsContent>
              </Tabs>
            </Card>
          </div>

          <div className="space-y-6 col-span-3 md:col-span-2">
            <div className="md:sticky md:top-8">
              <Card className="overflow-hidden py-0">
                <AspectRatio ratio={16 / 9}>
                  <img
                    src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81"
                    alt="Tata Rias Pengantin Program"
                    className="object-cover w-full h-full"
                  />
                </AspectRatio>
                <div className="p-6 space-y-6">
                  <div className="space-y-4">
                    <div className="flex justify-between flex-wrap py-3 border-b">
                      <span className="font-medium">Durasi Program</span>
                      <span className="text-gray-600 text-sm">6 Bulan</span>
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
