import { Input } from '~/components/ui/input';
import { Textarea } from '~/components/ui/textarea';
import { Card, CardContent } from '~/components/ui/card';
import { Clock, Mail, MapPin, Phone } from 'lucide-react';
import { RippleButton } from '~/components/ripple-button';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const itemVariant = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};
export function Contact() {
  // Referensi untuk elemen kiri dan kanan
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  // Gunakan useInView untuk mendeteksi elemen dalam viewport
  const leftInView = useInView(leftRef, { once: true, margin: '-100px' });
  const rightInView = useInView(rightRef, { once: true, margin: '-100px' });

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={itemVariant}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="section-subtitle">Hubungi Kami</h2>
            <div className="w-24 h-1 bg-secondary-color mx-auto mb-4"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Jika anda memiliki pertanyaan atau ingin membuat janji temu?
              Hubungi kami dan kami akan dengan senang hati membantu.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            <motion.div
              ref={leftRef} // Referensi untuk elemen kiri
              className="lg:col-span-2 order-2 lg:order-1"
              variants={cardVariants}
              initial="hidden"
              animate={leftInView ? 'visible' : 'hidden'} // Animasi berdasarkan visibilitas
            >
              <Card className="overflow-hidden bg-main-color">
                <CardContent className="p-0">
                  <div className="p-8 text-white">
                    <h3 className="font-playfair text-2xl font-bold mb-4">
                      Hubungi Kami
                    </h3>
                    <p className="mb-6 sm:text-base text-sm">
                      Kami ingin mendengar kabar dari Anda. Hubungi kami
                      menggunakan informasi di bawah ini.
                    </p>

                    <div className="space-y-6">
                      <div className="flex items-start gap-4">
                        <div className="bg-white/10 p-3 rounded-full">
                          <Phone />
                        </div>
                        <div>
                          <p className="font-medium">Nomor Telepon</p>
                          <p className="text-white/80 sm:text-base text-sm">
                            +62 812-3456-7890
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="bg-white/10 p-3 rounded-full">
                          <Mail />
                        </div>
                        <div>
                          <p className="font-medium">Email</p>
                          <p className="text-white/80 sm:text-base text-sm">
                            info@medinastudio.com
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="bg-white/10 p-3 rounded-full">
                          <MapPin />
                        </div>
                        <div>
                          <p className="font-medium">Lokasi</p>
                          <p className="text-white/80 sm:text-base text-sm">
                            Graha Gardenia I Blok XG06/14 Citra Raya, Jalan
                            Gardenia Raya RT 002 RW 001, Mekarbakti, Panongan,
                            Tangerang 15710 Banten
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="bg-white/10 p-3 rounded-full">
                          <Clock />
                        </div>
                        <div>
                          <p className="font-medium">Jam Operasional</p>
                          <p className="text-white/80 sm:text-base text-sm">
                            Sen-Sab: 9:00 - 19:00
                          </p>
                          <p className="text-white/80 sm:text-base text-sm">
                            Min: Tutup
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-8">
                      <h4 className="font-medium mb-3">Ikuti kami</h4>
                      <div className="flex gap-4">
                        <a
                          href="#"
                          className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                          </svg>
                        </a>
                        <a
                          href="#"
                          className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <rect
                              width="20"
                              height="20"
                              x="2"
                              y="2"
                              rx="5"
                              ry="5"
                            />
                            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                            <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                          </svg>
                        </a>
                        <a
                          href="#"
                          className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-1-4.8 4-8 8-5.8.6.3 1.2.7 1.6 1.2.6-.4 1.4-.9 2.2-1.4z" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              ref={rightRef} // Referensi untuk elemen kanan
              className="lg:col-span-3 order-1 lg:order-2 h-full"
              variants={cardVariants}
              initial="hidden"
              animate={rightInView ? 'visible' : 'hidden'} // Animasi berdasarkan visibilitas
            >
              <Card className="h-full">
                <CardContent className="p-8 h-full">
                  <h3 className="font-playfair text-2xl font-bold mb-6">
                    Kirim kami pesan
                  </h3>
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-gray-700 mb-2"
                        >
                          Nama Lengkap
                        </label>
                        <Input
                          id="name"
                          placeholder="Masukkan nama"
                          className="bg-gray-50"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-gray-700 mb-2"
                        >
                          Email
                        </label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="Masukkan email"
                          className="bg-gray-50"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Nomor Telepon
                      </label>
                      <Input
                        id="phone"
                        placeholder="Masukkan nomor telepon"
                        className="bg-gray-50"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="program_kursus"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Tertarik dengan program kursus
                      </label>
                      <select
                        id="program_kursus"
                        className="w-full rounded-md border border-input bg-gray-50 px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                      >
                        <option value="" disabled>
                          Pilih program kursus
                        </option>
                        <option value="tata-rias-pengantin">
                          Tata Rias Pengantin
                        </option>
                        <option value="desain-busana">Desain Busana</option>
                        <option value="henna-art">Henna Art"</option>
                        <option value="menjahit">Menjahit</option>
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Pesan
                      </label>
                      <Textarea
                        id="message"
                        placeholder="Bagaimana kami dapat membantu Anda?"
                        className="bg-gray-50 min-h-32 max-h-40"
                      />
                    </div>

                    <RippleButton className="w-full py-2">
                      Kirim pesan
                    </RippleButton>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
