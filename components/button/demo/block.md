---
order: 9
title: block 按钮
---

`block`属性将使按钮适合其父宽度。

```jsx
import { Button } from '@ke/ked'

ReactDOM.render(
  <div>
    <Button type="primary" block>
      Primary
    </Button>
    <Button block>Default</Button>
    <Button type="danger" block>
      danger
    </Button>
  </div>,
  mountNode,
)
```
