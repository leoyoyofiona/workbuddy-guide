---
title: 隐私、授权与安全边界
description: 用“客户反馈整理”案例，在上传、调用、写入和发布前建立可执行的安全检查。
sourceStatus: template
permalink: /advanced/security/
verifiedAt: 2026-08-10
officialLinks:
  - https://copilot.tencent.com/work/
  - https://cloud.tencent.com/document/product/1831/134393
---

<div class="evidence-card"><strong>通用方法</strong><span>本页是风险检查清单，不是法律意见；组织政策、服务条款和当前客户端提示优先。</span></div>

# 隐私、授权与安全边界

用 AI 处理工作材料时，安全不是最后加一个“请注意隐私”，而是把每一个高风险动作变成可检查的暂停点。

<figure class="wb-figure"><img src="/images/workbuddy/permission-flow.svg" alt="WorkBuddy 隐私与授权检查示意图，标注用户、WorkBuddy、数据与工具之间的确认边界"><figcaption><strong>确认边界：</strong>上传、读取、写入、发送、共享和付费都要分别判断，不要一次性授权一个模糊的“帮我处理”。</figcaption></figure>

## 案例：整理已脱敏客户反馈

| 阶段 | 要做什么 | 必须暂停的情况 |
| --- | --- | --- |
| 上传前 | 删除姓名、电话、订单号，保留匿名编号 | 文件包含无法脱敏的秘密 |
| 读取时 | 只读取反馈文本和日期列 | 工具要求访问整个目录 |
| 分析时 | 主题、情绪、问题严重性 | 结果要推断个人身份 |
| 写入时 | 保存到新文件，不覆盖原始文件 | 默认写入共享空间 |
| 发布时 | 人工检查收件人和附件 | 需要自动发送外部消息 |

## 四问模板

```text
在开始前，请回答：
1. 你将读取哪些文件和字段？
2. 哪些内容会被写入或传给外部服务？
3. 哪一步需要我确认？
4. 失败后能否撤销或恢复？
如果无法回答任一问题，请停止执行。
```

## 发生风险时怎么办

停止任务，保存版本和错误提示；撤销不必要的授权；不要继续上传更多材料“试试看”；向组织管理员或官方支持咨询。反馈中只放最小复现信息，先脱敏。

<div class="wb-callout"><strong>完成标准：</strong>你能画出一条从输入到交付的数据流，并指出每一个需要人类批准的节点。</div>

<div class="source-note">参考：<a href="https://cloud.tencent.com/document/product/1831/134393">腾讯云 WorkBuddy 文档</a>及<a href="https://copilot.tencent.com/work/">WorkBuddy 官方产品页</a>。本页不构成法律、合规或安全审批。</div>
