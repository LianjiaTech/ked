---
order: 9
title: 预设范围
---

可以预设常用的日期范围以提高用户体验。

```jsx
import { DatePicker } from '@ke/ked'
import moment from 'moment'

const { RangePicker } = DatePicker

function onChange(dates, dateStrings) {
  console.log('From: ', dates[0], ', to: ', dates[1])
  console.log('From: ', dateStrings[0], ', to: ', dateStrings[1])
}

ReactDOM.render(
  <div>
    <RangePicker
      ranges={{
        Today: [moment(), moment()],
        'This Month': [moment().startOf('month'), moment().endOf('month')],
      }}
      onChange={onChange}
    />
    <br />
    <RangePicker
      ranges={{
        Today: [moment(), moment()],
        'This Month': [moment().startOf('month'), moment().endOf('month')],
      }}
      showTime
      format="YYYY/MM/DD HH:mm:ss"
      onChange={onChange}
    />
  </div>,
  mountNode,
)
```
