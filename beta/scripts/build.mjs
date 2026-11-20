import { spawnSync } from 'node:child_process'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')

// Vercel sets NEXT_ADAPTER_PATH for the parent Next 16 app. This export is
// Next 15, which calls modifyConfig without the phase argument that adapter
// expects, so the beta build crashes. A static export does not need it.
const env = { ...process.env }
delete env.NEXT_ADAPTER_PATH

const nextBin = path.join(root, 'node_modules', 'next', 'dist', 'bin', 'next')
const result = spawnSync(process.execPath, [nextBin, 'build'], {
  cwd: root,
  env,
  stdio: 'inherit',
})

process.exit(result.status ?? 1)
