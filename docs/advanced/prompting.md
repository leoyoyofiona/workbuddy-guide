---
title: 写出可执行的指令
description: 用目标、上下文、约束、交付和验收组织 WorkBuddy 指令，并通过案例逐轮改进。
sourceStatus: template
permalink: /advanced/prompting/
verifiedAt: 2026-08-10
officialLinks:
  - https://copilot.tencent.com/work/
---

<div class="evidence-card"><strong>通用方法</strong><span>这是可迁移的任务表达模板，不代表官方提示词格式；WorkBuddy 的自然语言理解能力以官方当前资料为准。</span></div>

# 写出可执行的指令

同一句“帮我写得专业一点”，可能代表五种不同要求。好的指令不是越长越好，而是让输入、限制和验收可以被另一位同事复述。

<figure class="wb-figure"><img src="/images/workbuddy/plan-loop.svg" alt="WorkBuddy 任务闭环示意图，用于解释提示词从目标到复用的结构"><figcaption><strong>提示词对应闭环：</strong>指令至少要覆盖目标、输入、计划/步骤、验收和复用记录。</figcaption></figure>

## 五段式模板

```text
角色：你负责什么，不负责什么？
目标：我要解决什么问题，服务谁？
输入：使用哪些文件、链接、时间范围或字段？
限制：不允许补充什么，哪些动作需要确认？
交付：输出什么格式、长度、语气和文件名？
验收：完成后逐项检查哪些条件，哪些问题要问我？
```

## 实际案例：把“写周报”改成可执行任务

| 版本 | 指令 | 可能的问题 |
| --- | --- | --- |
| 模糊 | 帮我把本周工作写专业一点 | 没有受众、范围和格式 |
| 可执行 | 根据本周工单，给部门负责人写 300 字周报 | 还缺指标口径和不确定项规则 |
| 可复核 | 只使用周一到周五工单，输出完成项/风险/下周计划三栏；每条引用工单编号；没有数据填待确认；最后列出 3 个需要我确认的问题 | 目标、输入、限制和验收齐全 |

## 三轮改写练习

1. **缩小范围**：把“分析客户”改成“分析 2026 年 7 月已脱敏的 100 条反馈”。
2. **固定产物**：把“给建议”改成“输出问题表、证据句、负责人和验证指标”。
3. **加入停止条件**：要求来源不足、字段缺失、即将发送外部消息时暂停。

<div class="wb-example"><strong>马上可用：</strong>先让 WorkBuddy 复述目标和缺口，再让它执行。若复述不对，改指令比改结果更省时间。</div>

<div class="wb-callout"><strong>验收：</strong>把你的工作指令交给同事阅读；如果他能说出输入、输出和不能做的事，这条指令就具备复用基础。</div>

<div class="source-note">参考：<a href="https://copilot.tencent.com/work/">WorkBuddy 官方办公场景</a>；本页模板属于通用任务表达方法。</div>
