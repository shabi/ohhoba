import Image from "next/image";
import type { CollectionItem, ArtworkKind } from "@/app/collections-data";
import type { SiteLocale } from "@/app/site-content";

const artworkSources: Record<ArtworkKind, string> = {
  seed: "/images/collection-unknown-seed-v32.webp",
  orbit: "/images/collection-soft-orbit-v32.webp",
  glyphs: "/images/collection-almost-language-v32.webp",
};

export function ArtworkVisual({ kind, lang, alt, priority = false }: { kind: ArtworkKind; lang: SiteLocale; alt: string; priority?: boolean }) {
  return (
    <div className={`artwork-visual artwork-${kind} artwork-locale-${lang}`}>
      <Image
        src={artworkSources[kind]}
        alt={alt}
        fill
        sizes="(max-width: 760px) 100vw, (max-width: 1100px) 50vw, 34vw"
        priority={priority}
        className="artwork-image collection-art-image"
      />
    </div>
  );
}

export function CollectionArtwork({ item, lang, priority = false }: { item: CollectionItem; lang: SiteLocale; priority?: boolean }) {
  return <ArtworkVisual kind={item.kind} lang={lang} alt={item.alt[lang]} priority={priority} />;
}
