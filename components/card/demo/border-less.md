---
order: 1
title: 无边框
---

在灰色背景上使用无边框的卡片。

```jsx
import { Card } from '@ke/ked'

ReactDOM.render(
  <div style={{ background: '#ECECEC', padding: '30px' }}>
    <Card title="Card title" bordered={false} style={{ width: 300 }}>
      <p>Card content</p>
      <p>Card content</p>
      <p>Card content</p>
    </Card>
  </div>,
  mountNode,
)
```
