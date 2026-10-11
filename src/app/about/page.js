
import Link from "next/link";

const sejarahSekolah = [
  {
    tahun: "1961",
    judul: "Awal Berdirinya SMA ABC Rembang",
    isi: "Atas prakarsa Bupati KDH Tingkat II Rembang, R. Islan Soebroto, didirikan SMA ABC Rembang. Sekolah ini menempati gedung PGRI Rembang yang berlokasi di depan Alun-alun Kota Rembang.",
  },
  {
    tahun: "1962",
    judul: "Menjadi Sekolah Negeri",
    isi: "Pada 1 Agustus 1962, pemerintah membuka SMA Negeri gaya baru di Rembang. SMA ABC Rembang kemudian dinegerikan berdasarkan SK Nomor 21/SK/B/III tanggal 10 September 1962 dan berstatus filial SMA Negeri Pati.",
  },
  {
    tahun: "1963",
    judul: "Menempati Gedung di Jalan Sudirman",
    isi: "SMA ABC Rembang menempati gedung di Jalan Sudirman Nomor 127 Rembang, yang sekarang menjadi SMP Negeri 2 Rembang.",
  },
  {
    tahun: "1975",
    judul: "Penambahan Daya Tampung",
    isi: "Karena kapasitas gedung tidak sebanding dengan jumlah siswa, sebagian siswa dialihkan ke unit gedung baru yang sekarang menjadi SMA Negeri 2 Rembang.",
  },
  {
    tahun: "1978",
    judul: "Menempati Lokasi Sekolah Saat Ini",
    isi: "Pada 6 April 1978, dilakukan penandatanganan berita acara pembebasan tanah di Desa Magersari. Lokasi tersebut berada di Jalan Untung Suropati Nomor 5, yang sekarang dikenal sebagai Jalan Gajah Mada Nomor 5 Rembang. Sekolah kemudian berkembang dengan pembangunan ruang kelas dan fasilitas pendukung. Pada periode 1978–1979, Sukemi Sisworaharjo memprakarsai pembuatan logo SMA Negeri Rembang yang tetap diabadikan hingga sekarang.",
  },
  {
    tahun: "1989",
    judul: "Penambahan Jumlah Kelas",
    isi: "SMA Negeri Rembang memperoleh izin menambah tiga kelas berdasarkan instruksi Kakandepdikbud Kabupaten Rembang. Karena ruang belajar belum mencukupi, sebagian siswa ditempatkan di gedung SPG Negeri Rembang.",
  },
  {
    tahun: "2003",
    judul: "Percontohan Kurikulum Berbasis Kompetensi",
    isi: "Di bawah pimpinan Drs. Koesnandar, SMA Negeri 1 Rembang ditunjuk sebagai sekolah percontohan (mini piloting) Kurikulum Berbasis Kompetensi untuk tahun pelajaran 2003/2004.",
  },
  {
    tahun: "2005",
    judul: "Pembukaan Kelas Immersi",
    isi: "Pada tahun pelajaran 2005/2006, sekolah membuka dua kelas immersi yang menggunakan bahasa Inggris sebagai bahasa pengantar pembelajaran. Program ini menjadi salah satu upaya peningkatan mutu pendidikan.",
  },
  {
    tahun: "2007",
    judul: "Rintisan Sekolah Bertaraf Internasional",
    isi: "SMA Negeri 1 Rembang mendapat kepercayaan untuk menyelenggarakan program Rintisan Sekolah Menengah Atas Bertaraf Internasional (RSBI), didukung oleh persetujuan Dinas Pendidikan Kabupaten Rembang dan keputusan Direktorat Pembinaan SMA Nomor 697/C4/MN/2007.",
  },
  {
    tahun: "2011",
    judul: "Pengembangan Kerja Sama",
    isi: "Sekolah mengembangkan kerja sama pendidikan dengan berbagai lembaga, antara lain Universitas Diponegoro, Nagoya University di Jepang, Eyup Anadolu Lisesi di Turki, SEAMEO SEAMOLEC, Northlight School Singapura, dan South China University of Technology.",
  },
  {
    tahun: "2016–2018",
    judul: "Menjadi SMA Rujukan",
    isi: "SMA Negeri 1 Rembang mendapat kepercayaan dari Direktorat Pembinaan SMA sebagai salah satu dari 614 SMA Rujukan di Indonesia. Pada 2018, sekolah juga menjalin kerja sama dengan Lincoln University di Malaysia dan Hatyai University di Thailand.",
  },
];

const misiSekolah = [
  "Mewujudkan lembaga pendidikan yang bernuansa keagamaan, kebangsaan, keilmuan, dan wawasan lingkungan.",
  "Mewujudkan lembaga pendidikan yang memiliki daya saing sampai di tingkat internasional.",
];

const tujuanSekolah = [
  "Terwujudnya warga sekolah yang beriman dan bertakwa kepada Tuhan Yang Maha Esa.",
  "Terciptanya warga sekolah yang memiliki jiwa nasionalisme, patriotisme, dan demokratis.",
  "Berkembangnya potensi peserta didik di bidang pengetahuan dan keterampilan melalui proses pembelajaran yang antisipatif terhadap perkembangan ilmu pengetahuan dan teknologi.",
  "Terselenggaranya proses pembelajaran yang antisipatif terhadap perkembangan ilmu pengetahuan dan teknologi.",
  "Terwujudnya peran aktif sekolah dalam memelihara kelestarian lingkungan.",
  "Terciptanya lingkungan sekolah yang aman, bersih, tertib, indah, rindang, dan sehat.",
  "Tercapainya peningkatan akses sekolah dengan berbagai lembaga pendidikan maupun nonkependidikan di dalam dan luar negeri.",
  "Diraihnya prestasi tinggi dalam berbagai lomba bidang keilmuan, teknologi, minat, dan bakat pada tingkat regional, nasional, maupun internasional.",
  "Tercapainya peningkatan jumlah tamatan yang diterima di perguruan tinggi negeri atau swasta favorit nasional maupun internasional.",
  "Terwujudnya tamatan yang memiliki daya saing internasional.",
];

export default function AboutPage() {
  return (
    <main className="pixel-background min-h-screen text-gray-800">
      <section className="border-b-[3px] border-[#123D70] bg-white px-6 py-8 md:py-10">
        <div className="mx-auto max-w-5xl text-center">
          <div className="mx-auto mb-3 h-1.5 w-12 bg-[#FFD52A]" />

          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#477CB7]">
            Profil Sekolah
          </p>

          <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-[#123D70] sm:text-4xl md:text-5xl">
            SMA Negeri 1 Rembang
          </h1>

          <div className="mx-auto mt-4 h-1.5 w-16 bg-[#FFD52A]" />
        </div>
      </section>

      <section className="px-5 py-10 sm:px-8 md:py-14">
        <div className="mx-auto max-w-5xl">
          <div className="overflow-hidden rounded-xl border-[3px] border-[#123D70] bg-white p-2 shadow-[5px_5px_0_#123D70] md:p-3">
            <div className="aspect-video w-full bg-[#EAF6FF]">
              <iframe
                className="h-full w-full"
                src="https://www.youtube-nocookie.com/embed/Ic1VVGJuyzU"
                title="Video Profil SMA Negeri 1 Rembang"
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>

          <p className="mx-auto mt-5 max-w-3xl text-center text-sm leading-7 text-slate-600 sm:text-base">
            Kenali lingkungan, kegiatan, dan kehidupan sekolah SMA Negeri 1
            Rembang melalui video profil sekolah.
          </p>

          <div className="mt-5 text-center">
            <a
              href="https://youtu.be/Ic1VVGJuyzU"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-lg border-[3px] border-[#123D70] bg-[#FFD52A] px-6 py-3 text-sm font-extrabold text-[#123D70] shadow-[3px_3px_0_#123D70] transition hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[1px_1px_0_#123D70] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#477CB7]"
            >
              Tonton di YouTube ↗
            </a>
          </div>
        </div>
      </section>

      <section
        className="border-y-[3px] border-[#123D70]/15 px-5 py-12 sm:px-8 md:py-20"
        style={{
          backgroundColor: "#EAF6FF",
          backgroundImage: `
            linear-gradient(rgba(71, 124, 183, 0.15) 2px, transparent 2px),
            linear-gradient(90deg, rgba(71, 124, 183, 0.15) 2px, transparent 2px)
          `,
          backgroundSize: "24px 24px",
        }}
      >
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 text-center">
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-[#477CB7]">
              Perjalanan Sekolah
            </p>

            <h2 className="text-3xl font-extrabold text-[#123D70] sm:text-4xl">
              Sejarah Singkat SMA Negeri 1 Rembang
            </h2>

            <div className="mx-auto mt-4 h-1.5 w-14 bg-[#FFD52A]" />

            <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-600">
              Perjalanan SMA Negeri 1 Rembang dari awal berdiri hingga
              berkembang menjadi sekolah rujukan.
            </p>
          </div>

          <div className="ml-3 border-l-[3px] border-[#123D70]/40 md:ml-5">
            {sejarahSekolah.map((item) => (
              <article
                key={item.tahun}
                className="relative pb-10 pl-7 last:pb-0 md:pl-10"
              >
                <span className="absolute -left-[10px] top-1 h-[17px] w-[17px] border-[3px] border-[#123D70] bg-[#FFD52A]" />

                <div className="rounded-xl border-[3px] border-[#123D70] bg-white shadow-[4px_4px_0_#123D70]">
                  <div className="flex flex-wrap items-center gap-3 rounded-t-lg border-b-[3px] border-[#123D70] bg-[#EAF3FF] px-5 py-4">
                    <span className="rounded-md border-2 border-[#123D70] bg-[#FFD52A] px-3 py-1 text-sm font-extrabold text-[#123D70]">
                      {item.tahun}
                    </span>
                  </div>

                  <div className="p-5 md:p-6">
                    <h3 className="text-lg font-extrabold text-[#123D70] md:text-xl">
                      {item.judul}
                    </h3>

                    <p className="mt-3 leading-8 text-slate-600">
                      {item.isi}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-12 sm:px-8 md:py-16">
        <div className="mx-auto max-w-5xl rounded-2xl border-[3px] border-[#123D70] bg-[#123D70] px-6 py-12 text-center shadow-[6px_6px_0_#FFD52A] sm:px-12 md:py-16">
          <div className="mx-auto mb-5 h-1.5 w-14 rounded-full bg-[#FFD52A]" />

          <p className="mb-4 text-sm font-extrabold uppercase tracking-[0.2em] text-[#FFD52A]">
            Visi Sekolah
          </p>

          <h2
            style={{ color: "#FFFFFF" }}
            className="mb-5 text-3xl font-extrabold leading-relaxed sm:text-4xl md:text-5xl"
          >
            “Berjatidiri dan Maju dalam Prestasi”
          </h2>

          <div className="mx-auto mt-5 h-1.5 w-14 rounded-full bg-[#FFD52A]" />

          <p
            style={{ color: "#FFFFFF" }}
            className="mx-auto mt-5 max-w-2xl text-base leading-8"
          >
            Menjadi landasan bagi sekolah dalam membentuk karakter warga
            sekolah dan mendorong pencapaian prestasi.
          </p>
        </div>
      </section>

      <section
        className="border-y-[3px] border-[#123D70]/15 px-5 py-12 sm:px-8 md:py-16"
        style={{
          backgroundColor: "#EAF6FF",
          backgroundImage: `
            linear-gradient(rgba(71, 124, 183, 0.15) 2px, transparent 2px),
            linear-gradient(90deg, rgba(71, 124, 183, 0.15) 2px, transparent 2px)
          `,
          backgroundSize: "24px 24px",
        }}
      >
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-extrabold text-[#123D70]">
              Misi Sekolah
            </h2>

            <div className="mx-auto mt-4 h-1.5 w-14 bg-[#FFD52A]" />
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {misiSekolah.map((misi, index) => (
              <article
                key={misi}
                className="rounded-2xl border-[3px] border-[#123D70] bg-white p-6 shadow-[4px_4px_0_#123D70] transition duration-300 hover:-translate-y-1 hover:shadow-[6px_6px_0_#FFD52A]"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-lg border-2 border-[#123D70] bg-[#FFD52A] font-extrabold text-[#123D70]">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <p className="mt-4 leading-8 text-slate-700">{misi}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-12 sm:px-8 md:py-20">
        <div className="mx-auto max-w-5xl">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-extrabold text-[#123D70] sm:text-4xl">
              Tujuan Sekolah
            </h2>

            <div className="mx-auto mt-4 h-1.5 w-14 bg-[#FFD52A]" />

            <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-600">
              Sepuluh tujuan yang menjadi arah pengembangan pendidikan dan
              lingkungan sekolah.
            </p>
          </div>

          <div className="space-y-4">
            {tujuanSekolah.map((tujuan, index) => (
              <article
                key={tujuan}
                className="flex gap-4 rounded-xl border-[3px] border-[#123D70] bg-white p-5 shadow-[3px_3px_0_#123D70] transition duration-300 hover:translate-x-1 hover:shadow-[5px_5px_0_#FFD52A]"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border-2 border-[#123D70] bg-[#FFD52A] font-extrabold text-[#123D70]">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <p className="leading-7 text-slate-700">{tujuan}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t-[3px] border-[#123D70] bg-white px-5 py-10 sm:px-8 md:py-12">
        <div className="mx-auto flex max-w-5xl flex-col items-start justify-between gap-5 sm:flex-row sm:items-center">
          <div>
            <h2 className="text-2xl font-extrabold text-[#123D70]">
              Informasi Terbaru SMANSA
            </h2>

            <p className="mt-2 leading-7 text-slate-600">
              Lihat berita dan informasi terbaru dari SMA Negeri 1 Rembang.
            </p>
          </div>

          <Link
            href="/berita"
            className="inline-flex items-center justify-center rounded-lg border-[3px] border-[#123D70] bg-[#FFD52A] px-6 py-3 font-extrabold text-[#123D70] shadow-[3px_3px_0_#123D70] transition hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[1px_1px_0_#123D70] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#477CB7]"
          >
            Lihat Berita →
          </Link>
        </div>
      </section>
    </main>
  );
}




