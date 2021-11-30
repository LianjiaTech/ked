---
category: Components
type: 通用
title: Icon
order: 3
subtitle: 图标
---

语义化的矢量图形。

## 设计师专属

安装 [Kitchen Sketch 插件 💎](https://kitchen.alipay.com)，就可以一键拖拽使用 Ant Design 和 Iconfont 的海量图标，还可以关联自有项目。

## 图标列表

```__react
import IconDisplay from 'site/theme/template/IconDisplay';
ReactDOM.render(<IconDisplay />, mountNode);
```

## API

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| type | 图标类型。遵循图标的命名规范 | string | - |  |
| style | 设置图标的样式，例如 `fontSize` 和 `color` | CSSProperties | - |  |
| theme | 图标主题风格。可选实心、描线、双色等主题风格，适用于官方图标 | 'filled' \| 'outlined' \| 'twoTone' | 'outlined' | 3.9.0 |
| spin | 是否有旋转动画 | boolean | false |  |
| rotate | 图标旋转角度（3.13.0 后新增，IE9 无效） | number | - | 3.13.0 |
| component | 控制如何渲染图标，通常是一个渲染根标签为 `<svg>` 的 `React` 组件，**会使 `type` 属性失效** | ComponentType<CustomIconComponentProps\> | - | 3.9.0 |
| twoToneColor | 仅适用双色图标。设置双色图标的主要颜色 | string (十六进制颜色) | - | 3.9.0 |

> 注意：Icon 组件中图标渲染的优先级为 component > children > type, 传入 props 时，优先级高的直接生效，优先级低的则失效。

### SVG 图标

在 `3.9.0` 之后，我们使用了 SVG 图标替换了原先的 font 图标，从而带来了以下优势：

- 完全离线化使用，不需要从 CDN 下载字体文件，图标不会因为网络问题呈现方块，也无需字体文件本地部署。
- 在低端设备上 SVG 有更好的清晰度。
- 支持多色图标。
- 对于内建图标的更换可以提供更多 API，而不需要进行样式覆盖。


> 如果觉得体积过大，可以采用[webpack 插件](https://github.com/Beven91/webpack-ant-icon-loader)将图标文件拆分。

```jsx
<Icon type="star" theme="filled" />
```

所有的图标都会以 `<svg>` 标签渲染，可以使用 `style` 和 `className` 设置图标的大小和单色图标的颜色。例如：

```jsx
<Icon type="message" style={{ fontSize: '16px', color: '#08c' }} />
```

### 双色图标主色

对于双色图标，可以通过使用 `Icon.getTwoToneColor()` 和 `Icon.setTwoToneColor(colorString)` 来全局设置图标主色。

```jsx
Icon.setTwoToneColor('#eb2f96')
Icon.getTwoToneColor() // #eb2f96
```

```js
const MyIcon = Icon.createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js', // 在 iconfont.cn 上生成
})

ReactDOM.render(<MyIcon type="icon-example" />, mountedNode)
```

其本质上是创建了一个使用 `<use>` 标签来渲染图标的组件。

`options` 的配置项如下：

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| scriptUrl | [iconfont.cn](http://iconfont.cn/) 项目在线生成的 `js` 地址 | string | - |
| extraCommonProps | 给所有的 `svg` 图标 `<Icon />` 组件设置额外的属性 | `{ [key: string]: any }` | {} |

在 `scriptUrl` 都设置有效的情况下，组件在渲染前会自动引入 [iconfont.cn](http://iconfont.cn/) 项目中的图标符号集，无需手动引入。

见 [iconfont.cn 使用帮助](http://iconfont.cn/help/detail?spm=a313x.7781069.1998910419.15&helptype=code) 查看如何生成 `js` 地址。

### 自定义 SVG 图标

如果使用 `webpack`，可以通过配置 [@svgr/webpack](https://www.npmjs.com/package/@svgr/webpack) 来将 `svg` 图标作为 `React` 组件导入。`@svgr/webpack` 的 `options` 选项请参阅 [svgr 文档](https://github.com/smooth-code/svgr#options)。

```js
// webpack.config.js
{
  test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
  use: [
    {
      loader: 'babel-loader',
    },
    {
      loader: '@svgr/webpack',
      options: {
        babel: false,
        icon: true,
      },
    },
  ],
}
```

```jsx
import { Icon } from '@ke/ked'
import MessageSvg from 'path/to/message.svg' // path to your '*.svg' file.

ReactDOM.render(<Icon component={MessageSvg} />, mountNode)
```

`Icon` 中的 `component` 组件的接受的属性如下：

| 字段      | 说明                    | 类型             | 只读值         |
| --------- | ----------------------- | ---------------- | -------------- |
| width     | `svg` 元素宽度          | string \| number | '1em'          |
| height    | `svg` 元素高度          | string \| number | '1em'          |
| fill      | `svg` 元素填充的颜色    | string           | 'currentColor' |
| className | 计算后的 `svg` 类名     | string           | -              |
| style     | 计算后的 `svg` 元素样式 | CSSProperties    | -              |
