---
order: 0
title: 按钮类型
---

按钮有四种类型：主按钮、次按钮、虚线按钮、危险按钮。主按钮在同一个操作区域最多出现一次。

```jsx
import { Button } from '@ke/ked'

ReactDOM.render(
  <div>
    <Button type="primary">Primary</Button>
    <Button>Default</Button>
    <Button type="danger">Danger</Button>
  </div>,
  mountNode,
)
```
