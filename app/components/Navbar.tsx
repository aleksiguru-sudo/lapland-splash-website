"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

interface NavbarProps {
  lang: "fi" | "en";
}

const t = {
  fi: { services: "Safarit", booking: "Varaa", gallery: "Kuvat", contact: "Yhteystiedot", bookNow: "VARAA NYT" },
  en: { services: "Safaris", booking: "Book", gallery: "Gallery", contact: "Contact", bookNow: "BOOK NOW" },
};

export default function Navbar({ lang }: NavbarProps) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const txt = t[lang];
  const otherLang = lang === "fi" ? "en" : "fi";
  const otherHref = lang === "fi" ? "/en" : "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(10,10,10,0.97)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        <Link href={lang === "fi" ? "/" : "/en"}>
          <Image src="/logo-white-tag.svg" alt="Lapland Splash" width={150} height={44} priority />
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {[
            { href: "#safarit", label: txt.services },
            { href: "#varaa", label: txt.booking },
            { href: "#kuvat", label: txt.gallery },
            { href: "#yhteystiedot", label: txt.contact },
          ].map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-white/70 hover:text-white transition-colors text-sm font-medium tracking-wide"
            >
              {item.label}
            </a>
          ))}
          <Link
            href={otherHref}
            className="text-white/50 hover:text-white/80 text-sm font-bold uppercase transition-colors"
          >
            {otherLang.toUpperCase()}
          </Link>
          <a
            href="#varaa"
            className="btn-primary text-xs py-2.5 px-5"
          >
            {txt.bookNow}
          </a>
        </div>

        {/* Mobile */}
        <div className="md:hidden flex items-center gap-4">
          <Link href={otherHref} className="text-white/60 font-bold text-sm uppercase">
            {otherLang.toUpperCase()}
          </Link>
          <button onClick={() => setOpen(!open)} className="text-white/80 text-xl" aria-label="Menu">
            {open ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden px-6 pb-8 flex flex-col gap-5"
          style={{ background: "rgba(10,10,10,0.98)", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
          {[
            { href: "#safarit", label: txt.services },
            { href: "#varaa", label: txt.booking },
            { href: "#kuvat", label: txt.gallery },
            { href: "#yhteystiedot", label: txt.contact },
          ].map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="text-white/80 text-xl font-medium py-2"
              style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}
            >
              {item.label}
            </a>
          ))}
          <a href="#varaa" onClick={() => setOpen(false)} className="btn-primary text-center mt-3">
            {txt.bookNow}
          </a>
        </div>
      )}
    </nav>
  );
}
