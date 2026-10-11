
"use client";

import Link from "next/link";
import { useState } from "react";

const alamatSekolah =
  "Jl. Gajah Mada No. 5, Mundu, Magersari, Kecamatan Rembang, Kabupaten Rembang, Jawa Tengah 59214";

const emailSekolah = "sma1rbg@yahoo.co.id";
const teleponSekolah = "(0295) 691375";

const lokasiMaps =
  "https://www.google.com/maps?q=SMA+Negeri+1+Rembang+Jl+Gajah+Mada+No+5&output=embed";

const urlMaps =
  "https://www.google.com/maps/search/?api=1&query=SMA+Negeri+1+Rembang+Jl+Gajah+Mada+No+5";

function Ikon({ nama, className = "h-6 w-6" }) {
  const props = {
    className,
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.7,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    viewBox: "0 0 24 24",
    "aria-hidden": true,
  };

  if (nama === "pin") {
    return (
      <svg {...props}>
        <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
        <circle cx="12" cy="10" r="2.5" />
      </svg>
    );
  }

  if (nama === "mail") {
    return (
      <svg {...props}>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3 7 9 6 9-6" />
      </svg>
    );
  }

  if (nama === "phone") {
    return (
      <svg {...props}>
        <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.4 19.4 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.5 2.1L8 8.9a16 16 0 0 0 6 6l1.2-1.3a2 2 0 0 1 2.1-.5c.9.3 1.9.6 2.9.7a2 2 0 0 1 1.8 2.1Z" />
      </svg>
    );
  }

  if (nama === "clock") {
    return (
      <svg {...props}>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </svg>
    );
  }

  return (
    <svg {...props}>
      <path d="M4 12h16M13 5l7 7-7 7" />
    </svg>
  );
}

const informasiKontak = [
  {
    judul: "Alamat Sekolah",
    isi: alamatSekolah,
    ikon: "pin",
    href: urlMaps,
    tombol: "Lihat lokasi",
  },
  {
    judul: "Email",
    isi: emailSekolah,
    ikon: "mail",
    href: `mailto:${emailSekolah}`,
    tombol: "Kirim email",
  },
  {
    judul: "Telepon",
    isi: teleponSekolah,
    ikon: "phone",
    href: "tel:+62295691375",
    tombol: "Hubungi sekolah",
  },
];

export default function KontakPage() {
  const [form, setForm] = useState({
    nama: "",
    email: "",
    subjek: "",
    pesan: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setForm((dataSebelumnya) => ({
      ...dataSebelumnya,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    const isiEmail = [
      `Nama: ${form.nama}`,
      `Email pengirim: ${form.email}`,
      "",
      "Pesan:",
      form.pesan,
    ].join("\n");

    const tujuanEmail =
      `mailto:${emailSekolah}` +
      `?subject=${encodeURIComponent(form.subjek)}` +
      `&body=${encodeURIComponent(isiEmail)}`;

    window.location.href = tujuanEmail;
  }

  return (
    <main className="pixel-background min-h-screen">
      {/* HEADER KONTAK */}
      <section className="border-b-2 border-[#123D70]/15 bg-white px-4 py-5 text-center">
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-2">
          <h1 className="text-xl font-extrabold leading-tight tracking-tight text-[#123D70] sm:text-2xl">
            Kontak
          </h1>

          <div className="h-1 w-12 !rounded-full bg-[#FFD52A]" />

          <p className="max-w-2xl text-xs leading-5 text-slate-600 sm:text-sm">
            Hubungi SMA Negeri 1 Rembang untuk informasi, pertanyaan,
            dan keperluan lainnya.
          </p>

          <nav className="flex items-center gap-2 pt-1 text-xs text-slate-500">
            <Link href="/" className="transition hover:text-[#123D70]">
              Beranda
            </Link>

            <span className="text-[#123D70]/50">/</span>

            <span className="font-medium text-[#123D70]">Kontak</span>
          </nav>
        </div>
      </section>

      {/* FORMULIR DAN INFORMASI KONTAK */}
      <section className="mx-auto max-w-7xl px-4 py-10 md:px-6 md:py-14">
        <div className="grid grid-cols-1 items-start gap-7 lg:grid-cols-5 lg:gap-8">
          {/* FORMULIR */}
          <div className="!rounded-2xl border-[3px] border-[#123D70] bg-white p-5 shadow-[4px_4px_0_#123D70] md:p-8 lg:col-span-3">
            <p className="text-xs font-bold uppercase tracking-wider text-[#123D70]">
              Get In Touch
            </p>

            <h2 className="mt-2 text-2xl font-extrabold text-slate-800">
              Kirim Pesan kepada Kami
            </h2>

            <p className="mt-3 text-sm leading-6 text-slate-600">
              Silakan isi formulir berikut untuk menyampaikan pertanyaan
              atau pesan kepada SMA Negeri 1 Rembang.
            </p>

            <form onSubmit={handleSubmit} className="mt-7 space-y-5">
              <div>
                <label
                  htmlFor="nama"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Nama Lengkap
                </label>

                <input
                  id="nama"
                  name="nama"
                  type="text"
                  autoComplete="name"
                  required
                  value={form.nama}
                  onChange={handleChange}
                  placeholder="Masukkan nama lengkap"
                  className="w-full !rounded-xl border-2 border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-[#123D70] focus:bg-white focus:ring-2 focus:ring-blue-100"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Email
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="nama@email.com"
                  className="w-full !rounded-xl border-2 border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-[#123D70] focus:bg-white focus:ring-2 focus:ring-blue-100"
                />
              </div>

              <div>
                <label
                  htmlFor="subjek"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Subjek
                </label>

                <input
                  id="subjek"
                  name="subjek"
                  type="text"
                  required
                  value={form.subjek}
                  onChange={handleChange}
                  placeholder="Subjek pesan"
                  className="w-full !rounded-xl border-2 border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-[#123D70] focus:bg-white focus:ring-2 focus:ring-blue-100"
                />
              </div>

              <div>
                <label
                  htmlFor="pesan"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Pesan
                </label>

                <textarea
                  id="pesan"
                  name="pesan"
                  rows={5}
                  required
                  value={form.pesan}
                  onChange={handleChange}
                  placeholder="Tuliskan pesan yang ingin disampaikan..."
                  className="w-full !rounded-xl resize-y border-2 border-slate-200 bg-slate-50 px-4 py-3 text-sm leading-6 text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-[#123D70] focus:bg-white focus:ring-2 focus:ring-blue-100"
                />
              </div>

              <button
                type="submit"
                className="inline-flex !rounded-xl w-full items-center justify-center gap-2 border-[3px] border-[#123D70] bg-[#123D70] px-6 py-3.5 text-sm font-bold text-white shadow-[3px_3px_0_#FFD52A] transition hover:-translate-y-0.5 hover:bg-blue-900 sm:w-auto"
              >
                Kirim Sekarang
                <Ikon nama="arrow" className="h-4 w-4" />
              </button>

              <p className="text-xs leading-5 text-slate-500">
                Tombol ini akan membuka aplikasi email pada perangkatmu
                dengan pesan yang sudah disiapkan. Pesan belum terkirim
                sampai kamu mengirimkannya melalui aplikasi email.
              </p>
            </form>
          </div>

          {/* INFORMASI KONTAK */}
          <aside className="space-y-4 lg:col-span-2">
            <div className="!rounded-2xl border-[3px] border-[#123D70] bg-[#123D70] p-6 text-white shadow-[4px_4px_0_#FFD52A] md:p-7">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-blue-200">
                Informasi Sekolah
              </p>

              {/* Gunakan p agar tidak terkena aturan warna global h2 */}
              <p
                className="mt-2 text-2xl font-extrabold"
                style={{ color: "#FFD52A" }}
              >
                Hubungi Kami
              </p>

              <p className="mt-3 text-sm leading-7 text-blue-100">
                Kami menyediakan informasi kontak untuk membantu
                pengunjung menemukan lokasi dan menghubungi sekolah.
              </p>

              <div className="mt-5 flex items-center gap-3 !rounded-xl border-t-2 border-white/15 pt-5">
                <div className="!rounded-xl border-2 border-white/20 bg-white/10 p-2.5">
                  <Ikon nama="clock" className="h-5 w-5 text-[#FFD52A]" />
                </div>

                <div>
                  <p className="text-sm font-bold">
                    SMA Negeri 1 Rembang
                  </p>

                  <p className="mt-1 text-xs text-blue-100">
                    Berprestasi, Berjati Diri, dan Berakhlak Mulia
                  </p>
                </div>
              </div>
            </div>

            {informasiKontak.map((item) => (
              <article
                key={item.judul}
                className="!rounded-2xl border-[3px] border-[#123D70] bg-white p-5 shadow-[3px_3px_0_#123D70] transition hover:-translate-y-0.5 hover:shadow-[4px_4px_0_#123D70]"
              >
                <div className="flex items-start gap-4">
                  <div className="shrink-0 !rounded-xl border-2 border-[#123D70] bg-[#EAF6FF] p-3 text-[#123D70]">
                    <Ikon nama={item.ikon} className="h-6 w-6" />
                  </div>

                  <div className="min-w-0 flex-1">
                    <h3 className="text-sm font-bold text-slate-800">
                      {item.judul}
                    </h3>

                    <p className="mt-2 break-words text-sm leading-6 text-slate-600">
                      {item.isi}
                    </p>

                    <a
                      href={item.href}
                      target={item.ikon === "pin" ? "_blank" : undefined}
                      rel={
                        item.ikon === "pin"
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="mt-3 inline-flex items-center gap-1.5 !rounded-lg border-b-2 border-[#FFD52A] pb-1 text-sm font-bold text-[#123D70] transition hover:text-blue-800"
                    >
                      {item.tombol}
                      <span aria-hidden="true">→</span>
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </aside>
        </div>
      </section>

      {/* PETA LOKASI */}
      <section className="mx-auto max-w-7xl px-4 pb-12 md:px-6 md:pb-16">
        <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-[#123D70]">
              Temukan Lokasi Kami
            </p>

            <h2 className="mt-2 text-2xl font-extrabold text-[#123D70] md:text-3xl">
              Lokasi SMA Negeri 1 Rembang
            </h2>

            <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">
              Kunjungi sekolah kami di Jalan Gajah Mada, Kabupaten Rembang,
              Jawa Tengah.
            </p>
          </div>

          <a
            href={urlMaps}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center justify-center gap-2 !rounded-xl border-[3px] border-[#123D70] bg-[#FFD52A] px-5 py-3 text-sm font-bold text-[#123D70] shadow-[3px_3px_0_#123D70] transition hover:-translate-y-0.5 hover:bg-yellow-300"
          >
            Buka di Google Maps
            <Ikon nama="arrow" className="h-4 w-4" />
          </a>
        </div>

        <div className="overflow-hidden !rounded-2xl border-[3px] border-[#123D70] bg-white p-2 shadow-[4px_4px_0_#123D70] md:p-3">
          <iframe
            title="Peta lokasi SMA Negeri 1 Rembang"
            src={lokasiMaps}
            width="100%"
            height="420"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
            className="block !rounded-xl"
          />
        </div>

        <p className="mt-3 text-xs leading-5 text-slate-500">
          Peta disediakan melalui Google Maps. Pastikan lokasi yang tampil
          sesuai dengan alamat sekolah.
        </p>
      </section>
    </main>
  );
}