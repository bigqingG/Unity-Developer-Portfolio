# 关大庆｜Unity 游戏开发作品集

[![CI](https://github.com/bigqingG/Unity-Developer-Portfolio/actions/workflows/ci.yml/badge.svg)](https://github.com/bigqingG/Unity-Developer-Portfolio/actions/workflows/ci.yml)

面向 Unity 游戏开发岗位的个人作品集网站。招聘者可以在首页快速了解技术方向，并通过独立项目页查看 ThirdBattleLine、《余光》、SeekPilot、自研引擎与网络框架等项目的职责、架构、难点和核心代码。

线上版本：[guandaqing-unity-portfolio.cardai.chatgpt.site](https://guandaqing-unity-portfolio.cardai.chatgpt.site)

## 网站内容

- 响应式首页、固定导航和移动端菜单
- 项目分类筛选与独立详情页
- ThirdBattleLine 核心代码与架构讲解
- 图片灯箱、实机视频和试玩反馈
- 技能矩阵、成长时间轴和在线简历
- 邮箱一键复制、联系表单和返回顶部
- SEO、结构化数据、键盘焦点与减少动画支持

## 技术栈

- React 19 + TypeScript
- Next.js App Router API
- Vinext + Vite
- 原生 CSS 变量与响应式布局
- Cloudflare Worker 运行时

## 本地运行

环境要求：Node.js 22.13 或更高版本。

```bash
npm install
npm run dev
```

浏览器打开终端显示的本地地址即可。生产构建：

```bash
npm run build
npm run start
```

## 内容修改

| 内容 | 文件 |
|---|---|
| 项目、技能、时间轴数据 | `app/data.ts` |
| 首页 | `app/page.tsx` |
| 公共交互组件 | `app/components.tsx` |
| 项目详情模板 | `app/projects/[slug]/page.tsx` |
| 全局视觉与响应式样式 | `app/globals.css` |
| SEO 与结构化数据 | `app/layout.tsx` |

新增项目时，在 `app/data.ts` 的 `projects` 数组中增加一项即可；详情页会按 `slug` 自动生成。

## 媒体资源

项目截图和简历位于 `public/images`、`public/downloads`。两段实机视频体积较大，没有重复提交到 Git 仓库，源码默认从线上作品集读取：

- `thirdbattleline-demo.mp4`
- `yuguang-demo.mp4`

如需完全本地化，将视频放入 `public/media`，并创建 `.env.local`：

```env
NEXT_PUBLIC_MEDIA_BASE_URL=
```

空值会让页面改用本地 `/media/文件名` 路径。

## 部署

当前线上站点由 ChatGPT Sites 托管。仓库没有包含 `.openai/hosting.json`，因为它属于站点实例身份，而不是网站业务源码。

在兼容 Vinext/Cloudflare Worker 的环境中：

```bash
npm ci
npm run build
```

构建输出会生成在 `dist`。如果部署到其他平台，请在平台设置中使用 Node.js 22，并根据平台的 Worker/Next.js 适配方式配置输出目录。

## 真实性说明

- ThirdBattleLine 与 SeekPilot 为私有项目，网站只展示经整理的架构说明和代表性片段。
- UnityURPToonLitShaderExample 被明确标注为教程学习与 Unity 6 兼容验证，不作为原创 Shader 宣传。
- NetCardGame 仓库仍在整理，网络能力展示以 ThirdBattleLine 中的实际实现为依据。

## 版权

本仓库未附加开源许可证。代码与个人素材版权归关大庆所有；如需引用或复用，请先联系作者。
