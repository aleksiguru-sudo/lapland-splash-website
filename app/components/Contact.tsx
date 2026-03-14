interface ContactProps {
  lang: "fi" | "en";
}

const t = {
  fi: {
    label: "Yhteystiedot",
    heading: "TULE\nVESILLE",
    location: "Sijainti",
    locationVal: "Ounaspaviljonki, Jokiväylä 9\n96200 Rovaniemi",
    season: "Sesonki",
    seasonVal: "Kesäkuu — Elokuu 2026",
    phone: "Puhelin",
    email: "Sähköposti",
    mapLink: "Avaa Google Maps →",
    ig: "Instagram",
    cta: "VARAA SAFARI NETTISIVUILLA",
  },
  en: {
    label: "Contact",
    heading: "FIND\nUS HERE",
    location: "Location",
    locationVal: "Ounaspaviljonki, Jokiväylä 9\n96200 Rovaniemi, Finland",
    season: "Season",
    seasonVal: "June — August 2026",
    phone: "Phone",
    email: "Email",
    mapLink: "Open Google Maps →",
    ig: "Instagram",
    cta: "BOOK A SAFARI ONLINE",
  },
};

export default function Contact({ lang }: ContactProps) {
  const txt = t[lang];

  return (
    <section id="yhteystiedot" className="py-32 px-6" style={{ background: "var(--dark)" }}>
      <div className="max-w-7xl mx-auto">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          {/* Left */}
          <div>
            <p className="section-label mb-5">{txt.label}</p>
            <h2
              className="section-heading text-white mb-12"
              style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
            >
              {txt.heading.split("\n").map((line, i) => (
                <span key={i}>
                  {i === 1 ? <span style={{ color: "#DFC13F" }}>{line}</span> : line}
                  {i === 0 && <br />}
                </span>
              ))}
            </h2>

            <div className="space-y-8">
              {[
                {
                  label: txt.location,
                  value: txt.locationVal,
                  extra: (
                    <a
                      href="https://maps.google.com/?q=Ounaspaviljonki+Rovaniemi"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs uppercase tracking-widest font-bold mt-2 inline-block"
                      style={{ color: "#DFC13F" }}
                    >
                      {txt.mapLink}
                    </a>
                  ),
                },
                { label: txt.season, value: txt.seasonVal },
                {
                  label: txt.phone,
                  value: "+358 40 123 4567",
                  href: "tel:+358401234567",
                },
                {
                  label: txt.email,
                  value: "info@laplandsplash.com",
                  href: "mailto:info@laplandsplash.com",
                },
                {
                  label: txt.ig,
                  value: "@laplandsplash",
                  href: "https://instagram.com/laplandsplash",
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex gap-6 pb-8"
                  style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}
                >
                  <p
                    className="text-xs uppercase tracking-widest font-bold w-24 pt-0.5 shrink-0"
                    style={{ color: "#DFC13F", fontFamily: "var(--font-heading)" }}
                  >
                    {item.label}
                  </p>
                  <div>
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.href.startsWith("http") ? "_blank" : undefined}
                        rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="text-white/80 hover:text-white transition-colors leading-relaxed"
                        style={{ whiteSpace: "pre-line" }}
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-white/80 leading-relaxed" style={{ whiteSpace: "pre-line" }}>
                        {item.value}
                      </p>
                    )}
                    {item.extra}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — map + CTA */}
          <div className="space-y-6">
            <div
              className="overflow-hidden"
              style={{ borderRadius: "4px", height: "380px" }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1858.5!2d25.7209!3d66.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x45d0818ba9f2b0d1%3A0x1234!2sOunaspaviljonki!5e0!3m2!1sfi!2sfi!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "grayscale(1) invert(0.9) contrast(0.9)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Lapland Splash sijainti"
              />
            </div>

            <a
              href="#varaa"
              className="btn-primary w-full text-center block text-sm py-4"
            >
              {txt.cta}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
