---
order: 3
title: 带徽标的头像
---

通常用于消息提示。

```jsx
import { Avatar, Badge } from '@ke/ked'

ReactDOM.render(
  <div>
    <span style={{ marginRight: 24 }}>
      <Badge count={1}>
        <Avatar shape="square" icon="user" />
      </Badge>
    </span>
    <span>
      <Badge dot>
        <Avatar shape="square" icon="user" />
      </Badge>
    </span>
  </div>,
  mountNode,
)
```
