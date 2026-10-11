
import Image from "next/image";
import Link from "next/link";

const bagianLambang = [
  {
    judul: "Sayap Terbang Berwarna Kuning",
    isi: "Sayap terbang melambangkan jurusan budaya, yaitu kelompok siswa yang menggeluti bidang sastra. Tiga lembar bulu sayap yang terpisah menunjukkan bahwa siswa juga mempelajari sastra Inggris, Jerman, dan Perancis.",
  },
  {
    judul: "Lima Helai Daun Hijau",
    isi: "Lima helai daun berwarna hijau melambangkan jurusan sosial.",
  },
  {
    judul: "Pancuran, Ion, dan Proton",
    isi: "Di tengah pangkal daun terdapat gambar pipa pancuran atau fountain. Pada bagian luarnya terdapat gambar ion dan proton beserta garis lintasnya. Unsur tersebut melambangkan jurusan Ilmu Pengetahuan Alam (IPA).",
  },
];

const artiWarna = [
  {
    warna: "Merah",
    kode: "bg-red-500",
    arti: "Aktif, bersemangat, periang, dan optimis.",
  },
  {
    warna: "Putih",
    kode: "bg-white border-2 border-gray-300",
    arti: "Tulus hati, ikhlas, dan suka berkorban.",
  },
  {
    warna: "Kuning",
    kode: "bg-yellow-400",
    arti: "Berwatak kesatria, menjaga keutamaan, dan selalu ingin maju.",
  },
  {
    warna: "Biru",
    kode: "bg-blue-700",
    arti: "Taat, berwawasan luas, dan berbakti.",
  },
  {
    warna: "Hijau",
    kode: "bg-green-600",
    arti: "Bersifat sosial, tenteram, dan damai.",
  },
];

export default function MaknaLambangPage() {
  return (
    <main className="pixel-background min-h-screen text-gray-800">
      {/* HEADER */}
      <section className="border-b-[3px] border-[#123D70] bg-white px-6 py-8 md:py-10">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mx-auto mb-4 h-1.5 w-12 bg-[#FFD52A]" />

          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#477CB7]">
            Identitas SMANSA
          </p>

          <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-[#123D70] md:text-5xl">
            Makna Lambang
          </h1>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-[#52657A] md:text-base">
            Mengenal simbol, warna, dan nilai yang menjadi bagian
            dari identitas SMA Negeri 1 Rembang.
          </p>
        </div>
      </section>

      {/* LAMBANG DAN FILOSOFI */}
      <section className="px-6 py-14 md:py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-2">
          {/* LAMBANG */}
          <div className="rounded-2xl border-[3px] border-[#123D70] bg-white p-5 md:p-8">
            <div className="relative mx-auto h-64 w-64 md:h-80 md:w-80">
              <Image
                src="/images/logo%20smansa.jpg"
                alt="Lambang SMA Negeri 1 Rembang"
                fill
                className="object-contain"
                sizes="(max-width: 768px) 256px, 320px"
              />
            </div>

            <p className="mt-5 text-center font-bold text-[#123D70]">
              Lambang SMA Negeri 1 Rembang
            </p>
          </div>

          <div>
            <p className="mb-2 text-sm font-bold uppercase tracking-wider text-[#477CB7]">
              Filosofi dan Identitas
            </p>

            <h2 className="mb-5 text-2xl font-extrabold text-[#123D70] md:text-3xl">
              Simbol yang Memiliki Makna
            </h2>

            <p className="leading-8 text-gray-600">
              Lambang SMA Negeri 1 Rembang didominasi warna biru.
              Latar belakang biru muda melambangkan langit, sedangkan
              warna biru melambangkan laut. Keduanya dipisahkan oleh
              gelombang berwarna putih.
            </p>

            <p className="mt-4 leading-8 text-gray-600">
              Tiga unsur utama pada lambang menggambarkan bidang
              budaya, sosial, dan ilmu pengetahuan alam. Keseluruhan
              unsur tersebut menjadi bagian dari identitas sekolah.
            </p>

            {/* MOTTO */}
            <div className="mt-6 rounded-xl border-[3px] border-[#123D70] bg-white p-5">
              <p className="font-bold text-[#123D70]">
                Berjatidiri dan Maju dalam Prestasi
              </p>

              <p className="mt-2 text-sm leading-7 text-[#52657A]">
                Semangat untuk terus belajar, mengembangkan potensi,
                dan meraih prestasi dengan tetap menjunjung nilai luhur.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* UNSUR LAMBANG - TANPA BACKGROUND BIRU MUDA */}
      <section className="px-6 py-14 md:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10">
            <p className="mb-2 text-sm font-bold uppercase tracking-wider text-[#477CB7]">
              Bentuk dan Simbol
            </p>

            <h2 className="text-3xl font-extrabold text-[#123D70]">
              Unsur-Unsur Lambang
            </h2>

            <p className="mt-4 max-w-2xl leading-7 text-gray-600">
              Setiap unsur memiliki makna tersendiri yang menggambarkan
              bidang ilmu dan nilai dalam identitas sekolah.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {bagianLambang.map((bagian) => (
              <article
                key={bagian.judul}
                className="rounded-2xl border-[3px] border-[#123D70] bg-white p-6 transition duration-300 hover:-translate-y-1 md:p-7"
              >
                <h3 className="text-xl font-bold leading-snug text-[#123D70]">
                  {bagian.judul}
                </h3>

                <p className="mt-4 leading-8 text-gray-600">
                  {bagian.isi}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-8 rounded-2xl border-[3px] border-[#123D70] bg-white p-6 md:p-8">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border-2 border-[#123D70] bg-[#EAF3FF] text-xl text-[#123D70]">
                ★
              </div>

              <div>
                <h3 className="text-xl font-bold text-[#123D70]">
                  Makna Lima Unsur
                </h3>

                <p className="mt-3 leading-8 text-gray-600">
                  Bagian bulu sayap dan daun masing-masing berjumlah lima.
                  Jumlah tersebut mengandung makna bahwa SMA Negeri 1
                  Rembang dalam menjalankan kegiatannya selalu berlandaskan
                  Pancasila. Tulisan nama sekolah pada lambang menunjukkan
                  identitas sekolah yang berada di wilayah pantai Kabupaten
                  Rembang.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ARTI WARNA */}
      <section className="px-6 py-14 md:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10">
            <p className="mb-2 text-sm font-bold uppercase tracking-wider text-[#477CB7]">
              Filosofi Warna
            </p>

            <h2 className="text-3xl font-extrabold text-[#123D70]">
              Arti Warna pada Lambang
            </h2>

            <p className="mt-4 max-w-2xl leading-7 text-gray-600">
              Setiap warna memiliki arti yang menggambarkan nilai
              dan karakter yang terkandung dalam lambang sekolah.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {artiWarna.map((item) => (
              <article
                key={item.warna}
                className="flex gap-4 rounded-xl border-[3px] border-[#123D70] bg-white p-5 transition hover:-translate-y-0.5"
              >
                <span
                  className={`h-12 w-12 shrink-0 rounded-lg ${item.kode}`}
                />

                <div>
                  <h3 className="font-bold text-[#123D70]">
                    {item.warna}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-gray-600">
                    {item.arti}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PENUTUP */}
      <section className="px-6 pb-14">
        <div className="mx-auto max-w-5xl rounded-2xl border-[3px] border-[#123D70] bg-white px-6 py-10 text-center md:px-12 md:py-14">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#477CB7]">
            Jati Diri SMANSA
          </p>

          <h2 className="mt-3 text-2xl font-extrabold text-[#123D70] md:text-3xl">
            Identitas dan Nilai Sekolah
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-8 text-[#52657A]">
            Lambang SMA Negeri 1 Rembang menjadi identitas yang
            menyatukan simbol pendidikan, nilai Pancasila, dan
            karakter yang ingin dijunjung oleh sekolah.
          </p>
        </div>

        <div className="mx-auto mt-8 max-w-6xl border-t-2 border-[#123D70]/20 pt-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-xl border-2 border-[#123D70] bg-white px-5 py-3 text-sm font-bold text-[#123D70] transition hover:-translate-y-0.5 hover:bg-[#FFD52A]"
          >
            <span aria-hidden="true">←</span>
            Kembali ke Beranda
          </Link>
        </div>
      </section>
    </main>
  );
}


