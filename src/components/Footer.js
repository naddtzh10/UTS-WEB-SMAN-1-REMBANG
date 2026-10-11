
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const warnaJudul = {
    color: "#FFD52A",
    WebkitTextFillColor: "#FFD52A",
    fontWeight: 800,
    letterSpacing: "0.2px",
  };

  const warnaIsi = {
    color: "#DBEAFE",
    WebkitTextFillColor: "#DBEAFE",
  };

  return (
    <footer
      style={{
        backgroundColor: "#123D70",
        color: "#FFFFFF",
        borderTop: "4px solid #FFD52A",
        width: "100%",
      }}
    >
      <div className="mx-auto max-w-7xl px-5 py-6 md:px-6 md:py-7">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">

          {/* IDENTITAS SEKOLAH */}
          <div className="min-w-0">
            {/* LOGO DAN NAMA SEKOLAH */}
            <div className="flex items-center gap-3">
              <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full border-2 border-white bg-white sm:h-[72px] sm:w-[72px]">
                <Image
                  src="/images/logo%20smansa.jpg"
                  alt="Logo SMA Negeri 1 Rembang"
                  fill
                  sizes="72px"
                  className="object-contain"
                />
              </div>

              <div className="min-w-0">
                <p
                  style={{
                    ...warnaJudul,
                    fontSize: "18px",
                    lineHeight: 1.3,
                    margin: 0,
                  }}
                >
                  SMANSA REMBANG
                </p>

                <p
                  style={{
                    color: "#FFFFFF",
                    WebkitTextFillColor: "#FFFFFF",
                    fontSize: "14px",
                    fontWeight: 500,
                    lineHeight: 1.5,
                    margin: "4px 0 0",
                  }}
                >
                  SMA Negeri 1 Rembang
                </p>
              </div>
            </div>

            {/* SLOGAN SEKOLAH */}
            <p
              style={{
                ...warnaIsi,
                fontSize: "14px",
                lineHeight: 1.7,
                margin: "12px 0 0",
                maxWidth: "300px",
              }}
            >
              Berprestasi, Berjati Diri, dan Berakhlak Mulia
            </p>

            {/* MEDIA SOSIAL */}
            <div className="mt-3 flex items-center gap-4">
              <a
                href="https://www.instagram.com/smansarembangofficial/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram SMA Negeri 1 Rembang"
                style={{ color: "#FFFFFF" }}
                className="inline-flex hover:text-[#FFD52A]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle
                    cx="17.5"
                    cy="6.5"
                    r="0.8"
                    fill="currentColor"
                    stroke="none"
                  />
                </svg>
              </a>

              <a
                href="https://youtube.com/@smansarembang8720"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube SMA Negeri 1 Rembang"
                style={{ color: "#FFFFFF" }}
                className="inline-flex hover:text-[#FFD52A]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="27"
                  height="27"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8ZM9.6 15.6V8.4l6.3 3.6-6.3 3.6Z" />
                </svg>
              </a>
            </div>
          </div>

          {/* NAVIGASI */}
          <div>
            <p
              style={{
                ...warnaJudul,
                fontSize: "16px",
                margin: "0 0 12px",
              }}
            >
              Navigasi
            </p>

            <ul className="space-y-1.5 text-sm">
              <li>
                <Link
                  href="/"
                  style={warnaIsi}
                  className="hover:!text-[#FFD52A]"
                >
                  Beranda
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  style={warnaIsi}
                  className="hover:!text-[#FFD52A]"
                >
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link
                  href="/statistik"
                  style={warnaIsi}
                  className="hover:!text-[#FFD52A]"
                >
                  Data
                </Link>
              </li>
              <li>
                <Link
                  href="/prestasi"
                  style={warnaIsi}
                  className="hover:!text-[#FFD52A]"
                >
                  Prestasi
                </Link>
              </li>
              <li>
                <Link
                  href="/berita"
                  style={warnaIsi}
                  className="hover:!text-[#FFD52A]"
                >
                  Berita
                </Link>
              </li>
              <li>
                <Link
                  href="/kontak"
                  style={warnaIsi}
                  className="hover:!text-[#FFD52A]"
                >
                  Kontak
                </Link>
              </li>
            </ul>
          </div>

          {/* KONTAK */}
          <div>
            <p
              style={{
                ...warnaJudul,
                fontSize: "16px",
                margin: "0 0 12px",
              }}
            >
              Hubungi Kami
            </p>

            <ul
              className="space-y-2 text-sm"
              style={{
                ...warnaIsi,
                lineHeight: 1.7,
              }}
            >
              <li>
                <span
                  style={{
                    color: "#FFFFFF",
                    WebkitTextFillColor: "#FFFFFF",
                    fontWeight: 700,
                  }}
                >
                  Alamat:
                </span>
                <br />
                Jl. Gajah Mada No. 5, Rembang, Jawa Tengah
              </li>

              <li>
                <span
                  style={{
                    color: "#FFFFFF",
                    WebkitTextFillColor: "#FFFFFF",
                    fontWeight: 700,
                  }}
                >
                  Telepon:
                </span>
                <br />
                (0295) 691375
              </li>

              <li>
                <span
                  style={{
                    color: "#FFFFFF",
                    WebkitTextFillColor: "#FFFFFF",
                    fontWeight: 700,
                  }}
                >
                  Email:
                </span>
                <br />
                <a
                  href="mailto:sma1rbg@yahoo.co.id"
                  style={warnaIsi}
                  className="break-words hover:!text-[#FFD52A]"
                >
                  sma1rbg@yahoo.co.id
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* COPYRIGHT */}
        <div
          className="mt-5 border-t border-white/20 pt-3 text-center text-xs leading-5"
          style={{
            color: "#BFDBFE",
            WebkitTextFillColor: "#BFDBFE",
          }}
        >
          © 2026{" "}
          <span
            style={{
              color: "#FFD52A",
              WebkitTextFillColor: "#FFD52A",
              fontWeight: 700,
            }}
          >
            SMA Negeri 1 Rembang
          </span>
          . Hak cipta dilindungi.
        </div>
      </div>
    </footer>
  );
}