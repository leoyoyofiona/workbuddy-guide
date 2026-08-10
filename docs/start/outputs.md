---
title: 产物与交付检查
description: 从“得到一段回答”走向“交付一份可使用、可复核、可继续编辑的结果”。
sourceStatus: official
permalink: /start/outputs/
verifiedAt: 2026-08-10
officialLinks:
  - https://copilot.tencent.com/agents
  - https://cloud.tencent.com.cn/product/workbuddy
---

<div class="evidence-card"><strong>官方资料</strong><span>官方资料展示文本、表格、PPT、数据分析和本地文件交付场景；产物形式与下载能力以当前客户端为准。</span></div>

# 产物与交付检查

“回答”是对话中的一个状态，“产物”是别人可以拿走继续使用的结果。你应该在指令中提前定义交付物，而不是等生成后再猜它是否合格。

<figure class="wb-figure"><img src="/images/workbuddy/workbench-map.svg" alt="WorkBuddy 工作台产物检查示意图，展示结果文件和交付前检查项"><figcaption><strong>产物位置示意：</strong>先看结果文件是否生成，再做事实、格式、权限和发布四类检查；图中“待复核”不是失败，而是交付流程的一部分。</figcaption></figure>

## 交付物四层结构

| 层 | 要写清什么 | 例子 |
| --- | --- | --- |
| 受众 | 谁会阅读或使用 | 业务负责人、客户、学生 |
| 决策 | 看完要做什么 | 选方案、改文案、安排待办 |
| 形态 | 文件还是结构化文本 | 一页摘要、xlsx、PPT 大纲 |
| 验收 | 什么条件算完成 | 8 页以内、每页一个结论 |

## 推荐指令

```text
请先给出交付物目录，不要直接写正文。
交付物：
1. 200 字执行摘要；
2. 证据表（结论/依据/日期/不确定性）；
3. 行动清单（事项/负责人/截止时间/状态）；
4. 需要我确认的问题。
我确认目录后，再生成正文。所有无法回溯的内容标记“待确认”。
```

## 交付前 10 分钟检查

<ul class="wb-checklist">
  <li>打开文件，确认没有空白页、乱码或错位。</li>
  <li>抽查 3 个关键数字和 3 条引用。</li>
  <li>确认标题、日期、单位、版本号一致。</li>
  <li>确认“建议”没有被写成“事实”。</li>
  <li>确认附件和链接没有指向内部路径。</li>
  <li>确认最终收件人和发布渠道正确。</li>
</ul>

<div class="wb-example"><strong>交付声明模板：</strong>“本文件包含 AI 辅助整理内容；事实依据见证据表；红色标记项需要人工确认；版本为 2026-08-10。”</div>

<div class="wb-callout"><strong>完成标准：</strong>别人无需重新询问你“这份东西怎么来的、哪些地方能用”，就能编辑、复核并继续下一步工作。</div>

<div class="source-note">来源：<a href="https://copilot.tencent.com/agents">WorkBuddy 官方 Agents 页面</a>、<a href="https://cloud.tencent.com.cn/product/workbuddy">腾讯云 WorkBuddy 产品说明</a>。</div>
