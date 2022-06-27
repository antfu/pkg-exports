import { resolve as resolvePackagePath } from 'mlly'

export interface GetExportsOptions {
  url?: string
}

export async function getExports(name: string, options?: GetExportsOptions) {
  const path = await resolvePackagePath(name, { url: options?.url })
  const pkg = await import(path)
  const keys = Object.keys(pkg)
  if (keys.length === 1 && keys[0] === 'default')
    return Object.keys(pkg.default)
  return keys
}
