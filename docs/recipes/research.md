---
title: 外部信息调研
description: 用一个可复核的竞品调研案例，把主题、来源、证据表和决策摘要交给 WorkBuddy。
sourceStatus: official
permalink: /recipes/research/
verifiedAt: 2026-08-10
officialLinks:
  - https://copilot.tencent.com/work/
  - https://cloud.tencent.com.cn/product/workbuddy
---

<div class="evidence-card"><strong>官方资料</strong><span>官方页面明确展示外部信息调研与内容生成场景；以下主题和数据是教学案例。</span></div>

# 外部信息调研

调研不是让 WorkBuddy “搜很多”，而是让它在限定范围内建立可回溯证据，再把事实和建议分开。

<figure class="wb-figure"><img src="/images/workbuddy/plan-loop.svg" alt="外部信息调研从目标到复用的任务闭环示意图"><figcaption><strong>案例流程：</strong>先给资料范围和比较维度，再让 WorkBuddy 生成证据表，最后才写摘要。</figcaption></figure>

## 案例：比较三个跨境电商工具

```text
主题：比较三个跨境电商客服工具的公开功能。
范围：2025-01 至今；只使用官方产品页、公开定价页和更新日志。
维度：支持渠道、自动化方式、数据导出、权限说明、更新时间。
第一轮：先输出资料清单和研究计划，不写结论。
第二轮：建立证据表，每条记录 URL、发布日期、原文摘要和限制。
第三轮：生成 600 字决策摘要，区分事实、推断和待验证问题。
```

## 证据表模板

| 主张 | 来源 URL | 日期 | 原文位置 | 状态 |
| --- | --- | --- | --- | --- |
| 产品支持某渠道 | 官方页面 | YYYY-MM-DD | 标题/段落 | 已核验 |
| 可能适合某场景 | 由多条事实推断 | — | 说明推理 | 待验证 |
| 价格或额度 | 当前页面/客户端 | 核验日 | 原文提示 | 动态 |

## 验收与失败处理

- 来源打不开：不要用搜索摘要替代，标记“待补证据”。
- 页面更新时间不同：保留时间，不强行合并成同一口径。
- 结论超出证据：改写为问题或假设，不能写成事实。
- 资料过多：缩小地区、时间或对象，重新生成计划。

<div class="wb-callout"><strong>交付标准：</strong>读者可以沿着证据表回到每个关键来源，并能看出哪些话是事实、哪些话是分析、哪些话需要进一步验证。</div>

<div class="source-note">来源：<a href="https://copilot.tencent.com/work/">WorkBuddy 官方产品页</a>、<a href="https://cloud.tencent.com.cn/product/workbuddy">腾讯云 WorkBuddy 产品说明</a>。</div>
