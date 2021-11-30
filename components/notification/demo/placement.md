---
order: 5
title: 位置
---

可以设置通知从右上角、右下角、左下角、左上角弹出。

```jsx
import { Button, Select, notification } from '@ke/ked'

const { Option } = Select
const options = ['topLeft', 'topRight', 'bottomLeft', 'bottomRight']
const openNotification = () => {
  notification.open({
    message: 'Notification Title',
    description:
      'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
  })
}

ReactDOM.render(
  <div>
    <Select
      defaultValue="topRight"
      style={{ width: 120, marginRight: 10 }}
      onChange={val => {
        notification.config({
          placement: val,
        })
      }}
    >
      {options.map(val => (
        <Option key={val} value={val}>
          {val}
        </Option>
      ))}
    </Select>
    <Button type="primary" onClick={openNotification}>
      Open the notification box
    </Button>
  </div>,
  mountNode,
)
```
