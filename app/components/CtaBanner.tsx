import Image from "next/image";

interface CtaBannerProps { lang: "fi" | "en"; }

export default function CtaBanner({ lang }: CtaBannerProps) {
  const fi = lang === "fi";
  return (
    <section className="relative overflow-hidden" style={{ minHeight: 380 }}>
      <Image src="/LaplandSplash-SonyBlue-42.jpg" alt="" fill
        className="object-cover" style={{ filter: "brightness(0.3) saturate(1.2)" }} />
      <div className="absolute inset-0"
        style={{ background: "linear-gradient(to right, rgba(8,8,8,0.85) 0%, rgba(8,8,8,0.4) 70%, rgba(8,8,8,0.2) 100%)" }} />
      <div className="absolute inset-0"
        style={{ background: "linear-gradient(to bottom, transparent 30%, rgba(8,8,8,0.5) 100%)" }} />
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10 max-w-7xl mx-auto px-6 py-24 md:py-28">
        <div>
          <p className="label mb-6">{fi ? "Kesäkuu — Elokuu 2026" : "June — August 2026"}</p>
          <h2 className="display text-white" style={{ fontSize: "clamp(2.5rem, 5.5vw, 4.5rem)" }}>
            {fi
              ? <><span style={{ color: "var(--yellow)" }}>VARAA</span> PAIKKASI<br />SESONKIIN</>
              : <><span style={{ color: "var(--yellow)" }}>BOOK</span> YOUR SPOT<br />FOR THE SEASON</>}
          </h2>
          <p className="text-white/45 mt-4 text-sm" style={{ maxWidth: "28rem" }}>
            {fi
              ? "Paikat täyttyvät nopeasti — varmista elämyksesi jo tänään."
              : "Spots fill fast — secure your experience today."}
          </p>
        </div>
        <a href="#varaa" className="btn btn-yellow shrink-0" style={{ fontSize: "1rem", padding: "1.25rem 3rem" }}>
          {fi ? "Varaa nyt →" : "Book now →"}
        </a>
      </div>
    </section>
  );
}
