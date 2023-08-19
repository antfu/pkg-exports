import { resolve as resolvePackagePath } from 'mlly'
import { describe, expect, it } from 'vitest'
import { getExportsRuntime } from '../dist'

describe('ESM', () => {
  it('@antfu/utils', async () => {
    expect((await getExportsRuntime('@antfu/utils')).slice(0, 5))
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
    const exports = (await getExportsRuntime('vue'))
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

  it('@vue/shared', async () => {
    expect((await getExportsRuntime('@vue/shared', {
      url: await resolvePackagePath('vue'),
    })).slice(6, 12))
      .toMatchInlineSnapshot(`
        [
          "camelize",
          "capitalize",
          "def",
          "default",
          "escapeHtml",
          "escapeHtmlComment",
        ]
      `)
  })
})

describe('CJS', () => {
  it('axios', async () => {
    expect((await getExportsRuntime('axios')).slice(0, 5))
      .toMatchInlineSnapshot(`
        [
          "Axios",
          "AxiosError",
          "AxiosHeaders",
          "Cancel",
          "CancelToken",
        ]
      `)
  })

  it('react', async () => {
    expect((await getExportsRuntime('react')).slice(0, 5))
      .toMatchInlineSnapshot(`
        [
          "Children",
          "Component",
          "Fragment",
          "Profiler",
          "PureComponent",
        ]
      `)
  })
})
