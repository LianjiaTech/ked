---
order: 3
title: 自定义分隔符
---

最简单的用法。

```jsx
import { Breadcrumb } from '@ke/ked'

ReactDOM.render(
  <div>
    <Breadcrumb separator="">
      <Breadcrumb.Item>Location</Breadcrumb.Item>
      <Breadcrumb.Separator>:</Breadcrumb.Separator>
      <Breadcrumb.Item href="">Application Center</Breadcrumb.Item>
      <Breadcrumb.Separator>-</Breadcrumb.Separator>
      <Breadcrumb.Item href="">Application List</Breadcrumb.Item>
      <Breadcrumb.Separator>-</Breadcrumb.Separator>
      <Breadcrumb.Item>An Application</Breadcrumb.Item>
    </Breadcrumb>
    <Breadcrumb separator="">
      <Breadcrumb.Item>Location</Breadcrumb.Item>
      <Breadcrumb.Separator>:</Breadcrumb.Separator>
      <Breadcrumb.Item href="">Application Center</Breadcrumb.Item>
      <Breadcrumb.Separator>-</Breadcrumb.Separator>
      <Breadcrumb.Item href="">Application List</Breadcrumb.Item>
      <Breadcrumb.Separator>-</Breadcrumb.Separator>
      <Breadcrumb.Item>An Application</Breadcrumb.Item>
    </Breadcrumb>
  </div>,
  mountNode,
)
```
