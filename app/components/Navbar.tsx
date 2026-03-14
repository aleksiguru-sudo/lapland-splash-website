"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface NavbarProps {
  lang: "fi" | "en";
}

const t = {
  fi: {
    services: "Safarit",
    booking: "Varaa",
    gallery: "Kuvat",
    contact: "Yhteystiedot",
    bookNow: "VARAA NYT",
  },
  en: {
    services: "Safaris",
    booking: "Book",
    gallery: "Gallery",
    contact: "Contact",
    bookNow: "BOOK NOW",
  },
};

export default function Navbar({ lang }: NavbarProps) {
  const [open, setOpen] = useState(false);
  const txt = t[lang];
  const otherLang = lang === "fi" ? "en" : "fi";
  const otherHref = lang === "fi" ? "/en" : "/";

  return (
    <nav
      style={{ backgroundColor: "rgba(18,18,18,0.95)" }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm"
    >
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href={lang === "fi" ? "/" : "/en"}>
          <Image
            src="/logo-white-tag.svg"
            alt="Lapland Splash"
            width={160}
            height={48}
            priority
          />
        </Link>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center gap-8">
          <a
            href="#safarit"
            className="text-white hover:text-[#DFC13F] transition-colors font-medium"
          >
            {txt.services}
          </a>
          <a
            href="#varaa"
            className="text-white hover:text-[#DFC13F] transition-colors font-medium"
          >
            {txt.booking}
          </a>
          <a
            href="#kuvat"
            className="text-white hover:text-[#DFC13F] transition-colors font-medium"
          >
            {txt.gallery}
          </a>
          <a
            href="#yhteystiedot"
            className="text-white hover:text-[#DFC13F] transition-colors font-medium"
          >
            {txt.contact}
          </a>
          <Link
            href={otherHref}
            className="text-[#DFC13F] font-bold uppercase text-sm border border-[#DFC13F] px-3 py-1 rounded hover:bg-[#DFC13F] hover:text-black transition-colors"
          >
            {otherLang.toUpperCase()}
          </Link>
          <a href="#varaa" className="btn-yellow text-sm py-2 px-5">
            {txt.bookNow}
          </a>
        </div>

        {/* Mobile: lang + burger */}
        <div className="md:hidden flex items-center gap-3">
          <Link
            href={otherHref}
            className="text-[#DFC13F] font-bold uppercase text-sm"
          >
            {otherLang.toUpperCase()}
          </Link>
          <button
            onClick={() => setOpen(!open)}
            className="text-white text-2xl"
            aria-label="Menu"
          >
            {open ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          style={{ backgroundColor: "#121212" }}
          className="md:hidden px-4 pb-6 flex flex-col gap-4"
        >
          <a
            href="#safarit"
            onClick={() => setOpen(false)}
            className="text-white text-lg py-2 border-b border-white/10"
          >
            {txt.services}
          </a>
          <a
            href="#varaa"
            onClick={() => setOpen(false)}
            className="text-white text-lg py-2 border-b border-white/10"
          >
            {txt.booking}
          </a>
          <a
            href="#kuvat"
            onClick={() => setOpen(false)}
            className="text-white text-lg py-2 border-b border-white/10"
          >
            {txt.gallery}
          </a>
          <a
            href="#yhteystiedot"
            onClick={() => setOpen(false)}
            className="text-white text-lg py-2 border-b border-white/10"
          >
            {txt.contact}
          </a>
          <a href="#varaa" onClick={() => setOpen(false)} className="btn-yellow text-center mt-2">
            {txt.bookNow}
          </a>
        </div>
      )}
    </nav>
  );
}
