import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import type { SiteLocale } from "@/app/site-content";
import { siteCopy } from "@/app/site-content";
import { collectionItems, getCollectionItem } from "@/app/collections-data";
import { SiteHeader } from "./site-header";
import { SiteFooter } from "./site-footer";
import { CollectionArtwork } from "./artwork";
import { CollectionCard } from "./collection-card";

export function CollectionDetailPage({ slug, lang }: { slug: string; lang: SiteLocale }) {
  const item = getCollectionItem(slug);
  if (!item) return null;
  const c = siteCopy[lang];
  const prefix = lang === "zh" ? "/zh" : "";
  const related = item.related.map((relatedSlug) => collectionItems.find((candidate) => candidate.slug === relatedSlug)).filter((value) => value !== undefined);
  return (
    <div className="site-shell">
      <SiteHeader lang={lang} />
      <main id="main-content" className="collection-detail page-gutter">
        <header className="detail-hero">
          <Link className="back-link" href={`${prefix}/collections`}><ArrowLeft size={16} aria-hidden="true" />{c.backToCollections}</Link>
          <div className="detail-title-row">
            <div><p className="eyebrow">{item.category[lang]}</p><h1>{item.title[lang]}</h1></div>
            <p>{item.description[lang]}</p>
          </div>
        </header>
        <figure className="detail-artwork">
          <CollectionArtwork item={item} lang={lang} priority />
        </figure>
        <section className="detail-body" aria-labelledby="detail-body-heading">
          <div className="detail-body-label" id="detail-body-heading">{c.objectDetails}</div>
          <div className="detail-story">{item.story[lang].map((paragraph) => <p key={paragraph}>{paragraph}</p>)}<Link className="text-link" href={`${prefix}/experiments/shape-study`}>{c.nextExperiment}<ArrowUpRight size={16} aria-hidden="true" /></Link></div>
        </section>
        {related.length > 0 && <section className="detail-related" aria-labelledby="related-heading"><h2 id="related-heading">{c.relatedWorks}</h2><div className="collection-grid">{related.map((relatedItem, index) => <CollectionCard item={relatedItem} lang={lang} key={relatedItem.slug} index={index} />)}</div><Link className="text-link" href={`${prefix}/collections`}><ArrowRight size={16} aria-hidden="true" />{c.viewAll}</Link></section>}
      </main>
      <SiteFooter lang={lang} />
    </div>
  );
}
