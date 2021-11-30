---
order: 5
title: 竖直方向的点状步骤条
---

竖直方向的点状步骤条。

```jsx
import { Steps } from '@ke/ked'

const { Step } = Steps

ReactDOM.render(
  <Steps direction="vertical" progressDot current={3}>
    <Step title="Finished1" description="This is a description." />
    <Step title="Finished2" description="This is a description." />
    <Step title="Finished3" description="This is a description." />
    <Step title="In Progress" description="This is a description." />
    <Step title="Waiting" description="This is a description." />
  </Steps>,
  mountNode,
)
```
