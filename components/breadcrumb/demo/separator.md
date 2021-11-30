---
order: 4
title: 分隔符
---

使用 `separator=">"` 可以自定义分隔符。

```jsx
import { Breadcrumb } from '@ke/ked'

ReactDOM.render(
  <Breadcrumb separator=">">
    <Breadcrumb.Item>Home</Breadcrumb.Item>
    <Breadcrumb.Item href="">Application Center</Breadcrumb.Item>
    <Breadcrumb.Item href="">Application List</Breadcrumb.Item>
    <Breadcrumb.Item>An Application</Breadcrumb.Item>
  </Breadcrumb>,
  mountNode,
)
```
