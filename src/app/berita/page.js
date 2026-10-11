import Link from "next/link";
import Image from "next/image";
import { daftarBerita } from "./data";

export default function BeritaPage() {
  const beritaUtama = daftarBerita[0];
  const beritaLainnya = daftarBerita.slice(1, 7);

  return (
    <main className="pixel-background min-h-screen">
      {/* HEADER */}
      <section className="border-b-4 border-[#123D70] bg-white px-4 py-6 text-center md:py-7">
        <div className="mx-auto max-w-4xl">
          <h1 className="text-2xl font-extrabold tracking-tight text-[#123D70] md:text-3xl">
            Berita Sekolah
          </h1>

          <div className="mx-auto mt-3 h-1 w-14 rounded-full bg-[#FFD52A]" />

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-slate-600 md:text-base">
            Ikuti informasi terbaru, kegiatan, dan berbagai prestasi SMA
            Negeri 1 Rembang.
          </p>

          <div className="mt-3 flex items-center justify-center gap-2 text-xs text-slate-500 md:text-sm">
            <Link href="/" className="transition hover:text-[#123D70]">
              Beranda
            </Link>

            <span className="text-[#123D70]/50">/</span>

            <span className="font-medium text-[#123D70]">Berita</span>
          </div>
        </div>
      </section>

      {/* BERITA UTAMA DAN SIDEBAR */}
      <section className="mx-auto max-w-7xl px-4 pt-8 md:px-6 md:pt-10">
        <div className="grid grid-cols-1 items-stretch gap-6 lg:grid-cols-3">
          {/* BERITA UTAMA */}
          <div className="min-w-0 lg:col-span-2">
            {beritaUtama && (
              <article className="h-full overflow-hidden rounded-2xl border-[3px] border-[#123D70] bg-white shadow-[4px_4px_0_#123D70] transition duration-300 hover:-translate-y-1 hover:shadow-[6px_6px_0_#123D70]">
                <Link
                  href={`/berita/${beritaUtama.id}`}
                  className="group block h-full"
                >
                  <div className="relative h-full min-h-[390px] w-full overflow-hidden bg-slate-100 md:min-h-[500px]">
                    <Image
                      src={beritaUtama.gambar}
                      alt={beritaUtama.judul}
                      fill
                      priority
                      className="object-cover transition duration-500 group-hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 66vw"
                    />

                    {/* LAPISAN GELAP DI ATAS FOTO */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/5" />

                    {/* JUDUL BERITA UTAMA: WARNA PUTIH */}
                    <div className="absolute inset-x-0 bottom-0 z-10 p-5 md:p-8">
                      <h2
                        className="!text-white text-xl font-extrabold leading-snug drop-shadow-[0_2px_5px_rgba(0,0,0,1)] md:text-3xl"
                        style={{ color: "#FFFFFF" }}
                      >
                        {beritaUtama.judul}
                      </h2>

                      <p className="mt-3 line-clamp-3 !text-white text-sm leading-6 drop-shadow-md md:text-base md:leading-7">
                        {beritaUtama.ringkasan}
                      </p>

                      <p className="mt-4 !text-white text-xs font-semibold md:text-sm">
                        {beritaUtama.tanggal}
                      </p>
                    </div>
                  </div>
                </Link>
              </article>
            )}
          </div>

          {/* SIDEBAR */}
          <aside className="flex min-w-0 flex-col gap-4">
            {/* PILIHAN BERITA */}
            <section className="rounded-2xl border-[3px] border-[#123D70] bg-white p-4 shadow-[3px_3px_0_#123D70]">
              <div className="mb-2">
                <p className="text-[9px] font-bold uppercase tracking-wider text-[#123D70]">
                  Jangan Lewatkan
                </p>

                <h2 className="mt-1 text-sm font-extrabold text-slate-800">
                  Pilihan Berita
                </h2>

                <div className="mt-2 h-1 w-7 rounded-full bg-[#FFD52A]" />
              </div>

              <div className="divide-y divide-slate-200">
                {daftarBerita.slice(0, 3).map((berita) => (
                  <Link
                    key={berita.id}
                    href={`/berita/${berita.id}`}
                    className="group flex gap-3 py-3 last:pb-0"
                  >
                    <div className="relative h-[58px] w-[68px] flex-shrink-0 overflow-hidden rounded-lg border-2 border-[#123D70] bg-slate-100">
                      <Image
                        src={berita.gambar}
                        alt={berita.judul}
                        fill
                        className="object-cover transition duration-300 group-hover:scale-105"
                        sizes="68px"
                      />
                    </div>

                    <div className="min-w-0 flex-1">
                      <p className="text-[9px] font-medium text-slate-500">
                        {berita.tanggal}
                      </p>

                      <h3 className="mt-1 line-clamp-2 text-[11px] font-bold leading-snug text-slate-700 transition group-hover:text-[#123D70]">
                        {berita.judul}
                      </h3>
                    </div>
                  </Link>
                ))}
              </div>
            </section>

            {/* TENTANG SEKOLAH */}
            <section className="relative flex flex-1 flex-col justify-center overflow-hidden rounded-2xl border-[3px] border-[#123D70] bg-[#123D70] p-5 shadow-[3px_3px_0_#FFD52A] md:p-6">
              <div className="absolute -right-6 -top-6 h-16 w-16 rounded-xl border-4 border-white/10" />

              <div className="relative">
                {/* LABEL SMANSA REMBANG: WARNA KUNING */}
                <p
                  className="!text-[#FFD52A] text-[10px] font-extrabold uppercase tracking-wider"
                  style={{ color: "#FFD52A" }}
                >
                  SMANSA REMBANG
                </p>

                {/* JUDUL KOTAK: WARNA KUNING */}
                <h2
                  className="mt-3 !text-[#FFD52A] text-base font-extrabold leading-tight md:text-lg"
                  style={{ color: "#FFD52A" }}
                >
                  Terus Ikuti Kabar Sekolah!
                </h2>

                <p className="mt-3 text-xs leading-6 text-white md:text-sm">
                  Ikuti kabar kegiatan dan perkembangan SMA Negeri 1 Rembang.
                </p>

                <Link
                  href="/about"
                  className="mt-4 inline-flex items-center gap-2 rounded-lg border-2 border-[#FFD52A] bg-[#FFD52A] px-4 py-2.5 text-xs font-bold text-[#123D70] transition hover:bg-yellow-300"
                >
                  Tentang Sekolah →
                </Link>
              </div>
            </section>
          </aside>
        </div>
      </section>

      {/* BERITA TERBARU */}
      <section className="mx-auto max-w-7xl px-4 pb-12 pt-10 md:px-6 md:pt-12">
        <div className="mb-6">
          <h2 className="text-xl font-extrabold text-[#123D70] md:text-2xl">
            Berita Terbaru
          </h2>

          <div className="mt-2 h-1 w-12 rounded-full bg-[#FFD52A]" />
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {beritaLainnya.map((berita) => (
            <article
              key={berita.id}
              className="group min-w-0 overflow-hidden rounded-2xl border-[3px] border-[#123D70] bg-white shadow-[3px_3px_0_#123D70] transition duration-300 hover:-translate-y-1 hover:shadow-[5px_5px_0_#123D70]"
            >
              <Link href={`/berita/${berita.id}`} className="block">
                <div className="relative aspect-[16/9] overflow-hidden bg-slate-100">
                  <Image
                    src={berita.gambar}
                    alt={berita.judul}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
              </Link>

              <div className="p-4 md:p-5">
                <p className="text-xs text-slate-500">
                  {berita.tanggal}
                </p>

                <h3 className="mt-3 line-clamp-2 text-base font-bold leading-snug text-slate-800 transition hover:text-[#123D70] md:text-lg">
                  <Link href={`/berita/${berita.id}`}>
                    {berita.judul}
                  </Link>
                </h3>

                <p className="mt-2 line-clamp-3 text-sm leading-6 text-slate-600">
                  {berita.ringkasan}
                </p>

                <Link
                  href={`/berita/${berita.id}`}
                  className="mt-4 inline-flex items-center gap-2 border-b-2 border-[#FFD52A] pb-1 text-sm font-bold text-[#123D70] transition hover:text-blue-800"
                >
                  Baca selengkapnya
                  <span
                    className="text-xl font-black leading-none"
                    aria-hidden="true"
                  >
                    ➜
                  </span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}