---
order: 0
title: 典型卡片
---

包含标题、内容、操作区域。

```jsx
import { Card } from '@ke/ked'

ReactDOM.render(
  <div style={{ padding: '30px' }}>
    <Card title="Default size card" bordered={false} style={{ width: 300 }}>
      <p>Card content</p>
      <p>Card content</p>
      <p>Card content</p>
    </Card>
    <Card title="Default size card" bordered={false} extra={<a href="#">More</a>} style={{ width: 300 }}>
      <p>Card content</p>
      <p>Card content</p>
      <p>Card content</p>
    </Card>
  </div>,
  mountNode,
)
```

<style>
.code-box-demo p {
  margin: 0;
}
#components-card-demo-basic .ked-card { margin-bottom: 30px; }
</style>
