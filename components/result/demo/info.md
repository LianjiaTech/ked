---
order: 1
title: Info
---

## zh-CN

展示处理结果。

```jsx
import { Result, Button } from '@ke/ked'

ReactDOM.render(
  <Result
    title="Your operation has been executed"
    extra={
      <Button type="primary" key="console">
        Go Console
      </Button>
    }
  />,
  mountNode,
)
```
