---
order: 6
title: 步骤运行错误
---

使用 Steps 的 `status` 属性来指定当前步骤的状态。

```jsx
import { Steps } from '@ke/ked'

const { Step } = Steps

ReactDOM.render(
  <Steps current={1} status="error">
    <Step title="Finished" description="This is a description" />
    <Step title="In Process" description="This is a description" />
    <Step title="Waiting" description="This is a description" />
  </Steps>,
  mountNode,
)
```
