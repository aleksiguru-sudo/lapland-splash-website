interface ContactProps {
  lang: "fi" | "en";
}

const t = {
  fi: {
    heading: "YHTEYSTIEDOT",
    sub: "Ota yhteyttä — vastaamme nopeasti",
    location: "Sijainti",
    locationVal: "Ounaspaviljonki, Jokiväylä 9, 96200 Rovaniemi",
    season: "Sesonki",
    seasonVal: "Kesäkuu — Elokuu",
    phone: "Puhelin",
    email: "Sähköposti",
    mapLink: "Avaa Google Maps →",
    instagram: "Seuraa Instagramissa",
  },
  en: {
    heading: "CONTACT",
    sub: "Get in touch — we respond quickly",
    location: "Location",
    locationVal: "Ounaspaviljonki, Jokiväylä 9, 96200 Rovaniemi, Finland",
    season: "Season",
    seasonVal: "June — August",
    phone: "Phone",
    email: "Email",
    mapLink: "Open Google Maps →",
    instagram: "Follow on Instagram",
  },
};

export default function Contact({ lang }: ContactProps) {
  const txt = t[lang];

  return (
    <section
      id="yhteystiedot"
      className="py-24 px-4"
      style={{ backgroundColor: "#0e0e0e" }}
    >
      <div className="max-w-4xl mx-auto">
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact info */}
          <div className="space-y-6">
            <div>
              <p className="text-[#DFC13F] text-sm uppercase tracking-widest font-bold mb-1">
                {txt.location}
              </p>
              <p className="text-white/80">{txt.locationVal}</p>
              <a
                href="https://maps.google.com/?q=Ounaspaviljonki+Rovaniemi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#DFC13F] text-sm mt-1 inline-block hover:underline"
              >
                {txt.mapLink}
              </a>
            </div>

            <div>
              <p className="text-[#DFC13F] text-sm uppercase tracking-widest font-bold mb-1">
                {txt.season}
              </p>
              <p className="text-white/80">{txt.seasonVal}</p>
            </div>

            <div>
              <p className="text-[#DFC13F] text-sm uppercase tracking-widest font-bold mb-1">
                {txt.phone}
              </p>
              <a
                href="tel:+358401234567"
                className="text-white/80 hover:text-white transition-colors"
              >
                +358 40 123 4567
              </a>
            </div>

            <div>
              <p className="text-[#DFC13F] text-sm uppercase tracking-widest font-bold mb-1">
                {txt.email}
              </p>
              <a
                href="mailto:info@laplandsplash.com"
                className="text-white/80 hover:text-white transition-colors"
              >
                info@laplandsplash.com
              </a>
            </div>

            <div>
              <a
                href="https://instagram.com/laplandsplash"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#DFC13F] font-bold hover:underline"
              >
                📸 {txt.instagram} @laplandsplash
              </a>
            </div>
          </div>

          {/* Google Maps embed */}
          <div className="rounded-lg overflow-hidden h-72 md:h-auto">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1858.5!2d25.7209!3d66.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x45d0818ba9f2b0d1%3A0x1234!2sOunaspaviljonki!5e0!3m2!1sfi!2sfi!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "280px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Lapland Splash sijainti"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
