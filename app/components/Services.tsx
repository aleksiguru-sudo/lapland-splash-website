import Image from "next/image";

interface ServicesProps { lang: "fi" | "en"; }

export default function Services({ lang }: ServicesProps) {
  const fi = lang === "fi";

  const services = [
    {
      name: "Jet Ski Sprint",
      duration: fi ? "30 min" : "30 min",
      price: "114 €",
      tag: fi ? "Aloittelijalle" : "For beginners",
      desc: fi
        ? "Nopea adrenaliiniannos Kemijoen aalloilla. Täydellinen ensikertalaiselle tai nopeaan elämykseen."
        : "A quick adrenaline rush on the Kemijoki river. Perfect for first-timers.",
      img: "/LaplandSplash-SonyBlue-3.jpg",
      features: fi
        ? ["Turvavarusteet mukana", "Ohjaajan opastus", "Ei kokemusta tarvita"]
        : ["Safety gear included", "Instructor guidance", "No experience needed"],
    },
    {
      name: "Arctic River Safari",
      duration: fi ? "1 tunti" : "1 hour",
      price: "189 €",
      tag: fi ? "★ Suosituin" : "★ Most popular",
      popular: true,
      desc: fi
        ? "Opastettu reitti Kemijoen kauneimmille paikoille. Vauhtia, maisemia ja elämyksiä."
        : "Guided route to Kemijoki's most beautiful spots. Speed, scenery and experiences.",
      img: "/LaplandSplash-SonyBlue-20.jpg",
      features: fi
        ? ["Opastettu reitti", "Parhaat näköalapaikat", "GoPro-kuvaus mahdollinen"]
        : ["Guided route", "Best viewpoints", "GoPro photography optional"],
    },
    {
      name: "Midnight Sun Safari",
      duration: fi ? "2 tuntia" : "2 hours",
      price: "289 €",
      tag: fi ? "Premium" : "Premium",
      desc: fi
        ? "Ainutlaatuinen ilta-ajo keskiyön auringon valossa. Lappi parhaimmillaan."
        : "Unique evening ride under the midnight sun. Lapland at its best.",
      img: "/LaplandSplash-SonyBlue-35.jpg",
      features: fi
        ? ["Yöllinen lähtöaika", "Keskiyön aurinko", "Pienryhmä max 4 hlö"]
        : ["Evening departure", "Midnight sun", "Small group max 4 pax"],
    },
  ];

  return (
    <section id="safarit" style={{ background: "var(--dark)", paddingTop: "7rem", paddingBottom: "7rem" }}>
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div>
            <p className="label mb-5">{fi ? "Safarit & hinnat" : "Safaris & pricing"}</p>
            <h2 className="display text-white" style={{ fontSize: "clamp(2.8rem, 6vw, 5.5rem)" }}>
              {fi ? <><span style={{ color: "var(--yellow)" }}>VALITSE</span><br />ELÄMYKSESI</> : <><span style={{ color: "var(--yellow)" }}>CHOOSE</span><br />YOUR RIDE</>}
            </h2>
          </div>
          <p className="text-white/40 max-w-sm text-sm leading-relaxed lg:text-right">
            {fi
              ? "Kaikki safarit sisältävät turvavarusteet, opastuksen ja unohtumattoman reitin Kemijoella."
              : "All safaris include safety equipment, guidance and an unforgettable route on the Kemijoki."}
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {services.map((s) => (
            <article key={s.name}
              className="group flex flex-col overflow-hidden"
              style={{
                background: "var(--dark3)",
                border: s.popular ? "1px solid var(--yellow)" : "1px solid rgba(255,255,255,0.07)",
                borderRadius: "3px",
              }}>

              {/* Popular bar */}
              {s.popular && (
                <div className="display text-center py-2 text-xs"
                  style={{ background: "var(--yellow)", color: "var(--dark)", letterSpacing: "0.2em" }}>
                  {s.tag}
                </div>
              )}

              {/* Image */}
              <div className="relative overflow-hidden" style={{ height: 320 }}>
                <Image src={s.img} alt={s.name} fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0"
                  style={{ background: "linear-gradient(to top, rgba(22,22,22,0.7) 0%, transparent 60%)" }} />

                {!s.popular && (
                  <div className="absolute top-4 left-4 px-3 py-1 text-xs"
                    style={{
                      background: "rgba(8,8,8,0.75)", backdropFilter: "blur(8px)",
                      color: "var(--yellow)", fontFamily: "var(--font-heading)",
                      fontWeight: 800, fontStyle: "italic", letterSpacing: "0.15em",
                      textTransform: "uppercase", borderRadius: "2px",
                    }}>
                    {s.tag}
                  </div>
                )}

                <div className="absolute bottom-4 right-4 text-white/60 text-xs uppercase tracking-widest">
                  {s.duration}
                </div>
              </div>

              {/* Content */}
              <div className="p-7 flex flex-col flex-1">
                <h3 className="display text-white mb-3" style={{ fontSize: "1.5rem" }}>{s.name}</h3>
                <p className="text-white/50 text-sm leading-relaxed mb-6">{s.desc}</p>

                <ul className="space-y-2.5 mb-8 flex-1">
                  {s.features.map(f => (
                    <li key={f} className="flex items-center gap-3 text-sm text-white/65">
                      <span style={{ color: "var(--yellow)", fontSize: "0.55rem" }}>◆</span>
                      {f}
                    </li>
                  ))}
                </ul>

                <div className="flex items-end justify-between pt-6"
                  style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
                  <div>
                    <span className="display text-white" style={{ fontSize: "2.2rem" }}>{s.price}</span>
                    <span className="text-white/35 text-xs ml-1">{fi ? "/ hlö" : "/ person"}</span>
                  </div>
                  <a href="#varaa" className="btn btn-yellow text-xs py-3 px-5">
                    {fi ? "Varaa →" : "Book →"}
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
