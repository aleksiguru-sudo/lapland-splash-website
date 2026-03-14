"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

interface NavbarProps { lang: "fi" | "en"; }

export default function Navbar({ lang }: NavbarProps) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const links = lang === "fi"
    ? [["#safarit","Safarit"],["#varaa","Varaa"],["#kuvat","Kuvat"],["#yhteystiedot","Yhteystiedot"]]
    : [["#safarit","Safaris"],["#varaa","Book"],["#kuvat","Gallery"],["#yhteystiedot","Contact"]];

  return (
    <nav className="fixed top-0 inset-x-0 z-50 transition-all duration-500"
      style={{
        background: scrolled ? "rgba(8,8,8,0.96)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.05)" : "none",
      }}>
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href={lang === "fi" ? "/" : "/en"} className="relative z-10">
          <Image src="/logo-white-tag.svg" alt="Lapland Splash" width={148} height={44} priority />
        </Link>

        <div className="hidden md:flex items-center gap-10">
          {links.map(([href, label]) => (
            <a key={href} href={href}
              className="text-white/60 hover:text-white text-sm font-medium tracking-wide transition-colors duration-200">
              {label}
            </a>
          ))}
          <Link href={lang === "fi" ? "/en" : "/"}
            className="text-white/40 hover:text-white/70 text-xs font-bold uppercase tracking-widest transition-colors">
            {lang === "fi" ? "EN" : "FI"}
          </Link>
          <a href="#varaa" className="btn btn-yellow text-xs py-3 px-6">
            {lang === "fi" ? "Varaa nyt" : "Book now"}
          </a>
        </div>

        <div className="md:hidden flex items-center gap-5">
          <Link href={lang === "fi" ? "/en" : "/"} className="text-white/50 text-xs font-bold uppercase">
            {lang === "fi" ? "EN" : "FI"}
          </Link>
          <button onClick={() => setOpen(!open)} className="text-white text-2xl leading-none">
            {open ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden px-6 py-8 flex flex-col gap-6"
          style={{ background: "rgba(8,8,8,0.99)", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
          {links.map(([href, label]) => (
            <a key={href} href={href} onClick={() => setOpen(false)}
              className="text-white text-2xl font-light tracking-wide py-1"
              style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
              {label}
            </a>
          ))}
          <a href="#varaa" onClick={() => setOpen(false)} className="btn btn-yellow justify-center mt-2">
            {lang === "fi" ? "Varaa nyt" : "Book now"}
          </a>
        </div>
      )}
    </nav>
  );
}
