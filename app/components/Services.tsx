import Image from "next/image";

interface ServicesProps {
  lang: "fi" | "en";
}

const t = {
  fi: {
    label: "Safarit",
    heading: "VALITSE\nELÄMYKSESI",
    services: [
      {
        id: "sprint",
        name: "Jet Ski Sprint",
        duration: "30 min",
        price: "114 €",
        priceNote: "/ henkilö",
        desc: "Nopea adrenaliiniannos Kemijoen aalloilla. Täydellinen ensikertalaiselle tai lyhyempään elämykseen.",
        img: "/LaplandSplash-SonyBlue-3.jpg",
        features: ["Turvavarusteet mukana", "Ohjaajan opastus", "Ei kokemusta tarvita"],
      },
      {
        id: "arctic",
        name: "Arctic River Safari",
        duration: "1 h",
        price: "189 €",
        priceNote: "/ henkilö",
        desc: "Koe Kemijoen kauneus täysillä. Opastettu reitti pitkin jokea — maisemia ja vauhtia.",
        img: "/LaplandSplash-SonyBlue-9.jpg",
        features: ["Opastettu reitti", "Parhaat näköalapaikat", "GoPro-kuvaus mahdollinen"],
        popular: true,
      },
      {
        id: "midnight",
        name: "Midnight Sun Safari",
        duration: "2 h",
        price: "289 €",
        priceNote: "/ henkilö",
        desc: "Eksklusiivinen ilta-ajo keskiyön auringon valossa. Ainutlaatuinen premium-kokemus.",
        img: "/LaplandSplash-SonyBlue-14.jpg",
        features: ["Yöllinen lähtö", "Keskiyön aurinko", "Premium-kokemus"],
      },
    ],
    book: "VARAA",
  },
  en: {
    label: "Safaris",
    heading: "CHOOSE\nYOUR RIDE",
    services: [
      {
        id: "sprint",
        name: "Jet Ski Sprint",
        duration: "30 min",
        price: "€114",
        priceNote: "/ person",
        desc: "A quick adrenaline rush on the Kemijoki river. Perfect for first-timers or a shorter experience.",
        img: "/LaplandSplash-SonyBlue-3.jpg",
        features: ["Safety gear included", "Instructor guidance", "No experience needed"],
      },
      {
        id: "arctic",
        name: "Arctic River Safari",
        duration: "1 hr",
        price: "€189",
        priceNote: "/ person",
        desc: "Experience the beauty of the Kemijoki river at full throttle — scenery and speed.",
        img: "/LaplandSplash-SonyBlue-9.jpg",
        features: ["Guided route", "Best viewpoints", "GoPro photography option"],
        popular: true,
      },
      {
        id: "midnight",
        name: "Midnight Sun Safari",
        duration: "2 hrs",
        price: "€289",
        priceNote: "/ person",
        desc: "An exclusive evening ride under the midnight sun — a unique premium experience.",
        img: "/LaplandSplash-SonyBlue-14.jpg",
        features: ["Evening departure", "Midnight sun", "Premium experience"],
      },
    ],
    book: "BOOK",
  },
};

export default function Services({ lang }: ServicesProps) {
  const txt = t[lang];

  return (
    <section id="safarit" className="py-32 px-6" style={{ background: "var(--dark)" }}>
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <div>
            <p className="section-label mb-5">{txt.label}</p>
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
          </div>
          <a href="#varaa" className="btn-primary self-start md:self-auto whitespace-nowrap">
            {lang === "fi" ? "VARAA NYT →" : "BOOK NOW →"}
          </a>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {txt.services.map((s, i) => (
            <div
              key={s.id}
              className="group relative overflow-hidden flex flex-col"
              style={{
                background: "var(--dark3)",
                border: s.popular ? "1px solid #DFC13F" : "1px solid rgba(255,255,255,0.06)",
                borderRadius: "4px",
              }}
            >
              {/* Popular badge */}
              {s.popular && (
                <div
                  className="absolute top-0 left-0 right-0 z-20 text-center py-1.5 text-xs font-extrabold italic uppercase tracking-widest"
                  style={{
                    background: "#DFC13F",
                    color: "#0a0a0a",
                    fontFamily: "var(--font-heading)",
                  }}
                >
                  {lang === "fi" ? "★ SUOSITUIN" : "★ MOST POPULAR"}
                </div>
              )}

              {/* Image */}
              <div className={`relative overflow-hidden ${s.popular ? "mt-7" : ""}`}
                style={{ height: "260px" }}>
                <Image
                  src={s.img}
                  alt={s.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#181818] via-transparent to-transparent" />

                {/* Duration chip */}
                <div
                  className="absolute top-4 right-4 px-3 py-1 text-xs font-bold uppercase tracking-widest"
                  style={{
                    background: "rgba(10,10,10,0.8)",
                    color: "#DFC13F",
                    fontFamily: "var(--font-heading)",
                    backdropFilter: "blur(8px)",
                    borderRadius: "2px",
                  }}
                >
                  {s.duration}
                </div>
              </div>

              {/* Content */}
              <div className="p-7 flex flex-col flex-1">
                <h3
                  className="text-white font-extrabold italic uppercase mb-3"
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "1.4rem",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {s.name}
                </h3>
                <p className="text-white/55 text-sm leading-relaxed mb-6">{s.desc}</p>

                <ul className="space-y-2 mb-8 flex-1">
                  {s.features.map((f) => (
                    <li key={f} className="flex items-center gap-3 text-sm text-white/70">
                      <span style={{ color: "#DFC13F", fontSize: "0.6rem" }}>■</span>
                      {f}
                    </li>
                  ))}
                </ul>

                <div className="flex items-end justify-between mt-auto pt-6"
                  style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
                  <div>
                    <span
                      className="font-extrabold italic text-white"
                      style={{ fontFamily: "var(--font-heading)", fontSize: "2rem" }}
                    >
                      {s.price}
                    </span>
                    <span className="text-white/40 text-sm ml-1">{s.priceNote}</span>
                  </div>
                  <a
                    href="#varaa"
                    className="btn-primary text-sm py-2.5 px-5"
                  >
                    {txt.book} →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
