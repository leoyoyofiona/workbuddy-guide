import fs from 'node:fs'
import path from 'node:path'

const root = path.resolve('docs/cases')

const videos = {
  'tencent-install': ['腾讯云开发者社区 · 保姆级安装教程', 'https://developer.cloud.tencent.com/video/85298'],
  'bilibili-full': ['哔哩哔哩 · 35 分钟全面掌握 WorkBuddy', 'https://www.bilibili.com/video/BV1j1JP6oEHA/'],
  'bilibili-meeting': ['哔哩哔哩 · WorkBuddy 整理会议纪要', 'https://www.bilibili.com/video/BV1NJLT6qEgD/'],
  'bilibili-ppt': ['哔哩哔哩 · WorkBuddy 生成 PPT', 'https://www.bilibili.com/video/BV1UmEd6pES8'],
  'bilibili-ppt-edit': ['哔哩哔哩 · 自动剪辑与制作 PPT', 'https://www.bilibili.com/video/BV1TCo6BvE4t/'],
  'bilibili-excel': ['哔哩哔哩 · Excel 与 WorkBuddy 实测', 'https://www.bilibili.com/video/BV1RwDeB2ERL/'],
  'bilibili-skill-plugin': ['哔哩哔哩 · WorkBuddy 的技能与插件', 'https://www.bilibili.com/video/BV1xpXUBjEoU/'],
  'bilibili-skill-case': ['哔哩哔哩 · 给 WorkBuddy 添加一个 Skill', 'https://www.bilibili.com/video/BV1ngdnBaEDD/'],
  'bilibili-automation': ['哔哩哔哩 · 第一次设置 WorkBuddy 自动化任务', 'https://www.bilibili.com/video/BV1PgdPBtEqr'],
  'bilibili-browser': ['哔哩哔哩 · WorkBuddy 浏览器自动化任务', 'https://www.bilibili.com/video/BV1f2jH6ME1g/'],
  'bilibili-agent': ['哔哩哔哩 · 10 分钟玩转 WorkBuddy AI 智能体', 'https://www.bilibili.com/video/BV1hMEj62EdT/'],
  'bilibili-data-meeting': ['哔哩哔哩 · 数据分析与会议纪要实测', 'https://www.bilibili.com/video/BV1DK7K65Ex2'],
  'bilibili-project': ['哔哩哔哩 · TAPD + WorkBuddy 项目助理', 'https://www.bilibili.com/video/BV1wA97BXE6y/'],
}

const assignment = {
  1: ['tencent-install', 'bilibili-full', 'bilibili-meeting', 'bilibili-full', 'bilibili-skill-plugin', 'bilibili-full', 'bilibili-full', 'bilibili-ppt', 'bilibili-full', 'bilibili-full'],
  2: ['bilibili-full', 'bilibili-data-meeting', 'bilibili-full', 'bilibili-full', 'bilibili-ppt-edit', 'bilibili-ppt', 'bilibili-excel', 'bilibili-full', 'bilibili-meeting', 'bilibili-data-meeting'],
  3: ['bilibili-automation', 'bilibili-skill-plugin', 'bilibili-skill-case', 'bilibili-project', 'bilibili-agent', 'bilibili-data-meeting', 'bilibili-automation', 'bilibili-agent', 'bilibili-full', 'bilibili-browser'],
}

function escapeHtml(value) {
  return value.replace(/[&<>"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[char]))
}

for (const stage of [1, 2, 3]) {
  const file = path.join(root, `stage-${stage}.md`)
  let raw = fs.readFileSync(file, 'utf8')
  if (raw.includes('class="wb-case-video"')) {
    console.log(`skip ${file}: case videos already injected`)
    continue
  }
  const sections = raw.split(/(?=^## 案例 \d{2}｜)/m)
  const transformed = sections.map((section, index) => {
    if (index === 0) return section
    const match = section.match(/^## 案例 (\d{2})｜/)
    if (!match) return section
    const number = Number(match[1])
    const id = assignment[stage][number - 1]
    const [label, url] = videos[id]
    const card = `\n<div class="wb-video-card wb-case-video"><span class="wb-video-badge">真实桌面端跟练视频</span><h3>${escapeHtml(label)}</h3><p>先看这一条，再回到本案例照做；这是原作者托管的第三方录屏，版本和入口以原视频与当前客户端为准。</p><a href="${url}" target="_blank" rel="noopener noreferrer">打开原视频 ↗</a></div>\n`
    return section.replace('<ol class="wb-case-steps">', `${card}\n<ol class="wb-case-steps">`)
  })
  fs.writeFileSync(file, transformed.join(''))
  console.log(`injected 10 video links into ${file}`)
}
