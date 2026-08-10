---
title: 认识 AI 专家团
description: 理解 WorkBuddy 中 Skill、专家与专家团的差异，并学会把任务交给合适的角色。
sourceStatus: official
permalink: /start/experts/
verifiedAt: 2026-08-10
officialLinks:
  - https://cloud.tencent.com/document/product/1831/134393
  - https://copilot.tencent.com/work/
  - https://www.codebuddy.cn/docs/workbuddy/From-Beginner-to-Expert-Guide/Function-Description/Expert-Center
---

<div class="evidence-card"><strong>官方资料</strong><span>官方资料将专家描述为“角色 + 方法论 + 工具链”，并区分专家、Skill 与专家团；具体市场数量和可见入口以官方当前页面为准。</span></div>

# 认识 AI 专家团

专家不是更长的系统提示词，也不是“把所有角色都叫来”。它适合有专业判断、固定方法和明确交付标准的任务。专家团则适合把一个复杂目标拆给多个角色，再由总负责人汇总。

<figure class="wb-figure"><img src="/images/workbuddy/expert-team.svg" alt="WorkBuddy 专家团协作示意图，展示总任务向研究、数据和编辑角色分工后汇总"><figcaption><strong>协作示意图：</strong>先把职责和产物分开，再让总负责人汇总；任何角色都不应越过用户的最终确认点。</figcaption></figure>

## 桌面端逐步操作：找到并调用合适的专家

<figure class="wb-figure wb-official-figure"><img src="/images/workbuddy/official/expert-center-v5.1.4-annotated.png" alt="WorkBuddy v5.1.4 专家中心官方公开桌面截图，带五个编号标注"><figcaption><strong>官方公开截图 + 教学标注：</strong>来源为 <a href="https://www.codebuddy.cn/docs/workbuddy/From-Beginner-to-Expert-Guide/Function-Description/Expert-Center">Expert Center 公开文档</a>；截图版本 v5.1.4。图中“专家、技能、连接器”、精选场景、专家团和分类均来自公开界面，标号与箭头由本指南添加。</figcaption></figure>

| 步骤 | 对应编号 | 具体怎么做 | 不要这样做 |
| --- | --- | --- | --- |
| 1 | ① | 进入“专家”入口；如果只是一个固定格式转换，先考虑“技能”。 | 不要把所有任务都交给“最强”专家。 |
| 2 | ② | 用搜索框输入场景词，或先打开“我的专家”看已保存角色。 | 不要用模糊的“帮我做好一切”。 |
| 3 | ③ | 从精选场景进入内容创作、投资分析、法律咨询等对应入口。 | 精选场景是入口，不等于它自动掌握你的业务资料。 |
| 4 | ④ | 在“专家 / 专家团”和岗位分类之间切换，先确定需要一个角色还是并行协作。 | 不要在没有分工时直接召唤专家团。 |
| 5 | ⑤ | 打开卡片，阅读简介、标签和适用任务，再用一份低风险材料试跑。 | 不要把机密文件作为第一次测试输入。 |

### 案例：让“内容创作专家”改写一篇活动通知

**第 1 步：选角色。** 搜索“内容创作”，打开卡片，记录它声称解决的场景；如果卡片只说明写作，不要把它当成事实核查专家。

**第 2 步：给角色合同。**

```text
你负责把我提供的活动通知改写成内部员工邮件。
只允许改变结构、语气和标题，不新增活动时间、福利、地点或政策。
先输出：原文事实清单、需要确认的缺口、改写计划；等待我确认后再写正文。
最终交付：邮件标题 3 个、正文 1 版、原文事实对照表、风险提示。
```

**第 3 步：做小样本试跑。** 只给一段已脱敏通知，比较“原文事实清单”和改写正文，确认没有把建议写成已确定政策。

**第 4 步：决定是否升级专家团。** 如果还需要数据角色检查报名数据、编辑角色统一品牌语言，才把任务拆给专家团；每个角色都要有独立产物和停止条件。

<div class="wb-screen-note"><strong>判断标准：</strong>专家的价值不是“语气像专家”，而是能否按角色合同产出证据表、遵守输入边界，并在证据不足时停下来。</div>

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
