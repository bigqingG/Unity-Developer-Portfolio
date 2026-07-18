import type { Metadata } from "next";
import { PageShell } from "../components";
import { skillGroups } from "../data";

export const metadata: Metadata = { title: "技术能力", description: "Unity、C#、游戏架构、渲染、工具与发布能力。" };

export default function SkillsPage() {
  return (
    <PageShell>
      <main className="inner-page section-shell">
        <header className="page-intro" data-reveal>
          <p className="eyebrow">SKILL MATRIX</p><h1>技术能力</h1>
          <p>不使用没有依据的百分比。等级代表实际使用深度，并尽量对应到项目证据。</p>
        </header>
        <div className="level-legend" data-reveal>
          <span><i className="level-dot level-strong" /> 熟练使用</span>
          <span><i className="level-dot level-practice" /> 项目实践</span>
          <span><i className="level-dot level-learning" /> 正在学习</span>
        </div>
        <div className="skill-matrix">
          {skillGroups.map((group, groupIndex) => (
            <section key={group.category} data-reveal>
              <div className="skill-group-title"><span>{String(groupIndex + 1).padStart(2, "0")}</span><h2>{group.category}</h2></div>
              <div className="skill-rows">
                {group.items.map(([name, level, evidence]) => (
                  <article key={name}>
                    <div><i className={`level-dot level-${level === "熟练使用" ? "strong" : level === "项目实践" ? "practice" : "learning"}`} /><h3>{name}</h3></div>
                    <span className="skill-level">{level}</span><p>{evidence}</p>
                  </article>
                ))}
              </div>
            </section>
          ))}
        </div>
      </main>
    </PageShell>
  );
}
