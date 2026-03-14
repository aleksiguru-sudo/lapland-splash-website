interface ContactProps { lang: "fi" | "en"; }

export default function Contact({ lang }: ContactProps) {
  const fi = lang === "fi";

  return (
    <section id="yhteystiedot" style={{ background: "var(--dark2)", paddingTop: "7rem", paddingBottom: "7rem" }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          {/* Left */}
          <div>
            <p className="label mb-5">{fi ? "Yhteystiedot" : "Contact"}</p>
            <h2 className="display text-white mb-12" style={{ fontSize: "clamp(3rem, 6vw, 5rem)" }}>
              {fi
                ? <><span style={{ color: "var(--yellow)" }}>TULE</span><br />VESILLE</>
                : <><span style={{ color: "var(--yellow)" }}>FIND</span><br />US HERE</>}
            </h2>

            <div className="space-y-0">
              {[
                {
                  label: fi ? "Sijainti" : "Location",
                  value: "Ounaspaviljonki\nJokiväylä 9, 96900 Rovaniemi",
                  link: "https://maps.google.com/?q=Ounaspaviljonki+Rovaniemi",
                  linkText: fi ? "Avaa kartalla →" : "Open on map →",
                },
                { label: fi ? "Sesonki" : "Season", value: fi ? "Kesäkuu — Elokuu" : "June — August" },
                { label: fi ? "Puhelin" : "Phone", value: "+358 443 550 078", link: "tel:+358443550078" },
                { label: fi ? "Sähköposti" : "Email", value: "info@laplandsplash.fi", link: "mailto:info@laplandsplash.fi" },
                { label: "Instagram", value: "@laplandsplash", link: "https://instagram.com/laplandsplash" },
              ].map((item) => (
                <div key={item.label} className="py-6 flex gap-8"
                  style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
                  <div className="w-24 shrink-0 text-xs uppercase tracking-widest pt-0.5"
                    style={{ color: "var(--yellow)", fontFamily: "var(--font-heading)", fontWeight: 800, fontStyle: "italic" }}>
                    {item.label}
                  </div>
                  <div>
                    {item.link ? (
                      <a href={item.link}
                        target={item.link.startsWith("http") ? "_blank" : undefined}
                        rel={item.link.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="text-white/70 hover:text-white transition-colors leading-relaxed block"
                        style={{ whiteSpace: "pre-line" }}>
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-white/70 leading-relaxed" style={{ whiteSpace: "pre-line" }}>{item.value}</p>
                    )}
                    {item.linkText && (
                      <a href={item.link} target="_blank" rel="noopener noreferrer"
                        className="text-xs uppercase tracking-widest mt-2 inline-block hover:underline"
                        style={{ color: "var(--yellow)", fontFamily: "var(--font-heading)", fontWeight: 800, fontStyle: "italic" }}>
                        {item.linkText}
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right */}
          <div className="space-y-5 lg:pt-24">
            <div className="overflow-hidden" style={{ borderRadius: "3px", height: 380, border: "1px solid rgba(255,255,255,0.06)" }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1858.5!2d25.7209!3d66.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x45d0818ba9f2b0d1%3A0x1234!2sOunaspaviljonki!5e0!3m2!1sfi!2sfi!4v1234567890"
                width="100%" height="100%"
                style={{ border: 0, filter: "grayscale(1) brightness(0.8) contrast(1.1)" }}
                allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                title="Lapland Splash sijainti" />
            </div>
            <a href="#varaa" className="btn btn-yellow w-full justify-center text-sm py-4">
              {fi ? "Varaa safari online →" : "Book safari online →"}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
