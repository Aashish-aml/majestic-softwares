import { cp, rm } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const outDir = path.join(root, 'beta', 'out')
const destDir = path.join(root, 'public', 'beta')

await rm(destDir, { recursive: true, force: true })
await cp(outDir, destDir, { recursive: true })
console.log('Copied beta export to public/beta')
