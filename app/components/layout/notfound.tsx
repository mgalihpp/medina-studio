export function NotFound() {
  return (
    <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        <div className="inline-block bg-main-light text-secondary-color px-4 py-1 rounded-full text-sm font-medium mb-4">
          404
        </div>
        <h1 className="mt-4 text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl">
          Halaman tidak ditemukan
        </h1>
        <p className="mt-6 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
          Maaf, kami tidak dapat menemukan halaman yang Anda cari.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <a
            href="/#"
            className="rounded-md bg-secondary-color px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-secondary-color/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary-color"
          >
            Ke halaman utama
          </a>
          <a
            href="mailto:cs@medinastudio.id"
            className="text-sm font-semibold text-gray-900"
          >
            Contact support <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </div>
    </main>
  );
}
