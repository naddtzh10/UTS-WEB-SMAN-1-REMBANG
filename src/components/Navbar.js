
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [menuTerbuka, setMenuTerbuka] = useState(false);
  const [profilTerbuka, setProfilTerbuka] = useState(false);
  const pathname = usePathname();

  const menuProfil = [
    { nama: "Profil Sekolah", href: "/about" },
    { nama: "Makna Lambang", href: "/profil/makna-lambang" },
    { nama: "Mars dan Himne", href: "/profil/mars-hymne" },
  ];

  const menuUtama = [
    { nama: "Data", href: "/statistik" },
    { nama: "Prestasi", href: "/prestasi" },
    { nama: "Berita", href: "/berita" },
    { nama: "Kontak", href: "/kontak" },
  ];

  const aktif = (href) =>
    href === "/"
      ? pathname === "/"
      : pathname === href || pathname.startsWith(`${href}/`);

  const linkStyle = (href) =>
    `rounded-lg px-3 py-2 text-sm font-bold transition duration-200 ${
      aktif(href)
        ? "bg-white/15 text-[#FFD52A]"
        : "text-white hover:bg-white/10 hover:text-[#FFD52A]"
    }`;

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#123D70] shadow-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6">
        <Link
          href="/"
          className="flex shrink-0 items-center gap-3"
          onClick={() => {
            setMenuTerbuka(false);
            setProfilTerbuka(false);
          }}
        >
          <div className="relative h-11 w-11 overflow-hidden rounded-full border-2 border-white/80 bg-white sm:h-12 sm:w-12">
            <Image
              src="/images/logo%20smansa.jpg"
              alt="Logo SMA Negeri 1 Rembang"
              fill
              sizes="48px"
              className="object-contain"
            />
          </div>

          <div>
            <p className="text-sm font-black tracking-wide text-[#FFD52A] sm:text-base md:text-lg">
              SMAN 1 REMBANG
            </p>
            <p className="text-[10px] font-medium text-white/80 sm:text-xs">
              BERJATI DIRI DAN MAJU DALAM PRESTASI
            </p>
          </div>
        </Link>

        <button
          type="button"
          className="rounded-lg border border-white/30 p-2 text-white transition hover:bg-white/10 md:hidden"
          aria-label={menuTerbuka ? "Tutup menu" : "Buka menu"}
          aria-expanded={menuTerbuka}
          onClick={() => setMenuTerbuka(!menuTerbuka)}
        >
          {menuTerbuka ? (
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>

        <div className="hidden items-center gap-1 md:flex">
          <Link href="/" className={linkStyle("/")}>
            Beranda
          </Link>

          <div className="relative">
            <button
              type="button"
              onClick={() => setProfilTerbuka(!profilTerbuka)}
              aria-expanded={profilTerbuka}
              className={`flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-bold transition ${
                menuProfil.some((item) => aktif(item.href))
                  ? "bg-white/15 text-[#FFD52A]"
                  : "text-white hover:bg-white/10 hover:text-[#FFD52A]"
              }`}
            >
              Profil
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                className={`h-4 w-4 transition-transform ${
                  profilTerbuka ? "rotate-180" : ""
                }`}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m6 9 6 6 6-6"
                />
              </svg>
            </button>

            {profilTerbuka && (
              <div className="absolute left-0 top-full mt-2 w-52 overflow-hidden rounded-xl border border-slate-200 bg-white py-2 shadow-xl">
                {menuProfil.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setProfilTerbuka(false)}
                    className={`block px-4 py-3 text-sm transition hover:bg-blue-50 ${
                      aktif(item.href)
                        ? "font-bold text-[#1678C8]"
                        : "text-slate-700"
                    }`}
                  >
                    {item.nama}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {menuUtama.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={linkStyle(item.href)}
            >
              {item.nama}
            </Link>
          ))}
        </div>
      </nav>

      {menuTerbuka && (
        <div className="border-t border-white/10 bg-[#0D315B] px-4 py-3 md:hidden">
          <div className="flex flex-col gap-1">
            <Link
              href="/"
              onClick={() => setMenuTerbuka(false)}
              className={`rounded-lg px-4 py-3 font-bold ${
                aktif("/")
                  ? "bg-white/15 text-[#FFD52A]"
                  : "text-white hover:bg-white/10 hover:text-[#FFD52A]"
              }`}
            >
              Beranda
            </Link>

            <button
              type="button"
              onClick={() => setProfilTerbuka(!profilTerbuka)}
              className="flex items-center justify-between rounded-lg px-4 py-3 text-left font-bold text-white hover:bg-white/10 hover:text-[#FFD52A]"
            >
              Profil
              <span>{profilTerbuka ? "−" : "+"}</span>
            </button>

            {profilTerbuka &&
              menuProfil.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => {
                    setMenuTerbuka(false);
                    setProfilTerbuka(false);
                  }}
                  className="ml-4 rounded-lg px-4 py-2.5 text-sm text-white/80 hover:bg-white/10 hover:text-[#FFD52A]"
                >
                  {item.nama}
                </Link>
              ))}

            {menuUtama.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuTerbuka(false)}
                className={`rounded-lg px-4 py-3 font-bold ${
                  aktif(item.href)
                    ? "bg-white/15 text-[#FFD52A]"
                    : "text-white hover:bg-white/10 hover:text-[#FFD52A]"
                }`}
              >
                {item.nama}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
