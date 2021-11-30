---
order: 7
title: 12小时制
---

12 小时制的时间选择器，默认的 format 为 h:mm:ss a。

```jsx
import { TimePicker } from '@ke/ked'

function onChange(time, timeString) {
  console.log(time, timeString)
}

ReactDOM.render(
  <div>
    <TimePicker use12Hours onChange={onChange} />
    <TimePicker use12Hours format="h:mm:ss A" onChange={onChange} />
    <TimePicker use12Hours format="h:mm a" onChange={onChange} />
  </div>,
  mountNode,
)
```
