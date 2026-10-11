import type { SiteLocale } from "./site-content";

export type ArtworkKind = "seed" | "orbit" | "glyphs";
export type CollectionItem = {
  slug: string;
  kind: ArtworkKind;
  title: Record<SiteLocale, string>;
  category: Record<SiteLocale, string>;
  description: Record<SiteLocale, string>;
  story: Record<SiteLocale, string[]>;
  alt: Record<SiteLocale, string>;
  related: string[];
};

export const collectionItems: CollectionItem[] = [
  {
    slug: "unknown-seed",
    kind: "seed",
    title: { en: "Unknown Seed", zh: "未知种子" },
    category: { en: "Specimen / 001", zh: "样本 / 001" },
    description: {
      en: "A study in potential: a form that has not decided what it will become.",
      zh: "一项关于潜能的视觉研究：它还没有决定自己将成为何物。",
    },
    story: {
      en: [
        "The Unknown Seed sits between object and possibility. Its translucent layers suggest a structure that is still growing, while the quiet space around it gives the viewer room to decide what they are seeing.",
        "There is no final label hidden inside the form. It can be read as a seed, a vessel, a small planet, or simply an unfamiliar thing worth staying with for a moment.",
      ],
      zh: [
        "未知种子处在对象与可能性之间。半透明的层次像一套仍在生长的结构，而它周围安静的空间，让观看者可以自己决定眼前的事物意味着什么。",
        "形态内部没有藏着一个等待揭晓的最终答案。它可以是一枚种子、一只容器、一颗微小星体，也可以只是一个值得多停留片刻的陌生对象。",
      ],
    },
    alt: {
      en: "A translucent green seed form glows above moss and a forest stream in filtered sunlight.",
      zh: "半透明的绿色种子雕塑悬浮在苔藓与森林溪流上方，阳光从树间洒落。",
    },
    related: ["soft-orbit", "almost-language"],
  },
  {
    slug: "soft-orbit",
    kind: "orbit",
    title: { en: "A Soft Orbit", zh: "柔性轨道" },
    category: { en: "Spatial study / 002", zh: "空间研究 / 002" },
    description: {
      en: "A small system held together by distance rather than a visible center.",
      zh: "一套由距离而非可见中心维系起来的小型系统。",
    },
    story: {
      en: [
        "A Soft Orbit is a map without a fixed destination. The forms keep their distance, but their positions still affect one another. The work asks whether a system can feel coherent without becoming rigid.",
        "Its arrangement is deliberately incomplete: there is enough structure to suggest a relationship, and enough space for another one to emerge.",
      ],
      zh: [
        "柔性轨道是一张没有固定终点的地图。不同形态保持着距离，却仍然会彼此影响。它提出一个问题：系统是否可以保持连贯，同时不变得僵硬？",
        "它的排列刻意保留了不完整：结构足以暗示某种关系，空间也足以容纳新的关系出现。",
      ],
    },
    alt: { en: "Glass and metallic spheres connected by delicate orbital rings against a dark outer-space landscape.", zh: "不同大小的玻璃球体由精细金属轨道连接，悬浮在深色太空景观中。" },
    related: ["unknown-seed", "almost-language"],
  },
  {
    slug: "almost-language",
    kind: "glyphs",
    title: { en: "Almost a Language", zh: "近乎语言" },
    category: { en: "Symbol study / 003", zh: "符号研究 / 003" },
    description: {
      en: "Marks arranged like a message, before anyone agrees on how to read it.",
      zh: "排列得像一段讯息的痕迹，却还没有人约定如何阅读它。",
    },
    story: {
      en: [
        "Almost a Language gathers marks that appear systematic without settling into a known alphabet. Their rhythm hints at grammar; their differences invite comparison. Reading becomes an act of attention rather than translation.",
        "The symbols are not a cipher with a single answer. They are a prompt to notice how quickly we begin to build meaning from repetition and pattern.",
      ],
      zh: [
        "近乎语言收集了一组看似有规律、却没有完全落入已知字母系统的符号。它们的节奏暗示着语法，彼此的差异又引导人比较。阅读因此成为一种专注行为，而不是翻译任务。",
        "这些符号并不是只有一个答案的密码。它们提醒我们留意：当重复与规律出现时，人们会多快开始构建意义。",
      ],
    },
    alt: { en: "A sculptural braided rope knot floats above reflective sunset water, with distant mountains and small suspended spheres.", zh: "编织绳结雕塑悬浮在暮色海面上方，远处是山峦，周围点缀着悬浮的小球。" },
    related: ["unknown-seed", "soft-orbit"],
  },
];

export function getCollectionItem(slug: string) {
  return collectionItems.find((item) => item.slug === slug);
}
