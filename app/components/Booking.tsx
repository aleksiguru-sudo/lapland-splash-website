"use client";

interface BookingProps {
  lang: "fi" | "en";
}

const t = {
  fi: {
    heading: "VARAA SAFARI",
    sub: "Valitse päivä ja aika — maksa turvallisesti verkossa",
  },
  en: {
    heading: "BOOK A SAFARI",
    sub: "Choose your date and time — pay securely online",
  },
};

export default function Booking({ lang }: BookingProps) {
  const txt = t[lang];

  return (
    <section
      id="varaa"
      className="py-24 px-4"
      style={{ backgroundColor: "#0e0e0e" }}
    >
      <div className="max-w-4xl mx-auto">
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

        {/* RowlyGO widget */}
        <div
          className="rounded-lg overflow-hidden"
          style={{ backgroundColor: "#1a1a1a", minHeight: "500px" }}
        >
          <iframe
            src="https://app.rowlygo.com/booking-widget/lapland-splash"
            width="100%"
            height="600"
            frameBorder="0"
            title="Lapland Splash Booking"
            style={{ display: "block" }}
          />
        </div>

        <p className="text-center text-white/40 text-sm mt-6">
          {lang === "fi"
            ? "Maksut: Visma Pay · Kortti · Smartum · Edenred"
            : "Payment: Visma Pay · Card · Smartum · Edenred"}
        </p>
      </div>
    </section>
  );
}
