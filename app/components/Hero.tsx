interface HeroProps {
  lang: "fi" | "en";
}

const t = {
  fi: {
    title: "VAUHTIA VESILLE",
    sub: "Jet ski -safarit Kemijoen aalloilla — Rovaniemi",
    cta: "VARAA SAFARI",
    ctaSub: "tai soita +358 40 123 4567",
    scroll: "Katso safarit",
  },
  en: {
    title: "RIDE THE ARCTIC WAVES",
    sub: "Jet ski safaris on the Kemijoki river — Rovaniemi, Lapland",
    cta: "BOOK A SAFARI",
    ctaSub: "or call +358 40 123 4567",
    scroll: "View safaris",
  },
};

export default function Hero({ lang }: HeroProps) {
  const txt = t[lang];

  return (
    <section
      className="relative min-h-screen flex items-center justify-center"
      style={{
        backgroundImage: "url('/LaplandSplash-SonyBlue-1.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <p
          className="text-[#DFC13F] font-bold uppercase tracking-widest text-sm mb-4"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          LAPLAND SPLASH
        </p>
        <h1
          className="text-5xl md:text-7xl font-bold italic text-white leading-tight mb-6"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          {txt.title}
        </h1>
        <p className="text-xl md:text-2xl text-white/90 mb-10 font-medium">
          {txt.sub}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a href="#varaa" className="btn-yellow text-lg px-8 py-4">
            {txt.cta}
          </a>
          <a href="#safarit" className="btn-outline text-lg px-8 py-4">
            {txt.scroll} ↓
          </a>
        </div>
        <p className="text-white/60 mt-6 text-sm">{txt.ctaSub}</p>
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#121212] to-transparent" />
    </section>
  );
}
