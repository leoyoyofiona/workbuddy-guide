---
title: 写出可执行的指令
description: 使用目标、上下文、约束和验收标准组织 WorkBuddy 指令。
sourceStatus: template
permalink: /advanced/prompting/
verifiedAt: 2026-08-10
officialLinks:
  - https://copilot.tencent.com/work/
---

<div class="evidence-card"><strong>通用方法</strong><span>这是可迁移的任务表达模板，不代表官方提示词格式。</span></div>

# 写出可执行的指令

最稳定的指令通常包含五个部分：角色、目标、输入、限制、交付与验收。

```text
你是【角色】。请完成【目标】。
输入材料：【文件/背景/范围】。
限制：只使用给定信息；不确定处标记待确认；不要擅自补充数据。
交付：输出【格式、受众、长度】。
验收：完成后列出已完成项、未完成项和需要我确认的问题。
```

把“帮我做得专业一点”改成可以检查的标准，结果会更容易复用。

<div class="source-note">参考：<a href="https://copilot.tencent.com/work/">WorkBuddy 官方办公场景</a>。</div>
