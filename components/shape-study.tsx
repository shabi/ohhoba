"use client";

import { useState, type CSSProperties } from "react";
import Link from "next/link";
import { ArrowLeft, RotateCcw } from "lucide-react";
import type { SiteLocale } from "@/app/site-content";
import { siteCopy } from "@/app/site-content";
import { SiteHeader } from "./site-header";
import { SiteFooter } from "./site-footer";

export function ShapeStudy({ lang }: { lang: SiteLocale }) {
  const c = siteCopy[lang];
  const [distance, setDistance] = useState(52);
  const [recomposed, setRecomposed] = useState(false);
  const prefix = lang === "zh" ? "/zh" : "";
  const shapeStyle = { "--distance": `${distance}%`, "--stage-scale": String(0.65 + distance / 240), "--stage-angle": `${distance * 0.12}deg`, "--stage-twist-angle": `${distance * -0.35}deg`, "--ring-angle": `${distance * 0.3}deg`, "--ring-reverse-angle": `${distance * -0.4}deg` } as CSSProperties;
  return (
    <div className="site-shell">
      <SiteHeader lang={lang} />
      <main id="main-content" className="study-page page-gutter">
        <Link className="back-link" href={`${prefix}/experiments`}><ArrowLeft size={16} aria-hidden="true" />{lang === "zh" ? "返回实验室" : "Back to the lab"}</Link>
        <header className="study-heading"><p className="eyebrow">{c.experiment.eyebrow}</p><h1>{c.experiment.title}</h1><p>{c.experiment.body}</p></header>
        <section className={`study-canvas${recomposed ? " is-recomposed" : ""}`} style={shapeStyle} aria-label={c.experiment.objectLabel}>
          <div className="study-stage" aria-hidden="true"><span className="study-orbit study-orbit-1" /><span className="study-orbit study-orbit-2" /><span className="study-orbit study-orbit-3" /><span className="study-object study-object-a" /><span className="study-object study-object-b" /><span className="study-object study-object-c" /><span className="study-object study-object-core" /></div>
          <span className="study-caption" aria-hidden="true">OhHoBa · {lang === "zh" ? "形态研究" : "Form study"}</span>
        </section>
        <div className="study-controls">
          <div className="range-control"><div className="range-label-row"><label htmlFor="distance-range">{c.experiment.distance}</label><output htmlFor="distance-range">{distance}%</output></div><input id="distance-range" type="range" min="0" max="100" step="1" value={distance} onChange={(event) => setDistance(Number(event.target.value))} aria-describedby="distance-note"/><div className="range-endpoints"><span>{c.experiment.close}</span><span>{c.experiment.far}</span></div><p id="distance-note" className="control-note">{c.experiment.note}</p></div>
          <div className="study-control-actions"><button className="button button-primary" type="button" onClick={() => setRecomposed((value) => !value)}>{c.experiment.recompose}</button><button className="button button-quiet" type="button" onClick={() => { setDistance(52); setRecomposed(false); }}><RotateCcw size={15} aria-hidden="true" />{c.experiment.reset}</button></div>
        </div>
      </main>
      <SiteFooter lang={lang} />
    </div>
  );
}
