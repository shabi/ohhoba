import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CollectionDetailPage } from "@/components/collection-detail-page";
import { collectionItems, getCollectionItem } from "@/app/collections-data";

export function generateStaticParams() { return collectionItems.map((item) => ({ slug: item.slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const item = getCollectionItem(slug);
  if (!item) return {};
  return {
    title: item.title.en,
    description: item.description.en,
    alternates: { canonical: `/collections/${slug}`, languages: { en: `/collections/${slug}`, "zh-CN": `/zh/collections/${slug}` } },
    openGraph: { title: `${item.title.en} | OhHoBa`, description: item.description.en, url: `https://ohhoba.com/collections/${slug}`, type: "article", images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: item.alt.en }] },
  };
}
export default async function CollectionDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (!getCollectionItem(slug)) notFound();
  return <CollectionDetailPage slug={slug} lang="en" />;
}
