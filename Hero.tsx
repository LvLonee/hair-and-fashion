export function Hero() {
  return (
    <section className="relative min-h-screen flex items-end overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1647140655214-e4a2d914971f?w=1600&h=1000&fit=crop&auto=format"
          alt="Friseur beim Haarschnitt in einem ruhigen Atelier"
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#18140f] via-[#18140f]/70 to-[#18140f]/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 pb-20 pt-32 w-full">
        <div className="max-w-2xl">
          <p
            style={{ fontFamily: "'Jost', sans-serif", letterSpacing: "0.25em" }}
            className="text-primary text-xs uppercase mb-6"
          >
            Altstadt Spandau · Berlin · Seit 2006
          </p>
          <h1
            style={{ fontFamily: "'DM Serif Display', serif", lineHeight: "1.1" }}
            className="text-foreground text-5xl md:text-7xl mb-8"
          >
            Ein ruhiges<br />
            <em>Friseur-Atelier</em><br />
            in Spandau.
          </h1>
          <p
            style={{ fontFamily: "'Jost', sans-serif", lineHeight: "1.7" }}
            className="text-muted-foreground text-base md:text-lg max-w-lg mb-10"
          >
            Für Damen, Herren und Kinder. Schnitt, Farbe und Bart — mit Zeit und Ehrlichkeit.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="tel:+493035393396"
              style={{ fontFamily: "'Jost', sans-serif", letterSpacing: "0.15em" }}
              className="bg-primary text-primary-foreground px-8 py-3.5 text-sm uppercase tracking-widest hover:bg-primary/90 transition-colors text-center"
            >
              Termin vereinbaren
            </a>
            <a
              href="#leistungen"
              style={{ fontFamily: "'Jost', sans-serif", letterSpacing: "0.15em" }}
              className="border border-foreground/30 text-foreground px-8 py-3.5 text-sm uppercase tracking-widest hover:border-primary hover:text-primary transition-colors text-center"
            >
              Leistungen ansehen
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 right-8 hidden md:flex flex-col items-center gap-2">
        <div
          style={{ fontFamily: "'Jost', sans-serif", writingMode: "vertical-rl", letterSpacing: "0.2em" }}
          className="text-muted-foreground text-xs uppercase"
        >
          Scroll
        </div>
        <div className="w-px h-12 bg-gradient-to-b from-muted-foreground to-transparent" />
      </div>
    </section>
  );
}
