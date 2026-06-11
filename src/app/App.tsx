import "../styles/fonts.css";
import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { Gallery } from "./components/Gallery";
import { Services } from "./components/Services";
import { Team } from "./components/Team";
import { InfoContact } from "./components/InfoContact";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="bg-background text-foreground min-h-screen" style={{ fontFamily: "'Jost', sans-serif" }}>
      <Nav />
      <Hero />
      {/* MARKER-MAKE-KIT-INVOKED */}
      <Gallery />
      <Services />
      <Team />
      <InfoContact />
      <Footer />
    </div>
  );
}
