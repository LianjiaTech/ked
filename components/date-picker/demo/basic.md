---
order: 0
title: 基本用法
---

最简单的用法，在浮层中可以选择或者输入日期。

```jsx
import { DatePicker } from '@ke/ked'

const { MonthPicker, RangePicker, WeekPicker } = DatePicker

function onChange(date, dateString) {
  console.log(date, dateString)
}

ReactDOM.render(
  <div>
    <DatePicker onChange={onChange} />
    <br />
    <MonthPicker onChange={onChange} placeholder="Select month" />
    <br />
    <RangePicker onChange={onChange} />
    <br />
    <WeekPicker onChange={onChange} placeholder="Select week" />
  </div>,
  mountNode,
)
```
