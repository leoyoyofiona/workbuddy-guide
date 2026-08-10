---
title: 用户反馈与舆情分析
description: 从已脱敏评论中提炼主题、情绪、问题严重性与验证动作，并保留原文编号。
sourceStatus: official
permalink: /recipes/feedback/
verifiedAt: 2026-08-10
officialLinks:
  - https://copilot.tencent.com/work/
  - https://cloud.tencent.com.cn/product/workbuddy
---

<div class="evidence-card"><strong>官方资料</strong><span>官方页面列出用户反馈、评论文档、情感归类和问题提炼场景；示例只说明方法，不代表真实用户数据。</span></div>

# 用户反馈与舆情分析

反馈分析的关键不是给每条评论贴一个情绪标签，而是让团队能回到原文，决定优先解决什么问题。

## 案例：分析 100 条已脱敏反馈

```text
请分析这批已脱敏的用户反馈。
第一轮只检查：样本量、时间范围、重复项、空文本、语言和编号。
第二轮按主题归类；每类保留代表性原句编号、情绪倾向、问题严重性和置信度。
第三轮为高严重性问题提出验证动作和负责人，不把少量样本推断为全部用户。
```

## 归类表

| 字段 | 说明 | 必须保留 |
| --- | --- | --- |
| 主题 | 问题的可复述名称 | 原句编号 |
| 情绪 | 正向/中性/负向或自定义规则 | 判断依据 |
| 严重性 | 对业务影响，不等于情绪强度 | 规则说明 |
| 行动 | 下一步验证或修复 | 负责人/期限 |

<div class="wb-example"><strong>防止过度概括：</strong>不要写“用户都不喜欢新版本”，改写成“在本批 100 条反馈中，有 18 条提到登录步骤；样本范围和代表性需要继续确认”。</div>

<div class="wb-callout"><strong>完成标准：</strong>任何主题都能通过编号回到原文，团队可以据此安排验证，而不是只得到一个情绪饼图。</div>

<div class="source-note">来源：<a href="https://copilot.tencent.com/work/">WorkBuddy 官方产品页</a>、<a href="https://cloud.tencent.com.cn/product/workbuddy">腾讯云 WorkBuddy 产品说明</a>。</div>
