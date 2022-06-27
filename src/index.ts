import Pool from 'tinypool'
import type { GetExportsOptions } from './types'

let _worker: Pool | undefined

export async function getExports(name: string, options?: GetExportsOptions) {
  if (!_worker) {
    _worker = new Pool({
      filename: new URL('./worker.js', import.meta.url).href,
    })
  }
  return await _worker.run({ name, options })
}
