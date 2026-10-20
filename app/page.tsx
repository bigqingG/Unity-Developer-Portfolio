/* eslint-disable @next/next/no-html-link-for-pages */
import { ContactForm, CopyEmail, PageShell, ProjectCard } from "./components";
import { projects, skillGroups, timeline } from "./data";

export default function Home() {
  return (
    <PageShell>
      <main>
        <section className="hero section-shell">
          <div className="hero-copy" data-reveal>
            <p className="eyebrow"><span className="status-dot" /> OPEN TO UNITY OPPORTUNITIES</p>
            <h1>关大庆</h1>
            <p className="hero-role">Unity 游戏开发 <span>/</span> 数字媒体技术</p>
            <p className="hero-intro">
              专注于游戏系统、玩法原型与 UI 开发，喜欢通过清晰的架构和可验证的方案解决实际开发问题。
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="/projects">查看作品 <span>↗</span></a>
              <a className="button button-secondary" href="/downloads/关大庆-Unity游戏开发-简历.docx" download>下载简历</a>
              <a className="text-button" href="#contact">联系我 ↓</a>
            </div>
            <div className="hero-contact">
              <a href="https://github.com/bigqingG" target="_blank" rel="noreferrer"><span>GH</span> github.com/bigqingG</a>
              <a href="mailto:qingbig@163.com"><span>@</span> qingbig@163.com</a>
            </div>
          </div>

          <div className="hero-visual" data-reveal>
            <a href="/projects/thirdbattleline" className="hero-screen" aria-label="查看 ThirdBattleLine 项目">
              <img src="/images/thirdbattleline-cover.jpg" alt="ThirdBattleLine 卡牌对战实机画面" />
              <div className="screen-caption">
                <span>FEATURED / 01</span>
                <strong>ThirdBattleLine</strong>
                <small>Unity 卡牌对战 · 持续开发</small>
              </div>
              <div className="play-chip">查看项目 ↗</div>
            </a>
            <div className="card-stack" aria-label="ThirdBattleLine 卡牌设计">
              <img src="/images/card-baishou.webp" alt="白首天狗卡牌" />
              <img src="/images/card-qiushan.webp" alt="邱山穷奇卡牌" />
              <img src="/images/card-tianshi.webp" alt="法级天师卡牌" />
            </div>
          </div>
        </section>

        <section className="metrics-strip" aria-label="能力摘要">
          <div className="section-shell metrics-inner">
            <div><strong>3 年</strong><span>Unity / C# 学习与项目实践</span></div>
            <div><strong>3 款</strong><span>提供可试玩页面的游戏作品</span></div>
            <div><strong>71 项</strong><span>卡牌核心规则 EditMode 测试</span></div>
            <div><strong>2027 届</strong><span>数字媒体技术本科</span></div>
          </div>
        </section>

        <section className="content-section section-shell" id="about">
          <div className="section-heading" data-reveal>
            <div><span className="section-index">01</span><p className="eyebrow">ABOUT ME</p></div>
            <h2>在玩法与工程之间，<br />把想法做成可运行的系统。</h2>
          </div>
          <div className="about-grid" data-reveal>
            <div className="about-copy">
              <p>
                我是河南城建学院数字媒体技术专业本科生，求职方向为 Unity 客户端开发与游戏开发实习。
                主要使用 Unity、C#，具备从玩法原型、系统架构到 UI 和发布问题定位的完整项目实践。
              </p>
              <p>
                我关注的不只是“功能能否运行”，也会继续追问数据应该放在哪里、事件何时释放、表现是否会阻塞规则、
                以及新增内容会不会让系统越来越难维护。
              </p>
              <a className="project-link" href="/journey">查看学习与成长经历 <span>↗</span></a>
            </div>
            <div className="focus-list">
              {[
                ["01", "游戏系统", "回合流程、状态机、事件与数据驱动"],
                ["02", "UI 开发", "UGUI、信息层级、交互与移动适配"],
                ["03", "技术问题", "构建、资源、事件生命周期与性能定位"],
                ["04", "工具与运行时", "编辑器、资产体系与模块边界"],
              ].map(([index, title, text]) => (
                <div key={index}><span>{index}</span><strong>{title}</strong><p>{text}</p></div>
              ))}
            </div>
          </div>
        </section>

        <section className="content-section section-shell" id="projects">
          <div className="section-heading compact" data-reveal>
            <div><span className="section-index">02</span><p className="eyebrow">SELECTED WORK</p></div>
            <h2>代表作品</h2>
            <a className="text-button" href="/projects">浏览全部作品 →</a>
          </div>
          <div className="featured-grid" data-reveal>
            <ProjectCard project={projects[0]} featured />
            <div className="featured-side">
              <ProjectCard project={projects.find((project) => project.slug === "kings-revival")!} />
              <ProjectCard project={projects.find((project) => project.slug === "seekpilot")!} />
            </div>
          </div>
        </section>

        <section className="method-section">
          <div className="section-shell">
            <div className="section-heading light compact" data-reveal>
              <div><span className="section-index">03</span><p className="eyebrow">HOW I BUILD</p></div>
              <h2>从问题到可验证方案</h2>
            </div>
            <div className="method-grid" data-reveal>
              {[
                ["01", "明确边界", "先确定系统职责、数据归属和不能被破坏的不变量。"],
                ["02", "建立闭环", "优先做出可运行切片，再围绕真实问题逐步扩展。"],
                ["03", "保留证据", "通过测试、Profiler、日志与可复现步骤验证判断。"],
                ["04", "持续复盘", "记录问题、取舍和下一阶段，不把“能跑”当作终点。"],
              ].map(([index, title, text]) => (
                <article key={index}><span>{index}</span><h3>{title}</h3><p>{text}</p></article>
              ))}
            </div>
          </div>
        </section>

        <section className="content-section section-shell">
          <div className="section-heading compact" data-reveal>
            <div><span className="section-index">04</span><p className="eyebrow">SKILLS</p></div>
            <h2>技术能力</h2>
            <a className="text-button" href="/skills">查看完整技能矩阵 →</a>
          </div>
          <div className="skill-preview" data-reveal>
            {skillGroups.slice(0, 4).map((group) => (
              <article key={group.category}>
                <h3>{group.category}</h3>
                <div>{group.items.slice(0, 4).map(([name, level]) => <span key={name}>{name}<small>{level}</small></span>)}</div>
              </article>
            ))}
          </div>
        </section>

        <section className="content-section section-shell">
          <div className="section-heading compact" data-reveal>
            <div><span className="section-index">05</span><p className="eyebrow">JOURNEY</p></div>
            <h2>学习与成长</h2>
            <a className="text-button" href="/journey">查看完整时间轴 →</a>
          </div>
          <div className="timeline-preview" data-reveal>
            {timeline.slice(-3).map((item) => (
              <article key={item.title}><time>{item.date}</time><span /><div><h3>{item.title}</h3><p>{item.text}</p></div></article>
            ))}
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="section-shell contact-grid">
            <div data-reveal>
              <p className="eyebrow">LET&apos;S TALK</p>
              <h2>正在寻找 Unity 客户端开发 / 游戏开发实习机会。</h2>
              <p>期望地点：上海。具体到岗时间与实习周期可进一步沟通。</p>
              <div className="contact-actions">
                <a className="button button-primary" href="mailto:qingbig@163.com">发送邮件</a>
                <CopyEmail />
              </div>
            </div>
            <div data-reveal><ContactForm /></div>
          </div>
        </section>
      </main>
    </PageShell>
  );
}
