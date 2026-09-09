import { getPosts } from "../../../get-posts";


export async function generateMetadata() {
  const posts = await getPosts();

  const post = posts.find(
    (post) => post.id === "the-first-night"
  );

  if (!post) {
    return {};
  }

  return {
    title: `${post.title} | OhHoBa`,

    description: post.description,

    alternates: {
      languages: {
        en: `https://ohhoba.com/2026/${post.id}`,
        "zh-CN": `https://ohhoba.com/zh/2026/${post.id}`,
      },
    },

    openGraph: {
      title: post.title,

      description: post.description,

      type: "article",

      url: `https://ohhoba.com/2026/${post.id}`,

      siteName: "OhHoBa",

      publishedTime: post.date,

      authors: [
        "OhHoBa",
      ],

      images: [
        {
          url: post.image,
        },
      ],
    },
  };
}


export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {

  const posts = await getPosts();

  const post = posts.find(
    (post) => post.id === "the-first-night"
  );

  if (!post) {
    return children;
  }


  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",

            "@graph": [

              {
                "@type": "Article",

                "headline": post.title,

                "description": post.description,

                "image": {
                  "@type": "ImageObject",

                  "url":
                    `https://ohhoba.com${post.image}`,
                },

                "author": {
                  "@type": "Organization",

                  "name": "OhHoBa",

                  "url": "https://ohhoba.com",
                },

                "publisher": {
                  "@type": "Organization",

                  "name": "OhHoBa",

                  "url": "https://ohhoba.com",
                },

                "datePublished":
                  `${post.date}T00:00:00+00:00`,

                "dateModified":
                  `${post.date}T00:00:00+00:00`,

                "mainEntityOfPage": {
                  "@type": "WebPage",

                  "@id":
                    `https://ohhoba.com/2026/${post.id}`,
                },
              },


              {
                "@type": "BreadcrumbList",

                "itemListElement": [

                  {
                    "@type": "ListItem",

                    "position": 1,

                    "name": "OhHoBa",

                    "item":
                      "https://ohhoba.com",
                  },

                  {
                    "@type": "ListItem",

                    "position": 2,

                    "name": post.title,

                    "item":
                      `https://ohhoba.com/2026/${post.id}`,
                  },

                ],
              },

            ],
          }),
        }}
      />

      {children}
    </>
  );
}
