---
order: 10
title: 圆角/方角边缘
---

通过设定 `strokeLinecap="square|round"` 可以调整进度条边缘的形状。

```jsx
import { Progress } from '@ke/ked'

ReactDOM.render(
  <div>
    <Progress strokeLinecap="square" percent={75} />
    <Progress strokeLinecap="square" type="circle" percent={75} />
    <Progress strokeLinecap="square" type="dashboard" percent={75} />
  </div>,
  mountNode,
)
```
