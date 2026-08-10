import fs from 'node:fs'
import path from 'node:path'

const dist = path.resolve('docs/.vuepress/dist')

function walk(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap(entry => {
    const file = path.join(dir, entry.name)
    return entry.isDirectory() ? walk(file) : entry.name.endsWith('.html') ? [file] : []
  })
}

for (const html of walk(dist)) {
  const rel = path.relative(dist, html)
  if (rel === '404.html' || rel.endsWith('/index.html')) continue
  const withoutExt = rel.replace(/\.html$/, '')
  const target = path.join(dist, withoutExt, 'index.html')
  fs.mkdirSync(path.dirname(target), { recursive: true })
  fs.copyFileSync(html, target)
}
console.log('clean route copies generated')
