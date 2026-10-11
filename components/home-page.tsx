import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { siteCopy, type SiteLocale } from "@/app/site-content";
import { collectionItems } from "@/app/collections-data";
import { SiteHeader } from "./site-header";
import { BrandPreloader } from "./brand-preloader";
import { SiteFooter } from "./site-footer";
import { CollectionArtwork } from "./artwork";

export function HomePage({ lang }: { lang: SiteLocale }) {
  const c = siteCopy[lang];
  const prefix = lang === "zh" ? "/zh" : "";
  const [seed, ...otherWorks] = collectionItems;

  return (
    <div className={`site-shell archive-home ${lang === "zh" ? "archive-home-zh" : "archive-home-en"}`}>
      <BrandPreloader lang={lang} />
      <SiteHeader lang={lang} />
      <main id="main-content">
        <section className="archive-hero" aria-labelledby="home-title">
          <div className="archive-hero-art" aria-hidden="true">
            <Image src="/images/hero-light-closed-v27.webp" alt="" fill priority sizes="100vw" className="archive-hero-image archive-hero-image-light" />
            <Image src="/images/hero-dark-selected-v33-anchor.webp" alt="" fill priority sizes="100vw" className="archive-hero-image archive-hero-image-dark" />
          </div>
          <div className="archive-hero-copy page-gutter">
            <p className="archive-kicker">{lang === "zh" ? "数字档案馆" : "DIGITAL ARCHIVE"}</p>
            <h1 id="home-title" className="archive-wordmark">OhHoBa</h1>
            <h2 className="archive-headline">
              {lang === "zh" ? <><span className="zh-no-break">一座持续生长的</span><br />想象档案馆。</> : <>A Living Archive<br />of Imagination.</>}
            </h2>
            <p className="archive-deck">
              {lang === "zh" ? "收藏奇异的形态、非寻常的造物，以及仍在形成中的想法。" : "Strange ideas. Unusual objects. New ways to see."}
            </p>
            <Link className="archive-hero-link" href={`${prefix}/collections`}>
              <span className="archive-arrow-disc" aria-hidden="true"><ArrowRight size={19} /></span>
              <span>{lang === "zh" ? "探索藏品" : "Explore Archive"}</span>
            </Link>
          </div>
          <div className="archive-hero-index" aria-hidden="true">
            <span>{lang === "zh" ? "精选藏品" : "FEATURED COLLECTION"}</span>
            <strong>001 <i>/</i> {seed.title[lang]}</strong>
            <span className="archive-index-rule" />
          </div>
          <a className="archive-scroll" href="#featured"><span>{lang === "zh" ? "向下探索" : "SCROLL TO EXPLORE"}</span><span aria-hidden="true">↓</span></a>
        </section>

        <section id="featured" className="archive-collection" aria-labelledby="featured-heading">
          <header className="archive-collection-heading page-gutter">
            <p className="archive-kicker">{lang === "zh" ? "精选藏品" : "FEATURED COLLECTION"}</p>
            <span className="archive-heading-rule" aria-hidden="true" />
            <Link href={`${prefix}/collections`} className="archive-view-all"><span>{c.viewAll}</span><span className="archive-arrow-disc" aria-hidden="true"><ArrowRight size={18} /></span></Link>
          </header>
          <div className="archive-work-layout page-gutter">
            <Link href={`${prefix}/collections/${seed.slug}`} className="archive-featured-image" aria-label={`${seed.title[lang]} — ${c.readObject}`}>
              <CollectionArtwork item={seed} lang={lang} priority />
            </Link>
            <article className="archive-featured-copy">
              <p className="archive-work-number">001</p>
              <h2 id="featured-heading">{seed.title[lang]}</h2>
              <p className="archive-work-description">{seed.description[lang]}</p>
              <Link href={`${prefix}/collections/${seed.slug}`} className="archive-text-link">{c.readObject}<ArrowRight size={19} aria-hidden="true" /></Link>
            </article>
            <div className="archive-secondary-works" aria-label={lang === "zh" ? "更多藏品" : "More works from the archive"}>
              {otherWorks.map((item, index) => (
                <article className="archive-work" key={item.slug}>
                  <Link href={`${prefix}/collections/${item.slug}`} className="archive-work-image" aria-label={`${item.title[lang]} — ${c.readObject}`}>
                    <CollectionArtwork item={item} lang={lang} />
                  </Link>
                  <div className="archive-work-index"><span>00{index + 2}</span><ArrowUpRight size={14} aria-hidden="true" /></div>
                  <h3><Link href={`${prefix}/collections/${item.slug}`}>{item.title[lang]}</Link></h3>
                  <p>{item.category[lang]}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="archive-lab page-gutter" aria-labelledby="archive-lab-heading">
          <div className="archive-lab-art" aria-hidden="true">
            <Image src="/images/geometric-dream.webp" alt="" fill sizes="(max-width: 760px) 100vw, 48vw" />
            <span className="archive-lab-orbit" />
          </div>
          <div className="archive-lab-copy">
            <p className="archive-kicker">{lang === "zh" ? "艺术实验室" : "THE ART LAB"}</p>
            <h2 id="archive-lab-heading">{lang === "zh" ? "观看距离，会改变你读到的形态。" : <>Distance changes<br />the reading of a form.</>}</h2>
            <p>{lang === "zh" ? "调整观看距离，观察同一形态的比例、边缘与留白如何改变解读。" : "Adjust distance to see how proportion, edges, and negative space change the reading of the same form."}</p>
            <Link className="archive-lab-link" href={`${prefix}/experiments/shape-study`}>{c.tryExperiment}<ArrowRight size={17} aria-hidden="true" /></Link>
          </div>
        </section>

        <section className="archive-about page-gutter" aria-labelledby="archive-about-heading">
          <p className="archive-kicker">{lang === "zh" ? "关于 OhHoBa" : "ABOUT OHHOBA"}</p>
          <div className="archive-about-main">
            <h2 id="archive-about-heading">{lang === "zh" ? <>给尚未定型的<span className="zh-no-break">事物</span>一个位置。</> : "An archive for things without a fixed category."}</h2>
            <div className="archive-about-aside">
              <p>{lang === "zh" ? "我们收录虚构造物、视觉研究与实验性表达。作品不必给出最终答案，但每件作品都值得被认真观看。" : "We collect invented objects, visual studies, and experimental forms of expression. The work can remain unresolved; the way it is presented should not."}</p>
              <Link className="archive-text-link" href={`${prefix}/about`}>{c.aboutLink}<ArrowRight size={18} aria-hidden="true" /></Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter lang={lang} />
    </div>
  );
}
