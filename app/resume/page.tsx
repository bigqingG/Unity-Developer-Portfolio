import type { Metadata } from "next";
import { CopyEmail, PageShell } from "../components";

export const metadata: Metadata = { title: "简历与联系", description: "关大庆的 Unity 游戏开发简历与联系方式。" };

const skills = ["C# / TypeScript", "Unity / UGUI / Animator", "ScriptableObject / Addressables", "事件系统 / 对象池 / 数据持久化", "URP / Shader / 性能分析", "Git / GitHub"];

export default function ResumePage() {
  return (
    <PageShell>
      <main className="inner-page section-shell resume-page">
        <header className="page-intro resume-heading" data-reveal>
          <div><p className="eyebrow">RESUME</p><h1>关大庆</h1><p>Unity 客户端开发 / 游戏开发实习生</p></div>
          <a className="button button-primary" href="/downloads/关大庆-Unity游戏开发-简历.docx" download>下载 Word 简历</a>
        </header>
        <div className="resume-sheet" data-reveal>
          <aside>
            <section><h2>基本信息</h2><p>数字媒体技术本科 · 2027 届</p><p>求职地点：上海</p><p>邮箱：qingbig@163.com</p><CopyEmail compact /></section>
            <section><h2>核心技能</h2><div className="resume-tags">{skills.map((skill) => <span key={skill}>{skill}</span>)}</div></section>
            <section><h2>证书</h2><p>大学英语四级、六级</p><p>游戏制作比赛证书</p></section>
          </aside>
          <div className="resume-main">
            <section><h2>个人简介</h2><p>具备 Unity/C# 学习与项目开发经验，熟悉 Unity 生命周期、UGUI、Animator、状态机、资源加载与 Prefab 工作流。能够独立完成玩法原型、项目框架、核心循环、数据持久化与 Demo 打磨。</p></section>
            <section>
              <h2>实习经历</h2>
              <article><header><h3>北京展心展力信息科技有限公司（MetaApp）</h3><time>2026.03 — 至今</time></header><strong>UGC 编辑器开发实习生</strong><ul><li>设计并实现组件生命周期管理机制，统一激活、休眠状态下的逻辑、渲染与事件行为。</li><li>排查组件状态异常、事件监听未释放和场景切换残留等运行时问题。</li><li>参与多个版本的功能集成、验收、回归验证与上线对接。</li></ul></article>
              <article><header><h3>悟空互游</h3><time>2024.06 — 2025.06</time></header><strong>前端开发工程师</strong><ul><li>参与抖音小游戏玩法界面、交互逻辑与部分功能模块维护。</li><li>配合测试定位运行时问题并支持版本迭代上线。</li></ul></article>
            </section>
            <section>
              <h2>代表项目</h2>
              <article><header><h3>ThirdBattleLine</h3><time>独立开发</time></header><p>数据驱动卡牌、EffectPipeline、事件结算、AI 对局、移动端 UI 与核心规则测试。</p></article>
              <article><header><h3>《余光》GameJam</h3><time>2024.10 — 2024.11</time></header><p>负责整体架构、角色控制、关卡流程、基础 UI、存档和可试玩版本交付。</p></article>
            </section>
            <section><h2>教育经历</h2><article><header><h3>河南城建学院 · 数字媒体技术本科</h3><time>2023 — 2027</time></header><p>多次参加校内外 GameJam 与游戏制作比赛，曾担任游戏开发社主程。</p></article></section>
          </div>
        </div>
      </main>
    </PageShell>
  );
}
