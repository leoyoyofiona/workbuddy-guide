---
title: 第 3 段｜10 个进阶案例
description: 从重复工作到自动化、Skill、MCP、API 和小产品，用 10 个安全的小实验逐步放大 WorkBuddy。
sourceStatus: template
verifiedAt: 2026-08-11
officialLinks:
  - https://www.workbuddy.cn/work/
  - https://www.codebuddy.cn/docs/workbuddy/From-Beginner-to-Expert-Guide/Function-Description/MCP-Guide
  - https://cloud.tencent.com.cn/product/workbuddy
permalink: /cases/stage-3/
---

# 第 3 段：10 个进阶案例

进阶不是把按钮全点一遍，而是把一个稳定的小流程重复起来。先在本地、少量、只读的条件下试跑；能解释每一步，再考虑连接外部数据或给别人使用。

<div class="evidence-card"><strong>安全顺序</strong><span>先做小样本 → 再看权限 → 再留日志 → 最后才批量或上线。没有验证的价格、额度、平台兼容性和收益，不写成确定结论。</span></div>

<p><a class="wb-inline-link" href="/videos/#第-3-段进阶放大">先看第 3 段真实桌面录屏，再做 Skill、自动化和外部连接练习 →</a></p>

## 案例 01｜自动化：每周周报流程

目标：把每周都做的 4 步固定下来，但仍保留人工检查点。

<figure class="wb-figure wb-case-figure"><img src="/images/workbuddy/cases/stage-3-01.svg" alt="把每周周报拆成自动化流程的四步示意图"><figcaption>原创教学图：固定输入、步骤、输出，再加一个人工检查点。</figcaption></figure>




<figure class="wb-video-embed wb-case-video"><h3>跟练视频：哔哩哔哩 · 第一次设置 WorkBuddy 自动化任务</h3><p>点播放器直接观看；先看一次，再回到下面的步骤照做。版本和入口以原视频与当前客户端为准。</p><iframe src="https://player.bilibili.com/player.html?bvid=BV1PgdPBtEqr&amp;page=1&amp;high_quality=1&amp;danmaku=0" title="哔哩哔哩 · 第一次设置 WorkBuddy 自动化任务" loading="lazy" scrolling="no" frameborder="0" allowfullscreen="true"></iframe><figcaption><strong>哔哩哔哩原播放器：</strong>视频由原作者托管。<a href="https://www.bilibili.com/video/BV1PgdPBtEqr" target="_blank" rel="noopener noreferrer">打开原视频 ↗</a></figcaption></figure>

<ol class="wb-case-steps"><li><strong>固定输入：</strong>规定只接收脱敏日报、进度表和阻塞清单。</li><li><strong>固定步骤：</strong>按“合并事实 → 找风险 → 写明日计划”执行。</li><li><strong>固定输出：</strong>统一成一页周报，包含依据和待确认项。</li><li><strong>设检查点：</strong>发布前由负责人检查数字和敏感信息。</li></ol>

<div class="wb-case-check"><strong>做完看这里：</strong>同样的输入大体得到同样的结构，但人仍能在发布前拦住错误。</div>

## 案例 02｜Skill：做一个反馈分类器

目标：把“分类规则”写清楚，做成可以反复使用的小能力。Skill 的具体创建入口以当前客户端为准。

<figure class="wb-figure wb-case-figure"><img src="/images/workbuddy/cases/stage-3-02.svg" alt="设计反馈分类 Skill 的四步示意图"><figcaption>原创教学图：输入、规则、示例、测试四件事缺一不可。</figcaption></figure>




<figure class="wb-video-embed wb-case-video"><h3>跟练视频：哔哩哔哩 · WorkBuddy 的技能与插件</h3><p>点播放器直接观看；先看一次，再回到下面的步骤照做。版本和入口以原视频与当前客户端为准。</p><iframe src="https://player.bilibili.com/player.html?bvid=BV1xpXUBjEoU&amp;page=1&amp;high_quality=1&amp;danmaku=0" title="哔哩哔哩 · WorkBuddy 的技能与插件" loading="lazy" scrolling="no" frameborder="0" allowfullscreen="true"></iframe><figcaption><strong>哔哩哔哩原播放器：</strong>视频由原作者托管。<a href="https://www.bilibili.com/video/BV1xpXUBjEoU/" target="_blank" rel="noopener noreferrer">打开原视频 ↗</a></figcaption></figure>

<ol class="wb-case-steps"><li><strong>写输入格式：</strong>规定每次输入是一条脱敏反馈。</li><li><strong>写分类规则：</strong>给“功能、价格、速度、困难、其他”各写一句判断标准。</li><li><strong>加示例：</strong>放 3 条已人工判断的正例和 1 条边界例。</li><li><strong>用新样本测试：</strong>记录误分，不要直接相信第一次结果。</li></ol>

<div class="wb-case-check"><strong>做完看这里：</strong>别人拿到规则也能复现；遇到边界情况会标“需要人工确认”。</div>

## 案例 03｜Skill：会议到行动清单

目标：把会议文本稳定地变成“决定、待办、负责人、时间”四列。

<figure class="wb-figure wb-case-figure"><img src="/images/workbuddy/cases/stage-3-03.svg" alt="设计会议转行动清单 Skill 的四步示意图"><figcaption>原创教学图：先定义字段，再测试是否漏掉未决定事项。</figcaption></figure>




<figure class="wb-video-embed wb-case-video"><h3>跟练视频：哔哩哔哩 · 给 WorkBuddy 添加一个 Skill</h3><p>点播放器直接观看；先看一次，再回到下面的步骤照做。版本和入口以原视频与当前客户端为准。</p><iframe src="https://player.bilibili.com/player.html?bvid=BV1ngdnBaEDD&amp;page=1&amp;high_quality=1&amp;danmaku=0" title="哔哩哔哩 · 给 WorkBuddy 添加一个 Skill" loading="lazy" scrolling="no" frameborder="0" allowfullscreen="true"></iframe><figcaption><strong>哔哩哔哩原播放器：</strong>视频由原作者托管。<a href="https://www.bilibili.com/video/BV1ngdnBaEDD/" target="_blank" rel="noopener noreferrer">打开原视频 ↗</a></figcaption></figure>

<ol class="wb-case-steps"><li><strong>定义会议文本：</strong>输入只放允许处理的脱敏记录。</li><li><strong>提取四类字段：</strong>明确“没有写明就填待确认”。</li><li><strong>规定表格格式：</strong>每行一个行动，附原文依据。</li><li><strong>复核遗漏：</strong>用一段有争论的会议记录测试它会不会误判为决定。</li></ol>

<div class="wb-case-check"><strong>做完看这里：</strong>结果能区分“讨论过”和“已经决定”，不会凭空生成负责人。</div>

## 案例 04｜MCP：只读查一个数据源

目标：把 MCP 当作“连接外部工具的插口”来理解，第一次只做只读查询。官方 MCP 页面和当前客户端入口可能不同，请先读说明。

<figure class="wb-figure wb-case-figure"><img src="/images/workbuddy/cases/stage-3-04.svg" alt="在 WorkBuddy 中用 MCP 做只读查询的四步示意图"><figcaption>原创教学图：先确认来源和权限，再做一条只读查询。</figcaption></figure>




<figure class="wb-video-embed wb-case-video"><h3>跟练视频：哔哩哔哩 · TAPD + WorkBuddy 项目助理</h3><p>点播放器直接观看；先看一次，再回到下面的步骤照做。版本和入口以原视频与当前客户端为准。</p><iframe src="https://player.bilibili.com/player.html?bvid=BV1wA97BXE6y&amp;page=1&amp;high_quality=1&amp;danmaku=0" title="哔哩哔哩 · TAPD + WorkBuddy 项目助理" loading="lazy" scrolling="no" frameborder="0" allowfullscreen="true"></iframe><figcaption><strong>哔哩哔哩原播放器：</strong>视频由原作者托管。<a href="https://www.bilibili.com/video/BV1wA97BXE6y/" target="_blank" rel="noopener noreferrer">打开原视频 ↗</a></figcaption></figure>

<ol class="wb-case-steps"><li><strong>确认连接来源：</strong>看清这个连接能访问什么数据、由谁维护。</li><li><strong>先读说明：</strong>确认它是只读还是包含写入动作。</li><li><strong>做一条查询：</strong>只问“某个日期的数量”，不要一开始批量导出。</li><li><strong>核对权限：</strong>检查返回内容有没有超出你本来能看到的范围。</li></ol>

<div class="wb-case-check"><strong>做完看这里：</strong>能说清数据从哪里来、谁能看到、查询有没有写入风险。</div>

## 案例 05｜API：先画清输入和输出

目标：先把接口想清楚，再问当前 WorkBuddy 或组织环境有没有可用入口。本案例是通用 API 思路，不代表 WorkBuddy 原生支持下面的占位地址。

<figure class="wb-figure wb-case-figure"><img src="/images/workbuddy/cases/stage-3-05.svg" alt="用占位接口设计输入输出的四步示意图"><figcaption>原创教学图：先用假地址和假数据画清楚，不要把密钥放进提示词。</figcaption></figure>




<figure class="wb-video-embed wb-case-video"><h3>跟练视频：哔哩哔哩 · 10 分钟玩转 WorkBuddy AI 智能体</h3><p>点播放器直接观看；先看一次，再回到下面的步骤照做。版本和入口以原视频与当前客户端为准。</p><iframe src="https://player.bilibili.com/player.html?bvid=BV1hMEj62EdT&amp;page=1&amp;high_quality=1&amp;danmaku=0" title="哔哩哔哩 · 10 分钟玩转 WorkBuddy AI 智能体" loading="lazy" scrolling="no" frameborder="0" allowfullscreen="true"></iframe><figcaption><strong>哔哩哔哩原播放器：</strong>视频由原作者托管。<a href="https://www.bilibili.com/video/BV1hMEj62EdT/" target="_blank" rel="noopener noreferrer">打开原视频 ↗</a></figcaption></figure>

<ol class="wb-case-steps"><li><strong>写输入 JSON：</strong>例如 <code>{"date":"2026-08-11"}</code>。</li><li><strong>写输出 JSON：</strong>规定返回字段、类型和空值写法。</li><li><strong>用占位地址：</strong>先用 <code>https://example.invalid/read-only</code> 画流程。</li><li><strong>本地测试：</strong>确认输入输出后，再向管理员询问真实授权方式。</li></ol>

<div class="wb-case-check"><strong>做完看这里：</strong>没有密钥、Cookie 或真实客户数据出现在文档、提示词和截图里。</div>

## 案例 06｜专家团：研究、分析、编辑分工

目标：把一个大任务拆成 3 个小角色，各自交付，再统一复核。专家和专家团的具体可用范围以官方页面和客户端为准。

<figure class="wb-figure wb-case-figure"><img src="/images/workbuddy/cases/stage-3-06.svg" alt="让多个 WorkBuddy 专家分工协作的四步示意图"><figcaption>原创教学图：角色越清楚，合并时越少互相覆盖。</figcaption></figure>




<figure class="wb-video-embed wb-case-video"><h3>跟练视频：哔哩哔哩 · 数据分析与会议纪要实测</h3><p>点播放器直接观看；先看一次，再回到下面的步骤照做。版本和入口以原视频与当前客户端为准。</p><iframe src="https://player.bilibili.com/player.html?bvid=BV1DK7K65Ex2&amp;page=1&amp;high_quality=1&amp;danmaku=0" title="哔哩哔哩 · 数据分析与会议纪要实测" loading="lazy" scrolling="no" frameborder="0" allowfullscreen="true"></iframe><figcaption><strong>哔哩哔哩原播放器：</strong>视频由原作者托管。<a href="https://www.bilibili.com/video/BV1DK7K65Ex2" target="_blank" rel="noopener noreferrer">打开原视频 ↗</a></figcaption></figure>

<ol class="wb-case-steps"><li><strong>拆成三角色：</strong>研究员找来源，分析员做表格，编辑负责白话表达。</li><li><strong>给共同资料：</strong>三人只看同一份脱敏资料和任务目标。</li><li><strong>分别交付：</strong>每个角色输出自己的结论和不确定项。</li><li><strong>合并复核：</strong>由你检查来源、数字和结论是否一致。</li></ol>

<div class="wb-case-check"><strong>做完看这里：</strong>每个结论都有负责人和依据，不把不同角色的猜测混成事实。</div>

## 案例 07｜批量处理：一次整理多个文件

目标：先用两个文件试跑，再扩大到整批，避免一错全错。

<figure class="wb-figure wb-case-figure"><img src="/images/workbuddy/cases/stage-3-07.svg" alt="批量整理文件并先小样本测试的四步示意图"><figcaption>原创教学图：统一命名，先试两个，检查后再批量。</figcaption></figure>




<figure class="wb-video-embed wb-case-video"><h3>跟练视频：哔哩哔哩 · 第一次设置 WorkBuddy 自动化任务</h3><p>点播放器直接观看；先看一次，再回到下面的步骤照做。版本和入口以原视频与当前客户端为准。</p><iframe src="https://player.bilibili.com/player.html?bvid=BV1PgdPBtEqr&amp;page=1&amp;high_quality=1&amp;danmaku=0" title="哔哩哔哩 · 第一次设置 WorkBuddy 自动化任务" loading="lazy" scrolling="no" frameborder="0" allowfullscreen="true"></iframe><figcaption><strong>哔哩哔哩原播放器：</strong>视频由原作者托管。<a href="https://www.bilibili.com/video/BV1PgdPBtEqr" target="_blank" rel="noopener noreferrer">打开原视频 ↗</a></figcaption></figure>

<ol class="wb-case-steps"><li><strong>统一命名规则：</strong>写清日期、项目和版本的顺序。</li><li><strong>先试 2 个：</strong>选择两个不敏感、差异明显的练习文件。</li><li><strong>检查结果：</strong>确认没有改内容、丢附件或覆盖原文件。</li><li><strong>再批量执行：</strong>保留原文件和可撤回的输出目录。</li></ol>

<div class="wb-case-check"><strong>做完看这里：</strong>你能一键回到原文件，且知道批量操作到底改了什么。</div>

## 案例 08｜小产品：一个问题一个结果

目标：做一个最小演示，而不是一开始就做完整平台。是否能商业化、如何收费都要另行验证，不能把收益写成承诺。

<figure class="wb-figure wb-case-figure"><img src="/images/workbuddy/cases/stage-3-08.svg" alt="从一个痛点做最小 AI 小产品的四步示意图"><figcaption>原创教学图：一个输入、一个输出，先让别人能用起来。</figcaption></figure>




<figure class="wb-video-embed wb-case-video"><h3>跟练视频：哔哩哔哩 · 10 分钟玩转 WorkBuddy AI 智能体</h3><p>点播放器直接观看；先看一次，再回到下面的步骤照做。版本和入口以原视频与当前客户端为准。</p><iframe src="https://player.bilibili.com/player.html?bvid=BV1hMEj62EdT&amp;page=1&amp;high_quality=1&amp;danmaku=0" title="哔哩哔哩 · 10 分钟玩转 WorkBuddy AI 智能体" loading="lazy" scrolling="no" frameborder="0" allowfullscreen="true"></iframe><figcaption><strong>哔哩哔哩原播放器：</strong>视频由原作者托管。<a href="https://www.bilibili.com/video/BV1hMEj62EdT/" target="_blank" rel="noopener noreferrer">打开原视频 ↗</a></figcaption></figure>

<ol class="wb-case-steps"><li><strong>选一个痛点：</strong>例如“每周把客服反馈分成五类”。</li><li><strong>定义一个输入：</strong>一份脱敏 CSV 或一段文本。</li><li><strong>定义一个输出：</strong>分类表＋三条待处理建议。</li><li><strong>做最小演示：</strong>先让 1～3 个熟悉的人试用并记录卡点。</li></ol>

<div class="wb-case-check"><strong>做完看这里：</strong>别人不用听你讲半小时，也知道上传什么、得到什么。</div>

## 案例 09｜测试：找 3 个人试用

目标：不靠“我觉得很好”，而是看真实用户在哪一步卡住。

<figure class="wb-figure wb-case-figure"><img src="/images/workbuddy/cases/stage-3-09.svg" alt="邀请三位用户试用并记录反馈的四步示意图"><figcaption>原创教学图：同一任务、同一说明，才能比较三个人的体验。</figcaption></figure>




<figure class="wb-video-embed wb-case-video"><h3>跟练视频：哔哩哔哩 · 35 分钟全面掌握 WorkBuddy</h3><p>点播放器直接观看；先看一次，再回到下面的步骤照做。版本和入口以原视频与当前客户端为准。</p><iframe src="https://player.bilibili.com/player.html?bvid=BV1j1JP6oEHA&amp;page=1&amp;high_quality=1&amp;danmaku=0" title="哔哩哔哩 · 35 分钟全面掌握 WorkBuddy" loading="lazy" scrolling="no" frameborder="0" allowfullscreen="true"></iframe><figcaption><strong>哔哩哔哩原播放器：</strong>视频由原作者托管。<a href="https://www.bilibili.com/video/BV1j1JP6oEHA/" target="_blank" rel="noopener noreferrer">打开原视频 ↗</a></figcaption></figure>

<ol class="wb-case-steps"><li><strong>准备同一任务：</strong>给每个人同一份脱敏材料和同一句说明。</li><li><strong>记录卡点：</strong>只记“找不到入口、不会输入、看不懂结果”等事实。</li><li><strong>收集一句反馈：</strong>问“哪一步最费劲，为什么”。</li><li><strong>只改最大问题：</strong>改完再找下一批人试，不要同时改十处。</li></ol>

<div class="wb-case-check"><strong>做完看这里：</strong>改动来自用户实际卡点，而不是来自未经验证的效果宣传。</div>

## 案例 10｜上线前：隐私、日志、回滚

目标：在给别人用之前，先把“出问题怎么办”想好。

<figure class="wb-figure wb-case-figure"><img src="/images/workbuddy/cases/stage-3-10.svg" alt="小产品上线前检查隐私日志和回滚的四步示意图"><figcaption>原创教学图：先删敏感资料，再留记录，最后准备撤回方案。</figcaption></figure>




<figure class="wb-video-embed wb-case-video"><h3>跟练视频：哔哩哔哩 · WorkBuddy 浏览器自动化任务</h3><p>点播放器直接观看；先看一次，再回到下面的步骤照做。版本和入口以原视频与当前客户端为准。</p><iframe src="https://player.bilibili.com/player.html?bvid=BV1f2jH6ME1g&amp;page=1&amp;high_quality=1&amp;danmaku=0" title="哔哩哔哩 · WorkBuddy 浏览器自动化任务" loading="lazy" scrolling="no" frameborder="0" allowfullscreen="true"></iframe><figcaption><strong>哔哩哔哩原播放器：</strong>视频由原作者托管。<a href="https://www.bilibili.com/video/BV1f2jH6ME1g/" target="_blank" rel="noopener noreferrer">打开原视频 ↗</a></figcaption></figure>

<ol class="wb-case-steps"><li><strong>删掉敏感资料：</strong>检查提示词、样例、截图和日志里有没有个人信息。</li><li><strong>保留运行记录：</strong>记录版本、输入类型、输出状态和人工修改。</li><li><strong>准备撤回方案：</strong>知道怎样停用连接、删除输出、恢复旧版本。</li><li><strong>再公开入口：</strong>写清用途、限制、反馈方式，不承诺未经验证的价格或收益。</li></ol>

<div class="wb-case-check"><strong>做完看这里：</strong>任何人都能知道数据怎么处理、出了问题联系谁、如何停止使用。</div>

<p class="source-note">MCP 的公开概念参考 WorkBuddy 公开文档；API、Skill、自动化和产品化部分属于通用方法，不能替代组织管理员、法务或当前版本文档的确认。</p>
