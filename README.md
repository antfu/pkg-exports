# pkg-exports

[![NPM version](https://img.shields.io/npm/v/pkg-exports?color=a1b858&label=)](https://www.npmjs.com/package/pkg-exports)

Get exports of an local npm package.

## Install

```bash
npm i pkg-exports
```

## Usage

### `getExportsRuntime`

Get the exports by evaluate the module in worker thread.

```ts
import { getExportsRuntime } from 'pkg-exports'

const exports = getExportsRuntime('vue')
console.log(exports) // ['ref', 'computed', ...]
```


### `getExportsStatic`

Get the exports by static analysis (only work with ESM). **Experimental**.

```ts
import { getExportsStatic } from 'pkg-exports'

const exports = getExportsStatic('vue')
console.log(exports) // ['ref', 'computed', ...]
```

## Sponsors

<p align="center">
  <a href="https://cdn.jsdelivr.net/gh/antfu/static/sponsors.svg">
    <img src='https://cdn.jsdelivr.net/gh/antfu/static/sponsors.svg'/>
  </a>
</p>

## License

[MIT](./LICENSE) License © 2022 [Anthony Fu](https://github.com/antfu)
