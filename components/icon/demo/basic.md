---
order: 0
title: 基本用法
---

使用 `<Icon />` 标签声明组件，指定图标对应的 `type` 属性。可以通过 `theme` 属性来设置不同的主题风格的图标，也可以通过设置 `spin` 属性来实现动画旋转效果。

```jsx
import { Icon } from '@ke/ked'

ReactDOM.render(
  <div className="icons-list">
    <Icon type="home" />
    <Icon type="setting" theme="filled" />
    <Icon type="smile" theme="outlined" />
    <Icon type="sync" spin />
    <Icon type="loading" />
  </div>,
  mountNode,
)
```

<style>
.icons-list > .anticon {
  margin-right: 6px;
  font-size: 24px;
}
</style>
