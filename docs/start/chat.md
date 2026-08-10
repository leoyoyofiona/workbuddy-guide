---
title: 看懂对话与工作区
description: 从输入、计划、执行过程到产物，建立 WorkBuddy 任务工作台的阅读方法。
sourceStatus: tested
permalink: /start/chat/
verifiedAt: 2026-08-10
testedVersion: 5.3.11
officialLinks:
  - https://copilot.tencent.com/agents
  - https://cloud.tencent.com.cn/product/workbuddy
---

<div class="evidence-card"><strong>本机实测 · 5.3.11</strong><span>界面名称可能随版本调整；本页用“输入—计划—执行—产物”解释可迁移的任务结构。</span></div>

# 看懂对话与工作区

WorkBuddy 不只是一个聊天框。官方公开资料把它描述为能够理解自然语言、拆解规划并处理文件和多模态内容的工作台。使用时不要只看最后一段回答，要看任务是否按照你的边界推进。

<figure class="wb-figure"><img src="/images/workbuddy/workbench-map.svg" alt="WorkBuddy 任务工作台界面示意图，标注任务列表、对话执行区和产物检查区"><figcaption><strong>界面示意图：</strong>这是本指南制作的非官方教学图，用来帮助你定位“任务—过程—产物”三类证据，不代表当前版本的像素级 UI。</figcaption></figure>

<div class="wb-example"><strong>想核对真实界面：</strong>请打开<a href="https://www.workbuddy.cn/docs/workbuddy/Quickstart">公开快速开始文档</a>中的当前截图；截图版本和页面结构可能变化，本页只把可迁移的阅读方法固定下来。</div>

## 四个区域怎么读

| 区域 | 你要寻找的证据 | 你可以采取的动作 |
| --- | --- | --- |
| 输入区 | 指令、引用文件、目标和限制 | 补齐受众、范围和格式 |
| 计划区 | 步骤、缺口、预计产物 | 在范围漂移前暂停并改计划 |
| 执行区 | 读取了什么、调用了什么、是否报错 | 核对权限、来源和中间结果 |
| 产物区 | 文件、表格、报告、预览或下载结果 | 打开、抽样、回溯、重命名和归档 |

## 用一个“阅读任务”熟悉界面

```text
请把这次任务分成四栏向我展示：
1. 我提供了什么输入；2. 你准备做什么；3. 哪些步骤需要我确认；4. 最终会交付什么。
在开始执行前先停下来，等待我确认计划。
```

当你确认后，再补一句：

```text
按已确认的计划执行。每完成一个阶段，给出阶段产物和仍然存在的不确定性；不要在没有确认的情况下发送消息、修改外部数据或发布内容。
```

## 过程信息不是“越多越好”

你只需要记录三类东西：

1. **输入证据**：使用了哪一个文件、哪一段或哪一列。
2. **决策证据**：为什么采用这个结构，哪些地方是推断。
3. **交付证据**：产物保存在哪里，是否可编辑，谁需要复核。

## 常见误读

- 看到“正在处理”不等于任务一定会完成，长任务仍要检查最终产物。
- 看到漂亮图表不等于数据口径正确，先问字段、时间和缺失值。
- 看到工具调用不等于你已经授权了全部写入动作，逐项检查权限。

<div class="wb-lesson"><h3>练习：暂停点设计</h3><p>给 WorkBuddy 一个“整理公开资料并生成内部简报”的任务，要求它在“确定资料范围”和“生成最终简报”之间各停一次。记录两次暂停时你检查了什么。</p></div>

<div class="wb-callout"><strong>完成标准：</strong>你能在不依赖按钮位置的情况下，回答“输入从哪里来、当前做到哪一步、结果存在哪里、下一步谁确认”。</div>

<div class="source-note">参考：<a href="https://copilot.tencent.com/agents">WorkBuddy 官方 Agents 页面</a>、<a href="https://cloud.tencent.com.cn/product/workbuddy">腾讯云 WorkBuddy 产品说明</a>；界面描述以本机实测为准。</div>
