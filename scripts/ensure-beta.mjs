import { existsSync } from 'node:fs'
import { spawnSync } from 'node:child_process'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const index = path.join(root, 'public', 'beta', 'index.html')

if (existsSync(index)) {
  process.exit(0)
}

const result = spawnSync('npm', ['run', 'build:beta'], {
  cwd: root,
  stdio: 'inherit',
})

process.exit(result.status ?? 1)
