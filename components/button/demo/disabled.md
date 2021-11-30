---
order: 3
title: 不可用状态
---

添加 `disabled` 属性即可让按钮处于不可用状态，同时按钮样式也会改变。

```jsx
import { Button } from '@ke/ked'

ReactDOM.render(
  <div>
    <Button type="primary">Primary</Button>
    <Button type="primary" disabled>
      Primary(disabled)
    </Button>
    <br />
    <Button>Default</Button>
    <Button disabled>Default(disabled)</Button>
    <br />
    <Button type="link">Link</Button>
    <Button type="link" disabled>
      Link(disabled)
    </Button>
    <br />
    <div style={{ padding: '8px 8px 0 8px', background: 'rgb(190, 200, 200)' }}>
      <Button ghost>Ghost</Button>
      <Button ghost disabled>
        Ghost(disabled)
      </Button>
    </div>
  </div>,
  mountNode,
)
```
