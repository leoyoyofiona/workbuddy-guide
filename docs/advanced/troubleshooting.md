---
title: 常见失败与排查
description: 用版本、入口、输入和错误现象建立可复现的排障记录。
sourceStatus: tested
permalink: /advanced/troubleshooting/
verifiedAt: 2026-08-10
testedVersion: 5.3.11
officialLinks:
  - https://copilot.tencent.com/work/
---

<div class="evidence-card"><strong>本机实测 · 5.3.11</strong><span>本页提供排查框架；不同系统和版本可能有不同的错误提示。</span></div>

# 常见失败与排查

先记录，再重试。每次只改变一个变量。

| 现象 | 先检查 |
| --- | --- |
| 没有响应 | 网络、登录状态、客户端版本、是否正在执行长任务 |
| 结果缺材料 | 文件是否成功引用、权限是否足够、指令是否限制了输入范围 |
| 产物打不开 | 格式、下载是否完成、文件名和系统默认应用 |
| 结果不准确 | 来源、时间范围、口径、是否要求标记不确定项 |

提交反馈时附上系统、版本、复现步骤、最小输入和期望结果，不要上传敏感原文。

<div class="source-note">官方入口：<a href="https://copilot.tencent.com/work/">WorkBuddy 产品页</a>。</div>
