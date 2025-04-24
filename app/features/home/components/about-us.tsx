export function AboutUs() {
  return (
    <section className="py-16 bg-main-light">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="section-subtitle">Tentang Kami</h2>
            {/* <div className="w-24 h-1 bg-secondary-color mx-auto"></div> */}
          </div>

          {/* Main content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Image */}
            <div className="relative bg-white p-4 rounded-lg shadow-lg">
              <div className="relative h-auto w-full overflow-hidden shadow-xl group">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/kanvas.jpg-mBBsVjcruNF4c12MttQcXc3YV3Fqt9.jpeg"
                  alt="Medina Studio - Kursus Tata Rias"
                  className="object-cover h-auto w-full transition-transform duration-300 ease-in-out group-hover:scale-105"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              {/* <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg w-40 h-40 flex flex-col items-center justify-center">
                <p className="text-sm text-gray-500 font-medium">
                  Berdiri Sejak
                </p>
                <p className="text-3xl font-serif font-bold text-[#9b8579]">
                  2017
                </p>
                <div className="w-12 h-0.5 bg-[#9b8579] my-2"></div>
                <p className="text-sm text-gray-500">Terpercaya</p>
              </div> */}
            </div>

            {/* Right side - Text content */}
            <div className="space-y-6">
              <h3 className="section-title">Medina Studio</h3>
              <p className="text-gray-700 leading-relaxed">
                Medina Studio adalah tempat kursus tata rias dan busana
                profesional yang telah berdiri sejak tahun 2017. Kami
                berkomitmen untuk memberikan pendidikan terbaik dalam bidang
                tata rias dan busana dengan pendekatan yang komprehensif dan
                personal.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Didirikan dengan visi untuk menciptakan para ahli tata rias dan
                desainer busana yang siap bersaing di industri kreatif, Medina
                Studio menawarkan kurikulum yang terstruktur, mulai dari teknik
                dasar hingga tingkat lanjut yang mengikuti tren terkini.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Kami memahami bahwa setiap siswa memiliki potensi unik, oleh
                karena itu kami menyediakan berbagai fasilitas modern seperti
                studio rias, ruang praktik, dan peralatan terbaru untuk
                mendukung proses belajar yang optimal dan menyenangkan.
              </p>

              {/* Features
              <div className="pt-4">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">
                  Keunggulan Kami
                </h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="mr-3 mt-1">
                      <Check className="h-5 w-5 text-[#9b8579]" />
                    </div>
                    <span className="text-gray-700">
                      Pengajar berpengalaman di industri kecantikan dan fashion
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 mt-1">
                      <Check className="h-5 w-5 text-[#9b8579]" />
                    </div>
                    <span className="text-gray-700">
                      Kurikulum terstruktur dan terupdate mengikuti tren terkini
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 mt-1">
                      <Check className="h-5 w-5 text-[#9b8579]" />
                    </div>
                    <span className="text-gray-700">
                      Fasilitas lengkap dan modern untuk praktik langsung
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 mt-1">
                      <Check className="h-5 w-5 text-[#9b8579]" />
                    </div>
                    <span className="text-gray-700">
                      Sertifikat resmi setelah menyelesaikan kursus
                    </span>
                  </li>
                </ul>
              </div> */}

              {/* CTA Button */}
              {/* <div className="pt-4">
                <button className="px-8 py-3 bg-[#9b8579] text-white rounded-md hover:bg-[#876f63] transition-colors duration-300 shadow-md">
                  Daftar Sekarang
                </button>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
