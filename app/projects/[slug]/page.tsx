/* eslint-disable @next/next/no-html-link-for-pages */
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { EngineVisual, MediaGallery, PageShell } from "../../components";
import { getProject, projects } from "../../data";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return { title: project.title, description: project.summary, openGraph: { images: project.cover ? [project.cover] : [] } };
}

export default async function ProjectDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();
  const current = projects.findIndex((item) => item.slug === project.slug);
  const next = projects[(current + 1) % projects.length];

  return (
    <PageShell>
      <main className="project-page">
        <section className="project-hero section-shell">
          <a className="back-link" href="/projects">← 返回全部作品</a>
          <div className="project-hero-grid" data-reveal>
            <div>
              <p className="eyebrow">{project.eyebrow}</p><h1>{project.title}</h1><p>{project.summary}</p>
              <div className="tag-list large">{project.technologies.map((tag) => <span key={tag}>{tag}</span>)}</div>
              <div className="project-external">
                {project.links.map((link) => link.href ? <a key={link.label} className="button button-primary" href={link.href} target="_blank" rel="noreferrer">{link.label} ↗</a> : <span key={link.label} className="button button-disabled" title={link.note}>{link.label} · {link.note}</span>)}
              </div>
            </div>
            <div className="project-hero-media">
              {project.cover ? <img src={project.cover} alt={`${project.title} 项目封面`} /> : <EngineVisual />}
              <dl><div><dt>项目类型</dt><dd>{project.category}</dd></div><div><dt>开发时间</dt><dd>{project.period}</dd></div><div><dt>我的职责</dt><dd>{project.role}</dd></div><div><dt>当前状态</dt><dd>{project.status}</dd></div></dl>
            </div>
          </div>
        </section>

        <div className="project-content section-shell">
          <aside className="project-toc">
            <span>项目目录</span>
            <a href="#background">项目背景</a><a href="#responsibility">负责部分</a><a href="#systems">核心系统</a>{project.codeHighlights && <a href="#code">核心代码</a>}<a href="#challenges">难点与解决</a><a href="#media">效果与素材</a><a href="#review">项目复盘</a>
          </aside>
          <div className="project-article">
            <section id="background" data-reveal><p className="eyebrow">01 / BACKGROUND</p><h2>项目背景与目标</h2><p className="lead">{project.background}</p><ul className="goal-list">{project.goals.map((goal) => <li key={goal}><span>→</span>{goal}</li>)}</ul></section>
            <section id="responsibility" data-reveal><p className="eyebrow">02 / RESPONSIBILITY</p><h2>我负责的部分</h2><div className="responsibility-grid">{project.responsibilities.map((item, index) => <article key={item}><span>{String(index + 1).padStart(2, "0")}</span><p>{item}</p></article>)}</div></section>
            <section id="systems" data-reveal><p className="eyebrow">03 / SYSTEMS</p><h2>核心玩法与技术架构</h2><div className="system-grid">{project.systems.map((system) => <article key={system.title}><h3>{system.title}</h3><p>{system.description}</p></article>)}</div></section>
            {project.codeHighlights && <section id="code" data-reveal><p className="eyebrow">04 / ENGINEERING EVIDENCE</p><h2>创新代码与核心实现</h2><p className="lead">以下内容来自项目实际仓库，经过脱敏和节选，用于说明设计思路与工程取舍，而不是用代码行数制造复杂感。</p><div className="code-highlight-list">{project.codeHighlights.map((item) => <article key={item.title}><header><span>{item.label}</span><div><h3>{item.title}</h3><code>{item.file}</code></div></header><p>{item.description}</p><ul>{item.points.map((point) => <li key={point}>{point}</li>)}</ul><pre tabIndex={0}><code>{item.code}</code></pre></article>)}</div></section>}
            <section id="challenges" data-reveal><p className="eyebrow">04 / PROBLEM SOLVING</p><h2>开发难点与解决过程</h2><div className="challenge-list">{project.challenges.map((item, index) => <article key={item.problem}><div><span>问题 {String(index + 1).padStart(2, "0")}</span><h3>{item.problem}</h3></div><div><strong>解决方案</strong><p>{item.solution}</p>{item.result && <><strong>结果</strong><p>{item.result}</p></>}</div></article>)}</div></section>
            <section data-reveal><p className="eyebrow">05 / RESULT</p><h2>最终效果</h2><ul className="result-list">{project.results.map((item) => <li key={item}><span>✓</span>{item}</li>)}</ul></section>
            <section id="media" data-reveal><p className="eyebrow">06 / MEDIA</p><h2>项目截图与演示</h2><MediaGallery media={project.media} /></section>
            <section id="review" data-reveal><p className="eyebrow">07 / RETROSPECTIVE</p><h2>项目复盘</h2><div className="review-list">{project.retrospective.map((item, index) => <article key={item}><span>{String(index + 1).padStart(2, "0")}</span><p>{item}</p></article>)}</div></section>
          </div>
        </div>

        <section className="next-project">
          <div className="section-shell"><span>NEXT PROJECT</span><a href={`/projects/${next.slug}`}><strong>{next.title}</strong><i>↗</i></a></div>
        </section>
      </main>
    </PageShell>
  );
}
