---
order: 6
title: 日期显示格式
---

使用 format 属性，可以自定义日期显示格式。

```jsx
import { DatePicker } from '@ke/ked'
import moment from 'moment'

const { MonthPicker, RangePicker } = DatePicker

const dateFormat = 'YYYY/MM/DD'
const monthFormat = 'YYYY/MM'
ReactDOM.render(
  <div>
    <DatePicker defaultValue={moment('2015/01/01', dateFormat)} format={dateFormat} />
    <br />
    <MonthPicker defaultValue={moment('2015/01', monthFormat)} format={monthFormat} />
    <br />
    <RangePicker
      defaultValue={[moment('2015/01/01', dateFormat), moment('2015/01/01', dateFormat)]}
      format={dateFormat}
    />
  </div>,
  mountNode,
)
```
