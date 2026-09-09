import "./globals.css";

import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "./analytics";
import { Header } from "./header";
import { Footer } from "./footer";

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
  title: "OhHoBa",

  description:
    "An island dedicated to exploring playful languages, unconventional writing, and curious symbols.",

  metadataBase: new URL("https://ohhoba.com"),


  verification: {
    other: {
      "msvalidate.01": "C4EC9949BE7CEE814CEC78AB96DC7527",
    },
  },


  alternates: {
    languages: {
      en: "/",
      "zh-CN": "/zh",
    },
  },


  openGraph: {
    title: "OhHoBa",

    description:
      "An island dedicated to exploring playful languages, unconventional writing, and curious symbols.",

    url: "https://ohhoba.com",

    siteName: "OhHoBa",

    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "OhHoBa",
      },
    ],

    locale: "en_US",

    type: "website",
  },
};


export const viewport = {
  themeColor: "transparent",
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
      suppressHydrationWarning={true}
    >

      <body className="dark:text-gray-100 max-w-2xl m-auto">

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",

              "@graph": [
                {
                  "@type": "WebSite",

                  "name": "OhHoBa",

                  "url": "https://ohhoba.com",

                  "description":
                    "An island dedicated to exploring playful languages, unconventional writing, and curious symbols.",
                },

                {
                  "@type": "Organization",

                  "name": "OhHoBa",

                  "url": "https://ohhoba.com",

                  "description":
                    "OhHoBa is a creative space exploring playful languages, unconventional writing, and curious symbols.",
                },
              ],
            }),
          }}
        />


        <main className="p-6 pt-3 md:pt-6 min-h-screen">

          <Header />

          {children}

        </main>


        <Footer />


        <Analytics />

      </body>

    </html>
  );
}
