import type { Metadata } from "next";
import { PageShell } from "../components";
import { timeline } from "../data";

export const metadata: Metadata = { title: "学习与成长", description: "教育、项目、实习与当前技术方向。" };

export default function JourneyPage() {
  return (
    <PageShell>
      <main className="inner-page section-shell">
        <header className="page-intro" data-reveal>
          <p className="eyebrow">LEARNING & GROWTH</p><h1>学习与成长经历</h1>
          <p>从数字媒体技术学习到 Unity 项目、GameJam、UGC 编辑器和持续进行的个人技术研发。</p>
        </header>
        <div className="journey-timeline">
          {timeline.map((item, index) => (
            <article key={item.title} data-reveal>
              <div className="journey-date"><span>{String(index + 1).padStart(2, "0")}</span><time>{item.date}</time></div>
              <div className="journey-marker" /><div className="journey-content"><h2>{item.title}</h2><p>{item.text}</p></div>
            </article>
          ))}
        </div>
      </main>
    </PageShell>
  );
}
