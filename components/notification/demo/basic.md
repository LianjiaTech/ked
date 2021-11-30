---
order: 0
title: 基本
---

最简单的用法，4.5 秒后自动关闭。

```jsx
import { Button, notification } from '@ke/ked'

const openNotification = () => {
  notification.open({
    message: 'Notification Title',
    description:
      'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
    onClick: () => {
      console.log('Notification Clicked!')
    },
  })
}

ReactDOM.render(
  <Button type="primary" onClick={openNotification}>
    Open the notification box
  </Button>,
  mountNode,
)
```
