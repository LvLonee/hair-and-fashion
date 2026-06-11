import { useState } from "react";

type Service = { name: string; duration: string; price: string };
type Category = { id: string; label: string; services: Service[] };

const categories: Category[] = [
  {
    id: "herren",
    label: "Herren",
    services: [
      { name: "Haarschnitt (trocken)", duration: "25 Min", price: "23 €" },
      { name: "Konturschnitt", duration: "10 Min", price: "7 €" },
      { name: "Haarschnitt & Waschen", duration: "40 Min", price: "30 €" },
      { name: "Bartpflege & Kontur", duration: "20 Min", price: "15 €" },
      { name: "Dauerwelle", duration: "60 Min", price: "60–100 €" },
      { name: "Kinderschnitt (bis 12)", duration: "20 Min", price: "15 €" },
    ],
  },
  {
    id: "damen",
    label: "Damen",
    services: [
      { name: "Waschen & Föhnen", duration: "25–45 Min", price: "30–50 €" },
      { name: "Haarschnitt", duration: "45 Min", price: "35–55 €" },
      { name: "Vollfarbe", duration: "60–90 Min", price: "45–100 €" },
      { name: "Ansatzfarbe", duration: "50 Min", price: "35–40 €" },
      { name: "Balayage / Ombré", duration: "90–120 Min", price: "150–200 €" },
      { name: "Foliensträhnen (komplett)", duration: "60–120 Min", price: "75–160 €" },
      { name: "Dauerwelle", duration: "90 Min", price: "80–130 €" },
    ],
  },
  {
    id: "kinder",
    label: "Kinder",
    services: [
      { name: "Haarschnitt (bis 6 Jahre)", duration: "15 Min", price: "12 €" },
      { name: "Haarschnitt (7–12 Jahre)", duration: "20 Min", price: "15 €" },
      { name: "Haarschnitt & Waschen", duration: "30 Min", price: "20 €" },
    ],
  },
];

export function Services() {
  const [active, setActive] = useState("herren");
  const current = categories.find((c) => c.id === active)!;

  return (
    <section id="leistungen" className="py-28 bg-card border-t border-border">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-12 gap-12">
          {/* Header */}
          <div className="md:col-span-4">
            <p
              style={{ fontFamily: "'Jost', sans-serif", letterSpacing: "0.25em" }}
              className="text-primary text-xs uppercase mb-4"
            >
              Leistungen & Preise
            </p>
            <h2
              style={{ fontFamily: "'DM Serif Display', serif", lineHeight: "1.15" }}
              className="text-foreground text-4xl md:text-5xl mb-10"
            >
              Was wir<br />
              <em>anbieten.</em>
            </h2>

            {/* Tab switcher */}
            <div className="flex flex-col gap-1">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActive(cat.id)}
                  style={{ fontFamily: "'Jost', sans-serif", letterSpacing: "0.15em" }}
                  className={`text-left px-0 py-3 text-sm uppercase border-b transition-colors ${
                    active === cat.id
                      ? "text-primary border-primary"
                      : "text-muted-foreground border-border hover:text-foreground"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            <div className="mt-10 pt-8 border-t border-border">
              <p
                style={{ fontFamily: "'Jost', sans-serif", lineHeight: "1.7" }}
                className="text-muted-foreground text-sm"
              >
                Beratung auf Deutsch, Englisch und Türkisch. Alle Preise inklusive Beratungsgespräch.
              </p>
            </div>
          </div>

          {/* Service list */}
          <div className="md:col-span-8">
            <div className="border-t border-border">
              {current.services.map((s, i) => (
                <div
                  key={i}
                  className="flex items-baseline justify-between py-5 border-b border-border group hover:bg-secondary/30 px-4 -mx-4 transition-colors"
                >
                  <div>
                    <p
                      style={{ fontFamily: "'Jost', sans-serif" }}
                      className="text-foreground text-base group-hover:text-primary transition-colors"
                    >
                      {s.name}
                    </p>
                    <p
                      style={{ fontFamily: "'Jost', sans-serif", letterSpacing: "0.05em" }}
                      className="text-muted-foreground text-xs mt-0.5 uppercase"
                    >
                      {s.duration}
                    </p>
                  </div>
                  <p
                    style={{ fontFamily: "'DM Serif Display', serif" }}
                    className="text-primary text-xl shrink-0 ml-4"
                  >
                    {s.price}
                  </p>
                </div>
              ))}
            </div>

            <p
              style={{ fontFamily: "'Jost', sans-serif" }}
              className="text-muted-foreground text-xs mt-6"
            >
              * Preise können je nach Haarlänge und -dichte variieren. Barzahlung.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
