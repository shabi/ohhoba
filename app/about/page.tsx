import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export const metadata = {
  title: "About OhHoBa | OhHoBa",
  description: "OhHoBa is a creative archive for unusual language, symbols, and imagination.",
};

export default function AboutPage() {
  return (
    <div className="site-shell">
      <SiteHeader lang="en" />
      <main className="about-page">
        <section className="about-hero section-pad">
          <span className="section-number">ABOUT / 001</span>
          <h1>OhHoBa is a place for expressions that are still becoming.</h1>
          <p>We explore playful language, experimental writing systems, curious symbols, and the distance between a thing having no meaning and a thing having too much.</p>
        </section>
        <section className="about-grid section-pad">
          <div><span className="section-number">01 — WHY</span></div>
          <div>
            <h2>Some things are more useful before they are defined.</h2>
            <p>OhHoBa treats words, sounds, symbols, and images as raw material. A fragment can become a language. A mark can become a place. An unfinished idea can become the start of a world.</p>
          </div>
        </section>
        <section className="about-grid section-pad about-accent">
          <div><span className="section-number">02 — WHAT</span></div>
          <div>
            <h2>Archive the strange. Keep the door open.</h2>
            <p>Every collection is an invitation to look again: essays, experiments, visual studies, tiny systems, and objects whose purpose is allowed to remain unresolved.</p>
          </div>
        </section>
      </main>
      <SiteFooter lang="en" />
    </div>
  );
}
