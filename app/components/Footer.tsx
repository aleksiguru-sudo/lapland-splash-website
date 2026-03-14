import Image from "next/image";
import Link from "next/link";

interface FooterProps {
  lang: "fi" | "en";
}

export default function Footer({ lang }: FooterProps) {
  return (
    <footer
      className="py-12 px-6"
      style={{
        background: "var(--dark2)",
        borderTop: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <Image src="/logo-white-tag.svg" alt="Lapland Splash" width={130} height={40} />

        <p className="text-white/30 text-xs text-center">
          © 2026 Lapland Splash Oy &nbsp;·&nbsp; Rovaniemi, Finland &nbsp;·&nbsp;{" "}
          {lang === "fi" ? "Kaikki oikeudet pidätetään" : "All rights reserved"}
        </p>

        <div className="flex items-center gap-5">
          <Link
            href={lang === "fi" ? "/en" : "/"}
            className="text-white/40 hover:text-white/80 text-xs font-bold uppercase tracking-widest transition-colors"
          >
            {lang === "fi" ? "EN" : "FI"}
          </Link>
          <a
            href="https://instagram.com/laplandsplash"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/40 hover:text-white/80 text-xs uppercase tracking-widest transition-colors"
          >
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
}
