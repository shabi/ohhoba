import type { ReactNode } from "react";


export const metadata = {

  title:
    "关于 OhHoBa | OhHoBa",


  description:
    "OhHoBa 是一个探索语言、符号与想象力之间关系的创意空间，关注声音、文字、视觉表达以及未知的创造可能。",


  openGraph: {

    title:
      "关于 OhHoBa | OhHoBa",


    description:
      "探索语言、符号与想象力之间产生的新可能。",


    url:
      "https://ohhoba.com/zh/about",


    locale:
      "zh_CN",


    type:
      "website",


    images: [

      {

        url:
          "/about/opengraph-image",

        width:
          1200,

        height:
          630,

        alt:
          "关于 OhHoBa",

      },

    ],

  },

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

          __html:

            JSON.stringify({

              "@context":
                "https://schema.org",


              "@type":
                "AboutPage",


              "name":
                "关于 OhHoBa",


              "description":
                "OhHoBa 是一个探索语言、符号与想象力之间关系的创意空间。",


              "url":
                "https://ohhoba.com/zh/about",


              "inLanguage":
                "zh-CN",


              "about": {

                "@type":
                  "Organization",


                "name":
                  "OhHoBa",


                "url":
                  "https://ohhoba.com",

              },


            }),

        }}

      />


      {children}

    </>

  );

}
