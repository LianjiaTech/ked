---
order: 2
title: 带图标的步骤条
---

通过设置 `Steps.Step` 的 `icon` 属性，可以启用自定义图标。

```jsx
import { Steps, Icon } from '@ke/ked'

const { Step } = Steps

ReactDOM.render(
  <Steps>
    <Step status="finish" title="Login" icon={<Icon type="user" />} />
    <Step status="finish" title="Verification" icon={<Icon type="solution" />} />
    <Step status="process" title="Pay" icon={<Icon type="loading" />} />
    <Step status="wait" title="Done" icon={<Icon type="smile-o" />} />
  </Steps>,
  mountNode,
)
```
