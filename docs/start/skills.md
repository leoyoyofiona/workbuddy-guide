---
title: Skills 与能力扩展
description: 理解 Skill 的职责、触发条件、输入输出和测试方法，把一次成功任务沉淀为可复用能力。
sourceStatus: official
permalink: /start/skills/
verifiedAt: 2026-08-10
officialLinks:
  - https://copilot.tencent.com/work/
  - https://cloud.tencent.com.cn/product/workbuddy
---

<div class="evidence-card"><strong>官方资料</strong><span>官方资料公开提到 Skills/SkillHub 与能力扩展；具体创建入口、审核机制和权限以客户端当前版本为准。</span></div>

# Skills 与能力扩展

Skill 不是一句“请专业一点”，而是一份可以反复执行和测试的任务说明。它把“什么时候用、需要什么、怎么做、交付什么、什么情况必须停下”写清楚。

## 先判断是否值得做 Skill

适合沉淀的任务通常满足：

- 每周重复两次以上；
- 输入字段相对稳定；
- 输出结构可以写成模板；
- 失败可以被一张检查表发现；
- 不需要每次都做高风险的最终决策。

一次性的头脑风暴、含糊的战略判断和需要大量临场授权的任务，不要急着做 Skill。

## Skill 最小结构

```markdown
# 名称：周报质量检查
## 触发场景
用户提供周报草稿并要求找出遗漏。
## 必需输入
周报正文、统计周期、受众和指标口径。
## 执行步骤
读取范围 → 检查数字 → 对照结构 → 列出缺口 → 生成修改建议。
## 输出格式
问题表（位置/问题/依据/建议）+ 通过项 + 待确认问题。
## 不确定与失败处理
缺少口径时停止，不猜测指标含义。
## 禁止事项
不得新增数字、替用户发布、覆盖原文件。
```

## 三轮测试法

| 测试 | 输入 | 期待行为 |
| --- | --- | --- |
| 正常 | 完整周报和指标口径 | 按固定格式输出问题表 |
| 边界 | 有一列为空或日期跨月 | 标记影响，不自行补值 |
| 缺失 | 没有统计周期 | 先提问，不生成“看起来完整”的报告 |

## 练习：从第一个任务提炼 Skill

把[第一个任务](/start/first-task)的指令拆成五段：目标、输入、规则、交付、验收。删除会议主题，把表格列名改成变量，再用第二段材料测试。只有第二次仍然稳定，才值得继续发布或分享。

<div class="wb-callout"><strong>安全底线：</strong>安装或分享 Skill 前，先阅读它可能调用的文件、网络和写入动作；看到无法解释的脚本或权限请求，暂停并让管理员确认。</div>

<div class="source-note">来源：<a href="https://copilot.tencent.com/work/">WorkBuddy 官方产品页</a>、<a href="https://cloud.tencent.com.cn/product/workbuddy">腾讯云 WorkBuddy 产品说明</a>；结构和测试法属于通用方法。</div>
