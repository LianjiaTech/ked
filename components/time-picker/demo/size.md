---
order: 1
title: 三种大小
---

三种大小的输入框，大的用在表单中，中的为默认。

```jsx
import { TimePicker } from '@ke/ked'
import moment from 'moment'

ReactDOM.render(
  <div>
    <TimePicker defaultValue={moment('12:08:23', 'HH:mm:ss')} size="large" />
    <TimePicker defaultValue={moment('12:08:23', 'HH:mm:ss')} />
    <TimePicker defaultValue={moment('12:08:23', 'HH:mm:ss')} size="small" />
  </div>,
  mountNode,
)
```
