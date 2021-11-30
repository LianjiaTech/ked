---
order: 8
title: 点状步骤条
---

包含步骤点的进度条。

```jsx
import { Steps } from '@ke/ked'

const { Step } = Steps

ReactDOM.render(
  <Steps progressDot current={1} status="error">
    <Step title="已完成" description="这是一条描述。" />
    <Step title="进行中" description="这是一条描述。" />
    <Step title="等待中" description="这是一条描述。" />
  </Steps>,
  mountNode,
)
```
