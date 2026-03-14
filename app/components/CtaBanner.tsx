import Image from "next/image";

interface CtaBannerProps { lang: "fi" | "en"; }

export default function CtaBanner({ lang }: CtaBannerProps) {
  const fi = lang === "fi";
  return (
    <section className="relative overflow-hidden" style={{ minHeight: 320 }}>
      <Image src="/LaplandSplash-SonyBlue-42.jpg" alt="" fill
        className="object-cover" style={{ filter: "brightness(0.35) saturate(1.2)" }} />
      <div className="absolute inset-0"
        style={{ background: "linear-gradient(135deg, rgba(8,8,8,0.8) 0%, transparent 100%)" }} />
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 max-w-7xl mx-auto px-6 py-20">
        <div>
          <p className="label mb-4">{fi ? "Kesäkuu — Elokuu 2026" : "June — August 2026"}</p>
          <h2 className="display text-white" style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}>
            {fi
              ? <>{<span style={{ color: "var(--yellow)" }}>VARAA</span>} PAIKKASI<br />SESONKIIN</>
              : <>{<span style={{ color: "var(--yellow)" }}>BOOK</span>} YOUR SPOT<br />FOR THE SEASON</>}
          </h2>
        </div>
        <a href="#varaa" className="btn btn-yellow shrink-0" style={{ fontSize: "1rem", padding: "1.25rem 2.75rem" }}>
          {fi ? "Varaa nyt →" : "Book now →"}
        </a>
      </div>
    </section>
  );
}
