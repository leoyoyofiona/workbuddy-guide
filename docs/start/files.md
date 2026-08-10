---
title: 文件、引用与产物
description: 学会安全提供材料、控制引用范围，并检查 WorkBuddy 生成的文件和结构化结果。
sourceStatus: official
permalink: /start/files/
verifiedAt: 2026-08-10
officialLinks:
  - https://copilot.tencent.com/work/
  - https://cloud.tencent.com.cn/product/workbuddy
  - https://www.workbuddy.cn/docs/workbuddy/Quickstart
---

<div class="evidence-card"><strong>官方资料</strong><span>官方资料公开描述文档处理、数据分析和本地文件操作；具体文件类型、权限和额度以客户端当前提示为准。</span></div>

# 文件、引用与产物

文件任务最容易出现两种错觉：以为“上传成功”就等于模型读懂了，也以为“生成文件”就等于可以直接交付。正确做法是把文件当成有权限、有范围、有版本的输入证据。

<figure class="wb-figure"><img src="/images/workbuddy/permission-flow.svg" alt="WorkBuddy 文件与连接器授权检查示意图，标注用户、WorkBuddy 和数据工具之间的数据流"><figcaption><strong>授权示意图：</strong>从左到右检查“谁提供输入—WorkBuddy 做什么—数据或工具能读写什么”，虚线返回表示结果和权限状态必须回到人工确认。</figcaption></figure>

## 桌面端逐步操作：引用文件并检查产物

<figure class="wb-figure wb-official-figure"><img src="/images/workbuddy/official/quickstart-v5.1.1-annotated.png" alt="WorkBuddy v5.1.1 文件引用与产物检查官方公开桌面截图，带五个编号标注"><figcaption><strong>官方公开截图 + 教学标注：</strong>来源为 <a href="https://www.workbuddy.cn/docs/workbuddy/Quickstart">WorkBuddy Quickstart</a>；截图版本 v5.1.1。图中的 @ 引用入口、技能控制、默认权限和右侧产物区用于定位操作，当前版本可能有所不同。</figcaption></figure>

| 步骤 | 对应编号 | 操作 | 你要留下的证据 |
| --- | --- | --- | --- |
| 1 | ① | 点击“新建任务”，只为本次文件任务建立上下文。 | 任务名称、日期和材料范围。 |
| 2 | ② | 在需要时选择项目/空间；不要把不同客户的资料混在一起。 | 工作空间名称和可访问范围。 |
| 3 | ③ | 在输入框用 `@` 选择具体文件，明确页码、工作表或章节。 | WorkBuddy 回报实际读取到的文件清单。 |
| 4 | ④ | 先使用默认权限，必要时再点开技能或连接器。 | 权限提示、授权对象和停止条件。 |
| 5 | ⑤ | 打开右侧“概览 / 产物”，下载前检查结构、事实和可编辑性。 | 产物文件名、版本和人工复核记录。 |

### 案例：从 Excel 销售表生成一页异常说明

**准备材料：**只保留脱敏后的“日期、渠道、订单数、退款数、销售额”五列，并把文件命名为 `sales-demo-2026-08-10.xlsx`。

```text
请只读取 @sales-demo-2026-08-10.xlsx 的 Sheet1。
先输出文件清单、行列数、日期范围、缺失值和重复值；不要先下业务结论。
我确认数据质量后，再计算退款率，并列出退款率最高的 5 个渠道。
所有计算写出公式和分母；无法确认的字段标记为“待确认”。
最终交付：异常表（渠道｜订单数｜退款数｜退款率｜证据行号）和 200 字说明。
```

**操作检查：**如果 ③没有显示正确文件名，停止任务并重新引用；如果 ④出现写入外部空间的权限，不需要就拒绝；如果 ⑤只有一段结论而没有异常表，要求它先补齐结构化产物。

<div class="wb-screen-note"><strong>安全底线：</strong>“能上传”不等于“应该上传”，“能生成”不等于“可以直接发布”。文件权限、敏感字段、版本和人工抽查缺一不可。</div>

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
