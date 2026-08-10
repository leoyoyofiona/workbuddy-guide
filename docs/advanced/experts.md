---
title: 多专家并行协作
description: 用研究、数据和编辑三角色案例设置边界、并行产物和统一汇总协议。
sourceStatus: official
permalink: /advanced/experts/
verifiedAt: 2026-08-10
officialLinks:
  - https://cloud.tencent.com/document/product/1831/134393
  - https://copilot.tencent.com/work/
---

<div class="evidence-card"><strong>官方资料</strong><span>官方资料描述专家和专家团可按专业角色协作；角色分工、验收和确认点是本指南的案例编排。</span></div>

# 多专家并行协作

多专家适合“同一目标需要不同方法”的任务。它不等于让三个角色各写一篇文章再拼接，而是让每个角色交付独立证据，最后由总负责人统一格式。

<figure class="wb-figure"><img src="/images/workbuddy/expert-team.svg" alt="多专家并行协作示意图，研究、数据和编辑角色向总负责人汇总"><figcaption><strong>角色边界：</strong>箭头向下是分工，虚线向上是汇总；最终推荐仍需人工审阅。</figcaption></figure>

## 案例：为一个新课程做需求简报

| 角色 | 只负责 | 交付物 | 禁止 |
| --- | --- | --- | --- |
| 研究 | 整理公开需求与竞品证据 | 来源表、时间和链接 | 代替业务决策 |
| 数据 | 统计脱敏问卷 | 字段说明、描述性发现 | 编造样本或因果 |
| 编辑 | 组织一页简报 | 标题、结论、结构 | 改写事实来源 |
| 总负责人 | 合并并指出冲突 | 统一摘要、待确认 | 掩盖不确定性 |

## 总任务指令

```text
目标：为新课程评审准备一页决策摘要。
请按研究、数据、编辑三个角色并行处理，各自只交付职责范围内的中间产物。
统一规则：只使用提供材料；每个结论附来源或字段；冲突放入“待确认”。
汇总前先展示三份中间产物，等待我确认后再生成最终摘要。
```

## 什么时候不要并行

输入少于一页、输出只是三句话、任务需要连续操作同一文件，或者你还没有写清楚完成标准时，先用单一指令。专家越多，协调和复核成本越高。

<div class="wb-callout"><strong>验收：</strong>你能指出每个角色的独立产物，并能在汇总前发现至少一处来源冲突或输入缺口。</div>

<div class="source-note">来源：<a href="https://cloud.tencent.com/document/product/1831/134393">腾讯云 WorkBuddy 专家文档</a>、<a href="https://copilot.tencent.com/work/">WorkBuddy 官方产品页</a>。</div>
