---
order: 7
title: 更新消息内容
---

可以通过唯一的 key 来更新内容。

```jsx
import { Button, notification } from '@ke/ked'

const key = 'updatable'

const openNotification = () => {
  notification.open({
    key,
    message: 'Notification Title',
    description: 'description.',
  })
  setTimeout(() => {
    notification.open({
      key,
      message: 'New Title',
      description: 'New description.',
    })
  }, 1000)
}

ReactDOM.render(
  <Button type="primary" onClick={openNotification}>
    Open the notification box
  </Button>,
  mountNode,
)
```
