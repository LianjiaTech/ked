---
order: 6
title: 自定义样式
---

使用 style 和 className 来定义样式。

```jsx
import { Button, notification } from '@ke/ked'

const openNotification = () => {
  notification.open({
    message: 'Notification Title',
    description:
      'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
    style: {
      width: 600,
      marginLeft: 335 - 600,
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
