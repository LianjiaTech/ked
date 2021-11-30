---
order: 1
title: 垂直间距
---

相邻组件垂直间距。

可以设置 `width: 100%` 独占一行。

```jsx
import { Space, Card } from '@ke/ked';

function SpaceVertical() {
  return (
    <Space direction="vertical">
      <Card title="Card" style={{ width: 300 }}>
        <p>Card content</p>
        <p>Card content</p>
      </Card>
      <Card title="Card" style={{ width: 300 }}>
        <p>Card content</p>
        <p>Card content</p>
      </Card>
    </Space>
  );
}

ReactDOM.render(<SpaceVertical />, mountNode);
```
