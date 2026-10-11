import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { CollectionItem } from "@/app/collections-data";
import type { SiteLocale } from "@/app/site-content";
import { CollectionArtwork } from "./artwork";

export function CollectionCard({ item, lang, index = 0 }: { item: CollectionItem; lang: SiteLocale; index?: number }) {
  return (
    <article className={`collection-card collection-card-${item.kind}`}>
      <Link href={`${lang === "zh" ? "/zh" : ""}/collections/${item.slug}`} className="collection-card-link" aria-label={`${item.title[lang]} — ${lang === "zh" ? "查看作品详情" : "View work details"}`}>
        <CollectionArtwork item={item} lang={lang} />
        <div className="collection-card-meta">
          <span>{item.category[lang]}</span>
          <ArrowUpRight size={18} aria-hidden="true" />
        </div>
        <h3>{item.title[lang]}</h3>
        <p>{item.description[lang]}</p>
      </Link>
    </article>
  );
}
