import { resolve as resolvePackagePath } from 'mlly'
import { describe, expect, it } from 'vitest'
import { getExportsRuntime } from '../dist'

describe('ESM', () => {
  it('@antfu/utils', async () => {
    expect(await getExportsRuntime('@antfu/utils')).toEqual(
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
    expect(await getExportsRuntime('vue')).toEqual(
      expect.arrayContaining([
        'BaseTransition',
        'BaseTransitionPropsValidators',
        'Comment',
        'EffectScope',
        'Fragment',
        'ref',
        'effectScope',
        'watch',
        'defineComponent',
      ]),
    )
  })

  it('@vue/shared', async () => {
    expect(
      (
        await getExportsRuntime('@vue/shared', {
          url: await resolvePackagePath('vue'),
        })
      ),
    ).toEqual(
      expect.arrayContaining([
        'camelize',
        'capitalize',
        'def',
        'default',
        'escapeHtml',
        'escapeHtmlComment',
      ]),
    )
  })
})

describe('CJS', () => {
  it('axios', async () => {
    expect((await getExportsRuntime('axios')))
      .toEqual(
        expect.arrayContaining([
          'Axios',
          'AxiosError',
          'AxiosHeaders',
          'Cancel',
          'CancelToken',
        ]),
      )
  })

  it('react', async () => {
    expect((await getExportsRuntime('react')))
      .toMatchInlineSnapshot(
        expect.arrayContaining([
          'Children',
          'Component',
          'Fragment',
          'Profiler',
          'PureComponent',
        ]),
      )
  })
})
