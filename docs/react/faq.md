---
order: 8
title: FAQ
---

以下整理了一些常见的问题和官方答复，在提问之前建议找找有没有类似的问题。

---

### 你们会提供 Sass/Stylus 等格式的样式文件吗？

暂无计划。事实上你可以使用工具（请自行 Google）将 Less 转换成 Sass/Stylus 等。

### 如何修改默认主题？

参考：[customize-theme](/docs/react/customize-theme)

### 如何修改组件的默认样式？

你可以覆盖它们的样式。ked 是一系列 React 组件，但同样是一套设计规范。

### 你们会提供其他主题吗？

我们遵守 Ke Design 设计规范，会提供基于 A+ Saas 的品牌换肤能力。

### 我只想使用 `Menu`/`Button` 等，但似乎我必须 import 整个 ked 和它的样式文件。

试试 [babel-plugin-import](https://github.com/ant-design/babel-plugin-import)，或者用下面这种方式来按需加载：

```jsx
import Menu from '@ke/ked/es/menu';
import '@ke/ked/es/menu/style/css';
```

或者（ES6 支持的 tree shaking 方式）：

```jsx
import { Menu, Breadcrumb, Icon } from '@ke/ked';
```

### 如何配置 webpack 以优化 momentjs 的打包大小？

参考：https://github.com/jmblog/how-to-optimize-momentjs-with-webpack 。

### 当我动态改变 `defaultValue` 的时候它并没有生效。

`Input`/`Select` 等的 `defaultXxxx`（例如 `defaultValue`）只有在第一次渲染的时候有效，这是 React 的规范，请阅读 [React 的文档](https://reactjs.org/docs/forms.html#controlled-components)。

### 当我设置了 `Input`/`Select` 等的 `value` 时它就无法修改了。

尝试使用 `defaultValue` 或 `onChange` 来改变 `value`，请参考 [React 的文档](https://reactjs.org/docs/forms.html#controlled-components)。

### `message` 和 `notification` 是小写的，但是其他的组件都是首字母大写的，这是手滑吗？

不，因为 `message` 是一个函数，而不是一个 React 组件。

### 如何拓展 ked 的组件？

如果你需要一些 ked 没有包含的功能，你可以尝试通过 [HOC](https://gist.github.com/sebmarkbage/ef0bf1f338a7182b6775) 拓展 ked 的组件。 [更多](https://medium.com/@dan_abramov/mixins-are-dead-long-live-higher-order-components-94a0d2f9e750#.eeu8q01s1)

### 我的组件如何切回语言的。

请尝试使用 [ConfigProvider](/components/config-provider/#components-config-provider-demo-locale) 组件来包裹你的应用。

如果日期组件的国际化仍未生效，请配置 `moment.locale('zh-cn')` 并**检查你本地的 `moment` 版本和 `ked` 依赖的 `moment` 版本是否一致**。

### 开启了 Content Security Policy (CSP) 如何处理动态样式？

你可以通过 [ConfigProvider](/components/config-provider/#Content-Security-Policy) 来配置 `nonce` 属性。

---

## 错误和警告

这里是一些你在使用 ked 的过程中可能会遇到的错误和警告，但是其中一些并不是 ked 的 bug。

### Adjacent JSX elements must be wrapped in an enclosing tag

这里有一篇[来自 StackOverflow 的回答](http://stackoverflow.com/questions/25034994/how-to-correctly-wrap-few-td-tags-for-jsxtransformer)，另外请阅读 [React 的文档](http://facebook.github.io/react/docs/displaying-data.html#components-are-just-like-functions)。

### React.createElement: type should not be null, undefined, boolean, or number. It should be a string (for DOM elements) or a ReactClass (for composite components)

请确保你正确引入了 `ked` 的组件。参考 `ked` 相应组件的文档，注意你代码中的 type。

### Failed propType: Invalid prop `AAA` of type `BBB` supplied to `CCC`, expected `DDD`. Check the render method of `EEE`.

请阅读你正在使用版本的 `ked` 的文档，确保你传递给 `ked` 组件的参数类型正确。

### Unknown option: xxx/package.json.presets

这里有一篇[来自 StackOverflow 的回答](http://stackoverflow.com/questions/33685365/unknown-option-babelrc-presets)可以参考。

### Invariant Violation: findComponentRoot(...): Unable to find element.

你或许引入了 React 两次。如果你使用 webpack，请将 React & ReactDOM 设置为 external。如果你使用其他工具（browserify 等），请阅读它们的文档并将 React & ReactDOM 设置为 external。
