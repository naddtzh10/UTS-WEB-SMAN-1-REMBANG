import Image from "next/image";
import Link from "next/link";

export default function BeritaCard({ berita }) {
return ( <article className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md"> <div className="relative h-52 w-full"> <Image
       src={berita.gambar}
       alt={berita.judul}
       fill
       className="object-cover"
       sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
     /> </div>

  <div className="p-5">
    <p className="mb-2 text-sm text-gray-500">
      {berita.tanggal || "Tanggal tidak dicantumkan"}
    </p>

    <h2 className="mb-3 text-lg font-bold text-gray-900">
      {berita.judul}
    </h2>

    <p className="mb-4 text-sm leading-6 text-gray-600">
      {berita.ringkasan}
    </p>

    <Link
      href={`/berita/${berita.id}`}
      className="inline-block font-semibold text-blue-700 hover:text-blue-900"
    >
      Baca Selengkapnya →
    </Link>
  </div>
</article>

);
}
