---
title: 设计可复用 Skill
description: 将一次成功任务沉淀为输入、步骤、输出和失败处理都清楚的 Skill，并用案例测试。
sourceStatus: official
permalink: /advanced/skills/
verifiedAt: 2026-08-10
officialLinks:
  - https://copilot.tencent.com/work/
  - https://cloud.tencent.com.cn/product/workbuddy
  - https://www.workbuddy.cn/docs/workbuddy/Quickstart
---

<div class="evidence-card"><strong>官方资料</strong><span>官方资料公开支持 Skills/SkillHub 能力扩展；本页的设计检查清单和测试案例属于通用方法。</span></div>

## 桌面端逐步操作：从“技能”入口开始测试

<figure class="wb-figure wb-official-figure"><img src="/images/workbuddy/official/quickstart-v5.1.1-annotated.png" alt="WorkBuddy v5.1.1 官方公开桌面截图，标注技能入口、任务输入区和默认权限"><figcaption><strong>官方公开截图 + 教学标注：</strong>来源为 <a href="https://www.workbuddy.cn/docs/workbuddy/Quickstart">WorkBuddy Quickstart</a>；截图版本 v5.1.1。图中 ③和④用于定位输入区与技能入口，技能清单和参数仍应以当前客户端显示为准。</figcaption></figure>

| 步骤 | 看图位置 | 动作 | 验证方式 |
| --- | --- | --- | --- |
| 1 | ③ | 先用普通指令写清输入、输出和停止条件。 | 不调用技能也能复述任务。 |
| 2 | ④ | 点击“技能”，只选择与当前任务直接相关的一项。 | 读懂技能说明、所需输入和权限。 |
| 3 | ③ | 用一份 5—10 行的脱敏样例试跑。 | 输出字段、顺序和证据符合预期。 |
| 4 | ⑤ | 在结果区检查是否生成了额外文件或触发外部动作。 | 没有未授权的写入、发送或共享。 |
| 5 | — | 把失败样例加入测试矩阵，再决定是否复用。 | 正常、边界、缺失三类样例都可解释。 |

<div class="wb-screen-note"><strong>版本边界：</strong>公开截图只证明“技能入口和交互位置曾在该版本出现”，不证明当前版本拥有同名技能、相同参数或相同额度。</div>

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
