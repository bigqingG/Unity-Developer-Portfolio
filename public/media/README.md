# Optional local videos

The repository uses the deployed portfolio as the default video host. To run
with local videos, add these files to this directory:

- `thirdbattleline-demo.mp4`
- `yuguang-demo.mp4`

Then set `NEXT_PUBLIC_MEDIA_BASE_URL=` in `.env.local`.

## 2026-10-20 作品橱窗录屏

- `kings-revival-showcase.mp4`：国王复兴，45 秒、1080p。
- `yaokaid-showcase.mp4`：Yaokaid 保护区场景与天气，45 秒、1080p，展示在 ThirdBattleLine 项目下。
- 网页版由用户提供的原片转码为 H.264/AAC，启用 faststart，每文件小于 Pages 的 25 MiB 限制；原片未修改。
- 两段新版视频随 GitHub 部署同源托管，不依赖 ChatGPT Sites。原对战演示仍在素材区保留。
