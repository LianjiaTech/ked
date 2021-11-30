---
order: 5
title: 自定义主题
---

组件库从技术上支持灵活的样式自定制，以满足业务和品牌上多样化的视觉需求。

## 组件库的样式变量

ked 的样式使用了 [Less](http://lesscss.org/) 作为开发语言，并定义了一系列全局/组件的样式变量，你可以根据需求进行相应调整。

以下是一些最常用的通用变量。

```less
@primary-color: #0984f9; // 全局主色
@link-color: #0984f9; // 链接色
@success-color: #52c41a; // 成功色
@warning-color: #faad14; // 警告色
@error-color: #fa3f3f; // 错误色
@font-size-base: 14px; // 主字号
@heading-color: rgba(0, 0, 0, 0.85); // 标题色
@text-color: #333; // 主文本色
@text-color-secondary: rgba(0, 0, 0, .45); // 次文本色
@border-radius-base: 2px; // 组件/浮层圆角
@border-color-base: #ddd; // 边框色
@box-shadow-base: 0 2px 8px rgba(0, 0, 0, 0.15); // 浮层阴影
```

如果以上变量不能满足你的定制需求，可以给我们提 issue。

## 自定义方式

原理上是使用 less 提供的 [modifyVars](http://lesscss.org/usage/#using-less-in-the-browser-modify-variables) 的方式进行覆盖变量，可以在本地运行 [例子](https://github.com/ant-design/create-react-app-antd) 查看定制效果。下面将针对不同的场景提供一些常用的定制方式。

### 在 webpack 中定制主题

我们以 webpack@4 为例进行说明，以下是一个 `webpack.config.js` 的典型例子，对 [less-loader](https://github.com/webpack-contrib/less-loader) 的 options 属性进行相应配置。

```diff
// webpack.config.js
module.exports = {
  rules: [{
    test: /\.less$/,
    use: [{
      loader: 'style-loader',
    }, {
      loader: 'css-loader', // translates CSS into CommonJS
    }, {
       loader: 'less-loader', // compiles Less to CSS
       options: {
         modifyVars: {
           'primary-color': '#1DA57A',
           'link-color': '#1DA57A',
           'border-radius-base': '2px',
           // or
           'hack': `true; @import "your-less-file-path.less";`, // Override with less file
         },
         javascriptEnabled: true,
       },
    }],
    // ...other rules
  }],
  // ...other config
}
```

注意 less-loader 的处理范围不要过滤掉 `node_modules` 下的 @ke/ked 包。

## 没有生效？

注意样式必须加载 less 格式，一个常见的问题就是引入了多份样式，less 的样式被 css 的样式覆盖了。

- 如果你在使用 [babel-plugin-import](https://github.com/ant-design/babel-plugin-import) 的 `style` 配置来引入样式，需要将配置值从 `'css'` 改为 `true`，这样会引入 less 文件。

