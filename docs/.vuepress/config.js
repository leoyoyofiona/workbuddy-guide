import { defineUserConfig } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'
import { hopeTheme } from 'vuepress-theme-hope'

module.exports = defineUserConfig({
  lang: 'zh-CN',
  title: 'WorkBuddy Guide',
  description: 'WorkBuddy 中文学习指南：从第一次使用到可复用的 AI 工作流。非官方维护。',
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
      { text: '快速上手', link: '/start/install' },
      { text: '进阶能力', link: '/advanced/prompting' },
      { text: '实战配方', link: '/recipes/research' },
      { text: '产品手册', link: '/manual/updates' },
      { text: '贡献', link: '/community/contribute' }
    ],
    sidebar: [
        { text: '学习路线', link: '/guide/' },
        { text: '快速上手', prefix: '/start/', children: [
          'install', 'first-task', 'chat', 'files', 'experts', 'skills', 'outputs', 'faq'
        ]},
        { text: '进阶能力', prefix: '/advanced/', children: [
          'prompting', 'planning', 'experts', 'mcp', 'skills', 'workflows', 'files-data', 'security', 'troubleshooting'
        ]},
        { text: '实战配方', prefix: '/recipes/', children: [
          'research', 'ppt', 'data-analysis', 'content', 'meeting', 'code', 'feedback'
        ]},
        { text: '产品手册', prefix: '/manual/', children: ['limits', 'updates'] },
        { text: '社区', prefix: '/community/', children: ['contribute', 'feedback'] }
    ],
    editLink: false,
    lastUpdated: false,
    contributors: false,
    breadcrumb: true,
    navbarLayout: {
      start: ['Brand'],
      center: ['Links'],
      end: ['Repo', 'Outlook', 'Search']
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
