import { describe, expect, it } from 'vitest'
import { getExportsStatic } from '../src'

describe('ESM', () => {
  it('@antfu/utils', async () => {
    expect((await getExportsStatic('@antfu/utils')).slice(0, 5))
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
    const exports = (await getExportsStatic('vue'))
    expect(exports.slice(0, 5))
      .toMatchInlineSnapshot(`
        [
          "compile",
          "Transition",
          "TransitionGroup",
          "VueElement",
          "createApp",
        ]
      `)

    // TODO: await https://github.com/unjs/mlly/pull/55
    // expect(exports).toContain('ref')
  })
})
