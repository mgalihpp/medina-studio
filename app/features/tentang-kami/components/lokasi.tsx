import { MapPin } from 'lucide-react';

export function Lokasi() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-7xl">
      <div className="section-subtitle">Kantor Kami</div>
      <h2 className="text-4xl font-bold text-gray-800 mb-12">
        Kunjungi Kantor Kami
      </h2>

      <div className="w-full h-[450px] rounded-lg overflow-hidden relative">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d777.0162607785574!2d106.51785214701724!3d-6.255693908724406!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e42076e80a0ee27%3A0x8fde97f70757989f!2sMedina%20Studio%20Makeup%2FTata%20Rias%20Pengantin%20dan%20Busana!5e0!3m2!1sen!2sid!4v1739368524085!5m2!1sen!2sid"
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="absolute inset-0"
          title="Office Location Map"
          width="100%"
          height="100%"
          style={{ border: 0 }}
        ></iframe>

        {/* <div className="absolute top-4 left-4 bg-white p-4 rounded-lg shadow-md max-w-sm">
          <div className="flex items-start">
            <MapPin className="text-red-500 mr-2 mt-1 flex-shrink-0" />
            <div>
              <h3 className="font-medium text-gray-900">Medina Studio</h3>
              <p className="text-gray-600 text-sm mt-1">
                Graha Gardenia I Blok XG06/14 Citra Raya, Jalan Gardenia Raya RT
                002 RW 001, Mekarbakti, Panongan, Tangerang 15710 Banten
              </p>
              <div className="flex items-center mt-2">
                <div className="flex">
                  {[...Array(4)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-4 h-4 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  <svg
                    className="w-4 h-4 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
                <span className="text-gray-600 text-sm ml-1">4,6</span>
                <span className="text-gray-500 text-sm ml-2">(8 ulasan)</span>
              </div>
              <a
                href="https://maps.app.goo.gl/RmpjzMf95zUv5RiX7"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 text-sm mt-2 inline-block hover:underline"
              >
                Lihat peta lebih besar
              </a>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}
