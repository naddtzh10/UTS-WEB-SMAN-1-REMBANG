
"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { daftarBerita } from "./berita/data";
import { daftarPrestasi } from "./prestasi/data";

function Icon({ name, className = "h-5 w-5" }) {
  const icons = {
    arrow: (
      <path
        d="M5 12h14m-7-7 7 7-7 7"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
    star: (
      <path
        d="m12 3 2.7 5.5 6.1.9-4.4 4.3 1 6.1-5.4-2.9-5.4 2.9 1-6.1-4.4-4.3 6.1-.9L12 3Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
    play: <path d="m9 6 10 6-10 6V6Z" fill="currentColor" />,
    trophy: (
      <>
        <path
          d="M8 4h8v5a4 4 0 0 1-8 0V4Z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8 6H4v2a4 4 0 0 0 4 4m8-6h4v2a4 4 0 0 1-4 4M12 13v4m-4 3h8m-7-3h6v3H9v-3Z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </>
    ),
    pencil: (
      <>
        <path
          d="m15 5 4 4M4 20l4.5-1 10.8-10.8a2.1 2.1 0 0 0-3-3L5.5 16 4 20Z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="m13.5 6.5 4 4M4 20h16"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </>
    ),
    laptop: (
      <>
        <rect
          x="4"
          y="4"
          width="16"
          height="12"
          rx="1.5"
          stroke="currentColor"
          strokeWidth="1.8"
        />
        <path
          d="M2 20h20l-2-4H4l-2 4Z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </>
    ),
    graduation: (
      <>
        <path
          d="m2 9 10-5 10 5-10 5L2 9Z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M6 11v5c3.5 3 8.5 3 12 0v-5M22 9v6"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </>
    ),
  };

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      {icons[name] || icons.arrow}
    </svg>
  );
}

function SectionHeading({ title, description, light = false }) {
  return (
    <div className="mb-8 text-center sm:mb-10">
      <p
        className={`mb-3 text-xs font-extrabold uppercase tracking-[0.2em] ${
          light ? "text-[#FFD52A]" : "text-[#07529A]"
        }`}
      >
        SMA Negeri 1 Rembang
      </p>

      <h2
        className={`text-2xl font-extrabold tracking-tight sm:text-3xl lg:text-4xl ${
          light ? "text-white" : "text-[#123D70]"
        }`}
      >
        {title}
      </h2>

      {description && (
        <p
          className={`mx-auto mt-3 max-w-2xl text-sm leading-7 sm:text-base ${
            light ? "text-white/85" : "text-slate-600"
          }`}
        >
          {description}
        </p>
      )}

      <div className="mx-auto mt-5 flex w-16 items-center justify-center gap-1.5">
        <span className="h-1.5 w-8 rounded-full bg-[#FFD52A]" />
        <span className="h-1.5 w-3 rounded-full bg-[#07529A]" />
      </div>
    </div>
  );
}

function VideoProfil() {
  const [videoError, setVideoError] = useState(false);

  return (
    <div className="overflow-hidden rounded-2xl border border-white bg-white p-2 shadow-[0_8px_30px_rgba(18,61,112,0.08)] sm:p-3">
      {!videoError ? (
        <iframe
          className="aspect-video w-full rounded-xl"
          src="https://www.youtube-nocookie.com/embed/Ic1VVGJuyzU"
          title="Video Profil SMA Negeri 1 Rembang"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          onError={() => setVideoError(true)}
        />
      ) : (
        <div className="flex aspect-video flex-col items-center justify-center rounded-xl bg-[#F1F6FC] p-6 text-center">
          <Icon name="play" className="mb-3 h-10 w-10 text-[#07529A]" />
          <p className="font-bold text-[#123D70]">
            Video Profil SMANSA
          </p>
          <a
            href="https://www.youtube.com/watch?v=Ic1VVGJuyzU"
            target="_blank"
            rel="noreferrer"
            className="mt-3 font-bold text-[#07529A] underline"
          >
            Tonton di YouTube
          </a>
        </div>
      )}
    </div>
  );
}

export default function Home() {
  const beritaUnggulan = daftarBerita.slice(0, 3);
  const prestasiUnggulan = daftarPrestasi.slice(0, 4);

  const cardClass =
    "group overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-[0_5px_0_rgba(18,61,112,0.08),0_8px_20px_rgba(18,61,112,0.07)] transition-all duration-200 hover:-translate-y-1 hover:border-[#FFD52A] hover:shadow-[0_7px_0_rgba(18,61,112,0.10),0_14px_28px_rgba(18,61,112,0.13)]";

  const buttonClass =
    "inline-flex items-center justify-center gap-2 rounded-xl border-2 border-[#123D70] bg-[#FFD52A] px-5 py-3 text-sm font-extrabold text-[#123D70] shadow-[0_4px_0_#123D70] transition-all duration-150 hover:-translate-y-0.5 hover:bg-[#FFE36A] hover:shadow-[0_5px_0_#123D70] active:translate-y-1 active:shadow-none";

  return (
    <main className="overflow-hidden bg-transparent text-[#24364B]">
      {/* 1. FOTO GEDUNG SEKOLAH */}
      <section className="px-4 pt-5 sm:px-7 sm:pt-6 lg:px-10">
        <div className="mx-auto max-w-[1320px] rounded-[24px] border-4 border-white bg-white p-1.5 shadow-[0_8px_0_rgba(18,61,112,0.06),0_12px_30px_rgba(18,61,112,0.10)] sm:p-2">
          <div className="relative h-[240px] overflow-hidden rounded-[17px] bg-[#EAF1F9] sm:h-[340px] lg:h-[440px]">
            <Image
              src="/images/smansa%20depan%20hd.jpg"
              alt="Gedung SMA Negeri 1 Rembang"
              fill
              priority
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 92vw, 1320px"
              className="object-cover object-center"
            />
          </div>
        </div>
      </section>

      {/* 2. TENTANG KAMI DAN VIDEO PROFIL */}
      <section className="px-4 pb-10 pt-12 sm:px-8 sm:pb-14 sm:pt-16 lg:px-12">
        <div className="mx-auto grid max-w-6xl items-center gap-8 lg:grid-cols-2 lg:gap-12">
          <div>
            <p className="mb-3 text-xs font-extrabold uppercase tracking-[0.2em] text-[#07529A]">
              Tentang Kami
            </p>

            <h2 className="text-3xl font-extrabold leading-tight text-[#123D70] sm:text-4xl">
              Mengenal SMANSA
              <br />
              Lebih Dekat
            </h2>

            <p className="mt-5 text-sm leading-7 text-slate-600 sm:text-base">
              SMA Negeri 1 Rembang berkomitmen mendukung perkembangan peserta
              didik melalui pendidikan, pembentukan karakter, kegiatan sekolah,
              dan pencapaian prestasi.
            </p>

            <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
              Melalui website ini, pengunjung dapat mengenal profil sekolah
              serta mengikuti informasi dan kegiatan terbaru dari SMANSA.
            </p>

            <Link href="/about" className={`${buttonClass} mt-6`}>
              Selengkapnya <Icon name="arrow" />
            </Link>
          </div>

          <VideoProfil />
        </div>
      </section>

      {/* 3. SAMBUTAN KEPALA SEKOLAH */}
      <section className="px-4 py-8 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-6xl items-center gap-8 overflow-hidden rounded-[24px] border border-white bg-[#EAF2FC] p-5 shadow-[0_6px_0_rgba(18,61,112,0.08),0_12px_30px_rgba(18,61,112,0.10)] sm:p-8 md:grid-cols-[0.8fr_1.2fr] md:gap-10 lg:p-10">
          <div className="mx-auto w-full max-w-sm">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border-4 border-white bg-white shadow-[0_5px_0_rgba(18,61,112,0.12),0_8px_18px_rgba(18,61,112,0.10)]">
              <Image
                src="/images/kepala-sekolah.jpg"
                alt="Bu Endang Sri Lestari, S.Pd., Kepala SMA Negeri 1 Rembang"
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
          </div>

          <div>
            <span className="inline-flex rounded-lg bg-white px-3 py-1.5 text-xs font-extrabold uppercase tracking-[0.15em] text-[#07529A] shadow-sm">
              Kepala Sekolah
            </span>

            <h2 className="mt-3 text-xl font-extrabold text-[#123D70] sm:text-2xl">
              Bu Endang Sri Lestari, S.Pd.
            </h2>

            <h3 className="mt-6 text-2xl font-extrabold leading-tight text-[#123D70] sm:text-3xl">
              Selamat Datang di SMA N 1 Rembang
            </h3>

            <p className="mt-5 text-sm leading-7 text-slate-700 sm:text-base">
              SMA Negeri 1 Rembang, tempat di mana prestasi akademik,
              keterampilan, dan akhlak mulia berkembang bersama untuk membentuk
              generasi penerus bangsa yang unggul dan berkarakter.
            </p>

            <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
              Staf dan para pendidik kami berkomitmen untuk memberdayakan siswa
              kami untuk mencapai potensi maksimalnya. Didukung dengan
              fasilitas, kami yakin SMAN 1 Rembang adalah tempat yang tepat
              untuk mempersiapkan generasi muda untuk masa depan.
            </p>

            <div className="mt-6 flex items-center gap-2">
              <span className="h-1.5 w-12 rounded-full bg-[#FFD52A]" />
              <span className="h-1.5 w-5 rounded-full bg-[#07529A]" />
            </div>
          </div>
        </div>
      </section>

      {/* 4. EMPAT KEUNGGULAN SEKOLAH */}
      <section className="px-4 py-10 sm:px-8 sm:py-12 lg:px-12">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              judul: "Berprestasi",
              deskripsi:
                "Tempat para siswa mengukir prestasi di berbagai bidang. Bergabunglah untuk melanjutkan langkah menuju masa depan yang gemilang.",
              ikon: "trophy",
            },
            {
              judul: "Kreatif",
              deskripsi:
                "Ruang untuk mengembangkan kreativitas dan bakat siswa. Temukan peluang baru untuk tumbuh dan berkarya bersama kami.",
              ikon: "pencil",
            },
            {
              judul: "Berteknologi",
              deskripsi:
                "SMA N 1 Rembang, didukung teknologi modern dan fasilitas lengkap untuk mendukung pembelajaran yang inovatif dan nyaman.",
              ikon: "laptop",
            },
            {
              judul: "Berakhlak Mulia",
              deskripsi:
                "SMA Negeri 1 Rembang, tempat tumbuhnya generasi berprestasi yang menjunjung tinggi nilai-nilai akhlak mulia dalam setiap langkahnya.",
              ikon: "graduation",
            },
          ].map((item) => (
            <div
              key={item.judul}
              className="group flex flex-col items-center rounded-2xl border border-slate-200 bg-white px-5 py-7 text-center shadow-[0_5px_0_rgba(18,61,112,0.08),0_8px_18px_rgba(18,61,112,0.06)] transition-all duration-200 hover:-translate-y-1 hover:border-[#FFD52A] hover:shadow-[0_7px_0_rgba(18,61,112,0.10),0_14px_25px_rgba(18,61,112,0.10)]"
            >
              <div className="flex h-[76px] w-[76px] items-center justify-center rounded-2xl border border-[#DCE8F6] bg-transparent text-[#07529A] transition-all duration-200 group-hover:border-[#FFD52A] group-hover:bg-[#FFF9DF] group-hover:text-[#123D70]">
                <Icon name={item.ikon} className="h-9 w-9" />
              </div>

              <h3 className="mt-5 text-lg font-extrabold text-[#123D70]">
                {item.judul}
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-600">
                {item.deskripsi}
              </p>

              <div className="mt-5 h-1 w-10 rounded-full bg-[#FFD52A] transition-all duration-200 group-hover:w-16" />
            </div>
          ))}
        </div>
      </section>

      {/* 5. BERITA TERBARU */}
      <section className="bg-transparent px-4 py-12 sm:px-8 sm:py-16 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            title="Kabar Terbaru SMANSA"
            description="Ikuti berita, informasi, dan kegiatan terbaru SMA Negeri 1 Rembang."
          />

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {beritaUnggulan.map((berita) => (
              <Link
                key={berita.id}
                href={`/berita/${berita.slug}`}
                className={cardClass}
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-[#EDF4FC]">
                  {berita.gambar && (
                    <Image
                      src={berita.gambar}
                      alt={berita.judul}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  )}
                </div>

                <div className="p-5">
                  {berita.tanggal && (
                    <p className="text-xs font-semibold text-[#07529A]">
                      {berita.tanggal}
                    </p>
                  )}

                  <h3 className="mt-2 line-clamp-2 text-lg font-extrabold leading-snug text-[#123D70]">
                    {berita.judul}
                  </h3>

                  <p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-600">
                    {berita.ringkasan || berita.deskripsi || berita.isi}
                  </p>

                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-extrabold text-[#07529A]">
                    Baca Selengkapnya <Icon name="arrow" />
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link href="/berita" className={buttonClass}>
              Lihat Semua Berita <Icon name="arrow" />
            </Link>
          </div>
        </div>
      </section>

      {/* 6. GALERI PRESTASI */}
      <section className="bg-transparent px-4 py-12 text-[#123D70] sm:px-8 sm:py-16 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            title="Prestasi SMANSA"
            description="Beberapa dokumentasi pencapaian dan kegiatan siswa SMA Negeri 1 Rembang."
          />

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 lg:gap-5">
            {prestasiUnggulan.map((prestasi, index) => (
              <Link
                key={prestasi.id}
                href="/prestasi"
                aria-label={`Lihat galeri prestasi ${index + 1}`}
                className="group block overflow-hidden rounded-2xl border border-slate-200 bg-white p-2 shadow-[0_5px_0_rgba(18,61,112,0.08),0_8px_18px_rgba(18,61,112,0.06)] transition-all duration-200 hover:-translate-y-1 hover:border-[#FFD52A] hover:shadow-[0_7px_0_rgba(18,61,112,0.10),0_14px_25px_rgba(18,61,112,0.12)]"
              >
                <div className="relative aspect-[3/4] overflow-hidden rounded-xl bg-[#F4F8FC]">
                  {prestasi.gambar && (
                    <Image
                      src={prestasi.gambar}
                      alt={`Dokumentasi prestasi siswa ${index + 1}`}
                      fill
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                      className="object-contain transition-transform duration-300 group-hover:scale-[1.03]"
                    />
                  )}
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-9 text-center">
            <Link href="/prestasi" className={buttonClass}>
              <Icon name="star" className="h-5 w-5" />
              Lihat Semua Prestasi
            </Link>
          </div>
        </div>
      </section>

      {/* 7. AJAKAN */}
      <section className="px-4 py-12 sm:px-8 sm:py-16 lg:px-12">
        <div className="mx-auto max-w-6xl overflow-hidden rounded-[24px] border border-white bg-[#EAF2FC]/90 p-6 text-center shadow-[0_5px_0_rgba(18,61,112,0.06),0_10px_25px_rgba(18,61,112,0.07)] sm:p-10 lg:p-12">
          <span className="inline-flex rounded-xl border border-[#DCE8F6] bg-white px-4 py-2 text-xs font-extrabold uppercase tracking-wider text-[#07529A] shadow-[0_3px_0_rgba(18,61,112,0.08)]">
            Jelajahi SMANSA
          </span>

          <h2 className="mx-auto mt-5 max-w-2xl text-2xl font-extrabold leading-tight text-[#123D70] sm:text-4xl">
            Kenali Lebih Dekat SMA Negeri 1 Rembang
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
            Temukan informasi sekolah, berita terbaru, dan berbagai pencapaian
            siswa melalui halaman website SMANSA.
          </p>

          <div className="mt-7 flex flex-wrap justify-center gap-4">
            <Link href="/about" className={buttonClass}>
              Profil Sekolah <Icon name="arrow" />
            </Link>

            <Link
              href="/prestasi"
              className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-[#123D70] bg-white px-5 py-3 text-sm font-bold text-[#123D70] shadow-[0_4px_0_#123D70] transition-all duration-150 hover:-translate-y-0.5 hover:bg-[#F7FAFE] active:translate-y-1 active:shadow-none"
            >
              Galeri Prestasi <Icon name="star" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}