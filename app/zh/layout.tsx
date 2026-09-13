import type { ReactNode } from "react";

export const metadata = {
  title: "OhHoBa",
  description:
    "OhHoBa 是一个收藏非典型语言、奇怪想法与未完成表达的创意博物馆与档案馆。",
  alternates: {
    canonical: "https://ohhoba.com/zh",
    languages: {
      en: "https://ohhoba.com/",
      "zh-CN": "https://ohhoba.com/zh",
    },
  },
  openGraph: {
    title: "OhHoBa",
    description:
      "探索语言、符号、文字与想象力之间产生的新可能。",
    url: "https://ohhoba.com/zh",
    siteName: "OhHoBa",
    locale: "zh_CN",
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "OhHoBa",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "OhHoBa",
    description:
      "探索语言、符号、文字与想象力之间产生的新可能。",
    images: ["/opengraph-image"],
  },
};

export default function ChineseLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id": "https://ohhoba.com/zh#webpage",
            name: "OhHoBa",
            url: "https://ohhoba.com/zh",
            inLanguage: "zh-CN",
            isPartOf: { "@id": "https://ohhoba.com/#website" },
          }),
        }}
      />
      {children}
    </>
  );
}
