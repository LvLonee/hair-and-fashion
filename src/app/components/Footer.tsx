export function Footer() {
  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <p
            style={{ fontFamily: "'DM Serif Display', serif" }}
            className="text-foreground text-xl mb-1"
          >
            Hair <span className="text-primary">&</span> Fashion
          </p>
          <p
            style={{ fontFamily: "'Jost', sans-serif" }}
            className="text-muted-foreground text-sm"
          >
            Klosterstraße 10–11, 13581 Berlin-Spandau
          </p>
        </div>

        <div className="flex flex-col gap-1 text-right">
          <a
            href="tel:+493035393396"
            style={{ fontFamily: "'Jost', sans-serif" }}
            className="text-muted-foreground text-sm hover:text-primary transition-colors"
          >
            030 35393396
          </a>
          <p
            style={{ fontFamily: "'Jost', sans-serif" }}
            className="text-muted-foreground/40 text-xs"
          >
            © 2026 Hair & Fashion Berlin
          </p>
        </div>
      </div>
    </footer>
  );
}
