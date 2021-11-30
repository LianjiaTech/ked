---
order: 0
title: 普通提示
---

信息提醒反馈。

```jsx
import { message, Button } from '@ke/ked'

const info = () => {
  message.info('This is a normal message')
}

ReactDOM.render(
  <Button type="primary" onClick={info}>
    Display normal message
  </Button>,
  mountNode,
)
```
