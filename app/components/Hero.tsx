"use client";

interface HeroProps {
  lang: "fi" | "en";
}

const t = {
  fi: {
    label: "Rovaniemi · Kemijoki",
    title1: "VAUHTIA",
    title2: "VESILLE",
    sub: "Jet ski -safarit Lapin luonnossa — adrenaliinia, vapautta ja unohtumattomia elämyksiä",
    cta: "VARAA SAFARI",
    ctaAlt: "KATSO SAFARIT",
    scroll: "Vieritä alas",
    badge1: "4.9 / 5",
    badge1sub: "asiakasarvio",
    badge2: "100+",
    badge2sub: "safaria / kesä",
    badge3: "3 × Sea-Doo",
    badge3sub: "kalustoa",
  },
  en: {
    label: "Rovaniemi · Kemijoki River",
    title1: "RIDE THE",
    title2: "ARCTIC",
    sub: "Jet ski safaris in Finnish Lapland — adrenaline, freedom and unforgettable experiences",
    cta: "BOOK A SAFARI",
    ctaAlt: "VIEW SAFARIS",
    scroll: "Scroll down",
    badge1: "4.9 / 5",
    badge1sub: "customer rating",
    badge2: "100+",
    badge2sub: "safaris / summer",
    badge3: "3 × Sea-Doo",
    badge3sub: "fleet",
  },
};

export default function Hero({ lang }: HeroProps) {
  const txt = t[lang];

  return (
    <section className="relative min-h-screen flex flex-col justify-end overflow-hidden">
      {/* Video background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        style={{ filter: "brightness(0.55)" }}
      >
        <source src="/hero-video.mp4" type="video/mp4" />
        {/* Fallback image */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/LaplandSplash-SonyBlue-1.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      </video>

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/20 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a]/60 via-transparent to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 pb-20 pt-36">
        <div className="max-w-3xl">
          {/* Label */}
          <p className="section-label mb-6">{txt.label}</p>

          {/* Title */}
          <h1 className="section-heading text-white mb-6"
            style={{ fontSize: "clamp(4rem, 12vw, 9rem)" }}>
            {txt.title1}<br />
            <span style={{ color: "#DFC13F" }}>{txt.title2}</span>
          </h1>

          {/* Subtitle */}
          <p className="text-white/70 text-lg md:text-xl mb-10 max-w-xl leading-relaxed">
            {txt.sub}
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4">
            <a href="#varaa" className="btn-primary text-base">
              {txt.cta}
            </a>
            <a href="#safarit" className="btn-ghost text-base">
              {txt.ctaAlt}
            </a>
          </div>
        </div>

        {/* Stats bar */}
        <div className="mt-16 flex flex-wrap gap-8 md:gap-16">
          {[
            { val: txt.badge1, sub: txt.badge1sub },
            { val: txt.badge2, sub: txt.badge2sub },
            { val: txt.badge3, sub: txt.badge3sub },
          ].map((b) => (
            <div key={b.val}>
              <p
                className="text-white font-extrabold italic"
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "1.75rem",
                  letterSpacing: "-0.02em",
                }}
              >
                {b.val}
              </p>
              <p className="text-white/50 text-xs uppercase tracking-widest mt-0.5">
                {b.sub}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 right-8 z-10 hidden md:flex flex-col items-center gap-2">
        <div
          className="w-px h-12 animate-pulse"
          style={{ background: "linear-gradient(to bottom, transparent, #DFC13F)" }}
        />
        <p
          className="text-white/40 text-xs uppercase tracking-widest"
          style={{ writingMode: "vertical-rl" }}
        >
          {txt.scroll}
        </p>
      </div>
    </section>
  );
}
