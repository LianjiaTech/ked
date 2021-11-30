---
order: 2
title: 带有图标的通知提醒框
---

通知提醒框左侧有图标。

```jsx
import { Button, notification } from '@ke/ked'

const openNotificationWithIcon = type => {
  notification[type]({
    message: 'Notification Title',
    description:
      'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
  })
}

ReactDOM.render(
  <div>
    <Button onClick={() => openNotificationWithIcon('success')}>Success</Button>
    <Button onClick={() => openNotificationWithIcon('info')}>Info</Button>
    <Button onClick={() => openNotificationWithIcon('warning')}>Warning</Button>
    <Button onClick={() => openNotificationWithIcon('error')}>Error</Button>
  </div>,
  mountNode,
)
```

<style>
.code-box-demo .ked-btn {
  margin-right: 1em;
}
</style>
