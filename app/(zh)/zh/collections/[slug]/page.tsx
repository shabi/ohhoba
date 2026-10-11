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
    title: item.title.zh,
    description: item.description.zh,
    alternates: { canonical: `/zh/collections/${slug}`, languages: { en: `/collections/${slug}`, "zh-CN": `/zh/collections/${slug}` } },
    openGraph: { title: `${item.title.zh} | OhHoBa`, description: item.description.zh, url: `https://ohhoba.com/zh/collections/${slug}`, locale: "zh_CN", type: "article", images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: item.alt.zh }] },
  };
}
export default async function CollectionDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (!getCollectionItem(slug)) notFound();
  return <CollectionDetailPage slug={slug} lang="zh" />;
}
