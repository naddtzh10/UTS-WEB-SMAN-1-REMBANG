
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Manrope, Pixelify_Sans } from "next/font/google";

const mainFont = Manrope({
  variable: "--font-main",
  subsets: ["latin"],
  display: "swap",
});

const pixelFont = Pixelify_Sans({
  variable: "--font-pixel",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata = {
  title: "SMAN 1 Rembang | Berjatidiri dan Maju dalam Prestasi",
  description:
    "Website resmi SMA Negeri 1 Rembang, berisi profil sekolah, berita, kegiatan, dan prestasi siswa.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body
        className={`${mainFont.variable} ${pixelFont.variable} pixel-background flex min-h-screen flex-col`}
      >
        <Navbar />

        <div className="flex-1">
          {children}
        </div>

        <Footer />
      </body>
    </html>
  );
}
