import type { Metadata } from "next";
import { PageShell, ProjectFilter } from "../components";
import { projects } from "../data";

export const metadata: Metadata = { title: "作品", description: "关大庆的 Unity 游戏、工具与引擎研发项目。" };

export default function ProjectsPage() {
  return (
    <PageShell>
      <main className="inner-page section-shell">
        <header className="page-intro" data-reveal>
          <p className="eyebrow">PROJECT ARCHIVE</p>
          <h1>作品与技术实践</h1>
          <p>每个项目不仅展示最终画面，也记录我负责的部分、技术架构、问题与解决过程。</p>
        </header>
        <ProjectFilter projects={projects} />
      </main>
    </PageShell>
  );
}
