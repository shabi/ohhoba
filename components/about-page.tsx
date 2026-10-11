import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { SiteLocale } from "@/app/site-content";
import { siteCopy } from "@/app/site-content";
import { SiteHeader } from "./site-header";
import { SiteFooter } from "./site-footer";

export function AboutPage({ lang }: { lang: SiteLocale }) {
  const c = siteCopy[lang];
  const prefix = lang === "zh" ? "/zh" : "";
  return (
    <div className="site-shell">
      <SiteHeader lang={lang} />
      <main id="main-content" className="about-page">
        <section className="page-hero page-gutter" aria-labelledby="about-title">
          <p className="eyebrow">{lang === "zh" ? "关于 OhHoBa" : "About OhHoBa"}</p>
          <h1 id="about-title">{c.aboutPageTitle}</h1>
          <p className="page-hero-intro">{c.aboutPageIntro}</p>
        </section>
        <section className="about-statement page-gutter" aria-labelledby="about-why">
          <div className="about-index"><span>01</span></div>
          <div><h2 id="about-why">{c.aboutWhyTitle}</h2><p>{c.aboutWhyBody}</p></div>
        </section>
        <section className="about-statement about-statement-accent page-gutter" aria-labelledby="about-how">
          <div className="about-index"><span>02</span></div>
          <div><h2 id="about-how">{c.aboutHowTitle}</h2><p>{c.aboutHowBody}</p></div>
        </section>
        <section className="principles-section page-gutter" aria-labelledby="principles-heading">
          <p className="eyebrow">{c.aboutPrinciplesTitle}</p>
          <h2 id="principles-heading">{lang === "zh" ? "开放，但不随意。" : "Open, never arbitrary."}</h2>
          <div className="principles-list">{c.principles.map((principle, index) => <div className="principle-row" key={principle}><span>0{index + 1}</span><p>{principle}</p></div>)}</div>
        </section>
        <section className="about-end page-gutter"><p>{lang === "zh" ? "档案仍在生长。" : "The archive is still growing."}</p><Link className="text-link" href={`${prefix}/collections`}>{c.explore}<ArrowRight size={17} aria-hidden="true" /></Link></section>
      </main>
      <SiteFooter lang={lang} />
    </div>
  );
}
