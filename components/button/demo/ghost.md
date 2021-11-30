---
order: 8
title: 幽灵按钮
---

幽灵按钮将按钮的内容反色，背景变为透明，常用在有色背景上。

```jsx
import { Button } from '@ke/ked'

ReactDOM.render(
  <div style={{ background: 'rgb(190, 200, 200)', padding: '26px 16px 16px' }}>
    <Button type="primary" ghost>
      Primary
    </Button>
    <Button ghost>Default</Button>
    <Button type="danger" ghost>
      danger
    </Button>
  </div>,
  mountNode,
)
```
