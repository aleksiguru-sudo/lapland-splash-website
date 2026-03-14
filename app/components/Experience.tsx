import Image from "next/image";

interface ExperienceProps { lang: "fi" | "en"; }

export default function Experience({ lang }: ExperienceProps) {
  const fi = lang === "fi";

  return (
    <section style={{ background: "var(--dark2)" }}>
      {/* Top full-bleed image strip */}
      <div className="relative w-full overflow-hidden" style={{ height: "clamp(300px, 50vw, 600px)" }}>
        <Image src="/LaplandSplash-SonyBlue-1.jpg" alt="Lapland Splash" fill
          className="object-cover" style={{ objectPosition: "center 30%" }} />
        <div className="absolute inset-0"
          style={{ background: "linear-gradient(to right, rgba(8,8,8,0.85) 0%, rgba(8,8,8,0.2) 60%, transparent 100%)" }} />
        <div className="absolute inset-0"
          style={{ background: "linear-gradient(to bottom, transparent 50%, var(--dark2) 100%)" }} />

        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-6 w-full">
            <p className="label mb-5">{fi ? "Miksi Lapland Splash" : "Why Lapland Splash"}</p>
            <h2 className="display text-white max-w-2xl" style={{ fontSize: "clamp(2.5rem, 6vw, 5.5rem)" }}>
              {fi
                ? <>{<span style={{ color: "var(--yellow)" }}>ELÄMYS</span>}<br />JOKA JÄTTÄÄ JÄLJEN</>
                : <>{<span style={{ color: "var(--yellow)" }}>AN EXPERIENCE</span>}<br />LIKE NO OTHER</>}
            </h2>
          </div>
        </div>
      </div>

      {/* Feature grid */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px"
          style={{ border: "1px solid rgba(255,255,255,0.06)", borderRadius: "3px", overflow: "hidden" }}>
          {[
            {
              num: "01",
              title: fi ? "Sea-Doo -kalusto" : "Sea-Doo fleet",
              desc: fi ? "3 uusinta Sea-Doo -vesijettia — Spark Trixx ja Wake Pro 230. Täydellisessä kunnossa." : "3 latest Sea-Doo jet skis — Spark Trixx and Wake Pro 230. In perfect condition.",
            },
            {
              num: "02",
              title: fi ? "Ammattilaisoppaat" : "Pro guides",
              desc: fi ? "Kokeneet oppaat varmistavat turvallisen ja unohtumattoman elämyksen jokaiselle." : "Experienced guides ensure a safe and unforgettable experience for everyone.",
            },
            {
              num: "03",
              title: fi ? "Kemijoki" : "Kemijoki River",
              desc: fi ? "Suomen pisin joki — ainutlaatuinen reitti Lapin luonnossa, suoraan Rovaniemen sydämessä." : "Finland's longest river — a unique route in Lapland nature, in the heart of Rovaniemi.",
            },
            {
              num: "04",
              title: fi ? "Helppo varata" : "Easy booking",
              desc: fi ? "Varaa verkossa 24/7 — nopea maksu Visma Paylla, kortilla tai liikuntasetelillä." : "Book online 24/7 — fast payment with Visma Pay, card or sports vouchers.",
            },
          ].map((f) => (
            <div key={f.title} className="p-8 md:p-10 group hover:bg-[rgba(223,193,63,0.04)] transition-colors"
              style={{ background: "var(--dark3)" }}>
              <div className="display mb-6" style={{ fontSize: "2.5rem", color: "rgba(223,193,63,0.25)", lineHeight: 1 }}>{f.num}</div>
              <h3 className="display text-white mb-3" style={{ fontSize: "1.1rem" }}>{f.title}</h3>
              <p className="text-white/45 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Split image + text */}
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="relative overflow-hidden" style={{ minHeight: 540 }}>
          <Image src="/LaplandSplash-SonyBlue-30.jpg" alt="Safari" fill className="object-cover object-center" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to right, transparent 60%, var(--dark3) 100%)" }} />
        </div>
        <div className="flex flex-col justify-center px-10 lg:px-16 py-16 lg:py-20" style={{ background: "var(--dark3)" }}>
          <p className="label mb-6">{fi ? "Kokemuksesta" : "About the experience"}</p>
          <h2 className="display text-white mb-8" style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}>
            {fi ? <><span style={{ color: "var(--yellow)" }}>LAPPI</span><br />AALLOILLA</> : <><span style={{ color: "var(--yellow)" }}>LAPLAND</span><br />ON WATER</>}
          </h2>
          <p className="text-white/60 leading-relaxed mb-5" style={{ fontSize: "0.95rem", maxWidth: "38rem" }}>
            {fi
              ? "Kemijoki on Suomen pisin joki — 550 km puhdasta arktista luontoa. Ajoamme reittiä, joka vie sinut kauniimmille alueille, kauas kaupunkimelusta."
              : "Kemijoki is Finland's longest river — 550 km of pure arctic nature. We ride routes that take you to the most beautiful areas, far from city noise."}
          </p>
          <p className="text-white/60 leading-relaxed mb-12" style={{ fontSize: "0.95rem", maxWidth: "38rem" }}>
            {fi
              ? "Olipa kyseessä ensimmäinen kerta vesijettillä tai jo kokenut ajaja — räätälöimme jokaisen safarin tarpeidesi mukaan."
              : "Whether it's your first time on a jet ski or you're an experienced rider — we tailor every safari to your needs."}
          </p>
          <div className="flex flex-wrap gap-4 items-center">
            <a href="#varaa" className="btn btn-yellow">
              {fi ? "Varaa elämys →" : "Book experience →"}
            </a>
            <a href="#safarit" className="btn btn-outline">
              {fi ? "Katso safarit" : "View safaris"}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
