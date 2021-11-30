---
order: 4
title: 额外的页脚
---

在浮层中加入额外的页脚，以满足某些定制信息的需求。

```jsx
import { DatePicker } from '@ke/ked'

const { RangePicker, MonthPicker } = DatePicker

ReactDOM.render(
  <div>
    <DatePicker renderExtraFooter={() => 'extra footer'} />
    <DatePicker renderExtraFooter={() => 'extra footer'} showTime />
    <RangePicker renderExtraFooter={() => 'extra footer'} />
    <RangePicker renderExtraFooter={() => 'extra footer'} showTime />
    <MonthPicker renderExtraFooter={() => 'extra footer'} placeholder="Select month" />
  </div>,
  mountNode,
)
```
