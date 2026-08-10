---
title: 设计可复用 Skill
description: 将一次成功任务沉淀为输入、步骤、输出和失败处理都清楚的 Skill，并用案例测试。
sourceStatus: official
permalink: /advanced/skills/
verifiedAt: 2026-08-10
officialLinks:
  - https://copilot.tencent.com/work/
  - https://cloud.tencent.com.cn/product/workbuddy
---

<div class="evidence-card"><strong>官方资料</strong><span>官方资料公开支持 Skills/SkillHub 能力扩展；本页的设计检查清单和测试案例属于通用方法。</span></div>

# 设计可复用 Skill

Skill 的最小单位不是“知识”，而是“可重复完成的动作”。如果别人不知道什么时候用、需要哪些文件、失败时怎么办，它就还不是可交付的 Skill。

## 案例：把反馈归类变成 Skill

### 触发条件

用户提供已脱敏的反馈表，并明确需要主题、情绪、严重性和行动建议。

### 执行协议

```markdown
1. 读取字段和样本范围；缺少文本列就停止。
2. 去除空白和重复，但保留原始编号。
3. 按主题归类，给每类保留原句编号。
4. 单独标注证据不足或无法判断的反馈。
5. 输出主题表、严重性排序和人工复核清单。
```

### 输出协议

| 字段 | 要求 |
| --- | --- |
| 主题 | 不超过 8 个，名称可复述 |
| 证据 | 原句编号，不直接复制敏感内容 |
| 严重性 | 说明判断规则 |
| 行动 | 负责人、期限或待确认 |

## 测试矩阵

| 样例 | 变化 | 正确行为 |
| --- | --- | --- |
| 正常 | 字段齐全 | 直接输出固定结构 |
| 边界 | 有重复和空文本 | 统计并列出处理规则 |
| 缺失 | 没有样本编号 | 先提问，不伪造编号 |

## 发布前安全复核

- 是否读取了不必要的目录？
- 是否包含上传、发送、覆盖或外部 API 动作？
- 结果是否会把敏感原句写入共享空间？
- 版本更新后，旧输入还能否得到同一结构？

<div class="wb-lesson"><h3>练习：一次只改一个规则</h3><p>先让 Skill 输出 8 个主题，再把上限改为 5 个。比较合并规则是否把不同问题错误地放到同一类，记录人工修订。</p></div>

<div class="source-note">来源：<a href="https://copilot.tencent.com/work/">WorkBuddy 官方产品页</a>、<a href="https://cloud.tencent.com.cn/product/workbuddy">腾讯云 WorkBuddy 产品说明</a>；测试结构属于通用方法。</div>
