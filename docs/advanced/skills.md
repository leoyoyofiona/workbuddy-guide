---
title: 设计可复用 Skill
description: 将一次成功任务沉淀为输入、步骤、输出和失败处理都清楚的 Skill。
sourceStatus: official
permalink: /advanced/skills/
verifiedAt: 2026-08-10
officialLinks:
  - https://copilot.tencent.com/work/
---

<div class="evidence-card"><strong>官方资料</strong><span>官方页面公开支持自定义 Skills；本页的设计检查清单为通用方法。</span></div>

# 设计可复用 Skill

把 Skill 写成“可测试的 SOP”，不要写成一句口号。

## 最小结构

```markdown
# 名称
## 适用场景
## 必需输入
## 执行步骤
## 输出格式
## 不确定与失败处理
## 禁止事项
```

用正常、边界、缺失输入三个样例验证。每个样例都记录输入、输出和人工修改点。

<div class="source-note">来源：<a href="https://copilot.tencent.com/work/">WorkBuddy 官方产品页</a>。</div>
