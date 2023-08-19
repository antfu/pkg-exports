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
          "capitalize",
          "clamp",
        ]
      `)
  })

  it('vue', async () => {
    const exports = await getExportsStatic('vue')
    expect(exports.slice(0, 5))
      .toMatchInlineSnapshot(`
        [
          "BaseTransition",
          "BaseTransitionPropsValidators",
          "Comment",
          "EffectScope",
          "Fragment",
        ]
      `)

    expect(exports).toContain('ref')
    expect(exports).toContain('effectScope')
    expect(exports).toContain('watch')
    expect(exports).toContain('defineComponent')
  })

  it('naive-ui', async () => {
    const exports = await getExportsStatic('naive-ui')
    expect(exports.slice(0, 5))
      .toMatchInlineSnapshot(`
        [
          "NA",
          "NAffix",
          "NAlert",
          "NAnchor",
          "NAnchorLink",
        ]
      `)

    expect(exports).toContain('useMessage')
    expect(exports).toContain('createDiscreteApi')
  })
})
