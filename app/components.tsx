"use client";
/* eslint-disable @next/next/no-html-link-for-pages */

import { FormEvent, useEffect, useState } from "react";
import type { Project, ProjectMedia } from "./data";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const nav = [["作品", "/projects"], ["技能", "/skills"], ["经历", "/journey"], ["简历", "/resume"]];
  return (
    <header className="site-header">
      <div className="header-inner">
        <a className="brand" href="/" aria-label="关大庆作品集首页">
          <span className="brand-mark">GQ</span><span>关大庆</span>
        </a>
        <button className="menu-button" type="button" aria-expanded={open} aria-label="打开导航菜单" onClick={() => setOpen(!open)}>
          <span /><span />
        </button>
        <nav className={open ? "nav-links nav-open" : "nav-links"}>
          {nav.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>)}
          <a className="nav-cta" href="mailto:qingbig@163.com">联系我</a>
        </nav>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div><span className="eyebrow">UNITY GAME DEVELOPER</span><p>关大庆 · 数字媒体技术本科生</p></div>
        <div className="footer-links">
          <a href="mailto:qingbig@163.com">qingbig@163.com</a>
          <a href="https://github.com/bigqingG" target="_blank" rel="noreferrer">GitHub ↗</a>
        </div>
      </div>
    </footer>
  );
}

export function PageShell({ children }: { children: React.ReactNode }) {
  return <><SiteHeader />{children}<SiteFooter /><BackToTop /><RevealObserver /></>;
}

function RevealObserver() {
  useEffect(() => {
    const nodes = document.querySelectorAll<HTMLElement>("[data-reveal]");
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      nodes.forEach((node) => node.classList.add("is-visible"));
      return;
    }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);
  return null;
}

function BackToTop() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const handle = () => setVisible(window.scrollY > 720);
    handle();
    window.addEventListener("scroll", handle, { passive: true });
    return () => window.removeEventListener("scroll", handle);
  }, []);
  return <button type="button" className={visible ? "back-top is-shown" : "back-top"} aria-label="返回顶部" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>↑</button>;
}

export function CopyEmail({ compact = false }: { compact?: boolean }) {
  const [copied, setCopied] = useState(false);
  async function copy() {
    const email = "qingbig@163.com";
    try {
      await navigator.clipboard.writeText(email);
    } catch {
      const textarea = document.createElement("textarea");
      textarea.value = email;
      textarea.setAttribute("readonly", "");
      textarea.style.position = "fixed";
      textarea.style.opacity = "0";
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      textarea.remove();
    }
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  }
  return <button type="button" className={compact ? "text-button" : "button button-secondary"} onClick={copy}>{copied ? "邮箱已复制 ✓" : "复制邮箱"}</button>;
}

export function ContactForm() {
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") || "");
    const subject = encodeURIComponent(String(form.get("subject") || "作品集联系"));
    const body = encodeURIComponent(`你好，我是${name || "招聘方"}。\n\n${String(form.get("message") || "")}`);
    window.location.href = `mailto:qingbig@163.com?subject=${subject}&body=${body}`;
  }
  return (
    <form className="contact-form" onSubmit={submit}>
      <label><span>称呼</span><input name="name" autoComplete="name" placeholder="如何称呼你" /></label>
      <label><span>主题</span><input name="subject" required placeholder="实习 / 项目合作 / 其他" /></label>
      <label className="form-wide"><span>留言</span><textarea name="message" required rows={5} placeholder="简单说明来意，提交后会打开你的邮件客户端" /></label>
      <button className="button button-primary form-wide" type="submit">生成邮件</button>
    </form>
  );
}

export function ProjectCard({ project, featured = false }: { project: Project; featured?: boolean }) {
  return (
    <article className={featured ? "project-card project-featured" : "project-card"}>
      <a className="project-cover" href={`/projects/${project.slug}`}>
        {project.cover ? <img src={project.cover} alt="" loading="lazy" /> : <EngineVisual />}
        <span className="project-status">{project.status}</span>
      </a>
      <div className="project-body">
        <div className="project-meta"><span>{project.category}</span><span>{project.period}</span></div>
        <h3><a href={`/projects/${project.slug}`}>{project.title}</a></h3>
        <p>{project.summary}</p>
        <div className="tag-list">{project.technologies.slice(0, featured ? 6 : 4).map((tag) => <span key={tag}>{tag}</span>)}</div>
        <a className="project-link" href={`/projects/${project.slug}`}>查看项目详情 <span>↗</span></a>
      </div>
    </article>
  );
}

export function ProjectFilter({ projects }: { projects: Project[] }) {
  const [active, setActive] = useState("全部");
  const filters = ["全部", "游戏项目", "工具与引擎"];
  const shown = active === "全部" ? projects : projects.filter((project) => project.category === active);
  return (
    <>
      <div className="filter-bar" role="group" aria-label="作品分类筛选">
        {filters.map((filter) => <button key={filter} type="button" aria-pressed={active === filter} className={active === filter ? "filter-active" : ""} onClick={() => setActive(filter)}>{filter}</button>)}
      </div>
      <div className="projects-grid">{shown.map((project) => <ProjectCard key={project.slug} project={project} />)}</div>
    </>
  );
}

export function EngineVisual() {
  return (
    <div className="engine-visual" aria-hidden="true">
      <span>RUNTIME</span>
      <div className="engine-node node-a">DATA</div><div className="engine-line" />
      <div className="engine-node node-b">SYSTEM</div><div className="engine-node node-c">TOOLS</div>
      <strong>ASSET SYSTEM / 01</strong>
    </div>
  );
}

export function MediaGallery({ media }: { media: ProjectMedia[] }) {
  const [selected, setSelected] = useState<ProjectMedia | null>(null);
  useEffect(() => {
    if (!selected) return;
    const key = (event: KeyboardEvent) => { if (event.key === "Escape") setSelected(null); };
    document.body.classList.add("modal-open");
    window.addEventListener("keydown", key);
    return () => { document.body.classList.remove("modal-open"); window.removeEventListener("keydown", key); };
  }, [selected]);
  if (!media.length) return <div className="media-placeholder"><EngineVisual /><p>该研发项目的结构图与演示素材正在整理，暂不使用虚构截图。</p></div>;
  return (
    <>
      <div className="media-grid">
        {media.map((item, index) => (
          <figure className={item.type === "video" ? "media-wide" : ""} key={item.src}>
            {item.type === "video" ? (
              <video controls preload="metadata" poster={item.poster} aria-label={item.alt}><source src={item.src} type="video/mp4" /></video>
            ) : (
              <button type="button" className="image-button" onClick={() => setSelected(item)} aria-label={`放大查看：${item.alt}`}>
                <img src={item.src} alt={item.alt} loading={index > 1 ? "lazy" : "eager"} /><span>点击放大</span>
              </button>
            )}
            {item.caption && <figcaption>{item.caption}</figcaption>}
          </figure>
        ))}
      </div>
      {selected && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label="图片预览" onClick={() => setSelected(null)}>
          <button type="button" aria-label="关闭图片预览" onClick={() => setSelected(null)}>×</button>
          <img src={selected.src} alt={selected.alt} onClick={(event) => event.stopPropagation()} />
          <p>{selected.caption}</p>
        </div>
      )}
    </>
  );
}
