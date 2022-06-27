import { resolve as resolvePackagePath } from 'mlly'
import { describe, expect, it } from 'vitest'
import { getExports } from '../dist'

describe('ESM', () => {
  it('@antfu/utils', async () => {
    expect((await getExports('@antfu/utils')).slice(0, 5))
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

  it('@vue/shared', async () => {
    expect((await getExports('@vue/shared', {
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
    expect((await getExports('axios')).slice(0, 5))
      .toMatchInlineSnapshot(`
        [
          "request",
          "getUri",
          "delete",
          "get",
          "head",
        ]
      `)
  })

  it('react', async () => {
    expect((await getExports('react')).slice(0, 5))
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
