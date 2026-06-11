const members = [
  {
    name: "Erdinc",
    role: "Inhaber & Stylist",
    note: "Haar, Gesicht, Haarentfernung — 18 Jahre Erfahrung in Spandau.",
    img: "https://images.unsplash.com/photo-1553521041-d168abd31de3?w=600&h=800&fit=crop&auto=format",
  },
  {
    name: "Meike",
    role: "Stylistin",
    note: "Spezialisiert auf Damenfrisuren, Farbe und Balayage.",
    img: "https://images.unsplash.com/photo-1599011176306-4a96f1516d4d?w=600&h=800&fit=crop&auto=format",
  },
  {
    name: "Nayime",
    role: "Stylistin",
    note: "Haar, Gesicht und Pflege für die ganze Familie.",
    img: "https://images.unsplash.com/photo-1604355240616-5e907f42b431?w=600&h=800&fit=crop&auto=format",
  },
];

export function Team() {
  return (
    <section id="team" className="py-28 bg-background border-t border-border">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-16">
          <p
            style={{ fontFamily: "'Jost', sans-serif", letterSpacing: "0.25em" }}
            className="text-primary text-xs uppercase mb-4"
          >
            Das Team
          </p>
          <h2
            style={{ fontFamily: "'DM Serif Display', serif", lineHeight: "1.15" }}
            className="text-foreground text-4xl md:text-5xl"
          >
            Menschen,<br />
            <em>die zuhören.</em>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {members.map((m) => (
            <div key={m.name} className="group">
              <div className="relative overflow-hidden aspect-[3/4] bg-card mb-5">
                <img
                  src={m.img}
                  alt={m.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              </div>
              <div className="w-6 h-px bg-primary mb-4 group-hover:w-12 transition-all duration-500" />
              <h3
                style={{ fontFamily: "'DM Serif Display', serif" }}
                className="text-foreground text-2xl mb-1"
              >
                {m.name}
              </h3>
              <p
                style={{ fontFamily: "'Jost', sans-serif", letterSpacing: "0.1em" }}
                className="text-primary text-xs uppercase mb-3"
              >
                {m.role}
              </p>
              <p
                style={{ fontFamily: "'Jost', sans-serif", lineHeight: "1.65" }}
                className="text-muted-foreground text-sm"
              >
                {m.note}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
