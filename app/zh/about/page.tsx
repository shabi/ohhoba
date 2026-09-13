import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export const metadata = {
  title: "关于 OhHoBa | OhHoBa",
  description: "OhHoBa 是一个探索语言、符号与想象力的创意档案馆。",
};

export default function AboutPageZh() {
  return (
    <div className="site-shell">
      <SiteHeader lang="zh" />
      <main className="about-page">
        <section className="about-hero section-pad">
          <span className="section-number">ABOUT / 001</span>
          <h1>OhHoBa 是一个为仍在形成中的表达而存在的地方。</h1>
          <p>我们探索趣味语言、实验文字、陌生符号，以及一件东西尚未有意义与意义过多之间的距离。</p>
        </section>
        <section className="about-grid section-pad">
          <div><span className="section-number">01 — WHY</span></div>
          <div>
            <h2>有些东西，在被定义之前更有用。</h2>
            <p>OhHoBa 把文字、声音、符号与图像当作原材料。一段碎片可以变成一种语言；一个记号可以变成一个地方；一个未完成的想法可以成为一个世界的起点。</p>
          </div>
        </section>
        <section className="about-grid section-pad about-accent">
          <div><span className="section-number">02 — WHAT</span></div>
          <div>
            <h2>收藏奇怪之物，也保留继续探索的入口。</h2>
            <p>每一组档案都邀请你重新观看：文章、实验、视觉研究、微型系统，以及那些暂时允许自己没有明确用途的对象。</p>
          </div>
        </section>
      </main>
      <SiteFooter lang="zh" />
    </div>
  );
}
