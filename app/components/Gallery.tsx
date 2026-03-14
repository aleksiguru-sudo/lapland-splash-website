import Image from "next/image";

interface GalleryProps {
  lang: "fi" | "en";
}

const t = {
  fi: {
    label: "Kuvagalleria",
    heading: "ELÄMYKSIÄ\nVESILTÄ",
    sub: "Ammattikuvaajan ottamat kuvat Kemijoen safareilta",
    cta: "VARAA OMA ELÄMYKSESI →",
  },
  en: {
    label: "Gallery",
    heading: "MOMENTS\nON WATER",
    sub: "Professional photography from Kemijoki river safaris",
    cta: "BOOK YOUR EXPERIENCE →",
  },
};

const images = [
  { src: "/LaplandSplash-SonyBlue-1.jpg", span: "col-span-2 row-span-2" },
  { src: "/LaplandSplash-SonyBlue-10.jpg", span: "" },
  { src: "/LaplandSplash-SonyBlue-11.jpg", span: "" },
  { src: "/LaplandSplash-SonyBlue-12.jpg", span: "" },
  { src: "/LaplandSplash-SonyBlue-13.jpg", span: "col-span-2" },
  { src: "/LaplandSplash-SonyBlue-15.jpg", span: "" },
  { src: "/LaplandSplash-SonyBlue-16.jpg", span: "" },
  { src: "/LaplandSplash-SonyBlue-17.jpg", span: "" },
];

export default function Gallery({ lang }: GalleryProps) {
  const txt = t[lang];

  return (
    <section id="kuvat" className="py-32 px-6" style={{ background: "var(--dark2)" }}>
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-16">
          <p className="section-label mb-5">{txt.label}</p>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <h2
              className="section-heading text-white"
              style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
            >
              {txt.heading.split("\n").map((line, i) => (
                <span key={i}>
                  {i === 1 ? <span style={{ color: "#DFC13F" }}>{line}</span> : line}
                  {i === 0 && <br />}
                </span>
              ))}
            </h2>
            <p className="text-white/50 max-w-xs text-sm leading-relaxed md:text-right">
              {txt.sub}
            </p>
          </div>
        </div>

        {/* Masonry grid */}
        <div
          className="grid gap-3"
          style={{
            gridTemplateColumns: "repeat(4, 1fr)",
            gridAutoRows: "220px",
          }}
        >
          {images.map((img, i) => (
            <div
              key={i}
              className={`relative overflow-hidden group ${img.span}`}
              style={{ borderRadius: "3px" }}
            >
              <Image
                src={img.src}
                alt={`Lapland Splash ${i + 1}`}
                fill
                className="object-cover transition-all duration-700 group-hover:scale-105 group-hover:brightness-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 flex flex-col items-center gap-4">
          <div className="w-px h-12" style={{ background: "linear-gradient(to bottom, transparent, #DFC13F)" }} />
          <a href="#varaa" className="btn-primary text-base px-10 py-4">
            {txt.cta}
          </a>
        </div>
      </div>
    </section>
  );
}
