---
order: 7
title: 内部卡片
---

可以放在普通卡片内部，展示多层级结构的信息。

```jsx
import { Card } from '@ke/ked'

ReactDOM.render(
  <Card title="Card title" bordered={false}>
    <p
      style={{
        fontSize: 14,
        color: 'rgba(0, 0, 0, 0.85)',
        marginBottom: 16,
        fontWeight: 500,
      }}
    >
      Group title
    </p>
    <Card type="inner" title="Inner Card title" bordered={false} extra={<a href="#">More</a>}>
      Inner Card content
    </Card>
    <Card
      style={{ marginTop: 16 }}
      bordered={false}
      type="inner"
      title="Inner Card title"
      extra={<a href="#">More</a>}
    >
      Inner Card content
    </Card>
  </Card>,
  mountNode,
)
```
