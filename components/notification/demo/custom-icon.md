---
order: 4
title: 自定义图标
---

图标可以被自定义。

```jsx
import { Button, notification, Icon } from '@ke/ked'

const openNotification = () => {
  notification.open({
    message: 'Notification Title',
    description:
      'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
    icon: <Icon type="smile" style={{ color: '#108ee9' }} />,
  })
}

ReactDOM.render(
  <Button type="primary" onClick={openNotification}>
    Open the notification box
  </Button>,
  mountNode,
)
```
