"use client";
import { useEffect, useRef } from "react";

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
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Poistetaan vanha skripti jos on
    const old = containerRef.current.querySelector("script");
    if (old) old.remove();
    const oldRoot = containerRef.current.querySelector("#urent-app-root");
    if (oldRoot) oldRoot.remove();

    // Luodaan script-tagi containeriin — RowlyGO lisää urent-app-root ennen sitä
    const script = document.createElement("script");
    script.src = "https://reservation.rowlygo.fi/embed.js";
    script.setAttribute("data-organizationId", "dac6fa50-d748-4c66-bb5d-76bc5fd34866");
    script.setAttribute("data-color", "#DFC13F");
    script.async = true;
    containerRef.current.appendChild(script);

    // Ylikirjoitetaan RowlyGO:n violetti väri keltaisella CSS-injektiolla
    const style = document.createElement("style");
    style.innerHTML = `
      #urent-app-root button[class*="primary"],
      #urent-app-root [class*="primaryButton"],
      #urent-app-root [class*="searchButton"],
      #urent-app-root button[type="submit"],
      #urent-app-root .btn-primary,
      #urent-app-root [style*="background-color: rgb(88, 28, 135)"],
      #urent-app-root [style*="background-color: purple"],
      #urent-app-root [style*="background: purple"] {
        background-color: #DFC13F !important;
        color: #0a0a0a !important;
      }
      #urent-app-root a[class*="link"],
      #urent-app-root [class*="link"],
      #urent-app-root [class*="color-primary"] {
        color: #DFC13F !important;
      }
    `;
    document.head.appendChild(style);
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

        {/* RowlyGO widget container */}
        <div
          ref={containerRef}
          style={{
            borderRadius: "4px",
            border: "1px solid rgba(255,255,255,0.06)",
            minHeight: "500px",
            overflow: "hidden",
          }}
        />

        <p className="text-center text-white/30 text-xs mt-6 uppercase tracking-widest">
          {txt.payment}
        </p>
      </div>
    </section>
  );
}
