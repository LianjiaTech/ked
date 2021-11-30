---
order: 8
title: 仪表盘
---

通过设置 `type=dashboard`，可以很方便地实现仪表盘样式的进度条。

```jsx
import { Progress } from '@ke/ked'

ReactDOM.render(<Progress type="dashboard" percent={75} />, mountNode)
```
