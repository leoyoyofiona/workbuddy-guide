---
title: 文件与数据分析
description: 设计可追溯的数据分析任务，避免把格式化结果误认为业务结论。
sourceStatus: official
permalink: /advanced/files-data/
verifiedAt: 2026-08-10
officialLinks:
  - https://copilot.tencent.com/work/
---

<div class="evidence-card"><strong>官方资料</strong><span>官方页面介绍了将表格、日志和业务数据交给 WorkBuddy 进行分析的场景。</span></div>

# 文件与数据分析

数据任务要先定义口径，再定义图表。推荐让 WorkBuddy 依次输出：字段说明、缺失检查、描述性发现、异常列表、待验证假设。

## 防错要求

- 明确时间范围、单位、去重规则和空值处理。
- 要求每个结论附字段或行号依据。
- 不把相关性写成因果，不把预测写成已发生事实。
- 让它列出无法从数据得出的结论。

<div class="source-note">来源：<a href="https://copilot.tencent.com/work/">WorkBuddy 官方产品页</a>。</div>
