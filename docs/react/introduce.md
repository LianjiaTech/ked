---
title: 基本介绍
order: 0
---

`ked` 是基于 Ke Design 设计体系的 React UI 组件库，主要用于研发企业级中后台产品。

## 使用安装

```sh
npm install --save @ke/ked
```

## 使用示例

```jsx
import { DatePicker } from '@ke/ked';
ReactDOM.render(<DatePicker />, mountNode);
```

引入全量样式：

```jsx
import '@ke/ked/dist/ked.css';
```

## 按需加载

### 使用 [babel-plugin-import](https://github.com/ant-design/babel-plugin-import)

```javascript
import { Button } from '@ke/ked'
```

配置 .babelrc 或者 babel-loader

```js
// .babelrc or babel-loader option
{
  "plugins": [
    ["import", { "libraryName": "@ke/ked", "style": true }]
  ]
}
```

然后只需从 ked 引入模块即可，无需单独引入样式。等同于下面手动引入的方式。

```jsx
// babel-plugin-import 会帮助你加载 JS 和 CSS
import { DatePicker } from '@ke/ked';
```

### 手动引入（比较麻烦不太推荐）

  ```jsx
  import DatePicker from '@ke/ked/es/date-picker'; // 加载 JS
  import 'antd/es/date-picker/style';// 加载 LESS
  ```

## 使用全量的 css 和 js 文件（不推荐）

1. js 文件 `@ke/ked/dist/ked.min.js`
2. css 文件 `@ke/ked/dist/ked.min.css`


## 自定义主题

自定义主题需要用到 less 变量覆盖功能，可以利用了 [less-loader](https://github.com/webpack/less-loader#less-options) 的 `modifyVars` 来进行主题配置，变量和其他配置方式可以参考 [配置主题](/docs/react/customize-theme) 文档。
