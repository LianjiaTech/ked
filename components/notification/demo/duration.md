---
order: 1
title: 自动关闭的延时
---

自定义通知框自动关闭的延时，默认`4.5s`，取消自动关闭只要将该值设为 `0` 即可。

```jsx
import { Button, notification } from '@ke/ked'

const openNotification = () => {
  const args = {
    message: 'Notification Title',
    description:
      'I will never close automatically. I will be close automatically. I will never close automatically.',
    duration: 0,
  }
  notification.open(args)
}

ReactDOM.render(
  <Button type="primary" onClick={openNotification}>
    Open the notification box
  </Button>,
  mountNode,
)
```
