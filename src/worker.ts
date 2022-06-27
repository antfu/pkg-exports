import { resolve as resolvePackagePath } from 'mlly'
import type { GetExportsOptions } from './types'

export default async function getExports({ name, options }: { name: string; options: GetExportsOptions }) {
  const { interop = true } = options || {}
  const path = await resolvePackagePath(name, { url: options?.url })
  const pkg = await import(path)
  const keys = Object.keys(pkg)
  if (interop && keys.length === 1 && keys[0] === 'default')
    return Object.keys(pkg.default)
  return keys
}
