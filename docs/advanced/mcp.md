---
title: MCP 生态与连接边界
description: 理解 MCP 是能力连接方式，并在授权前检查数据流向。
sourceStatus: official
permalink: /advanced/mcp/
verifiedAt: 2026-08-10
officialLinks:
  - https://copilot.tencent.com/work/
---

<div class="evidence-card"><strong>官方资料</strong><span>WorkBuddy 官方页面公开提到 MCP 生态；具体连接器清单和权限以当前客户端为准。</span></div>

# MCP 生态与连接边界

MCP 可以理解为让 AI 工作流连接外部工具和数据的协议生态。对用户来说，重点不是记住缩写，而是知道“连接了什么、谁能访问、会写入什么”。

## 授权前检查

- 数据从哪里来，是否包含敏感信息？
- 工具是只读还是可以创建、修改、发送？
- 失败后能否撤销？是否有审计记录？
- 是否需要先在测试账号或脱敏数据上运行？

<div class="wb-callout"><strong>安全底线：</strong>任何会发消息、改数据或产生费用的连接，先用最小权限和可回滚样例验证。</div>

<div class="source-note">来源：<a href="https://copilot.tencent.com/work/">WorkBuddy 官方产品页</a>。本页不提供未经验证的第三方连接器推荐。</div>
