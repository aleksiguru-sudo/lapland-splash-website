import Image from "next/image";

interface GalleryProps {
  lang: "fi" | "en";
}

const t = {
  fi: { heading: "KUVAGALLERIA", sub: "Elämyksiä Kemijoen aalloilta" },
  en: { heading: "GALLERY", sub: "Experiences from the Kemijoki river" },
};

const images = [
  "/LaplandSplash-SonyBlue-2.jpg",
  "/LaplandSplash-SonyBlue-4.jpg",
  "/LaplandSplash-SonyBlue-6.jpg",
  "/LaplandSplash-SonyBlue-7.jpg",
  "/LaplandSplash-SonyBlue-8.jpg",
  "/LaplandSplash-SonyBlue-1.jpg",
];

export default function Gallery({ lang }: GalleryProps) {
  const txt = t[lang];

  return (
    <section id="kuvat" className="py-24 px-4" style={{ backgroundColor: "#121212" }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-[#DFC13F] font-bold uppercase tracking-widest text-sm mb-2">
            LAPLAND SPLASH
          </p>
          <h2
            className="text-4xl md:text-5xl font-bold italic text-white"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            {txt.heading}
          </h2>
          <p className="text-white/60 mt-4 text-lg">{txt.sub}</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {images.map((src, i) => (
            <div key={i} className="relative aspect-square overflow-hidden rounded-lg">
              <Image
                src={src}
                alt={`Lapland Splash ${i + 1}`}
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="#varaa" className="btn-yellow text-lg px-8 py-4">
            {lang === "fi" ? "VARAA OMA ELÄMYKSESI →" : "BOOK YOUR EXPERIENCE →"}
          </a>
        </div>
      </div>
    </section>
  );
}
