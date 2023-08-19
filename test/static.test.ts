import { describe, expect, it } from 'vitest'
import { getExportsStatic } from '../src'

describe('ESM', () => {
  it('@antfu/utils', async () => {
    const exports = await getExportsStatic('@antfu/utils')
    expect(exports).toEqual(
      expect.arrayContaining([
        'assert',
        'at',
        'batchInvoke',
        'capitalize',
        'clamp',
      ]),
    )
  })

  it('vue', async () => {
    expect(await getExportsStatic('vue')).toEqual(
      expect.arrayContaining([
        'BaseTransition',
        'BaseTransitionPropsValidators',
        'Comment',
        'EffectScope',
        'Fragment', 'ref',
        'effectScope',
        'watch',
        'defineComponent',
      ]),
    )

    expect(await getExportsStatic('vue/compiler-sfc')).toEqual(
      expect.arrayContaining([
        'babelParse', 'parse', 'compileScript',
      ]),
    )
  })

  it('naive-ui', async () => {
    const exports = await getExportsStatic('naive-ui')
    expect(exports).toEqual(
      expect.arrayContaining([
        'NA',
        'NAffix',
        'NAlert',
        'NAnchor',
        'NAnchorLink',
      ]),
    )

    expect(exports).toContain('useMessage')
    expect(exports).toContain('createDiscreteApi')
  })
})
