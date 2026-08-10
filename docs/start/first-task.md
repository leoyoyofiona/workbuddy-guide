---
title: 跑通第一个任务
description: 用一个小而可检查的任务理解 WorkBuddy 的输入、过程与产物。
sourceStatus: tested
permalink: /start/first-task/
verifiedAt: 2026-08-10
testedVersion: 5.3.11
officialLinks:
  - https://copilot.tencent.com/work/
---

<div class="evidence-card"><strong>本机实测 · 5.3.11</strong><span>以下任务设计用于验证基本闭环，不代表所有版本的界面完全相同。</span></div>

# 跑通第一个任务

先不要要求 WorkBuddy “帮我做好一切”。给它一个输入明确、结果容易检查的小任务：把一段会议记录整理成三列表格。

```text
请把下面的会议记录整理成 Markdown 表格，列为：事项、负责人、下一步。
只使用原文信息；不确定的内容标记“待确认”；最后列出 3 个需要我补充的问题。
```

## 检查四件事

- 是否理解了输出格式？
- 是否把原文没有的信息当成了事实？
- 是否指出了不确定项？
- 结果能否直接复制到你的工作文档？

## 复盘模板

记录“输入材料—指令—产物—需要人工修改的地方”。下一次只改一个变量，例如增加受众、语气或篇幅限制。

<div class="wb-callout"><strong>验收：</strong>你能拿到一份可复制的 Markdown 表格，并说清楚它哪些地方需要人工确认。</div>

<div class="source-note">来源：<a href="https://copilot.tencent.com/work/">官方办公场景</a>；步骤为本机实测任务设计。</div>
