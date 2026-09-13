"use client";

import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import { siteCopy, type SiteLocale } from "@/app/site-content";
import { HeroVisual } from "./hero-visual";
import { SiteHeader } from "./site-header";
import { SiteFooter } from "./site-footer";

export function HomePage({ lang }: { lang: SiteLocale }) {
  const c = siteCopy[lang];
  const isZh = lang === "zh";
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const textProgress = useSpring(scrollYProgress, { stiffness: 220, damping: 30, mass: 0.35 });
  const imageProgress = useSpring(scrollYProgress, { stiffness: 38, damping: 34, mass: 1.5 });
  const titleY = useTransform(textProgress, [0, 1], [0, -340]);
  const bodyY = useTransform(textProgress, [0, 1], [0, -245]);
  const visualY = useTransform(imageProgress, [0, 1], [0, 74]);
  const visualScale = useTransform(imageProgress, [0, 1], [0.988, 1.026]);

  return (
    <div className="site-shell">
      <SiteHeader lang={lang} />
      <main>
        <section ref={heroRef} className="hero-sequence" aria-labelledby="home-title">
          <div className="hero-intro">
            <div className="hero-title-block">
              <div className="hero-title-grid">
                <motion.div
                  className="hero-title-layer"
                  style={{ y: titleY }}
                >
                  <motion.h1
                    id="home-title"
                    initial={{ opacity: 0, y: 34 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: .72, ease: [.22,.61,.36,1] }}
                  >
                    {c.heroTitle}
                  </motion.h1>
                </motion.div>
                <div className="ohhoba-guides" aria-hidden="true">
                  <span className="ohhoba-guide ohhoba-guide-1" />
                  <span className="ohhoba-guide ohhoba-guide-2" />
                  <span className="ohhoba-guide ohhoba-guide-3" />
                  <span className="ohhoba-guide ohhoba-guide-4" />
                  <span className="ohhoba-guide ohhoba-guide-5" />
                </div>
              </div>
              <motion.p className="hero-body-layer" style={{ y: bodyY }}>{c.heroBody}</motion.p>
            </div>
          </div>

          <motion.div className="hero-visual-layer" style={{ y: visualY, scale: visualScale }}>
            <HeroVisual />
          </motion.div>

          <div className="hero-object-note">
            <span>{c.heroObject}</span>
            <div>{c.heroMeta.map(line => <span key={line}>{line}</span>)}</div>
          </div>
        </section>

        <section className="feature-intro section-pad" aria-labelledby="feature-title">
          <div className="feature-intro-grid">
            <div>
              <span className="section-number">00 — {c.featureLabel}</span>
              <h2 id="feature-title">{c.featureIntro}</h2>
            </div>
          </div>
        </section>

        <section className="sequence-section" aria-label={c.featureLabel}>
          <div className="sequence-media-wrap" aria-hidden="true">
            <div className="sequence-media-frame-label"><span>{c.heroObject}</span><span>001 / 005</span></div>
            <div className="sequence-media">
              <div className="sequence-media-layer is-active">
                <HeroVisual />
              </div>
            </div>
            <div className="sequence-media-footnote">{c.heroMeta[0]} · {c.heroMeta[2]}</div>
          </div>
          <div className="sequence-content">
            {c.features.map(([number, title, body]) => (
              <article key={number} className="sequence-step">
                <span className="section-number">{number}</span>
                <h3>{title}</h3>
                <p>{body}</p>
                <span className="sequence-link">{isZh ? "继续查看" : "Look again"} <ArrowRight size={14} /></span>
              </article>
            ))}
          </div>
        </section>

        <section id="archive" className="archive-section section-pad" aria-labelledby="archive-title">
          <div className="archive-copy">
            <span className="section-number">01 — {c.archiveKicker}</span>
            <h2 id="archive-title">{c.archiveTitle}</h2>
            <p>{c.archiveBody}</p>
            <Link className="text-link" href={isZh ? "/zh/about" : "/about"}>{c.archiveCta}<ArrowRight size={15} /></Link>
          </div>

          <Link className="archive-feature" href={isZh ? "/zh/about" : "/about"}>
            <div className="archive-feature-top"><span>001</span><span>COLLECTION</span></div>
            <div className="archive-feature-main">
              <span className="archive-feature-title">{c.archiveItem}</span>
              <span className="archive-feature-body">{c.archiveItemBody}</span>
            </div>
            <ArrowUpRight className="archive-feature-arrow" size={22} />
          </Link>
        </section>

        <section className="letter-section" aria-labelledby="letter-title">
          <div className="section-pad letter-head">
            <div><span className="section-number">02 — {c.letterKicker}</span><h2 id="letter-title">{c.letterTitle}</h2></div>
            <p>{c.letterBody}</p>
          </div>
          <div className="manifesto-strip">
            {c.manifesto.map((line, index) => <div key={line} className="manifesto-row"><span>0{index+1}</span><strong>{line}</strong></div>)}
          </div>
        </section>

        <section className="closing-section section-pad">
          <div className="closing-card">
            <div className="closing-card-top"><span className="eyebrow">{c.closingKicker}</span><span className="closing-small">ohhoba.com</span></div>
            <h2>{c.closingTitle}</h2>
            <a className="button button-dark" href="mailto:admin@ohhoba.com">{c.nav.contact}<ArrowUpRight size={14} /></a>
          </div>
        </section>
      </main>
      <SiteFooter lang={lang} />
    </div>
  );
}
