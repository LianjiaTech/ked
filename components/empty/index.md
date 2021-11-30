---
category: Components
type: 数据展示
subtitle: 空状态
title: Empty
cols: 1
---

空状态时的展示占位图。

## 何时使用

当目前没有数据时，用于显式的用户提示。

## API

```jsx
<Empty>
  <Button>创建</Button>
</Empty>
```

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| description | 自定义描述内容 | string \| ReactNode | - |
| title | 自定义标题 | string | - |
| imageStyle | 图片样式 | CSSProperties | - |
| image | 设置显示图片，为 string 时表示自定义图片地址，内置 6 种图片：参考下面内置图片属性，如 `PRESENTED_IMAGE_SIMPLE` | string \| ReactNode | false |

## 内置图片

- Empty.PRESENTED_IMAGE_SIMPLE

  > 简单 SVG 图

  <img src="https://user-images.githubusercontent.com/507615/54591679-b0ceb580-4a65-11e9-925c-ad15b4eae93d.png" height="100px">

- Empty.PRESENTED_IMAGE_DEFAULT

  > 默认 SVG 图

  <img src="https://user-images.githubusercontent.com/507615/54591670-ac0a0180-4a65-11e9-846c-e55ffce0fe7b.png" height="100px">

- Empty.PRESENTED_IMAGE_EMPTY

  > 为空场景

  <img src="https://img.ljcdn.com/beike/ked/1626341755723.png" height="100px">

- Empty.PRESENTED_IMAGE_ERROR

  > 出错场景

  <img src="https://img.ljcdn.com/beike/ked/1626341755746.png" height="100px">

- Empty.PRESENTED_IMAGE_NOPERMISSION

  > 无权限场景

  <img src="https://img.ljcdn.com/beike/ked/1626341755756.png" height="100px">

- Empty.PRESENTED_IMAGE_NOWIFI

  > 网络问题场景

  <img src="https://img.ljcdn.com/beike/ked/1626341755770.png" height="100px">
