import { Link } from 'react-router';
import { PROMO_DISCOUNT } from '~/constant/discount';

export function Promo() {
  return (
    <section className="bg-secondary-color/90 text-white py-16 mb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Promo Spesial Bulan Ini!
          </h2>
          <p className="text-xl mb-8">
            Dapatkan diskon {PROMO_DISCOUNT}% untuk pendaftaran kursus apa pun
            sebelum akhir bulan ini.
          </p>
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg mb-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="text-4xl font-bold">{PROMO_DISCOUNT}%</div>
                <div className="text-sm">Diskon</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold">4</div>
                <div className="text-sm">Pilihan Kursus</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold">2</div>
                <div className="text-sm">Tipe Kelas</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold">∞</div>
                <div className="text-sm">Kesempatan</div>
              </div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/program-kursus#program-kursus">
              <button className="inline-block px-8 py-3 border-2 border-white text-white font-medium rounded-md hover:bg-secondary-color hover:text-white transition-colors duration-300">
                Lihat Semua Kursus
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
