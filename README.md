# WorkBuddy Guide

WorkBuddy 中文学习指南：从第一次使用到可复用的 AI 工作流。

> WorkBuddy Guide 是独立维护的非官方中文学习网站，与腾讯及 WorkBuddy 官方无隶属或授权关系。

## 本地开发

需要 Node.js `>=22 <25` 与 pnpm 10+：

```bash
pnpm install
pnpm docs:dev
```

生产构建：

```bash
pnpm build
```

构建会先检查 30 个页面的 frontmatter、来源台账和 clean permalink，再生成静态文件、Sitemap、robots.txt，并检查产物路由。

## 内容证据

每篇教程都包含 `sourceStatus`、`verifiedAt`、`officialLinks`；本机实测页面会注明 WorkBuddy 版本。来源台账位于 [`docs/_meta/source-ledger.yml`](docs/_meta/source-ledger.yml)。

WorkBuddy 官方信息请以[官方产品页](https://copilot.tencent.com/work/)为准。CodeBuddy IDE 内容只在页面明确标注后引用。

## 部署

Render Blueprint 配置位于 [`render.yaml`](render.yaml)，静态发布目录为 `docs/.vuepress/dist`。

## 贡献

请先阅读[贡献说明](docs/community/contribute.md)，不要提交账号、Cookie、内部文件、未授权素材或无法核验的效果数据。
