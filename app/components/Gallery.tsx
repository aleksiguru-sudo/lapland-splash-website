import Image from "next/image";

interface GalleryProps { lang: "fi" | "en"; }

export default function Gallery({ lang }: GalleryProps) {
  const fi = lang === "fi";

  return (
    <section id="kuvat" style={{ background: "var(--dark)", paddingTop: "7rem", paddingBottom: "7rem" }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
          <div>
            <p className="label mb-5">{fi ? "Kuvagalleria" : "Gallery"}</p>
            <h2 className="display text-white" style={{ fontSize: "clamp(3rem, 7vw, 6rem)" }}>
              {fi
                ? <><span style={{ color: "var(--yellow)" }}>ELÄMYKSIÄ</span><br />VESILTÄ</>
                : <><span style={{ color: "var(--yellow)" }}>MOMENTS</span><br />ON WATER</>}
            </h2>
          </div>
          <a href="https://instagram.com/laplandsplash" target="_blank" rel="noopener noreferrer"
            className="btn btn-outline self-start md:self-auto">
            @laplandsplash ↗
          </a>
        </div>

        {/* Asymmetric grid */}
        <div className="grid gap-2" style={{
          gridTemplateColumns: "repeat(12, 1fr)",
          gridTemplateRows: "repeat(3, 200px)",
        }}>
          {/* Large left */}
          <div className="relative overflow-hidden group" style={{ gridColumn: "1 / 6", gridRow: "1 / 3", borderRadius: "3px" }}>
            <Image src="/LaplandSplash-SonyBlue-1.jpg" alt="" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
          </div>
          {/* Top middle */}
          <div className="relative overflow-hidden group" style={{ gridColumn: "6 / 9", gridRow: "1 / 2", borderRadius: "3px" }}>
            <Image src="/LaplandSplash-SonyBlue-10.jpg" alt="" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
          </div>
          {/* Top right */}
          <div className="relative overflow-hidden group" style={{ gridColumn: "9 / 13", gridRow: "1 / 2", borderRadius: "3px" }}>
            <Image src="/LaplandSplash-SonyBlue-22.jpg" alt="" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
          </div>
          {/* Middle */}
          <div className="relative overflow-hidden group" style={{ gridColumn: "6 / 10", gridRow: "2 / 3", borderRadius: "3px" }}>
            <Image src="/LaplandSplash-SonyBlue-35.jpg" alt="" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
          </div>
          {/* Middle right */}
          <div className="relative overflow-hidden group" style={{ gridColumn: "10 / 13", gridRow: "2 / 3", borderRadius: "3px" }}>
            <Image src="/LaplandSplash-SonyBlue-13.jpg" alt="" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
          </div>
          {/* Bottom left */}
          <div className="relative overflow-hidden group" style={{ gridColumn: "1 / 4", gridRow: "3 / 4", borderRadius: "3px" }}>
            <Image src="/LaplandSplash-SonyBlue-26.jpg" alt="" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
          </div>
          {/* Bottom middle */}
          <div className="relative overflow-hidden group" style={{ gridColumn: "4 / 8", gridRow: "3 / 4", borderRadius: "3px" }}>
            <Image src="/LaplandSplash-SonyBlue-28.jpg" alt="" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
          </div>
          {/* Bottom right large */}
          <div className="relative overflow-hidden group" style={{ gridColumn: "8 / 13", gridRow: "3 / 4", borderRadius: "3px" }}>
            <Image src="/LaplandSplash-SonyBlue-5.jpg" alt="" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <a href="#varaa" className="btn btn-yellow text-sm px-10 py-4">
            {fi ? "Varaa oma elämyksesi →" : "Book your experience →"}
          </a>
        </div>
      </div>
    </section>
  );
}
