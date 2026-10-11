
const bagianMars = [
  {
    judul: "Bait 1",
    lirik: [
      "SMA Negeri Satu Rembang",
      "Tempat kita menuntut ilmu, ketekunan, ketertiban",
      "Tuk mencapai keberhasilan",
    ],
  },
  {
    judul: "Bait 2",
    lirik: [
      "SMA Negeri Satu Rembang",
      "Meningkatkan pengetahuan, teknologi, kesenian",
      "Tuk membentuk kepribadian",
    ],
  },
  {
    judul: "Reff",
    lirik: [
      "SMA Negeri Satu Rembang",
      "Berjatidiri maju dalam prestasi",
      "Penyiapan putra putri bangsa",
      "Melanjutkan pendidikan tinggi",
    ],
  },
  {
    judul: "Bait 3",
    lirik: [
      "SMA Negeri Satu Rembang",
      "Tempat kita kembangkan bakat, pengalaman, keterampilan",
      "Bekal hidup di masa depan",
    ],
  },
];

const bagianHimne = [
  "Dirgahayu SMA Negeri Satu Rembang",
  "Engkau cerdaskan kehidupan bangsa",
  "Bentuk generasi muda, beriman dan bertakwa",
  "Serta membentuk kepribadian yang luhur dan kuat",
  "Membina putra putri beretos kerja tinggi",
  "Lestarikan budaya, perluas wawasan",
  "Membangun masa depan generasi nan jaya",
];

export default function MarsHymnePage() {
  return (
    <main className="pixel-background min-h-screen text-gray-800">
      {/* HEADER - FULL PUTIH */}
      <section className="border-b-[3px] border-[#123D70] bg-white px-6 py-7 md:py-9">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mx-auto mb-3 h-1.5 w-12 bg-[#FFD52A]" />

          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#477CB7]">
            Identitas SMANSA
          </p>

          <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-[#123D70] md:text-5xl">
            Mars dan Himne
          </h1>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-[#52657A] md:text-base">
            Mengenal lagu Mars dan Himne SMA Negeri 1 Rembang
            sebagai bagian dari identitas dan semangat warga sekolah.
          </p>

          <div className="mx-auto mt-4 flex h-11 w-11 items-center justify-center border-[3px] border-[#123D70] bg-white text-2xl text-[#123D70] shadow-[3px_3px_0_#FFD52A]">
            ♫
          </div>
        </div>
      </section>

      {/* PENGANTAR */}
      <section className="px-6 py-10 md:py-14">
        <div className="mx-auto max-w-4xl border-[3px] border-[#123D70] bg-white p-6 text-center shadow-[5px_5px_0_#123D70] md:p-10">
          <p className="text-sm font-bold uppercase tracking-wider text-[#477CB7]">
            Semangat dan Kebersamaan
          </p>

          <h2 className="mt-3 text-2xl font-extrabold text-[#123D70] md:text-3xl">
            SMA Negeri 1 Rembang
          </h2>

          <div className="mx-auto mt-4 h-1.5 w-12 bg-[#FFD52A]" />

          <p className="mx-auto mt-4 max-w-2xl leading-8 text-gray-600">
            Mars menggambarkan semangat untuk belajar, mengembangkan
            bakat, dan meraih prestasi. Himne mengungkapkan harapan
            bagi pendidikan, karakter, serta masa depan generasi muda.
          </p>
        </div>
      </section>

      {/* MARS - BACKGROUND KOTAK BIRU MUDA */}
      <section className="border-y-[3px] border-[#123D70]/15 bg-[#EAF6FF]/80 px-6 py-10 md:py-16">
        <div className="mx-auto max-w-4xl">
          <div className="mb-8 text-center md:mb-10">
            <p className="mb-2 text-sm font-bold uppercase tracking-wider text-[#477CB7]">
              Lagu Sekolah
            </p>

            <h2 className="text-3xl font-extrabold text-[#123D70] md:text-4xl">
              Mars SMA Negeri 1 Rembang
            </h2>

            <div className="mx-auto mt-4 h-1.5 w-14 bg-[#FFD52A]" />

            <p className="mt-4 text-gray-600">
              Semangat belajar, berkarya, dan meraih prestasi.
            </p>
          </div>

          <div className="space-y-5">
            {bagianMars.map((bagian, index) => (
              <article
                key={bagian.judul}
                className="overflow-hidden border-[3px] border-[#123D70] bg-white shadow-[4px_4px_0_#123D70] transition duration-300 hover:-translate-y-1 hover:shadow-[6px_6px_0_#123D70]"
              >
                <div className="flex items-center gap-4 border-b-[3px] border-[#123D70] bg-[#EAF3FF] px-5 py-4 md:px-8">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center border-2 border-[#123D70] bg-white font-extrabold text-[#123D70]">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <h3 className="font-bold text-[#123D70]">
                    {bagian.judul}
                  </h3>

                  {index === 2 && (
                    <span className="ml-auto border-2 border-[#123D70] bg-[#FFD52A] px-3 py-1 text-xs font-bold text-[#123D70]">
                      REFF
                    </span>
                  )}
                </div>

                <div className="px-5 py-7 text-center md:px-8 md:py-9">
                  <div className="space-y-2 leading-8 text-gray-700">
                    {bagian.lirik.map((baris, i) => (
                      <p key={i}>{baris}</p>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* HIMNE */}
      <section className="px-6 py-10 md:py-16">
        <div className="mx-auto max-w-4xl">
          <div className="mb-8 text-center md:mb-10">
            <p className="mb-2 text-sm font-bold uppercase tracking-wider text-[#477CB7]">
              Lagu Penghormatan
            </p>

            <h2 className="text-3xl font-extrabold text-[#123D70] md:text-4xl">
              Himne SMA Negeri 1 Rembang
            </h2>

            <div className="mx-auto mt-4 h-1.5 w-14 bg-[#FFD52A]" />

            <p className="mt-4 text-gray-600">
              Ungkapan harapan bagi pendidikan dan generasi masa depan.
            </p>
          </div>

          <article className="overflow-hidden border-[3px] border-[#123D70] bg-white shadow-[5px_5px_0_#123D70]">
            <div className="border-b-[3px] border-[#123D70] bg-[#EAF3FF] px-6 py-7 text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center border-2 border-[#123D70] bg-white text-2xl text-[#123D70] shadow-[3px_3px_0_#FFD52A]">
                ♫
              </div>

              <h3 className="mt-3 text-xl font-bold text-[#123D70]">
                Himne Sekolah
              </h3>

              <p className="mt-1 text-sm text-[#52657A]">
                SMA Negeri 1 Rembang
              </p>
            </div>

            <div className="px-5 py-8 text-center md:px-10 md:py-12">
              <div className="mx-auto mb-7 h-1.5 w-12 bg-[#FFD52A]" />

              <div className="space-y-4 leading-8 text-gray-700 md:leading-9">
                {bagianHimne.map((baris, index) => (
                  <p key={index}>{baris}</p>
                ))}
              </div>

              <div className="mx-auto mt-7 h-1.5 w-12 bg-[#FFD52A]" />
            </div>
          </article>
        </div>
      </section>

      {/* PENUTUP */}
      <section className="px-6 pb-12 md:pb-16">
        <div className="mx-auto max-w-5xl border-[3px] border-[#123D70] bg-white px-6 py-8 text-center shadow-[5px_5px_0_#123D70] md:px-12 md:py-12">
          <div className="mx-auto mb-5 h-1.5 w-14 bg-[#FFD52A]" />

          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#477CB7]">
            Semangat SMANSA
          </p>

          <h2 className="mt-3 text-2xl font-extrabold text-[#123D70] md:text-3xl">
            Semangat dan Jati Diri Sekolah
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-8 text-[#52657A]">
            Mars dan Himne menjadi bagian dari identitas SMA Negeri
            1 Rembang, yang mengingatkan warga sekolah akan pentingnya
            ilmu pengetahuan, karakter, budaya, dan prestasi.
          </p>
        </div>
      </section>
    </main>
  );
}
