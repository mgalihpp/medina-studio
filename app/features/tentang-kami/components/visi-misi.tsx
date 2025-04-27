import { Card, CardHeader, CardTitle, CardContent } from '~/components/ui/card';

export function VisiDanMisi() {
  return (
    <section id="visi" className="container mx-auto px-4 py-16 max-w-6xl">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-6">
        <div className="relative overflow-hidden rounded-lg h-full">
          <img
            src="/img/tentang-kami/foto3.jpg"
            alt="foto visi misi"
            className="h-full w-full object-cover rounded-lg"
            loading="lazy"
            decoding="auto"
          />
        </div>
        <div className="flex flex-col gap-6 max-w-3xl mx-auto h-full">
          <Card className="bg-main-light border-none shadow-sm">
            <CardHeader>
              <CardTitle className="text-gray-800 text-2xl">
                Our Mission
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="text-gray-600 space-y-2 list-disc px-4">
                <li>Menyediakan kurikulum terbaik dan terkini.</li>
                <li>Mengembangkan kreativitas dan keterampilan siswa.</li>
                <li>Membangun jaringan profesional di industri kecantikan.</li>
                <li>
                  Memberikan dukungan penuh bagi siswa untuk meraih kesuksesan.
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-secondary-color border-none shadow-sm h-full">
            <CardHeader>
              <CardTitle className="text-white text-2xl">Our Vision</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-white">
                Menjadi pusat pelatihan tata rias dan busana terkemuka yang
                menghasilkan talenta-talenta berkualitas di industri kecantikan.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
