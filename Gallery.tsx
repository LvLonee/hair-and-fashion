import { useState } from "react";
import { Scissors, Droplets, Wind } from "lucide-react";

interface GalleryItem {
  id: string;
  image: string;
  alt: string;
  label: string;
  sub: string;
  icon: "scissors" | "droplets" | "wind";
}

const ITEMS: GalleryItem[] = [
  {
    id: "1",
    image: "https://images.unsplash.com/photo-1700760934268-8aa0ef52ce0a?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&w=400&h=400&q=80",
    alt: "Damenschnitt — Frau beim Haarschnitt",
    label: "Damenschnitt",
    sub: "Haarschnitt",
    icon: "scissors",
  },
  {
    id: "2",
    image: "https://images.unsplash.com/photo-1517832606299-7ae9b720a186?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&w=400&h=400&q=80",
    alt: "Bartpflege",
    label: "Bartpflege",
    sub: "Bart & Rasur",
    icon: "scissors",
  },
  {
    id: "3",
    image: "https://images.unsplash.com/photo-1637777269308-6a072f24e8a4?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&w=400&h=400&q=80",
    alt: "Haarwäsche am Becken",
    label: "Haarwäsche",
    sub: "Kopfwäsche",
    icon: "droplets",
  },
  {
    id: "4",
    image: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&w=400&h=400&q=80",
    alt: "Klassische Rasur",
    label: "Nassrasur",
    sub: "Bart & Rasur",
    icon: "wind",
  },
  {
    id: "5",
    image: "https://images.unsplash.com/photo-1593702275687-f8b402bf1fb5?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&w=400&h=400&q=80",
    alt: "Herrenschnitt",
    label: "Herrenschnitt",
    sub: "Haarschnitt",
    icon: "scissors",
  },
  {
    id: "6",
    image: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&w=400&h=400&q=80",
    alt: "Bartkonturierung",
    label: "Bartkontur",
    sub: "Bart & Rasur",
    icon: "scissors",
  },
  {
    id: "7",
    image: "https://images.unsplash.com/photo-1634449571010-02389ed0f9b0?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&w=400&h=400&q=80",
    alt: "Haarpflege",
    label: "Haarpflege",
    sub: "Kopfwäsche",
    icon: "droplets",
  },
  {
    id: "8",
    image: "https://images.unsplash.com/photo-1758665707514-f817b430af5e?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&w=400&h=400&q=80",
    alt: "Rasiermesser",
    label: "Rasiermesser",
    sub: "Bart & Rasur",
    icon: "wind",
  },
  {
    id: "9",
    image: "https://images.unsplash.com/photo-1635273051937-a0ddef9573b6?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&w=400&h=400&q=80",
    alt: "Kinderschnitt",
    label: "Kinderschnitt",
    sub: "Haarschnitt",
    icon: "scissors",
  },
];

const col1 = ITEMS.filter((_, i) => i % 3 === 0);
const col2 = ITEMS.filter((_, i) => i % 3 === 1);
const col3 = ITEMS.filter((_, i) => i % 3 === 2);

function IconComp({ type }: { type: GalleryItem["icon"] }) {
  if (type === "scissors") return <Scissors size={9} />;
  if (type === "droplets") return <Droplets size={9} />;
  return <Wind size={9} />;
}

function PhotoCard({
  item,
  hoveredId,
  onHover,
}: {
  item: GalleryItem;
  hoveredId: string | null;
  onHover: (id: string | null) => void;
}) {
  const isActive = hoveredId === item.id;
  const isDimmed = hoveredId !== null && !isActive;

  return (
    <div
      className="overflow-hidden cursor-pointer flex-shrink-0 w-[105px] h-[105px] sm:w-[120px] sm:h-[120px] md:w-[140px] md:h-[140px]"
      style={{
        opacity: isDimmed ? 0.4 : 1,
        transition: "opacity 0.4s",
      }}
      onMouseEnter={() => onHover(item.id)}
      onMouseLeave={() => onHover(null)}
    >
      <img
        src={item.image}
        alt={item.alt}
        className="w-full h-full object-cover"
        style={{
          filter: isActive ? "grayscale(0) brightness(1)" : "grayscale(1) brightness(0.7)",
          transform: isActive ? "scale(1.07)" : "scale(1)",
          transition: "filter 0.5s, transform 0.5s",
        }}
      />
    </div>
  );
}

function ItemRow({
  item,
  hoveredId,
  onHover,
}: {
  item: GalleryItem;
  hoveredId: string | null;
  onHover: (id: string | null) => void;
}) {
  const isActive = hoveredId === item.id;
  const isDimmed = hoveredId !== null && !isActive;

  return (
    <div
      className="cursor-pointer"
      style={{ opacity: isDimmed ? 0.3 : 1, transition: "opacity 0.3s" }}
      onMouseEnter={() => onHover(item.id)}
      onMouseLeave={() => onHover(null)}
    >
      <div className="flex items-center gap-3">
        {/* indicator bar */}
        <span
          className="h-2 rounded-sm flex-shrink-0 transition-all duration-300"
          style={{
            width: isActive ? "22px" : "12px",
            backgroundColor: isActive
              ? "var(--color-primary)"
              : "color-mix(in srgb, var(--color-primary) 25%, transparent)",
          }}
        />
        {/* label */}
        <span
          style={{
            fontFamily: "'DM Serif Display', serif",
            fontSize: "clamp(14px, 1.6vw, 18px)",
            color: isActive
              ? "var(--color-foreground)"
              : "color-mix(in srgb, var(--color-foreground) 60%, transparent)",
            transition: "color 0.3s",
          }}
        >
          {item.label}
        </span>
        {/* category tag */}
        <span
          className="flex items-center gap-1 border px-2 py-0.5"
          style={{
            fontFamily: "'Jost', sans-serif",
            fontSize: "8px",
            letterSpacing: "0.15em",
            color: "var(--color-primary)",
            borderColor: "color-mix(in srgb, var(--color-primary) 35%, transparent)",
            opacity: isActive ? 1 : 0,
            transform: isActive ? "translateX(0)" : "translateX(-6px)",
            transition: "opacity 0.25s, transform 0.25s",
          }}
        >
          <IconComp type={item.icon} />
          {item.sub.toUpperCase()}
        </span>
      </div>
    </div>
  );
}

export function Gallery() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section id="galerie" className="py-28 bg-background overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="mb-14 text-center">
          <p
            style={{ fontFamily: "'Jost', sans-serif", letterSpacing: "0.25em" }}
            className="text-primary text-xs uppercase mb-4"
          >
            Einblicke
          </p>
          <h2
            style={{ fontFamily: "'DM Serif Display', serif", lineHeight: "1.15" }}
            className="text-foreground text-4xl md:text-5xl"
          >
            Unser Handwerk — <em>in Bildern.</em>
          </h2>
        </div>

        {/* Main layout: photo grid | divider | list */}
        <div className="flex flex-col lg:flex-row items-start justify-center gap-12 lg:gap-0 select-none">

          {/* LEFT — photo grid */}
          <div className="flex gap-2 md:gap-3 flex-shrink-0">
            {/* col 1 — no offset */}
            <div className="flex flex-col gap-2 md:gap-3">
              {col1.map((item) => (
                <PhotoCard key={item.id} item={item} hoveredId={hoveredId} onHover={setHoveredId} />
              ))}
            </div>
            {/* col 2 — offset down */}
            <div className="flex flex-col gap-2 md:gap-3 mt-[52px] md:mt-[70px]">
              {col2.map((item) => (
                <PhotoCard key={item.id} item={item} hoveredId={hoveredId} onHover={setHoveredId} />
              ))}
            </div>
            {/* col 3 — medium offset */}
            <div className="flex flex-col gap-2 md:gap-3 mt-[26px] md:mt-[35px]">
              {col3.map((item) => (
                <PhotoCard key={item.id} item={item} hoveredId={hoveredId} onHover={setHoveredId} />
              ))}
            </div>
          </div>

          {/* Divider */}
          <div className="hidden lg:flex flex-col items-center self-stretch mx-10 xl:mx-16">
            <div className="w-px flex-1 bg-border" />
            <span
              style={{ fontFamily: "'Jost', sans-serif", letterSpacing: "0.2em", writingMode: "vertical-rl" }}
              className="text-primary/40 text-[9px] uppercase my-5"
            >
              Galerie
            </span>
            <div className="w-px flex-1 bg-border" />
          </div>

          {/* RIGHT — item list */}
          <div className="flex flex-col justify-center gap-4 md:gap-[18px] flex-1 w-full lg:pt-4">
            {/* intro text */}
            <p
              style={{ fontFamily: "'Jost', sans-serif", letterSpacing: "0.05em", lineHeight: 1.7 }}
              className="text-muted-foreground text-sm mb-4 max-w-xs"
            >
              Fahren Sie mit der Maus über ein Bild oder einen Namen — und entdecken Sie unser Handwerk.
            </p>

            {ITEMS.map((item) => (
              <ItemRow
                key={item.id}
                item={item}
                hoveredId={hoveredId}
                onHover={setHoveredId}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
