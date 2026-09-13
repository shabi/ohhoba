import "./globals.css";

import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "./analytics";
import { DocumentLanguage } from "./document-language";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  fallback: [
    "ui-monospace",
    "SFMono-Regular",
    "Consolas",
    "Liberation Mono",
    "Menlo",
    "monospace",
  ],
});

export const metadata = {
  metadataBase: new URL("https://ohhoba.com"),
  title: "OhHoBa",
  description:
    "OhHoBa is a creative museum and archive for unusual language, strange ideas, and unfinished expression.",
  applicationName: "OhHoBa",
  authors: [{ name: "OhHoBa", url: "https://ohhoba.com" }],
  creator: "OhHoBa",
  publisher: "OhHoBa",
  keywords: ["OhHoBa", "language", "symbols", "writing", "imagination", "creative archive"],
  alternates: {
    canonical: "/",
    languages: {
      en: "/",
      "zh-CN": "/zh",
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  verification: {
    other: {
      "msvalidate.01": "C4EC9949BE7CEE814CEC78AB96DC7527",
    },
  },
  openGraph: {
    title: "OhHoBa",
    description:
      "OhHoBa is a creative museum and archive for unusual language, strange ideas, and unfinished expression.",
    url: "https://ohhoba.com/",
    siteName: "OhHoBa",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "OhHoBa — a creative archive for unusual expression.",
      },
    ],
    locale: "en_US",
    alternateLocale: ["zh_CN"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "OhHoBa",
    description:
      "OhHoBa is a creative museum and archive for unusual language, strange ideas, and unfinished expression.",
    images: ["/opengraph-image"],
  },
  icons: {
    icon: "/icon.png",
    apple: "/apple-icon.png",
  },
};

export const viewport = {
  themeColor: "#f3f1e7",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geist.variable} ${geistMono.variable} ${geist.className} antialiased`}
      suppressHydrationWarning
    >
      <body className="m-0">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "WebSite",
                  "@id": "https://ohhoba.com/#website",
                  name: "OhHoBa",
                  url: "https://ohhoba.com/",
                  description:
                    "OhHoBa is a creative museum and archive for unusual language, strange ideas, and unfinished expression.",
                  inLanguage: "en",
                },
                {
                  "@type": "Organization",
                  "@id": "https://ohhoba.com/#organization",
                  name: "OhHoBa",
                  url: "https://ohhoba.com/",
                  logo: {
                    "@type": "ImageObject",
                    url: "https://ohhoba.com/icon.png",
                  },
                  description:
                    "OhHoBa is a creative space exploring playful languages, unconventional writing, and curious symbols.",
                },
              ],
            }),
          }}
        />
        <DocumentLanguage />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
