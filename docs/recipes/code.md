---
title: CodeBuddy 内容的边界用法
description: 通过“产品团队交接”案例区分 WorkBuddy 办公任务与 CodeBuddy IDE/插件开发教程。
sourceStatus: template
permalink: /recipes/code/
verifiedAt: 2026-08-10
officialLinks:
  - https://copilot.tencent.com/docs/ide/Best-practice/best-practice
  - https://copilot.tencent.com/work/
---

<div class="evidence-card"><strong>明确边界</strong><span>本页讨论 CodeBuddy 的官方开发资料，不把它当作 WorkBuddy 功能教程。</span></div>

# CodeBuddy 内容的边界用法

WorkBuddy 面向全场景办公任务；CodeBuddy IDE/插件资料面向代码开发。两者可以在团队协作方法上互相启发，但产品入口、按钮、权限和承诺必须分开写。

## 案例：产品团队交接一个网页需求

| 阶段 | 应使用的产品语境 | 产物 |
| --- | --- | --- |
| 需求整理 | WorkBuddy：会议记录、竞品、PRD 结构 | 决策摘要、需求文档 |
| 开发实现 | CodeBuddy：IDE、代码、插件和开发测试 | 代码变更、测试记录 |
| 评审交接 | 两者之间用文档和任务单交接 | 可追溯的需求/验收清单 |

## 写作检查

- 标题出现 CodeBuddy 时，正文第一段必须再次说明产品边界。
- 不把 CodeBuddy 的 `/` 命令、IDE 面板或插件入口写成 WorkBuddy 原生按钮。
- WorkBuddy 页面只引用 WorkBuddy 官方资料；代码开发另链 CodeBuddy 官方文档。
- 不根据一个产品的版本号推断另一个产品的功能或价格。

<div class="wb-callout"><strong>完成标准：</strong>读者看完能说出“这一步在哪个产品完成、输入是什么、交接产物是什么”，不会因为品牌相近而误操作。</div>

<div class="source-note">来源：<a href="https://copilot.tencent.com/docs/ide/Best-practice/best-practice">CodeBuddy 官方最佳实践</a>；WorkBuddy 事实请回到<a href="https://copilot.tencent.com/work/">官方产品页</a>。</div>
