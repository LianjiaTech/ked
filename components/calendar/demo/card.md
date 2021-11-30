---
order: 2
title: 卡片模式
---

用于嵌套在空间有限的容器中。

```jsx
import { Calendar } from '@ke/ked'

function onPanelChange(value, mode) {
  console.log(value, mode)
}

ReactDOM.render(
  <div style={{ width: 300, border: '1px solid #d9d9d9', borderRadius: 4 }}>
    <Calendar fullscreen={false} onPanelChange={onPanelChange} />
  </div>,
  mountNode,
)
```
