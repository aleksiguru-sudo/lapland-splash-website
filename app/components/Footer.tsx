import Image from "next/image";
import Link from "next/link";

interface FooterProps {
  lang: "fi" | "en";
}

export default function Footer({ lang }: FooterProps) {
  return (
    <footer
      className="py-12 px-4 border-t border-white/10"
      style={{ backgroundColor: "#0a0a0a" }}
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <Image
          src="/logo-white-tag.svg"
          alt="Lapland Splash"
          width={140}
          height={42}
        />

        <div className="text-center md:text-left">
          <p className="text-white/40 text-sm">
            © 2026 Lapland Splash Oy · Rovaniemi, Finland
          </p>
          <p className="text-white/30 text-xs mt-1">
            {lang === "fi"
              ? "Y-tunnus: 1234567-8 · Kaikki oikeudet pidätetään"
              : "Business ID: 1234567-8 · All rights reserved"}
          </p>
        </div>

        <div className="flex items-center gap-4">
          <Link
            href={lang === "fi" ? "/en" : "/"}
            className="text-[#DFC13F] text-sm font-bold uppercase hover:underline"
          >
            {lang === "fi" ? "🇬🇧 English" : "🇫🇮 Suomi"}
          </Link>
          <a
            href="https://instagram.com/laplandsplash"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/60 hover:text-white transition-colors text-sm"
          >
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
}
