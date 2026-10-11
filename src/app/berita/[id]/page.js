
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { daftarBerita } from "../data";

export default async function DetailBeritaPage({ params }) {
  const { id } = await params;

  const berita = daftarBerita.find(
    (item) => String(item.id) === String(id)
  );

  if (!berita) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-slate-50">
      {/* HEADER DETAIL BERITA */}
      <section className="bg-white px-4 py-8 md:py-10">
        <div className="mx-auto max-w-4xl">
          <div className="flex items-center gap-2 text-sm text-slate-400">
            <Link
              href="/"
              className="transition hover:text-[#123D70]"
            >
              Beranda
            </Link>

            <span>/</span>

            <Link
              href="/berita"
              className="transition hover:text-[#123D70]"
            >
              Berita
            </Link>

            <span>/</span>

            <span className="font-medium text-[#123D70]">
              Detail Berita
            </span>
          </div>

          <div className="mt-6">
            <span className="inline-block rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-[#123D70]">
              {berita.kategori}
            </span>

            <h1 className="mt-4 text-2xl font-extrabold leading-tight text-[#123D70] md:text-4xl">
              {berita.judul}
            </h1>

            <p className="mt-4 text-sm text-slate-500">
              {berita.tanggal}
            </p>
          </div>
        </div>
      </section>

      {/* ISI BERITA */}
      <section className="px-4 py-8 md:py-10">
        <article className="mx-auto max-w-4xl overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          {/* GAMBAR BERITA */}
          <div className="relative aspect-[16/9] w-full bg-slate-100">
            <Image
              src={berita.gambar}
              alt={berita.judul}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 896px"
            />
          </div>

          {/* DESKRIPSI DAN ISI */}
          <div className="p-5 md:p-8">
            <p className="text-base font-medium leading-8 text-slate-600">
              {berita.ringkasan}
            </p>

            {berita.isi && (
              <div className="mt-6 whitespace-pre-line text-sm leading-8 text-slate-700 md:text-base">
                {berita.isi}
              </div>
            )}

            {/* KEMBALI KE DAFTAR BERITA */}
            <div className="mt-8 border-t border-slate-100 pt-6">
              <Link
                href="/berita"
                className="inline-flex items-center gap-2 rounded-lg bg-[#123D70] px-5 py-3 text-sm font-bold text-white transition hover:bg-blue-900"
              >
                <span aria-hidden="true">←</span>
                Kembali ke Berita
              </Link>
            </div>
          </div>
        </article>
      </section>
    </main>
  );
}