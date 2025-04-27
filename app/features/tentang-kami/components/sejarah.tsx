export function Sejarah() {
  return (
    <section id="sejarah" className="container mx-auto px-4 py-16 max-w-6xl">
      <div className="text-center">
        <p className="section-subtitle">Tentang Kami</p>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-8">
          Sejarah Kami
        </h1>

        <p className="text-gray-500 max-w-4xl mx-auto mb-12 leading-relaxed sm:text-base text-sm">
          Berdiri sejak tahun 2017 sebelum rebranding pada akhir 2024, Medina
          Studio Tata Rias dan Busana menyediakan berbagai pendidikan dan
          pelatihan komprehensif di bidang tata rias pengantin dan busana.
          Dengan sederet keunggulan dan harga yang terjangkau, jadikan Medina
          Studio sebagai institut pendidikan pilihan anda para make up artist
          dan fashion designer masa depan!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-lg overflow-hidden">
            <img
              src="/img/tentang-kami/foto1.jpg"
              alt="Mountain climber in orange jacket on snowy peaks"
              className="w-full h-full object-cover rounded-lg"
              loading="lazy"
              decoding="auto"
            />
          </div>
          <div className="rounded-lg overflow-hidden">
            <img
              src="/img/tentang-kami/foto2.jpg"
              alt="Scuba diver underwater in blue ocean"
              className="w-full h-full object-cover rounded-lg"
              loading="lazy"
              decoding="auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
