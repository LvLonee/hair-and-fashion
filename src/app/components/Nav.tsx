import { useState } from "react";
import { Menu, X } from "lucide-react";

export function Nav() {
  const [open, setOpen] = useState(false);

  const links = [
    { label: "Leistungen", href: "#leistungen" },
    { label: "Galerie", href: "#galerie" },
    { label: "Team", href: "#team" },
    { label: "Kontakt", href: "#kontakt" },
  ];

  return (
    <nav
      style={{ fontFamily: "'Jost', sans-serif" }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border"
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a
          href="#"
          style={{ fontFamily: "'DM Serif Display', serif", letterSpacing: "0.02em" }}
          className="text-foreground text-lg"
        >
          Hair <span className="text-primary">&</span> Fashion
        </a>

        <ul className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-muted-foreground hover:text-foreground transition-colors text-sm tracking-widest uppercase"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="tel:+493035393396"
          className="hidden md:block text-primary text-sm tracking-wider border border-primary px-4 py-1.5 hover:bg-primary hover:text-primary-foreground transition-colors"
        >
          Termin buchen
        </a>

        <button
          className="md:hidden text-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-card border-t border-border px-6 py-6 flex flex-col gap-5">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-muted-foreground hover:text-foreground transition-colors text-sm tracking-widest uppercase"
            >
              {l.label}
            </a>
          ))}
          <a
            href="tel:+493035393396"
            className="text-primary text-sm tracking-wider border border-primary px-4 py-2 text-center hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            Termin buchen
          </a>
        </div>
      )}
    </nav>
  );
}
