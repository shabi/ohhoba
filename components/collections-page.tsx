import { collectionItems } from "@/app/collections-data";
import { siteCopy, type SiteLocale } from "@/app/site-content";
import { SiteHeader } from "./site-header";
import { SiteFooter } from "./site-footer";
import { CollectionCard } from "./collection-card";

export function CollectionsPage({ lang }: { lang: SiteLocale }) {
  const c = siteCopy[lang];
  return (
    <div className="site-shell">
      <SiteHeader lang={lang} />
      <main id="main-content" className="listing-page page-gutter">
        <header className="page-hero listing-hero">
          <p className="eyebrow">OhHoBa / {lang === "zh" ? "档案馆" : "Archive"}</p>
          <h1>{c.collectionPageTitle}</h1>
          <p className="page-hero-intro">{c.collectionPageDescription}</p>
        </header>
        <div className="listing-toolbar"><span>{lang === "zh" ? `${collectionItems.length} 件作品` : `${collectionItems.length} works`}</span><span>{lang === "zh" ? "持续更新" : "An evolving collection"}</span></div>
        <div className="collection-grid collection-grid-page">{collectionItems.map((item, index) => <CollectionCard key={item.slug} item={item} lang={lang} index={index} />)}</div>
      </main>
      <SiteFooter lang={lang} />
    </div>
  );
}
