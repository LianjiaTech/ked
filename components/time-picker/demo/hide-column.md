---
order: 2
title: 选择时分
---

TimePicker 浮层中的列会随着 format 变化，当略去 format 中的某部分时，浮层中对应的列也会消失。

```jsx
import { TimePicker } from '@ke/ked'
import moment from 'moment'

const format = 'HH:mm'

ReactDOM.render(<TimePicker defaultValue={moment('12:08', format)} format={format} />, mountNode)
```
