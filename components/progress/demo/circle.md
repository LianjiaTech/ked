---
order: 1
title: 进度圈
---

圈形的进度。

```jsx
import { Progress } from '@ke/ked'

ReactDOM.render(
  <div>
    <Progress type="circle" status="active" percent={75} width={80} />
    <Progress type="circle" percent={70} width={80} status="exception" />
    <Progress type="circle" percent={100} width={80} />
  </div>,
  mountNode,
)
```

<style>
.ked-progress-circle-wrap,
.ked-progress-line-wrap {
  margin-right: 8px;
  margin-bottom: 5px;
}
</style>
