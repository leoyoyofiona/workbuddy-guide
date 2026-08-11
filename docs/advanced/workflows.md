---
title: 工作流编排
description: 用周报案例把触发、输入、步骤、确认点、异常处理和交付物组织成可复用流程。
sourceStatus: template
permalink: /advanced/workflows/
verifiedAt: 2026-08-11
officialLinks:
  - https://copilot.tencent.com/work/
  - https://cloud.tencent.com.cn/product/workbuddy
---

<div class="evidence-card"><strong>通用方法</strong><span>工作流示例是独立编排，不承诺客户端存在完全同名的自动化入口；实现方式以当前 WorkBuddy 版本和组织配置为准。</span></div>

# 工作流编排

工作流不是把一条超长指令保存下来，而是把重复任务拆成有输入、有状态、有停止条件的步骤。先手动跑通，再考虑 Skill、自动化或连接器。

<figure class="wb-figure"><img src="/images/workbuddy/plan-loop.svg" alt="工作流从目标到复用的六步闭环示意图"><figcaption><strong>编排原则：</strong>每一步都要有产物和失败处理，最后才谈是否自动触发。</figcaption></figure>

<figure class="wb-figure wb-stage-figure"><img src="/images/workbuddy/advanced-ladder.svg" alt="WorkBuddy 从重复工作升级到自动化、Skill、MCP API 和产品化的阶梯图"><figcaption><strong>产品化阶梯：</strong>先把自己的工作跑稳定，再考虑让别人试用；图中的“上线”不代表收入承诺。</figcaption></figure>

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

## 从工作流到小产品：一个不吓人的最小路线

案例：做一个“跨境店铺周报助手”的可试用版本。它不是一开始就开发完整 SaaS，而是先把一个重复问题跑通。

| 小步 | 你做什么 | 先不要做什么 |
| --- | --- | --- |
| 1. 找问题 | 只服务一个人群、一个输入、一个结果，例如“上传周报表 → 输出异常清单”。 | 不要一上来做万能助手。 |
| 2. 手动跑通 | 用 3 份脱敏样例，记录每次输入、耗时、修改和失败点。 | 不要把一次成功当成稳定产品。 |
| 3. 封装 Skill | 把固定步骤、字段、输出格式和缺失处理写成 Skill。 | 不要把隐藏的个人经验留在脑子里。 |
| 4. 接入数据 | 先只读查询；需要 API/MCP 时写清账号、权限、日志和撤销方法。 | 不要把生产账号直接接入试验。 |
| 5. 小范围试用 | 让 1—3 位真实用户试用，收集“哪里不懂、哪里不信、哪里想改”。 | 不要先承诺效果、价格或收入。 |
| 6. 再决定上线 | 根据需求决定做网页、机器人、内部工具或服务包。 | 不要跳过隐私、成本和支持流程。 |

```text
请把“跨境店铺周报助手”拆成一个可试用版本。
输入：一份脱敏销售表和周报模板。
输出：数据质量表、异常清单、200 字摘要、待确认问题。
先列出最小功能、权限边界、失败处理和试用反馈表，不写收入预测。
```

<div class="wb-screen-note"><strong>赚钱不是功能：</strong>能否收费取决于真实用户问题、交付成本、合规、支持和持续使用。WorkBuddy 只负责工作流的一部分，不替你保证商业结果。</div>

<div class="wb-callout"><strong>完成标准：</strong>别人可以只看你的流程表，就知道何时开始、读什么、哪里停、产出什么以及失败后如何恢复。</div>

<div class="source-note">参考：<a href="https://copilot.tencent.com/work/">WorkBuddy 官方全场景办公描述</a>、<a href="https://cloud.tencent.com.cn/product/workbuddy">腾讯云 WorkBuddy 产品说明</a>；流程设计属于通用方法。</div>
