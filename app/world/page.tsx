import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export const metadata = {
  title: "OhHoBa World | OhHoBa",
  description: "A loose map of the ideas OhHoBa likes to explore.",
  alternates: {
    canonical: "https://ohhoba.com/world",
  },
  openGraph: {
    title: "OhHoBa World | OhHoBa",
    description: "A loose map of the ideas OhHoBa likes to explore.",
    url: "https://ohhoba.com/world",
    siteName: "OhHoBa",
    type: "website",
  },
};

const worlds = [
  ["01", "CREATE", "Art, AI, experiments, and impossible ideas."],
  ["02", "EXPLORE", "Unusual minds, hidden worlds, and unfamiliar systems."],
  ["03", "CONNECT", "People making new meanings together."],
];

export default function WorldPage() {
  return (
    <div className="site-shell">
      <SiteHeader lang="en" />
      <main className="world-page">
        <section className="world-hero section-pad">
          <span className="section-number">OhHoBa / WORLD</span>
          <h1>A loose map of what could exist.</h1>
          <p>Three directions. No fixed destination.</p>
        </section>
        <section className="world-grid section-pad">
          {worlds.map(([number, title, text]) => (
            <div className="world-card" key={number}>
              <span>{number}</span>
              <h2>{title}</h2>
              <p>{text}</p>
            </div>
          ))}
        </section>
        <section className="world-cta section-pad">
          <div>
            <span className="section-number">NEXT / UNKNOWN</span>
            <h2>There is no final version.</h2>
          </div>
          <Link href="/#archive" className="button button-dark">Enter the archive</Link>
        </section>
      </main>
      <SiteFooter lang="en" />
    </div>
  );
}
