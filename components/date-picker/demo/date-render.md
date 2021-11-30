---
order: 5
title: 定制日期单元格
---

使用 dateRender 可以自定义日期单元格的内容和样式。

```jsx
import { DatePicker } from '@ke/ked'

const { RangePicker } = DatePicker

ReactDOM.render(
  <div>
    <DatePicker
      dateRender={current => {
        const style = {}
        if (current.date() === 1) {
          style.border = '1px solid #1890ff'
          style.borderRadius = '50%'
        }
        return (
          <div className="ked-calendar-date" style={style}>
            {current.date()}
          </div>
        )
      }}
    />
    <RangePicker
      dateRender={current => {
        const style = {}
        if (current.date() === 1) {
          style.border = '1px solid #1890ff'
          style.borderRadius = '50%'
        }
        return (
          <div className="ked-calendar-date" style={style}>
            {current.date()}
          </div>
        )
      }}
    />
  </div>,
  mountNode,
)
```
