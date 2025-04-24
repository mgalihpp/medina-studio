import { Button } from '~/components/ui/button';
import { Input } from '~/components/ui/input';
import { Textarea } from '~/components/ui/textarea';
import { Card, CardContent } from '~/components/ui/card';
import { Clock, Mail, MapPin, Phone } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="section-subtitle">Hubungi Kami</h2>
            <div className="w-24 h-1 bg-secondary-color mx-auto mb-4"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Jika anda memiliki pertanyaan atau ingin membuat janji temu?
              Hubungi kami dan kami akan dengan senang hati membantu.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            <div className="lg:col-span-2 order-2 lg:order-1">
              <Card className="overflow-hidden bg-main-color">
                <CardContent className="p-0">
                  <div className="p-8 text-white">
                    <h3 className="font-playfair text-2xl font-bold mb-4">
                      Hubungi Kami
                    </h3>
                    <p className="mb-6">
                      Kami ingin mendengar kabar dari Anda. Hubungi kami
                      menggunakan informasi di bawah ini.
                    </p>

                    <div className="space-y-6">
                      <div className="flex items-start gap-4">
                        <div className="bg-white/10 p-3 rounded-full">
                          <Phone />
                        </div>
                        <div>
                          <p className="font-medium">Phone</p>
                          <p className="text-white/80">(123) 456-7890</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="bg-white/10 p-3 rounded-full">
                          <Mail />
                        </div>
                        <div>
                          <p className="font-medium">Email</p>
                          <p className="text-white/80">info@medinabeauty.com</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="bg-white/10 p-3 rounded-full">
                          <MapPin />
                        </div>
                        <div>
                          <p className="font-medium">Location</p>
                          <p className="text-white/80">
                            123 Beauty Street, Salon City, SC 12345
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="bg-white/10 p-3 rounded-full">
                          <Clock />
                        </div>
                        <div>
                          <p className="font-medium">Hours</p>
                          <p className="text-white/80">
                            Mon-Sat: 9:00 AM - 7:00 PM
                          </p>
                          <p className="text-white/80">Sunday: Closed</p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-8">
                      <h4 className="font-medium mb-3">Follow Us</h4>
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

                  {/* <div className="p-8">
                  <h3 className="section-subtitle text-white">Lokasi kami</h3>
                  <div className="bg-gray-200 h-64 rounded-lg">
                    Google Maps iframe would go here
                    <div className="w-full h-full flex items-center justify-center text-gray-400">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d777.0162607785574!2d106.51785214701724!3d-6.255693908724406!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e42076e80a0ee27%3A0x8fde97f70757989f!2sMedina%20Studio%20Makeup%2FTata%20Rias%20Pengantin%20dan%20Busana!5e0!3m2!1sen!2sid!4v1739368524085!5m2!1sen!2sid"
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                      ></iframe>
                    </div>
                  </div>
                </div> */}
                </CardContent>
              </Card>
            </div>

            <div className="lg:col-span-3 order-1 lg:order-2">
              <Card>
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
                        <option value="" disabled selected>
                          Pilih program kursus
                        </option>
                        <option value="haircut">Haircut & Styling</option>
                        <option value="coloring">Hair Coloring</option>
                        <option value="nails">Nail Services</option>
                        <option value="makeup">Makeup Application</option>
                        <option value="facial">Facials</option>
                        <option value="spa">Spa Treatments</option>
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
                        className="bg-gray-50 min-h-32"
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-main-color hover:bg-secondary-color/90 text-white"
                    >
                      Kirim pesan
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
