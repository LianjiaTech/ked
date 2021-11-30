---
order: 2
title: Warning
---

## zh-CN

警告类型的结果。

```jsx
import { Result, Button } from '@ke/ked'

ReactDOM.render(
  <Result
    status="warning"
    title="There are some problems with your operation."
    extra={
      <Button type="primary" key="console">
        Go Console
      </Button>
    }
  />,
  mountNode,
)
```
