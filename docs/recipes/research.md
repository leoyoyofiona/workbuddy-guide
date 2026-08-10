---
title: 外部信息调研
description: 用一个可复核的竞品调研案例，把主题、来源、证据表和决策摘要交给 WorkBuddy。
sourceStatus: official
permalink: /recipes/research/
verifiedAt: 2026-08-10
officialLinks:
  - https://copilot.tencent.com/work/
  - https://cloud.tencent.com.cn/product/workbuddy
  - https://www.workbuddy.cn/docs/workbuddy/Task-Management
---

<div class="evidence-card"><strong>官方资料</strong><span>官方页面明确展示外部信息调研与内容生成场景；以下主题和数据是教学案例。</span></div>

# 外部信息调研

调研不是让 WorkBuddy “搜很多”，而是让它在限定范围内建立可回溯证据，再把事实和建议分开。

<figure class="wb-figure"><img src="/images/workbuddy/plan-loop.svg" alt="外部信息调研从目标到复用的任务闭环示意图"><figcaption><strong>案例流程：</strong>先给资料范围和比较维度，再让 WorkBuddy 生成证据表，最后才写摘要。</figcaption></figure>

## 桌面端逐步操作：用任务管理界面搭一份可复核调研

<figure class="wb-figure wb-official-figure"><img src="/images/workbuddy/official/task-management-v5.1.1-annotated.png" alt="WorkBuddy v5.1.1 任务管理官方公开桌面截图，带六个编号标注，用于调研案例"><figcaption><strong>官方公开截图 + 教学标注：</strong>来源为 <a href="https://www.workbuddy.cn/docs/workbuddy/Task-Management">Task Management</a>；截图版本 v5.1.1。这里把任务列表、工作空间、日常办公模式、快捷场景和案例卡片映射到调研步骤。</figcaption></figure>

| 调研阶段 | 对应编号 | 实际操作 | 阶段产物 |
| --- | --- | --- | --- |
| 建立上下文 | ①②③ | 新建任务，进入“竞品调研”空间，把研究对象和日期写进任务名。 | 任务范围和资料目录。 |
| 选择工作方式 | ④ | 选择“日常办公”；研究代码或数据清洗时再切换到对应模式。 | 明确的执行模式。 |
| 设定资料入口 | ⑤ | 先用快捷场景或在输入框写清来源白名单、时间范围、比较维度。 | 研究计划和缺口清单。 |
| 参考模板 | ⑥ | 从“行业研究精读摘要”等案例卡进入，替换为自己的对象。 | 证据表骨架。 |

### 三轮调研实操

**第一轮：只做资料清单。**

```text
研究对象：三个跨境电商客服工具。
来源白名单：各产品官方产品页、公开定价页、更新日志。
时间范围：2025-01-01 至今天。
请先输出研究计划、来源清单、每个来源的可访问性和缺口；不要写结论。
```

**第二轮：做证据表。**

```text
按“支持渠道｜自动化方式｜数据导出｜权限说明｜更新时间”建立证据表。
每一格写来源 URL、页面日期或“未找到”，并保留原文短句。
事实、推断、建议分三列；不能从来源推出的内容填“待验证”。
```

**第三轮：写决策摘要。**

```text
只根据已核验的证据表写 600 字决策摘要。
结构：结论（带限定条件）—关键事实—差异—风险—需要人工确认的问题。
不要把“页面未说明”改写成“不支持”，不要补写价格或额度。
```

<div class="wb-screen-note"><strong>复核动作：</strong>点击左侧旧任务回看输入和计划；在同一空间保存证据表和摘要；输出前随机抽查 5 条 URL。公开二手教程可帮助发现工作流，但最终功能和界面必须回到官方页面或本机实测。</div>

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
