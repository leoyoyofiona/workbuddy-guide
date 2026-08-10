---
title: 从主题到 PPT 结构
description: 用一次产品评审汇报案例，先做页级叙事，再生成逐页素材和讲稿。
sourceStatus: official
permalink: /recipes/ppt/
verifiedAt: 2026-08-10
officialLinks:
  - https://copilot.tencent.com/work/
  - https://cloud.tencent.com.cn/product/workbuddy
---

<div class="evidence-card"><strong>官方资料</strong><span>官方页面将调研报告和 PPT 列为内容交付场景；具体文件生成、预览和导出能力以当前客户端为准。</span></div>

# 从主题到 PPT 结构

PPT 的难点不是填满页面，而是让每页推动一个决定。把“研究、叙事、视觉、讲稿”分成可检查的阶段。

## 案例：给产品评审会做 8 页汇报

```text
受众：产品负责人和设计负责人；目标：决定是否进入下一轮测试；时长：10 分钟。
输入：访谈摘要、脱敏数据表、竞品证据表。
第一轮：输出 8 页以内的页级大纲，每页包含标题、核心结论、证据和建议视觉。
停下来等待我确认大纲。第二轮：生成逐页讲稿、素材清单和缺失证据。
限制：每页一个结论；没有数据就写待验证；不要创造客户评价或效果数字。
```

## 页级检查表

| 页 | 必须回答 | 验收问题 |
| --- | --- | --- |
| 1 | 为什么现在讨论 | 一句话能说出决策主题吗？ |
| 2 | 用户/业务问题 | 有原始证据吗？ |
| 3—4 | 发现与比较 | 图表口径一致吗？ |
| 5 | 方案选项 | 选项是否可比较？ |
| 6 | 推荐方案 | 推荐依据和风险是什么？ |
| 7 | 试验计划 | 谁做、何时做、如何判断？ |
| 8 | 决策请求 | 会议结束要批准什么？ |

## 产物验收

先打开预览检查溢出、字号、图表单位和引用，再检查讲稿是否与页面结论一致。不要只看导出的 PDF；如果要继续编辑，必须检查源文件或可编辑结构。

<div class="wb-example"><strong>返工提示：</strong>如果每页都有 5 个观点，先让 WorkBuddy 把标题改成“结论句”，并把支持材料移到备注或附录。</div>

<div class="source-note">来源：<a href="https://copilot.tencent.com/work/">WorkBuddy 官方产品页</a>、<a href="https://cloud.tencent.com.cn/product/workbuddy">腾讯云 WorkBuddy 产品说明</a>。</div>
