import fs from 'node:fs'
import path from 'node:path'

const root = path.resolve('docs')
const expected = [
  '/', '/guide',
  ...['install','first-task','chat','files','experts','skills','outputs','faq'].map(x => `/start/${x}`),
  ...['prompting','planning','experts','mcp','skills','workflows','files-data','security','troubleshooting'].map(x => `/advanced/${x}`),
  ...['research','ppt','data-analysis','content','meeting','code','feedback'].map(x => `/recipes/${x}`),
  ...['limits','updates'].map(x => `/manual/${x}`),
  ...['contribute','feedback'].map(x => `/community/${x}`)
]

function files(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap(entry => {
    const p = path.join(dir, entry.name)
    return entry.isDirectory() && entry.name !== '.vuepress' ? files(p) : entry.isFile() && entry.name.endsWith('.md') ? [p] : []
  })
}

const markdown = files(root)
const routes = new Set()
const errors = []
const ledger = fs.readFileSync(path.join(root, '_meta/source-ledger.yml'), 'utf8')
const mediaLedgerPath = path.join(root, '_meta/media-ledger.yml')
if (!fs.existsSync(mediaLedgerPath)) errors.push('missing docs/_meta/media-ledger.yml')
else {
  const mediaLedger = fs.readFileSync(mediaLedgerPath, 'utf8')
  const mediaPaths = [...mediaLedger.matchAll(/^\s*(?:annotatedPath|path):\s*(\/\S+)/gm)].map(match => match[1])
  if (!mediaPaths.length) errors.push('media ledger has no media paths')
  for (const mediaPath of mediaPaths) {
    const filePath = path.join(root, '.vuepress/public', mediaPath.replace(/^\//, ''))
    if (!fs.existsSync(filePath)) errors.push(`media ledger file missing ${mediaPath}`)
  }
}
for (const file of markdown) {
  const raw = fs.readFileSync(file, 'utf8')
  const fm = raw.match(/^---\n([\s\S]*?)\n---/)
  if (!fm) { errors.push(`${file}: missing frontmatter`); continue }
  const block = fm[1]
  for (const key of ['title', 'description', 'sourceStatus', 'verifiedAt', 'officialLinks']) {
    if (!new RegExp(`^${key}:`, 'm').test(block)) errors.push(`${file}: missing ${key}`)
  }
  const status = block.match(/^sourceStatus:\s*(\w+)/m)?.[1]
  if (!['official', 'tested', 'template'].includes(status)) errors.push(`${file}: invalid sourceStatus`)
  if (!/^\s*-\s+https?:\/\//m.test(block)) errors.push(`${file}: officialLinks must include a URL`)
  const rel = path.relative(root, file).replace(/\\/g, '/')
  const route = rel === 'index.md' ? '/' : `/${rel.replace(/\.md$/, '').replace(/\/index$/, '/')}`
  if (route !== '/' && route !== '/404' && !/^permalink:/m.test(block)) errors.push(`${file}: missing clean permalink`)
  if (route !== '/404') routes.add(route)
}
for (const route of expected) if (!routes.has(route)) errors.push(`missing route ${route}`)
if (routes.size !== expected.length) errors.push(`expected ${expected.length} routes, found ${routes.size}`)
for (const route of expected) {
  const variants = route === '/' ? ["'/'"] : [`'${route}'`, `'${route}/'`]
  if (!variants.some(value => ledger.includes(`route: ${value}`))) errors.push(`source ledger missing ${route}`)
}
if (errors.length) { console.error(errors.join('\n')); process.exit(1) }
console.log(`content check passed: ${routes.size} routes, ${markdown.length} markdown files`)
