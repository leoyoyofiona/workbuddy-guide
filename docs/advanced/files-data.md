---
title: 文件与数据分析
description: 用销售表案例完成数据质量、可复核发现和行动建议三轮分析，避免把格式化结果误认为业务结论。
sourceStatus: official
permalink: /advanced/files-data/
verifiedAt: 2026-08-10
officialLinks:
  - https://copilot.tencent.com/work/
  - https://cloud.tencent.com.cn/product/workbuddy
---

<div class="evidence-card"><strong>官方资料</strong><span>官方资料介绍表格、日志和业务数据分析场景；以下字段和口径为教学案例，不代表任何真实企业数据。</span></div>

# 文件与数据分析

数据任务不要一上来问“有什么洞察”。先让 WorkBuddy 证明它读懂了文件，再让它总结和建议。

<figure class="wb-figure"><img src="/images/workbuddy/data-check.svg" alt="WorkBuddy 数据分析三轮检查示意图，展示数据质量、发现和行动建议"><figcaption><strong>三轮方法：</strong>第一轮只查数据质量，第二轮只写可复核事实，第三轮才提出行动和外部验证假设。</figcaption></figure>

## 案例：分析一份订单表

### 第一轮：数据质量

```text
请先不要解释业务。读取订单表后只输出：行数、字段、时间范围、单位、缺失值、重复键、异常值和无法判断的口径。每项注明依据的列名或行号。
```

### 第二轮：可复核发现

```text
只根据已经确认的数据质量结果，列出最多 5 个事实发现。每个发现必须包含：数值、比较基准、字段依据、时间范围和不确定性。不要写因果解释。
```

### 第三轮：行动建议

```text
针对每个事实发现提出一个低风险验证动作，写出负责人、期限和验证指标。把需要外部资料或实验才能判断的内容单列为假设。
```

## 分析验收表

| 检查 | 通过条件 | 常见错误 |
| --- | --- | --- |
| 口径 | 时间、单位、去重规则明确 | 把订单数和客户数混用 |
| 数字 | 能回到字段或行号 | 只给百分比不说明分母 |
| 图表 | 图表与结论使用同一口径 | 视觉放大造成误读 |
| 建议 | 有负责人和验证指标 | 把相关性写成因果 |

<div class="wb-callout"><strong>红线：</strong>WorkBuddy 的文字总结不能替代统计检验、实验设计、审计或财务审批；真实数据的结论必须由负责人复核。</div>

<div class="source-note">来源：<a href="https://copilot.tencent.com/work/">WorkBuddy 官方产品页</a>、<a href="https://cloud.tencent.com.cn/product/workbuddy">腾讯云 WorkBuddy 产品说明</a>。</div>
