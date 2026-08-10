---
title: 工作流编排
description: 用周报案例把触发、输入、步骤、确认点、异常处理和交付物组织成可复用流程。
sourceStatus: template
permalink: /advanced/workflows/
verifiedAt: 2026-08-10
officialLinks:
  - https://copilot.tencent.com/work/
  - https://cloud.tencent.com.cn/product/workbuddy
---

<div class="evidence-card"><strong>通用方法</strong><span>工作流示例是独立编排，不承诺客户端存在完全同名的自动化入口；实现方式以当前 WorkBuddy 版本和组织配置为准。</span></div>

# 工作流编排

工作流不是把一条超长指令保存下来，而是把重复任务拆成有输入、有状态、有停止条件的步骤。先手动跑通，再考虑 Skill、自动化或连接器。

<figure class="wb-figure"><img src="/images/workbuddy/plan-loop.svg" alt="工作流从目标到复用的六步闭环示意图"><figcaption><strong>编排原则：</strong>每一步都要有产物和失败处理，最后才谈是否自动触发。</figcaption></figure>

## 案例：每周一整理销售周报

```text
触发：用户提供上周销售表和周报模板。
步骤：检查字段 → 计算口径 → 标出异常 → 生成摘要 → 人工确认 → 保存新版本。
停止条件：缺少关键字段、时间范围不一致、发现无法解释的异常。
产物：数据质量表 + 一页摘要 + 异常清单 + 待办表。
禁止：自动发送给客户、覆盖原始文件、把预测写成实际结果。
```

## 状态表

| 状态 | 进入条件 | 退出条件 | 人工动作 |
| --- | --- | --- | --- |
| 待输入 | 文件未齐 | 文件和版本确认 | 补材料 |
| 检查中 | 已读取文件 | 字段/口径通过 | 核对异常 |
| 待确认 | 发现风险或写入动作 | 用户批准 | 决定继续/停止 |
| 已交付 | 产物和日志齐全 | 归档 | 抽样复核 |

## 练习：手动模拟一次自动化

连续三周手动运行同一个模板，每次记录耗时、改动、失败原因和输入差异。三次都稳定后，再判断哪些步骤可以自动化，哪些步骤必须保留人工确认。

<div class="wb-callout"><strong>完成标准：</strong>别人可以只看你的流程表，就知道何时开始、读什么、哪里停、产出什么以及失败后如何恢复。</div>

<div class="source-note">参考：<a href="https://copilot.tencent.com/work/">WorkBuddy 官方全场景办公描述</a>、<a href="https://cloud.tencent.com.cn/product/workbuddy">腾讯云 WorkBuddy 产品说明</a>；流程设计属于通用方法。</div>
