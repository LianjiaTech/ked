---
order: 0
title: 基本用法
---

简单的步骤条。

```jsx
import { Steps } from '@ke/ked'

const { Step } = Steps

ReactDOM.render(
  <Steps current={1}>
    <Step title="Finished" description="This is a description." />
    <Step title="In Progress" description="This is a description." />
    <Step title="Waiting" description="This is a description." />
  </Steps>,
  mountNode,
)
```
