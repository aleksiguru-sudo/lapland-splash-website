import Image from "next/image";
import Link from "next/link";

interface FooterProps { lang: "fi" | "en"; }

export default function Footer({ lang }: FooterProps) {
  const fi = lang === "fi";
  return (
    <footer style={{ background: "var(--dark)", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
      <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <Image src="/logo-white-tag.svg" alt="Lapland Splash" width={130} height={40} />
        <p className="text-white/25 text-xs text-center">
          © 2026 Lapland Splash Oy · Y-tunnus 3429244-3 · Rovaniemi, Finland
        </p>
        <div className="flex items-center gap-6">
          <Link href={fi ? "/en" : "/"}
            className="text-white/35 hover:text-white/70 text-xs font-bold uppercase tracking-widest transition-colors">
            {fi ? "EN" : "FI"}
          </Link>
          <a href="https://instagram.com/laplandsplash" target="_blank" rel="noopener noreferrer"
            className="text-white/35 hover:text-white/70 text-xs uppercase tracking-widest transition-colors">
            Instagram
          </a>
          <a href="mailto:info@laplandsplash.fi"
            className="text-white/35 hover:text-white/70 text-xs uppercase tracking-widest transition-colors">
            {fi ? "Yhteystiedot" : "Contact"}
          </a>
        </div>
      </div>
    </footer>
  );
}
