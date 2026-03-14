export default function Marquee() {
  const items = ["Jet Ski Safari", "Sea-Doo", "Kemijoki", "Rovaniemi", "Lapland", "Arctic Adventure", "Vauhtia Vesille", "Book Now"];
  const repeated = [...items, ...items];

  return (
    <div className="overflow-hidden py-5" style={{ background: "var(--yellow)", borderTop: "none" }}>
      <div className="marquee-inner">
        {repeated.map((item, i) => (
          <span key={i} className="display px-8 text-sm whitespace-nowrap"
            style={{ color: "var(--dark)", letterSpacing: "0.15em" }}>
            {item}
            <span className="mx-6" style={{ opacity: 0.4 }}>✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
