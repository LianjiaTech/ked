---
order: 0
title: 代码演示
---

一个通用的日历面板，支持年/月切换。

```jsx
import { Calendar } from '@ke/ked'

function onPanelChange(value, mode) {
  console.log(value, mode)
}

ReactDOM.render(<Calendar onPanelChange={onPanelChange} />, mountNode)
```
