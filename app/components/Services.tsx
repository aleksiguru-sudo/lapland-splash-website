import Image from "next/image";

interface ServicesProps {
  lang: "fi" | "en";
}

const t = {
  fi: {
    heading: "SAFARIT",
    sub: "Valitse oman seikkailusi taso",
    bookBtn: "VARAA →",
    services: [
      {
        name: "Jet Ski Sprint",
        duration: "30 min",
        price: "114 €",
        desc: "Nopea adrenaliiniannos Kemijoen aalloilla. Täydellinen ensikertalaiselle tai lyhyempään elämykseen.",
        img: "/LaplandSplash-SonyBlue-3.jpg",
        features: ["Turvavarusteet mukana", "Ohjaajan opastus", "Ei kokemusta tarvita"],
      },
      {
        name: "Arctic River Safari",
        duration: "1 tunti",
        price: "189 €",
        desc: "Koe Kemijoen kauneus täysillä. Ajet reitti pitkin jokea ja takaisin — unohtumaton kokemus.",
        img: "/LaplandSplash-SonyBlue-5.jpg",
        features: ["Opastettu reitti", "Parhaat näköalapaikat", "GoPro-kuvamahdollisuus"],
        highlight: true,
      },
      {
        name: "Midnight Sun Safari",
        duration: "2 tuntia",
        price: "289 €",
        desc: "Eksklusiivinen ilta-ajo keskiyön auringon valossa. Ainutlaatuinen kokemus Lapin luonnossa.",
        img: "/LaplandSplash-SonyBlue-7.jpg",
        features: ["Yöllinen lähtö", "Keskiyön aurinko", "Premium-kokemus"],
      },
    ],
  },
  en: {
    heading: "SAFARIS",
    sub: "Choose your level of adventure",
    bookBtn: "BOOK →",
    services: [
      {
        name: "Jet Ski Sprint",
        duration: "30 min",
        price: "€114",
        desc: "A quick adrenaline rush on the Kemijoki river. Perfect for first-timers or a shorter experience.",
        img: "/LaplandSplash-SonyBlue-3.jpg",
        features: ["Safety equipment included", "Instructor guidance", "No experience needed"],
      },
      {
        name: "Arctic River Safari",
        duration: "1 hour",
        price: "€189",
        desc: "Experience the beauty of the Kemijoki river at full throttle. A guided route along the river and back.",
        img: "/LaplandSplash-SonyBlue-5.jpg",
        features: ["Guided route", "Best viewpoints", "GoPro photo opportunity"],
        highlight: true,
      },
      {
        name: "Midnight Sun Safari",
        duration: "2 hours",
        price: "€289",
        desc: "An exclusive evening ride under the midnight sun. A unique experience in Lapland's pristine nature.",
        img: "/LaplandSplash-SonyBlue-7.jpg",
        features: ["Evening departure", "Midnight sun", "Premium experience"],
      },
    ],
  },
};

export default function Services({ lang }: ServicesProps) {
  const txt = t[lang];

  return (
    <section id="safarit" className="py-24 px-4" style={{ backgroundColor: "#121212" }}>
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
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

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {txt.services.map((s) => (
            <div
              key={s.name}
              className={`rounded-lg overflow-hidden flex flex-col ${
                s.highlight
                  ? "ring-2 ring-[#DFC13F]"
                  : "ring-1 ring-white/10"
              }`}
              style={{ backgroundColor: "#1a1a1a" }}
            >
              {s.highlight && (
                <div
                  className="text-center py-2 text-sm font-bold uppercase tracking-widest text-[#121212]"
                  style={{ backgroundColor: "#DFC13F", fontFamily: "var(--font-heading)" }}
                >
                  {lang === "fi" ? "SUOSITUIN" : "MOST POPULAR"}
                </div>
              )}

              {/* Image */}
              <div className="relative h-52">
                <Image
                  src={s.img}
                  alt={s.name}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <div className="flex justify-between items-start mb-3">
                  <h3
                    className="text-xl font-bold text-white"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {s.name}
                  </h3>
                  <span className="text-[#DFC13F] text-sm font-medium">
                    {s.duration}
                  </span>
                </div>
                <p className="text-white/70 text-sm mb-4 leading-relaxed">{s.desc}</p>
                <ul className="space-y-2 mb-6 flex-1">
                  {s.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-white/80">
                      <span className="text-[#DFC13F]">✓</span> {f}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-between mt-auto">
                  <span
                    className="text-3xl font-bold text-white"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {s.price}
                  </span>
                  <a href="#varaa" className="btn-yellow text-sm py-2 px-4">
                    {txt.bookBtn}
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
