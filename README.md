# 贝壳 B 端基础组件库

> `ked` 是基于 Ke Design 设计体系的 React UI 组件库，主要用于研发企业级中后台产品。<br/>


## ked和antd
>  `ked`在antd的基础上做了二次开发，组件的api和antd3+版本保持一致，交互样式遵循的是ke Design的设计规范。<br/>
>   目前主要服务于贝壳内部，贝壳同学可以通过内网访问[ked官网](https://gem.ke.com/site/ked/v/index/)查看组件用法。<br/>

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

### 使用 [babel-plugin-import](https://github.com/ant-design/babel-plugin-import)。

```javascript
import { Button } from '@ke/ked'
```

配置 .babelrc 或者 babel-loader

```js
{
  "plugins": [
    ["import", { "libraryName": "@ke/ked", "style": true }]
  ]
}
```

然后只需从 ked 引入模块即可，无需单独引入样式。等同于下面手动引入的方式。

```jsx
import { DatePicker } from '@ke/ked';
```

### 手动引入

  ```jsx
  import DatePicker from '@ke/ked/es/date-picker'; // 加载 JS
  import '@ke/ked/es/date-picker/style';// 加载 LESS
  ```

## 使用全量的 css 和 js 文件

1. js 文件 `@ke/ked/dist/ked.min.js`
2. css 文件 `@ke/ked/dist/ked.min.css`


## 自定义主题

自定义主题需要用到 less 变量覆盖功能，可以利用了 [less-loader](https://github.com/webpack/less-loader#less-options) 的 `modifyVars` 来进行主题配置，变量和其他配置方式可以参考 [配置主题](/docs/react/customize-theme) 文档。

## 开发指南

### 本地启动服务

需要先编译一下构建脚本(只需执行一次)
```js
npm run compile:build
```

启动本地服务
需要先编译一下构建脚本
```js
npm run start
```

### 本地构建打包

需要先编译一下构建脚本(只需执行一次)
```js
npm run compile:build
```

本地构建
```js
// 本地构建产物
npm run build:lib

// 本地构建站点
npm run build:site
```


### License

[MIT License](./LICENSE)
