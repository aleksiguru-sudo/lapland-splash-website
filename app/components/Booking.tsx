"use client";
import { useEffect } from "react";

interface BookingProps {
  lang: "fi" | "en";
}

const t = {
  fi: {
    label: "Varaukset",
    heading: "VARAA\nSAFARI",
    sub: "Valitse päivä ja aika — maksa turvallisesti verkossa",
    payment: "Maksut: Visma Pay · Kortti · Smartum · Edenred",
  },
  en: {
    label: "Booking",
    heading: "BOOK\nYOUR SAFARI",
    sub: "Choose your date and time — pay securely online",
    payment: "Payment: Visma Pay · Card · Smartum · Edenred",
  },
};

export default function Booking({ lang }: BookingProps) {
  const txt = t[lang];

  useEffect(() => {
    const existing = document.querySelector('script[src="https://reservation.rowlygo.fi/embed.js"]');
    if (!existing) {
      const script = document.createElement("script");
      script.src = "https://reservation.rowlygo.fi/embed.js";
      script.setAttribute("data-organizationId", "dac6fa50-d748-4c66-bb5d-76bc5fd34866");
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <section id="varaa" className="py-32 px-6" style={{ background: "var(--dark2)" }}>
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="mb-14">
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

        {/* RowlyGO widget */}
        <div
          style={{
            background: "var(--dark3)",
            borderRadius: "4px",
            border: "1px solid rgba(255,255,255,0.06)",
            minHeight: "500px",
            padding: "2rem",
          }}
        >
          <div id="rowlygo-widget" />
        </div>

        <p className="text-center text-white/30 text-xs mt-6 uppercase tracking-widest">
          {txt.payment}
        </p>
      </div>
    </section>
  );
}
