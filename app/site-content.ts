export type SiteLocale = "en" | "zh";

export const siteCopy = {
  en: {
    nav: { archive: "Archive", about: "About", contact: "Contact", menu: "Menu" },
    heroKicker: "Museum of Future Imagination",
    heroTitle: "OhHoBa",
    heroBody:
      "A living archive for unusual language, strange ideas, and things still becoming.",
    heroObject: "Unknown Seed",
    heroMeta: ["COLLECTION 001", "ORIGIN / UNDEFINED", "STATE / UNSTABLE"],
    heroScroll: "Scroll to enter",
    featureLabel: "Features",
    featureIntro:
      "One object. Different ways to look again.",
    features: [
      ["01", "Approach the unknown.", "The first view is never the whole thing."],
      ["02", "Change your distance.", "Meaning moves when perspective moves."],
      ["03", "Notice the traces.", "Details become clues, not decoration."],
      ["04", "Leave it unfinished.", "Some questions deserve room to stay open."],
      ["05", "Keep exploring.", "The scene ends. The archive begins."],
    ],
    archiveKicker: "Archive",
    archiveTitle: "A collection in progress.",
    archiveBody:
      "OhHoBa is being built slowly: objects, experiments, fragments, and rooms for ideas that do not need to arrive finished.",
    archiveCta: "Explore the collection",
    archiveItem: "Unknown Seed",
    archiveItemBody: "Collection 001 · a visual study of an object without a fixed meaning.",
    letterKicker: "An open letter",
    letterTitle: "For those still imagining.",
    letterBody:
      "Not every idea needs to become a product. Not every mark needs a definition. OhHoBa keeps a little space open for curiosity, ambiguity, and things still in motion.",
    manifesto: ["Make room for the unfamiliar.", "Keep the unfinished.", "Let meaning move."],
    closingKicker: "Collection 001 / Unknown Seed",
    closingTitle: "Stay close to the unknown.",
    footer: "A creative archive for unusual expression.",
  },
  zh: {
    nav: { archive: "档案", about: "关于", contact: "联系", menu: "菜单" },
    heroKicker: "未来想象博物馆",
    heroTitle: "OhHoBa",
    heroBody:
      "一个收藏非典型语言、奇怪想法，以及仍在形成之物的创意档案馆。",
    heroObject: "未知种子",
    heroMeta: ["收藏 001", "来源 / 未定义", "状态 / 不稳定"],
    heroScroll: "向下进入",
    featureLabel: "特辑",
    featureIntro: "同一个对象，换一种方式再看。",
    features: [
      ["01", "靠近未知。", "第一次看到的，从来不是全部。"],
      ["02", "改变距离。", "当观看位置改变，意义也会移动。"],
      ["03", "注意痕迹。", "细节成为线索，而不是装饰。"],
      ["04", "保留未完成。", "有些问题值得保持开放。"],
      ["05", "继续探索。", "场景结束，档案才真正开始。"],
    ],
    archiveKicker: "档案",
    archiveTitle: "一份仍在形成的收藏。",
    archiveBody:
      "OhHoBa 正在慢慢建立：对象、实验、碎片，以及一些不必急着完成的想法。",
    archiveCta: "进入收藏",
    archiveItem: "未知种子",
    archiveItemBody: "收藏 001 · 一件没有固定意义的视觉研究。",
    letterKicker: "公开信",
    letterTitle: "写给仍在想象的人。",
    letterBody:
      "不是所有想法都需要立刻成为产品，也不是每一道痕迹都需要定义。OhHoBa 想留下一点空间，让好奇、模糊和仍在运动的东西继续存在。",
    manifesto: ["为陌生留下空间。", "保留未完成。", "让意义保持流动。"],
    closingKicker: "收藏 001 / 未知种子",
    closingTitle: "继续靠近未知。",
    footer: "一个收藏非典型表达的创意档案馆。",
  },
} as const;
