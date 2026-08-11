import fs from 'node:fs'
import path from 'node:path'

const output = path.resolve('docs/.vuepress/public/images/workbuddy/cases')
fs.mkdirSync(output, { recursive: true })

const cases = {
  1: [
    ['第一次打开，认出 4 个位置', ['找入口', '看输入框', '看右侧产物', '确认权限']],
    ['第一句话：让它列一个小表', ['写清目标', '粘贴三行资料', '选择 Craft', '检查表格']],
    ['把会议记录变成待办', ['贴上记录', '说要做什么', '补负责人', '逐条确认']],
    ['引用一个文件再提问', ['准备文件', '用 @ 选文件', '说要找什么', '核对引用']],
    ['用 / 找到一个能力', ['点输入框', '输入 /', '看能力说明', '先做小测试']],
    ['Ask：先问清楚再动手', ['选 Ask', '提出问题', '比较两种方案', '自己做决定']],
    ['Plan：先列计划再执行', ['选 Plan', '写最终目标', '检查步骤', '确认后执行']],
    ['Craft：直接做出交付物', ['选 Craft', '给格式要求', '等待产物', '下载检查']],
    ['检查右侧产物', ['打开产物区', '看文件名', '抽查内容', '再分享']],
    ['失败时只改一个地方', ['找到问题', '只改一句要求', '重新运行', '比较前后']],
  ],
  2: [
    ['工作：做一份日报', ['贴上今天记录', '按项目分组', '补明日计划', '复制到群里']],
    ['学习：文章变知识卡', ['放入文章', '提取 5 个概念', '各写一句解释', '做自测题']],
    ['生活：排一个周末行程', ['说人数预算', '列候选地点', '按时间排序', '留下备选']],
    ['娱乐：做一张观影清单', ['说喜欢的类型', '限定时长', '分心情推荐', '标记已看']],
    ['创意：想 10 个选题', ['说明受众', '限定主题', '一次生成 10 个', '挑 3 个改写']],
    ['设计：先出 5 页 PPT', ['说汇报目的', '给受众和时长', '按页写标题', '检查故事线']],
    ['生产力：检查一张表', ['上传脱敏表', '找空值重复', '列出异常行', '导出问题清单']],
    ['通知：把硬话说柔和', ['贴原文', '说对象是谁', '要求三种语气', '选一版发送']],
    ['会议：纪要加跟进消息', ['贴会议内容', '提取决定', '生成跟进消息', '逐人确认']],
    ['反馈：把意见分成几类', ['贴脱敏反馈', '先定分类', '逐条归类', '看数量趋势']],
  ],
  3: [
    ['自动化：每周周报流程', ['固定输入', '固定步骤', '固定输出', '设检查点']],
    ['Skill：做一个反馈分类器', ['写输入格式', '写分类规则', '加示例', '用新样本测试']],
    ['Skill：会议到行动清单', ['定义会议文本', '提取四类字段', '规定表格格式', '复核遗漏']],
    ['MCP：只读查一个数据源', ['确认连接来源', '先读说明', '只读查询', '核对权限']],
    ['API：先画清输入和输出', ['写输入 JSON', '写输出 JSON', '用占位地址', '先做本地测试']],
    ['专家团：研究、分析、编辑分工', ['拆成三角色', '给共同资料', '分别交付', '合并复核']],
    ['批量处理：一次整理多个文件', ['统一命名规则', '先试 2 个', '检查结果', '再批量执行']],
    ['小产品：一个问题一个结果', ['选一个痛点', '定义一个输入', '定义一个输出', '做最小演示']],
    ['测试：找 3 个人试用', ['准备同一任务', '记录卡点', '收集一句反馈', '只改最大问题']],
    ['上线前：隐私、日志、回滚', ['删掉敏感资料', '保留运行记录', '准备撤回方案', '再公开入口']],
  ],
}

function escapeXml(value) {
  return value.replace(/[&<>"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&apos;' }[char]))
}

function makeSvg(stage, number, [title, labels]) {
  const width = 1200
  const height = 430
  const colors = ['#1769ff', '#2f7bff', '#5a91ff', '#7aa8ff']
  const boxes = labels.map((label, index) => {
    const x = 55 + index * 280
    const fill = index === stage - 1 ? '#e8f1ff' : '#ffffff'
    const stroke = index === stage - 1 ? '#1769ff' : '#dbe7f7'
    return `<g><rect x="${x}" y="180" width="230" height="145" rx="18" fill="${fill}" stroke="${stroke}" stroke-width="3"/><circle cx="${x + 34}" cy="214" r="20" fill="${colors[index]}"/><text x="${x + 34}" y="221" text-anchor="middle" font-size="18" font-weight="800" fill="#fff">${index + 1}</text><text x="${x + 24}" y="265" font-size="23" font-weight="700" fill="#18345c">${escapeXml(label)}</text><text x="${x + 24}" y="297" font-size="15" fill="#657896">${index === 0 ? '先做这一小步' : index === 1 ? '不用一次全懂' : index === 2 ? '看到结果再调整' : '做完记得检查'}</text></g>${index < labels.length - 1 ? `<path d="M${x + 242} 252 H${x + 268}" stroke="#8fb5ff" stroke-width="4" stroke-linecap="round"/><path d="M${x + 258} 242 L${x + 270} 252 L${x + 258} 262" fill="none" stroke="#8fb5ff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>` : ''}`
  }).join('')
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" role="img" aria-labelledby="title desc"><title id="title">案例 ${stage}-${String(number).padStart(2, '0')}：${escapeXml(title)}</title><desc id="desc">四步原创教学示意图：${labels.map(escapeXml).join('、')}</desc><rect width="${width}" height="${height}" rx="28" fill="#f7faff"/><text x="55" y="70" font-size="20" font-weight="800" fill="#1769ff">WORKBUDDY GUIDE · 案例 ${String(number).padStart(2, '0')}</text><text x="55" y="120" font-size="34" font-weight="800" fill="#14213d">${escapeXml(title)}</text><text x="55" y="151" font-size="16" fill="#657896">看图走四步：不用背术语，先完成眼前这一件小事。</text>${boxes}</svg>`
}

for (const [stage, items] of Object.entries(cases)) {
  items.forEach((item, index) => {
    const file = path.join(output, `stage-${stage}-${String(index + 1).padStart(2, '0')}.svg`)
    fs.writeFileSync(file, makeSvg(Number(stage), index + 1, item))
  })
}

console.log(`generated ${Object.values(cases).flat().length} unique case visuals in ${output}`)
