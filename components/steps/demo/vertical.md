---
order: 4
title: 竖直方向的步骤条
---

简单的竖直方向的步骤条。

```jsx
import { Steps } from '@ke/ked'

const { Step } = Steps

ReactDOM.render(
  <Steps direction="vertical" current={1}>
    <Step title="Finished" description="This is a description." />
    <Step title="In Progress" description="This is a description." />
    <Step title="Waiting" description="This is a description." />
  </Steps>,
  mountNode,
)
```
