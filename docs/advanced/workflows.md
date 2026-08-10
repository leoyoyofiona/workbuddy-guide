---
title: 工作流编排
description: 用触发、步骤、确认点和交付物把重复任务组织起来。
sourceStatus: template
permalink: /advanced/workflows/
verifiedAt: 2026-08-10
officialLinks:
  - https://copilot.tencent.com/work/
---

<div class="evidence-card"><strong>通用方法</strong><span>工作流示例是独立编排，不承诺客户端存在完全同名的自动化入口。</span></div>

# 工作流编排

一个可复用工作流至少要回答四个问题：什么时候开始、先读取什么、哪里需要人工确认、最后交付什么。

```text
触发：每周一收到本周数据文件
步骤：清洗 → 发现异常 → 生成摘要 → 人工确认 → 输出报告
停止条件：缺少关键字段、来源冲突、准备对外发送
产物：一页摘要 + 异常清单 + 待办表
```

先手动跑通，再把稳定步骤沉淀为 Skill 或模板。

<div class="source-note">参考：<a href="https://copilot.tencent.com/work/">WorkBuddy 官方全场景办公描述</a>。</div>
