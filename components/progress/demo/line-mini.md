---
order: 2
title: 小型进度条
---

适合放在较狭窄的区域内。

```jsx
import { Progress } from '@ke/ked'

ReactDOM.render(
  <div style={{ width: 170 }}>
    <Progress percent={30} size="small" />
    <Progress percent={50} size="small" status="active" />
    <Progress percent={70} size="small" status="exception" />
    <Progress percent={100} size="small" />
  </div>,
  mountNode,
)
```
