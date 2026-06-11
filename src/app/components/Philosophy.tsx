const passages = [
  {
    number: "01",
    text: "Im Anfang stand ein leerer Stuhl, ein Spiegel und eine Schere. Aus Stille und Aufmerksamkeit beginnt jeder gute Schnitt — eine Linie, die zu deinem Gesicht passt.",
  },
  {
    number: "02",
    text: "Was du hier siehst, ist kein Trend. Es ist Handwerk. Achtzehn Jahre an einem Ort in der Altstadt Spandau — Schnitt, Farbe, Bart, Kontur.",
  },
  {
    number: "03",
    text: "Jeder Kopf trägt eine Form. Wir hören zuerst, bevor wir schneiden. Damen, Herren, Kinder — alles mit derselben Ruhe.",
  },
  {
    number: "04",
    text: "Und wenn du gehst, soll der Schnitt noch in drei Wochen sitzen. Das ist unser einziger Maßstab.",
  },
];

export function Philosophy() {
  return (
    <section id="philosophie" className="py-28 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-12 gap-16 items-start">
          {/* Left: heading + image */}
          <div className="md:col-span-5 md:sticky md:top-24">
            <p
              style={{ fontFamily: "'Jost', sans-serif", letterSpacing: "0.25em" }}
              className="text-primary text-xs uppercase mb-4"
            >
              Unsere Philosophie
            </p>
            <h2
              style={{ fontFamily: "'DM Serif Display', serif", lineHeight: "1.15" }}
              className="text-foreground text-4xl md:text-5xl mb-10"
            >
              Handwerk braucht<br />
              <em>keine Trends.</em>
            </h2>
            <div className="relative overflow-hidden aspect-[3/4] bg-card">
              <img
                src="https://images.unsplash.com/photo-1549271568-e87e07c5406b?w=600&h=800&fit=crop&auto=format"
                alt="Schere auf einem Handtuch — das Handwerk"
                className="w-full h-full object-cover grayscale contrast-110"
              />
              <div className="absolute inset-0 bg-primary/10 mix-blend-multiply" />
            </div>
          </div>

          {/* Right: passages */}
          <div className="md:col-span-7 flex flex-col gap-12 pt-4">
            {passages.map((p) => (
              <div key={p.number} className="flex gap-8 group">
                <span
                  style={{ fontFamily: "'Jost', sans-serif", letterSpacing: "0.1em" }}
                  className="text-primary/40 text-xs mt-1 shrink-0 w-6"
                >
                  {p.number}
                </span>
                <div>
                  <div className="w-8 h-px bg-primary/40 mb-5 group-hover:w-16 transition-all duration-500" />
                  <p
                    style={{ fontFamily: "'DM Serif Display', serif", lineHeight: "1.65" }}
                    className="text-foreground text-xl md:text-2xl"
                  >
                    {p.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
