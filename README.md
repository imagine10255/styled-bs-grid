<p align="center"><img src="./banner.jpg" width="400"/></p>

## About styled-bs-grid

styled-bs-grid is a bootstrap grid use styled-component:

- [Find and fix problems in your JavaScript code ESLint](https://eslint.org).
- [Quickly build your entire app with our Grid Bootstrap & Styled-component](https://github.com/imagine10255/styled-bs-grid/tree/master).




## Quick Start

Install styled-bs-grid in your project
```zsh
$ yarn add styled-bs-grid
```

add the your global css:

```css
html {
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  -ms-overflow-style: scrollbar;
}

*,
*::before,
*::after {
  -webkit-box-sizing: inherit;
          box-sizing: inherit;
}
```

in your index.js add  
`see the example/src/index.js`

```js
import {GridThemeProvider} from 'styled-bs-grid';

<GridThemeProvider gridTheme={{
          gridGutterWidth: 10,
          gridColumns: 24,
          gridBreakpoints: {
              xs: 0,
              sm: 576,
              md: 768,
              lg: 992,
              xl: 1200,
              xxl: 1540,
          },
          containerMaxWidths: {
              xs: 540,
              sm: 540,
              md: 720,
              lg: 960,
              xl: 1140,
              xxl: 1141,
          },
      }}>
    <App/>
</GridThemeProvider>
```

use in your page/component:
```js
import {Container, Row, Col, media} from 'styled-bs-grid';

const MyPage = () => {
    return (
        <Container>
            <MyTitle>styled-bs-grid</MyTitle>
            <Row>
                <Col col>col2 (50%) </Col>
                <Col col>col2 (50%) </Col>
            </Row>
        </Container>
    );
}

const MyTitle = styled.div`
    font-size: 12px;
    ${media.md`
        font-size: 14px;
    `}
`

export default MyPage;
```


## parameters

Using this `media` object will help you to build media-queries that will fit the same way as Bootstrap do.

| name | *aliases* | css generated |
| - | - | - |
| xs | all sizes: @media (max-width: 575px)` |
| sm | @media (min-width: 576px)` |
| md | @media (min-width: 768px)` |
| lg | @media (min-width: 992px)` |
| xl | @media (min-width: 1200px)` |
| xxl | @media (min-width: 1440px)` |



#### Container

| props | default | type | description |
| - | - | - | - |
| fluid | false | boolean | Equivalent to `container` and `container-fluid` |


#### Row

| props | default | type | description |
| - | - | - | - |
| noGutter | `undefined` | `boolean` | Equivalent to `no-gutter` |


#### Col

| props | default | type | description |
| - | - | - | - |
| col | `undefined` | `number` *or* `string` *or* `boolean` | Goes from 1 to 24. Equivalent to `col-*` (or `col` in case of `true`) |
| sm | `undefined` | `number` *or* `string` | Goes from 1 to 24. Equivalent to `col-sm-*` (or `col-sm` in case of `true`) |
| md | `undefined` | `number` *or* `string` | Goes from 1 to 24. Equivalent to `col-md-*` (or `col-md` in case of `true`) |
| lg | `undefined` | `number` *or* `string` | Goes from 1 to 24. Equivalent to `col-lg-*` (or `col-lg` in case of `true`) |
| xl | `undefined` | `number` *or* `string` | Goes from 1 to 24. Equivalent to `col-xl-*` (or `col-xl` in case of `true`) |
| xxl | `undefined` | `number` *or* `string` | Goes from 1 to 24. Equivalent to `col-xxl-*` (or `col-xxl` in case of `true`) |




#### Develop

open the terminal-styled-bs-grid
```zsh
$ yarn install
$ yarn dev
```

open the terminal-example
``````
$ cd ./example
$ yarn install
$ yarn dev

> 🚀 Ready on http://localhost:3000
```
