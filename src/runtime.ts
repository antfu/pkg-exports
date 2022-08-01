import type Pool from 'tinypool'
import type { GetExportsOptions } from './types'

let _worker: Pool | undefined

export async function getExportsRuntime(name: string, options?: GetExportsOptions) {
  if (!_worker) {
    const { Tinypool } = await import('tinypool')
    _worker = new Tinypool({
      filename: new URL('./worker.js', import.meta.url).href,
    })
  }
  return await _worker.run({ name, options })
}
