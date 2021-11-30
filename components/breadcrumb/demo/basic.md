---
order: 0
title: 基本
---

最简单的用法。

```jsx
import { Breadcrumb } from '@ke/ked'

ReactDOM.render(
  <Breadcrumb>
    <Breadcrumb.Item>Home</Breadcrumb.Item>
    <Breadcrumb.Item>
      <a href="">Application Center</a>
    </Breadcrumb.Item>
    <Breadcrumb.Item>
      <a href="">Application List</a>
    </Breadcrumb.Item>
    <Breadcrumb.Item>An Application</Breadcrumb.Item>
  </Breadcrumb>,
  mountNode,
)
```
