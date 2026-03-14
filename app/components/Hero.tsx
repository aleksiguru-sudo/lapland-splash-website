"use client";

interface HeroProps { lang: "fi" | "en"; }

export default function Hero({ lang }: HeroProps) {
  const fi = lang === "fi";

  return (
    <section className="relative h-screen min-h-[700px] flex flex-col justify-end overflow-hidden">
      {/* Video */}
      <video autoPlay muted loop playsInline
        className="absolute inset-0 w-full h-full object-cover"
        style={{ filter: "brightness(0.45) saturate(1.1)" }}>
        <source src="/hero-video.mp4" type="video/mp4" />
      </video>

      {/* Gradient layers */}
      <div className="absolute inset-0" style={{
        background: "linear-gradient(to top, #080808 0%, rgba(8,8,8,0.4) 40%, rgba(8,8,8,0.1) 70%, transparent 100%)"
      }} />
      <div className="absolute inset-0" style={{
        background: "linear-gradient(to right, rgba(8,8,8,0.7) 0%, transparent 60%)"
      }} />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 pb-16 md:pb-24">
        <p className="label mb-6 md:mb-8">
          {fi ? "Rovaniemi · Kemijoki · Lappi" : "Rovaniemi · Kemijoki River · Lapland"}
        </p>

        <h1 className="display text-white mb-6" style={{ fontSize: "clamp(4.5rem, 14vw, 13rem)" }}>
          {fi ? (
            <><span style={{ color: "var(--yellow)" }}>VAUHTIA</span><br />VESILLE</>
          ) : (
            <><span style={{ color: "var(--yellow)" }}>RIDE THE</span><br />ARCTIC</>
          )}
        </h1>

        <p className="text-white/65 mb-10 max-w-lg leading-relaxed"
          style={{ fontSize: "clamp(1rem, 2vw, 1.2rem)" }}>
          {fi
            ? "Suomen paras jet ski -elämys — Sea-Doo -kalusto, ammattilaisoppaat ja unohtumaton reitti Kemijoen aalloilla."
            : "Finland's best jet ski experience — Sea-Doo fleet, professional guides and an unforgettable route on the Kemijoki river."}
        </p>

        <div className="flex flex-wrap gap-4">
          <a href="#varaa" className="btn btn-yellow">
            {fi ? "Varaa safari →" : "Book safari →"}
          </a>
          <a href="#safarit" className="btn btn-outline">
            {fi ? "Katso safarit" : "View safaris"}
          </a>
        </div>

        {/* Stats */}
        <div className="mt-14 flex flex-wrap gap-x-12 gap-y-4">
          {[
            { n: "100+", t: fi ? "safaria / kesä" : "safaris / summer" },
            { n: "4.9★", t: fi ? "asiakasarvio" : "customer rating" },
            { n: "3×", t: "Sea-Doo" },
            { n: "2024", t: fi ? "perustettu" : "founded" },
          ].map(s => (
            <div key={s.n}>
              <div className="display text-white" style={{ fontSize: "1.8rem" }}>{s.n}</div>
              <div className="text-white/40 text-xs uppercase tracking-widest mt-1">{s.t}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 right-8 z-10 hidden lg:flex flex-col items-center gap-3">
        <span className="text-white/30 text-xs uppercase tracking-[0.2em]" style={{ writingMode: "vertical-rl" }}>
          {fi ? "Vieritä" : "Scroll"}
        </span>
        <div className="w-px h-14" style={{ background: "linear-gradient(to bottom, transparent, var(--yellow))" }} />
      </div>
    </section>
  );
}
