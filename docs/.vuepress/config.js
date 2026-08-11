import { defineUserConfig } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'
import { hopeTheme } from 'vuepress-theme-hope'

module.exports = defineUserConfig({
  lang: 'zh-CN',
  title: 'WorkBuddy Guide',
  description: 'WorkBuddy 中文小白学习指南：三段式掌握工具、基本场景和进阶自动化。非官方维护。',
  base: '/',
  cleanUrls: true,
  hostname: 'https://workbuddy-guide.onrender.com',
  head: [
    ['meta', { name: 'theme-color', content: '#1769ff' }],
    ['meta', { name: 'author', content: 'WorkBuddy Guide 社区' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: 'WorkBuddy Guide｜非官方中文学习指南' }],
    ['meta', { property: 'og:description', content: '用清晰、可核验的中文教程掌握 WorkBuddy。' }]
  ],
  bundler: viteBundler({}),
  theme: hopeTheme({
    hostname: 'https://workbuddy-guide.onrender.com',
    logo: '/workbuddy-mark.svg',
    repo: 'leoyoyofiona/workbuddy-guide',
    repoLabel: 'GitHub',
    docsDir: 'docs',
    navbar: [
      { text: '学习路线', link: '/guide/' },
      { text: '案例库', link: '/cases/' },
      { text: '视频跟练', link: '/videos/' },
      { text: '第 1 段｜认识工具', link: '/start/install' },
      { text: '第 2 段｜基本场景', link: '/recipes/meeting' },
      { text: '第 3 段｜进阶放大', link: '/advanced/workflows' },
      { text: '手册', link: '/manual/updates' },
      { text: '贡献', link: '/community/contribute' }
    ],
    sidebar: [
      { text: '学习路线', link: '/guide/' },
      { text: '案例库｜30 个照做案例', collapsible: true, collapsed: true, children: [
        { text: '案例库总览', link: '/cases/' },
        { text: '第 1 段｜10 个入门案例', link: '/cases/stage-1/' },
        { text: '第 2 段｜10 个场景案例', link: '/cases/stage-2/' },
        { text: '第 3 段｜10 个进阶案例', link: '/cases/stage-3/' }
      ]},
      { text: '视频跟练｜真实录屏', link: '/videos/' },
      { text: '第 1 段｜认识工具', collapsible: true, collapsed: false, children: [
        { text: '安装与账号准备', link: '/start/install/' },
        { text: '跑通第一个任务', link: '/start/first-task/' },
        { text: '看懂桌面与工作区', link: '/start/chat/' },
        { text: '文件、引用与产物', link: '/start/files/' },
        { text: '认识 AI 专家团', link: '/start/experts/' },
        { text: 'Skills 与能力扩展', link: '/start/skills/' },
        { text: '产物与交付检查', link: '/start/outputs/' },
        { text: '快速上手 FAQ', link: '/start/faq/' }
      ]},
      { text: '第 2 段｜基本场景', collapsible: true, collapsed: true, children: [
        { text: '会议记录 → 行动清单', link: '/recipes/meeting/' },
        { text: '外部信息调研', link: '/recipes/research/' },
        { text: '业务数据洞察', link: '/recipes/data-analysis/' },
        { text: '内容创作与改写', link: '/recipes/content/' },
        { text: '从主题到 PPT', link: '/recipes/ppt/' },
        { text: '用户反馈与分析', link: '/recipes/feedback/' },
        { text: 'CodeBuddy 内容边界', link: '/recipes/code/' }
      ]},
      { text: '第 3 段｜进阶放大', collapsible: true, collapsed: true, children: [
        { text: '写出可执行的指令', link: '/advanced/prompting/' },
        { text: '任务拆解与计划', link: '/advanced/planning/' },
        { text: '多专家并行协作', link: '/advanced/experts/' },
        { text: '自动化工作流', link: '/advanced/workflows/' },
        { text: '设计可复用 Skill', link: '/advanced/skills/' },
        { text: 'MCP 生态与连接边界', link: '/advanced/mcp/' },
        { text: '文件与数据分析', link: '/advanced/files-data/' },
        { text: '隐私、授权与安全', link: '/advanced/security/' },
        { text: '常见失败与排查', link: '/advanced/troubleshooting/' }
      ]},
      { text: '参考手册与社区', collapsible: true, collapsed: true, children: [
        { text: '额度、套餐与边界', link: '/manual/limits/' },
        { text: '版本与更新记录', link: '/manual/updates/' },
        { text: '贡献内容', link: '/community/contribute/' },
        { text: '反馈与问题报告', link: '/community/feedback/' }
      ]}
    ],
    editLink: false,
    lastUpdated: false,
    contributors: false,
    breadcrumb: true,
    navbarLayout: {
      start: ['Brand'],
      center: ['Links'],
      end: ['LeoPortfolio', 'Repo', 'Outlook', 'Search']
    },
    print: false,
    pageInfo: ['ReadingTime'],
    toc: 'deep',
    footer: 'WorkBuddy Guide · 独立维护 · 与腾讯及 WorkBuddy 官方无隶属或授权关系',
    copyright: false,
    displayFooter: true,
    pure: false,
    plugins: { search: { maxSuggestions: 8 } }
  }),
  markdown: {
    headers: { level: [2, 3, 4] }
  }
})
