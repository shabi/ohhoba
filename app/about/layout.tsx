import type { ReactNode } from "react";


export const metadata = {
  title: "About OhHoBa | OhHoBa",
  
  description:
    "Learn about OhHoBa, a creative space exploring playful languages, unconventional writing, and curious symbols.",
};


export default function Layout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",

            "@type": "AboutPage",

            "name": "About OhHoBa",

            "url": "https://ohhoba.com/about",

            "about": {
              "@type": "Organization",

              "name": "OhHoBa",

              "url": "https://ohhoba.com",
            },
          }),
        }}
      />

      {children}
    </>
  );
}
