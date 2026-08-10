---
title: MCP 生态与连接边界
description: 用一个“只读查询到人工批准写入”的案例理解 MCP/连接器、数据流和最小权限。
sourceStatus: official
permalink: /advanced/mcp/
verifiedAt: 2026-08-10
officialLinks:
  - https://cloud.tencent.com.cn/product/workbuddy
  - https://cloud.tencent.com/document/product/1831/134393
---

<div class="evidence-card"><strong>官方资料</strong><span>官方资料将连接器描述为 WorkBuddy 与外部服务之间的桥梁，并提醒授权和数据边界；具体连接器清单以当前客户端为准。</span></div>

# MCP 生态与连接边界

MCP 可以理解为让 AI 工作流连接外部工具和数据的协议生态。学习重点不是背缩写，而是能回答：连接了谁、读取什么、能否写入、谁批准、如何撤销。

<figure class="wb-figure"><img src="/images/workbuddy/permission-flow.svg" alt="MCP 与连接器授权数据流示意图，展示用户、WorkBuddy 和外部工具之间的最小权限与确认边界"><figcaption><strong>授权阅读法：</strong>实线代表请求/调用，虚线代表结果或权限状态回传；任何写入、发送或付费动作都要回到用户确认。</figcaption></figure>

## 案例：先查只读，再批准发送

任务：从已经授权的知识库查找“上周产品投诉”，生成内部摘要；不允许直接回复客户。

```text
第一阶段只读：请列出将访问的数据源、查询条件、时间范围和预计字段，不要写入或发送任何内容。
输出 5 条以内的结果摘要，每条保留来源标识。
第二阶段等待我确认。只有我回复“批准发送”后，才讨论外部消息草稿；不要直接发送。
```

## 授权前检查表

| 问题 | 读什么证据 | 发现不清楚怎么办 |
| --- | --- | --- |
| 谁能访问 | 账号、组织、连接器权限 | 停止并找管理员 |
| 读写范围 | 只读/创建/修改/发送 | 先降为只读 |
| 数据流向 | 本地、云端、第三方 | 不使用无法解释的连接 |
| 可否撤销 | 授权管理、日志、回滚 | 先用测试数据 |
| 费用 | Credits、调用次数、订阅 | 先核对当前提示 |

## 常见误区

- “连接成功”只表示授权完成，不代表每个工具都按你想的方式工作。
- “只读查询”也可能返回敏感内容，结果仍需脱敏和最小化保存。
- MCP、Skill、专家是不同层次的能力扩展，不要把第三方连接器写成 WorkBuddy 原生功能。

<div class="wb-callout"><strong>安全底线：</strong>任何会发消息、改数据或产生费用的连接，先用最小权限和可回滚样例验证。</div>

<div class="source-note">来源：<a href="https://cloud.tencent.com.cn/product/workbuddy">腾讯云 WorkBuddy 产品说明</a>、<a href="https://cloud.tencent.com/document/product/1831/134393">腾讯云 WorkBuddy 文档</a>。本页不提供未经验证的第三方连接器推荐。</div>
