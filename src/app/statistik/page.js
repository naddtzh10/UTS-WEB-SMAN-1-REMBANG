
import Link from "next/link";

const statistikSekolah = [
  {
    id: 1,
    judul: "Total Siswa",
    jumlah: "357",
    keterangan: "Peserta Didik",
    ikon: "siswa",
    warna: "bg-white",
    warnaTeks: "text-[#123D70]",
    warnaKeterangan: "text-slate-500",
  },
  {
    id: 2,
    judul: "Pengajar / Guru",
    jumlah: "61",
    keterangan: "Tenaga Pengajar",
    ikon: "guru",
    warna: "bg-white",
    warnaTeks: "text-[#123D70]",
    warnaKeterangan: "text-slate-500",
  },
  {
    id: 3,
    judul: "Tenaga Kependidikan",
    jumlah: "20",
    keterangan: "Tenaga Kependidikan",
    ikon: "kependidikan",
    warna: "bg-white",
    warnaTeks: "text-[#123D70]",
    warnaKeterangan: "text-slate-500",
  },
];

function IkonStatistik({ nama, className }) {
  if (nama === "siswa") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        className={className}
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m2 9 10-5 10 5-10 5L2 9Z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6 11v5c3.5 3 8.5 3 12 0v-5M22 9v6"
        />
      </svg>
    );
  }

  if (nama === "kependidikan") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        className={className}
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4 21h16M6 21V7l6-4 6 4v14M9 10h1m4 0h1M9 14h1m4 0h1M10 21v-3h4v3"
        />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className={className}
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"
      />
      <circle cx="10" cy="7" r="4" />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M20 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"
      />
    </svg>
  );
}

export default function StatistikPage() {
  return (
    <main
      className="min-h-screen text-gray-800"
      style={{
        backgroundColor: "#EAF6FF",
        backgroundImage: `
          linear-gradient(rgba(255,255,255,0.55) 2px, transparent 2px),
          linear-gradient(90deg, rgba(255,255,255,0.55) 2px, transparent 2px)
        `,
        backgroundSize: "24px 24px",
      }}
    >
      {/* HEADER */}
      <section className="border-b-4 border-[#123D70] bg-white px-4 py-7 text-center sm:px-6 sm:py-8">
        <div className="mx-auto max-w-5xl">
          <h1 className="font-pixelify text-2xl font-bold leading-tight text-[#123D70] sm:text-3xl">
            Data Sekolah
          </h1>

          <div className="mx-auto mt-3 h-1.5 w-16 rounded-full bg-[#FFD52A]" />

          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-slate-600 sm:text-base">
            Informasi jumlah siswa dan tenaga pendidik di SMA Negeri 1
            Rembang.
          </p>

          <div className="mt-4 flex items-center justify-center gap-2 font-mono text-xs sm:text-sm">
            <Link
              href="/"
              className="font-semibold text-[#477CB7] transition hover:text-[#123D70]"
            >
              Beranda
            </Link>

            <span className="text-slate-400">/</span>

            <span className="font-bold text-[#123D70]">
              Data Sekolah
            </span>
          </div>
        </div>
      </section>

      {/* KARTU DATA SEKOLAH */}
      <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6 md:py-12">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {statistikSekolah.map((item) => (
            <article
              key={item.id}
              className={`${item.warna} rounded-2xl border-4 border-[#123D70] p-6 shadow-[5px_5px_0px_#123D70] transition-transform duration-200 hover:-translate-y-1 sm:p-7`}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="min-w-0">
                  <p className={`text-sm font-bold ${item.warnaTeks}`}>
                    {item.judul}
                  </p>

                  <p
                    className={`mt-4 font-pixelify text-4xl font-bold tracking-tight sm:text-5xl ${item.warnaTeks}`}
                  >
                    {item.jumlah}
                  </p>

                  <p
                    className={`mt-3 text-sm leading-6 ${item.warnaKeterangan}`}
                  >
                    {item.keterangan}
                  </p>
                </div>

                <div className="shrink-0 rounded-xl border-2 border-[#123D70] bg-[#FFD52A] p-3">
                  <IkonStatistik
                    nama={item.ikon}
                    className="h-8 w-8 text-[#123D70] sm:h-9 sm:w-9"
                  />
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* KEMBALI KE BERANDA */}
        <div className="mt-10 text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-xl border-2 border-[#123D70] bg-[#FFD52A] px-5 py-3 text-sm font-bold text-[#123D70] shadow-[4px_4px_0px_#123D70] transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-[2px_2px_0px_#123D70]"
          >
            <span aria-hidden="true">←</span>
            Kembali ke Beranda
          </Link>
        </div>
      </section>
    </main>
  );
}

