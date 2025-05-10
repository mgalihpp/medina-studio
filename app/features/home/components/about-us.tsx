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
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/kanvas.jpg-mBBsVjcruNF4c12MttQcXc3YV3Fqt9.jpeg"
                alt="Medina Studio - Kursus Tata Rias"
                className="w-full h-full"
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
              <p className="text-gray-700 leading-relaxed text-base">
                Berdiri sejak tahun 2017 sebelum rebranding pada akhir 2024,
                Medina Studio Tata Rias dan Busana menyediakan berbagai
                pendidikan dan pelatihan komprehensif di bidang tata rias
                pengantin dan busana. Dengan sederet keunggulan dan harga yang
                terjangkau, jadikan Medina Studio sebagai institut pendidikan
                pilihan anda para make up artist dan fashion designer masa
                depan!
              </p>
              <p className="text-gray-700 leading-relaxed text-base">
                Kami menawarkan kurikulum terstruktur, mulai dari teknik dasar
                hingga tingkat lanjut, yang selalu mengikuti tren terkini di
                industri kreatif. Setiap siswa mendapatkan pendekatan personal
                untuk mengasah potensi unik mereka.
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
