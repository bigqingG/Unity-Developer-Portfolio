/* eslint-disable @next/next/no-html-link-for-pages */
import { PageShell } from "./components";

export default function NotFound() {
  return <PageShell><main className="not-found section-shell"><p className="eyebrow">404 / NOT FOUND</p><h1>没有找到这个页面。</h1><p>它可能已被移动，或者项目链接还没有公开。</p><a className="button button-primary" href="/">返回首页</a></main></PageShell>;
}
