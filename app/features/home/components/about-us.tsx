import { motion } from 'framer-motion';
import { RippleButton } from '~/components/ripple-button';

export function AboutUs() {
  return (
    <section id="tentang-kami" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="section-subtitle">Tentang Kami</h2>
            <h3 className="section-title">Medina Studio</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Kursus Tata Rias dan Busana Berkualitas dan Terjangkau di
              Tangerang
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center overflow-x-hidden">
            {/* Gambar kiri: animasi saat scroll */}
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              viewport={{ once: true, amount: 0.2 }}
              className="relative rounded-lg shadow-lg overflow-hidden"
            >
              <div
                className="relative w-full h-full rounded-lg shadow-xl"
                style={{
                  backgroundImage: `url(https://hebbkx1anhila5yf.public.blob.vercel-storage.com/kanvas.jpg-mBBsVjcruNF4c12MttQcXc3YV3Fqt9.jpeg)`,
                  backgroundSize: '100% 100%',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                  aspectRatio: '16 / 9',
                }}
                role="img"
                aria-label="Medina Studio - Kursus Tata Rias"
              />
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/kanvas.jpg-mBBsVjcruNF4c12MttQcXc3YV3Fqt9.jpeg"
                alt="Medina Studio - Kursus Tata Rias"
                className="absolute inset-0 w-full h-full"
                loading="lazy"
                decoding="async"
              />
            </motion.div>

            {/* Teks kanan: animasi saat scroll */}
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
              viewport={{ once: true, amount: 0.2 }}
              className="space-y-6 p-4"
            >
              <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                Berdiri sejak tahun 2017 sebelum rebranding pada akhir 2024,
                Medina Studio Tata Rias dan Busana menyediakan berbagai
                pendidikan dan pelatihan komprehensif di bidang tata rias
                pengantin dan busana. Dengan sederet keunggulan dan harga yang
                terjangkau, jadikan Medina Studio sebagai institut pendidikan
                pilihan anda para make up artist dan fashion designer masa
                depan!
              </p>
              <RippleButton asLink href="/tentang-kami">
                Lebih lanjut
              </RippleButton>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

//               <p className="text-gray-700 leading-relaxed">
//                 Medina Studio adalah tempat kursus tata rias dan busana
//                 profesional yang telah berdiri sejak tahun 2017. Kami
//                 berkomitmen untuk memberikan pendidikan terbaik dalam bidang
//                 tata rias dan busana dengan pendekatan yang komprehensif dan
//                 personal.
//               </p>
//               {/* <p className="text-gray-700 leading-relaxed">
//                 Didirikan dengan visi untuk menciptakan para ahli tata rias dan
//                 desainer busana yang siap bersaing di industri kreatif, Medina
//                 Studio menawarkan kurikulum yang terstruktur, mulai dari teknik
//                 dasar hingga tingkat lanjut yang mengikuti tren terkini.
//               </p>
//               <p className="text-gray-700 leading-relaxed">
//                 Kami memahami bahwa setiap siswa memiliki potensi unik, oleh
//                 karena itu kami menyediakan berbagai fasilitas modern seperti
//                 studio rias, ruang praktik, dan peralatan terbaru untuk
//                 mendukung proses belajar yang optimal dan menyenangkan.
//               </p> */}
