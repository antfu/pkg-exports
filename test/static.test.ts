import { describe, expect, it } from 'vitest'
import { getExportsStatic } from '../src'

describe('ESM', () => {
  it('@antfu/utils', async () => {
    const exports = await getExportsStatic('@antfu/utils')
    expect(exports.slice(0, 5))
      .toMatchInlineSnapshot(`
        [
          "assert",
          "at",
          "batchInvoke",
          "clamp",
          "clampArrayRange",
        ]
      `)
  })

  it('vue', async () => {
    const exports = await getExportsStatic('vue')
    expect(exports.slice(0, 5))
      .toMatchInlineSnapshot(`
        [
          "BaseTransition",
          "Comment",
          "EffectScope",
          "Fragment",
          "KeepAlive",
        ]
      `)

    expect(exports).toContain('ref')
    expect(exports).toContain('effectScope')
    expect(exports).toContain('watch')
    expect(exports).toContain('defineComponent')
  })
})
