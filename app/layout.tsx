import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "关大庆｜Unity 游戏开发作品集", template: "%s｜关大庆" },
  description: "关大庆的 Unity 游戏开发作品集，展示 妖怪牌、《余光》、游戏系统开发、UI、性能优化与工具研发实践。",
  keywords: ["关大庆", "Unity 游戏开发", "C#", "数字媒体技术", "Unity 作品集", "游戏开发实习生"],
  authors: [{ name: "关大庆" }],
  openGraph: {
    type: "website", locale: "zh_CN", title: "关大庆｜Unity 游戏开发作品集",
    description: "游戏系统、玩法原型、UI 与工具开发实践。",
    images: ["/images/yaokaid-battle-20261020.png"],
  },
  other: { "codex-preview": "development" },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const structuredData = {
    "@context": "https://schema.org", "@type": "Person", name: "关大庆",
    jobTitle: "Unity 游戏开发", email: "mailto:qingbig@163.com",
    url: "https://github.com/bigqingG", alumniOf: "河南城建学院",
    knowsAbout: ["Unity", "C#", "游戏系统开发", "UGUI", "性能优化"],
  };
  return (
    <html lang="zh-CN">
      <body>
        {children}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      </body>
    </html>
  );
}
