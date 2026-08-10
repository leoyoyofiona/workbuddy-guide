---
title: 业务数据洞察
description: 用一份销售表完成数据质量、可复核发现和行动建议三轮分析。
sourceStatus: official
permalink: /recipes/data-analysis/
verifiedAt: 2026-08-10
officialLinks:
  - https://copilot.tencent.com/work/
  - https://cloud.tencent.com.cn/product/workbuddy
---

<div class="evidence-card"><strong>官方资料</strong><span>官方资料介绍业务数据洞察、用户反馈和销售业绩分析场景；本案例不提供虚构的效果数字。</span></div>

# 业务数据洞察

把数据分析分成三轮，避免 WorkBuddy 用一段流畅文字跳过数据质量和口径。

<figure class="wb-figure"><img src="/images/workbuddy/data-check.svg" alt="业务数据分析三轮流程示意图，展示数据质量、可复核发现和行动建议"><figcaption><strong>先查再解释：</strong>任何图表都要能回到字段、时间和分母。</figcaption></figure>

## 案例：找出销售下滑的可验证原因

1. 上传脱敏表格，说明月份、区域、金额单位和去重规则。
2. 只请求字段、缺失、重复、异常和时间范围。
3. 确认数据质量后，再请求最多 5 个事实发现。
4. 最后让它为每个发现设计一个低风险验证动作。

```text
不要直接判断销售下滑原因。先输出数据质量表；通过后再列出事实发现。
每个发现写：指标、比较基准、字段依据、时间范围、可能的替代解释。
最后给出验证动作，不要把相关性写成因果。
```

## 结果表

| 结论类型 | 示例表达 | 不应写成 |
| --- | --- | --- |
| 事实 | 7 月华东订单数比 6 月少 12% | 华东客户流失 |
| 假设 | 可能与促销结束有关，需查活动记录 | 促销结束导致下滑 |
| 行动 | 对比活动前后转化率，负责人/期限待确认 | 立即削减预算 |

<div class="wb-callout"><strong>完成标准：</strong>你得到的是“质量报告 + 事实表 + 验证计划”，而不是一张看起来漂亮却无法审计的图表。</div>

<div class="source-note">来源：<a href="https://copilot.tencent.com/work/">WorkBuddy 官方产品页</a>、<a href="https://cloud.tencent.com.cn/product/workbuddy">腾讯云 WorkBuddy 产品说明</a>。</div>
