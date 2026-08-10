---
title: 认识 AI 专家团
description: 理解 WorkBuddy 中 Skill、专家与专家团的差异，并学会把任务交给合适的角色。
sourceStatus: official
permalink: /start/experts/
verifiedAt: 2026-08-10
officialLinks:
  - https://cloud.tencent.com/document/product/1831/134393
  - https://copilot.tencent.com/work/
---

<div class="evidence-card"><strong>官方资料</strong><span>官方资料将专家描述为“角色 + 方法论 + 工具链”，并区分专家、Skill 与专家团；具体市场数量和可见入口以官方当前页面为准。</span></div>

# 认识 AI 专家团

专家不是更长的系统提示词，也不是“把所有角色都叫来”。它适合有专业判断、固定方法和明确交付标准的任务。专家团则适合把一个复杂目标拆给多个角色，再由总负责人汇总。

<figure class="wb-figure"><img src="/images/workbuddy/expert-team.svg" alt="WorkBuddy 专家团协作示意图，展示总任务向研究、数据和编辑角色分工后汇总"><figcaption><strong>协作示意图：</strong>先把职责和产物分开，再让总负责人汇总；任何角色都不应越过用户的最终确认点。</figcaption></figure>

## Skill、专家、专家团怎么选

| 你遇到的问题 | 选择 | 例子 |
| --- | --- | --- |
| 缺少一种稳定能力 | Skill | 把 PDF 要点抽取成固定表格 |
| 需要一个专业视角 | 专家 | 让营销专家审查活动方案 |
| 需要多种视角并行 | 专家团 | 研究、数据、编辑共同完成简报 |

## 召唤专家前先写“角色合同”

```text
目标：为下周产品评审准备一页决策摘要。
角色：研究角色只负责整理资料；分析角色只负责比较选项；编辑角色负责合并表达。
输入：仅使用我提供的访谈记录和数据表。
交付：背景、3 个发现、2 个选项、推荐理由、待确认问题。
边界：任何角色都不能新增事实；冲突信息必须保留原文并标记。
确认点：在输出最终推荐前先停下来让我审核证据表。
```

## 观察专家是否真的有用

不要看它写得像不像专家，而要看四件事：

1. 是否遵守角色边界，没有替别的角色做未经授权的决定。
2. 是否使用了该角色的方法，而不是换一种语气重复摘要。
3. 是否给出可检查的中间产物，例如证据表或比较矩阵。
4. 是否在证据不足时停下来，而不是用专业术语掩盖空缺。

## 练习：同一材料三种视角

把一页公开产品介绍分别交给研究、运营和编辑角色，要求输出“发现—风险—表达建议”。比较三份结果，找出哪些是事实、哪些是解释、哪些是建议。

<div class="wb-callout"><strong>完成标准：</strong>你能解释为什么这个任务需要专家、为什么不需要专家团，并能为每个角色写出输入、职责、产物和停止条件。</div>

<div class="source-note">来源：<a href="https://cloud.tencent.com/document/product/1831/134393">腾讯云 WorkBuddy 专家文档</a>、<a href="https://copilot.tencent.com/work/">WorkBuddy 官方产品页</a>。</div>
