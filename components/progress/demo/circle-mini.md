---
order: 3
title: 小型进度圈
---

小一号的圈形进度。

```jsx
import { Progress } from '@ke/ked'

ReactDOM.render(
  <div>
    <Progress type="circle" percent={30} width={46} />
    <Progress type="circle" percent={70} width={46} status="exception" />
    <Progress type="circle" percent={100} width={46} />
  </div>,
  mountNode,
)
```
