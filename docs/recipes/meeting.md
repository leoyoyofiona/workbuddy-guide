---
title: 会议记录到行动清单
description: 用脱敏会议记录案例整理决策、行动项、分歧和待确认问题，不声明特定录音集成功能。
sourceStatus: template
permalink: /recipes/meeting/
verifiedAt: 2026-08-10
officialLinks:
  - https://copilot.tencent.com/work/
---

<div class="evidence-card"><strong>通用方法</strong><span>这是可复用的会议整理模板，不声明特定录音或会议集成功能；先把转写文本或手工记录作为输入。</span></div>

# 会议记录到行动清单

## 案例：从 20 行会议记录得到四张表

```text
请只根据以下会议记录输出四部分：
1. 已做决定；2. 行动项（事项、负责人、期限、原文依据）；
3. 未解决分歧；4. 需要补充的信息。
原文没有写明负责人或期限时填“待确认”，不要猜测。
先给出表格结构，确认后再填内容。
```

## 先标“说了什么”，再标“意味着什么”

| 层次 | 内容 | 复核人 |
| --- | --- | --- |
| 原文 | 会议中实际出现的句子 | 记录人 |
| 决定 | 明确同意或批准的事项 | 负责人 |
| 行动 | 下一步、负责人、期限 | 责任人 |
| 推断 | WorkBuddy 认为可能的含义 | 会议主持人 |

## 交付前检查

- 专有名词、数字和日期与原文一致。
- “建议”没有被写成“决定”。
- 待确认项有具体提问，而不是空泛地说信息不足。
- 行动清单可以复制到任务工具继续跟踪。

<div class="wb-callout"><strong>完成标准：</strong>参会者只看行动清单就知道谁在什么时候做什么，同时可以通过原文依据纠正误听。</div>

<div class="source-note">参考：<a href="https://copilot.tencent.com/work/">WorkBuddy 官方文档处理与交付场景</a>；本页模板不代表会议录音或自动推送能力。</div>
