import fs from 'node:fs'
import path from 'node:path'

const dist = path.resolve('docs/.vuepress/dist')
const routes = [
  '/', '/guide/', '/cases/', '/cases/stage-1/', '/cases/stage-2/', '/cases/stage-3/',
  ...['install','first-task','chat','files','experts','skills','outputs','faq'].map(x => `/start/${x}/`),
  ...['prompting','planning','experts','mcp','skills','workflows','files-data','security','troubleshooting'].map(x => `/advanced/${x}/`),
  ...['research','ppt','data-analysis','content','meeting','code','feedback'].map(x => `/recipes/${x}/`),
  ...['limits','updates'].map(x => `/manual/${x}/`),
  ...['contribute','feedback'].map(x => `/community/${x}/`)
]

const missing = routes.filter(route => {
  const file = route === '/' ? path.join(dist, 'index.html') : path.join(dist, route, 'index.html')
  return !fs.existsSync(file)
})
for (const required of ['robots.txt', 'sitemap.xml']) if (!fs.existsSync(path.join(dist, required))) missing.push(`/${required}`)
if (missing.length) { console.error(`dist check failed:\n${missing.join('\n')}`); process.exit(1) }
console.log(`dist check passed: ${routes.length} clean routes + SEO files`)
