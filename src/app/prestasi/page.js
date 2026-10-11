
import Image from "next/image";
import Link from "next/link";
import { daftarPrestasi } from "./data";

export default function PrestasiPage() {
  return (
    <main className="pixel-background min-h-screen pb-16 text-[#123D70]">
      {/* Header */}
      <section className="border-b-2 border-[#123D70]/15 bg-white">
        <div className="mx-auto max-w-7xl px-5 py-5 text-center sm:px-8 sm:py-6">
          <p className="text-xs font-medium text-slate-500 sm:text-sm">
            <Link
              href="/"
              className="transition hover:text-[#123D70]"
            >
              Beranda
            </Link>

            <span className="mx-2 text-[#D6A900]">/</span>

            <span className="font-semibold text-[#123D70]">
              Prestasi
            </span>
          </p>

          <h1 className="mt-3 text-2xl font-extrabold uppercase leading-tight tracking-tight text-[#123D70] sm:text-3xl md:text-4xl">
            PRESTASI SMANSA
          </h1>

          <p className="mx-auto mt-3 max-w-2xl text-xs leading-6 text-slate-600 sm:text-sm sm:leading-7">
            Dokumentasi pencapaian dan kebanggaan siswa SMA Negeri 1
            Rembang.
          </p>

          <div className="mx-auto mt-4 h-1 w-14 rounded-full bg-[#FFD52A]" />
        </div>
      </section>

      {/* Galeri Prestasi */}
      <section className="mx-auto max-w-7xl px-5 pt-8 sm:px-8 sm:pt-12">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5 lg:grid-cols-4">
          {daftarPrestasi.map((item, index) => (
            <a
              key={item.id}
              href={item.gambar}
              target="_blank"
              rel="noreferrer"
              aria-label={`Lihat foto prestasi ${index + 1} dalam ukuran besar`}
              className="group relative block overflow-hidden rounded-xl border-[3px] border-[#123D70] bg-white p-1.5 shadow-[4px_4px_0_#123D70] transition duration-300 hover:-translate-y-1 hover:border-[#FFD52A] hover:shadow-[6px_6px_0_#123D70] sm:p-2"
            >
              <div className="relative aspect-[3/4] overflow-hidden rounded-lg bg-[#F3F8FD]">
                <Image
                  src={item.gambar}
                  alt={`Dokumentasi prestasi SMA Negeri 1 Rembang ${index + 1}`}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  className="rounded-lg object-contain transition duration-300 group-hover:scale-[1.02]"
                />

                {/* Aksen kuning saat foto diarahkan */}
                <div className="absolute bottom-0 left-0 h-1.5 w-full rounded-b-lg bg-[#FFD52A] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                {/* Ikon untuk melihat foto */}
                <div className="absolute right-2 top-2 flex h-9 w-9 items-center justify-center rounded-lg border-2 border-white bg-[#123D70] text-white shadow-[3px_3px_0_#FFD52A] opacity-100 sm:opacity-0 sm:transition-opacity sm:group-hover:opacity-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="h-5 w-5"
                    aria-hidden="true"
                  >
                    <circle cx="11" cy="11" r="7" />
                    <path
                      strokeLinecap="round"
                      d="m16 16 4 4m-9-12v6m-3-3h6"
                    />
                  </svg>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Tombol Kembali */}
        <div className="mt-10 border-t-2 border-[#123D70]/20 pt-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-xl border-2 border-[#123D70] bg-white px-5 py-3 text-sm font-bold text-[#123D70] shadow-[3px_3px_0_#123D70] transition hover:-translate-y-0.5 hover:border-[#FFD52A] hover:bg-[#FFD52A] hover:shadow-[4px_4px_0_#123D70]"
          >
            <span aria-hidden="true">←</span>
            Kembali ke Beranda
          </Link>
        </div>
      </section>
    </main>
  );
}

