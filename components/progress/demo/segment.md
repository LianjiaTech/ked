---
order: 9
title: 分段进度条
---

标准的进度条。

```jsx
import { Tooltip, Progress } from '@ke/ked'

ReactDOM.render(
  <Tooltip title="3 done / 3 in progress / 4 to do">
    <Progress percent={60} successPercent={30} />
  </Tooltip>,
  mountNode,
)
```
