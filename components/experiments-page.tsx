import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { SiteLocale } from "@/app/site-content";
import { siteCopy } from "@/app/site-content";
import { SiteHeader } from "./site-header";
import { SiteFooter } from "./site-footer";

export function ExperimentsPage({ lang }: { lang: SiteLocale }) {
  const c = siteCopy[lang];
  const prefix = lang === "zh" ? "/zh" : "";
  return (
    <div className="site-shell">
      <SiteHeader lang={lang} />
      <main id="main-content" className="listing-page experiments-page page-gutter">
        <header className="page-hero listing-hero">
          <p className="eyebrow">OhHoBa / {lang === "zh" ? "实验室" : "Lab"}</p>
          <h1>{c.experimentPageTitle}</h1>
          <p className="page-hero-intro">{c.experimentPageDescription}</p>
        </header>
        <Link href={`${prefix}/experiments/shape-study`} className="experiment-feature-link">
          <div className="experiment-feature-art" aria-hidden="true"><div className="experiment-shape experiment-shape-one" /><div className="experiment-shape experiment-shape-two" /><div className="experiment-shape experiment-shape-three" /><div className="experiment-shape-core" /></div>
          <div className="experiment-feature-copy"><p className="eyebrow">{c.experiment.eyebrow}</p><h2>{c.experiment.title}</h2><p>{c.experiment.body}</p><span className="text-link">{lang === "zh" ? "打开实验" : "Open experiment"}<ArrowUpRight size={17} aria-hidden="true" /></span></div>
        </Link>
        <div className="experiments-note"><p>{lang === "zh" ? "实验室收录可参与的视觉研究。每一次操作都应该改变观看体验，而不是只增加动效。" : "The lab collects visual studies you can take part in. Each interaction should change how a work is experienced, not simply add motion."}</p></div>
      </main>
      <SiteFooter lang={lang} />
    </div>
  );
}
