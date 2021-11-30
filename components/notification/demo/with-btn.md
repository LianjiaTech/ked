---
order: 3
title: 自定义按钮
---

自定义关闭按钮的样式和文字。

```jsx
import { Button, notification } from '@ke/ked'

const close = () => {
  console.log(
    'Notification was closed. Either the close button was clicked or duration time elapsed.',
  )
}

const openNotification = () => {
  const key = `open${Date.now()}`
  const btn = (
    <Button type="primary" size="small" onClick={() => notification.close(key)}>
      Confirm
    </Button>
  )
  notification.open({
    message: 'Notification Title',
    description:
      'A function will be be called after the notification is closed (automatically after the "duration" time of manually).',
    btn,
    key,
    onClose: close,
  })
}

ReactDOM.render(
  <Button type="primary" onClick={openNotification}>
    Open the notification box
  </Button>,
  mountNode,
)
```
