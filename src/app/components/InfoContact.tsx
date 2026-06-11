import { Clock, MapPin, Phone, CreditCard, Globe } from "lucide-react";

const hours = [
  { day: "Montag – Freitag", time: "09:00 – 18:00" },
  { day: "Samstag", time: "09:00 – 17:00" },
  { day: "Sonntag", time: "Geschlossen" },
];

export function InfoContact() {
  return (
    <section id="kontakt" className="py-28 bg-card border-t border-border">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-12 gap-16">
          {/* Left: text */}
          <div className="md:col-span-5">
            <p
              style={{ fontFamily: "'Jost', sans-serif", letterSpacing: "0.25em" }}
              className="text-primary text-xs uppercase mb-4"
            >
              Besuchen Sie uns
            </p>
            <h2
              style={{ fontFamily: "'DM Serif Display', serif", lineHeight: "1.15" }}
              className="text-foreground text-4xl md:text-5xl mb-8"
            >
              Finden Sie<br />
              <em>uns in Spandau.</em>
            </h2>
            <p
              style={{ fontFamily: "'Jost', sans-serif", lineHeight: "1.8" }}
              className="text-muted-foreground text-base mb-10"
            >
              Wir freuen uns auf Ihren Besuch — mit oder ohne Termin. Für Farbbehandlungen empfehlen wir eine Voranmeldung.
            </p>

            <a
              href="tel:+493035393396"
              style={{ fontFamily: "'Jost', sans-serif", letterSpacing: "0.15em" }}
              className="inline-block bg-primary text-primary-foreground px-8 py-3.5 text-sm uppercase tracking-widest hover:bg-primary/90 transition-colors"
            >
              Jetzt anrufen
            </a>
          </div>

          {/* Right: info blocks */}
          <div className="md:col-span-7 grid sm:grid-cols-2 gap-8">
            {/* Öffnungszeiten */}
            <div>
              <div className="flex items-center gap-3 mb-5">
                <Clock size={14} className="text-primary" />
                <p
                  style={{ fontFamily: "'Jost', sans-serif", letterSpacing: "0.2em" }}
                  className="text-primary text-xs uppercase"
                >
                  Öffnungszeiten
                </p>
              </div>
              <div className="flex flex-col gap-3">
                {hours.map((h) => (
                  <div key={h.day} className="flex justify-between items-baseline border-b border-border pb-2">
                    <p
                      style={{ fontFamily: "'Jost', sans-serif" }}
                      className="text-muted-foreground text-sm"
                    >
                      {h.day}
                    </p>
                    <p
                      style={{ fontFamily: "'Jost', sans-serif" }}
                      className={`text-sm ${h.time === "Geschlossen" ? "text-muted-foreground/50" : "text-foreground"}`}
                    >
                      {h.time}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Adresse */}
            <div>
              <div className="flex items-center gap-3 mb-5">
                <MapPin size={14} className="text-primary" />
                <p
                  style={{ fontFamily: "'Jost', sans-serif", letterSpacing: "0.2em" }}
                  className="text-primary text-xs uppercase"
                >
                  Adresse
                </p>
              </div>
              <p
                style={{ fontFamily: "'Jost', sans-serif", lineHeight: "1.8" }}
                className="text-foreground text-base mb-4"
              >
                Klosterstraße 10–11<br />
                13581 Berlin-Spandau<br />
                Altstadt Spandau
              </p>
              <a
                href="https://maps.google.com/?q=Klosterstraße+10,+13581+Berlin"
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontFamily: "'Jost', sans-serif", letterSpacing: "0.1em" }}
                className="text-primary text-xs uppercase hover:underline"
              >
                In Google Maps öffnen →
              </a>
            </div>

            {/* Telefon */}
            <div>
              <div className="flex items-center gap-3 mb-5">
                <Phone size={14} className="text-primary" />
                <p
                  style={{ fontFamily: "'Jost', sans-serif", letterSpacing: "0.2em" }}
                  className="text-primary text-xs uppercase"
                >
                  Telefon
                </p>
              </div>
              <a
                href="tel:+493035393396"
                style={{ fontFamily: "'Jost', sans-serif" }}
                className="text-foreground text-base hover:text-primary transition-colors"
              >
                030 35393396
              </a>
            </div>

            {/* Zahlung & Sprachen */}
            <div>
              <div className="flex items-center gap-3 mb-5">
                <CreditCard size={14} className="text-primary" />
                <p
                  style={{ fontFamily: "'Jost', sans-serif", letterSpacing: "0.2em" }}
                  className="text-primary text-xs uppercase"
                >
                  Zahlung & Service
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <p
                  style={{ fontFamily: "'Jost', sans-serif" }}
                  className="text-muted-foreground text-sm"
                >
                  Nur Barzahlung
                </p>
                <div className="flex items-center gap-2 mt-1">
                  <Globe size={12} className="text-muted-foreground" />
                  <p
                    style={{ fontFamily: "'Jost', sans-serif" }}
                    className="text-muted-foreground text-sm"
                  >
                    Deutsch · Englisch · Türkisch
                  </p>
                </div>
                <p
                  style={{ fontFamily: "'Jost', sans-serif" }}
                  className="text-muted-foreground text-sm"
                >
                  Kostenfreies WLAN · Getränke · Kinderfreundlich
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
