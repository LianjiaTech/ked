---
order: 3
title: 多色图标
---

可以通过设置 `theme` 属性为 `twoTone` 来渲染双色图标，并且可以设置主题色。

```jsx
import { Icon } from '@ke/ked'

ReactDOM.render(
  <div className="icons-list">
    <Icon type="smile" theme="twoTone" />
    <Icon type="heart" theme="twoTone" twoToneColor="#eb2f96" />
    <Icon type="check-circle" theme="twoTone" twoToneColor="#52c41a" />
  </div>,
  mountNode,
)
```
