---
title: 文件、引用与产物
description: 学会安全提供材料、控制引用范围，并检查 WorkBuddy 生成的文件和结构化结果。
sourceStatus: official
permalink: /start/files/
verifiedAt: 2026-08-10
officialLinks:
  - https://copilot.tencent.com/work/
  - https://cloud.tencent.com.cn/product/workbuddy
---

<div class="evidence-card"><strong>官方资料</strong><span>官方资料公开描述文档处理、数据分析和本地文件操作；具体文件类型、权限和额度以客户端当前提示为准。</span></div>

# 文件、引用与产物

文件任务最容易出现两种错觉：以为“上传成功”就等于模型读懂了，也以为“生成文件”就等于可以直接交付。正确做法是把文件当成有权限、有范围、有版本的输入证据。

<figure class="wb-figure"><img src="/images/workbuddy/permission-flow.svg" alt="WorkBuddy 文件与连接器授权检查示意图，标注用户、WorkBuddy 和数据工具之间的数据流"><figcaption><strong>授权示意图：</strong>从左到右检查“谁提供输入—WorkBuddy 做什么—数据或工具能读写什么”，虚线返回表示结果和权限状态必须回到人工确认。</figcaption></figure>

## 上传前的四层检查

| 层级 | 问题 | 示例做法 |
| --- | --- | --- |
| 权限 | 我是否有权把它交给当前服务？ | 先看组织政策和文件分类 |
| 敏感 | 是否含个人信息、合同或秘密？ | 脱敏、删列、用虚构样例 |
| 范围 | 哪些页、表、时间段真的需要？ | 明确“只读取第 2 个工作表” |
| 版本 | 文件是否是最新版本？ | 文件名写日期和来源 |

## 引用指令模板

```text
请只使用我上传的《2026-07-周报.xlsx》和《会议记录.docx》。
先列出你实际读取到的文件名、工作表/章节、时间范围和缺失项；如果无法读取某部分，停止并说明原因。
不要使用外部资料，也不要补充文件中没有的数字。
```

## 产物要分三次验收

1. **结构验收**：文件格式、标题层级、列名、页数和命名是否符合要求。
2. **事实验收**：抽查关键数字、引用、公式、日期和原文对应关系。
3. **使用验收**：能否编辑、下载、复制，下一位同事能否知道来源和待确认项。

## 一个可复用的产物清单

<ul class="wb-checklist">
  <li>正文/表格/幻灯片可编辑。</li>
  <li>每条关键结论能回溯到文件位置。</li>
  <li>日期、单位、货币和时区明确。</li>
  <li>空值、重复值和异常值单独列出。</li>
  <li>文件名包含主题、版本和日期。</li>
  <li>最终发送前有人类审核记录。</li>
</ul>

<div class="wb-example"><strong>不要只问：</strong>“帮我分析这个文件。”<br><strong>改成：</strong>“先做文件清单和数据质量报告；我确认后，再生成一页摘要和一张异常表。”</div>

<div class="wb-callout"><strong>原则：</strong>AI 负责加速整理，最终发布、合同判断和业务决策仍由人负责。</div>

<div class="source-note">来源：<a href="https://copilot.tencent.com/work/">WorkBuddy 官方产品页</a>、<a href="https://cloud.tencent.com.cn/product/workbuddy">腾讯云 WorkBuddy 产品说明</a>。</div>
