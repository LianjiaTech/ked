---
order: 0
title: Success
---

## zh-CN

成功的结果。

```jsx
import { Result, Button } from '@ke/ked'

ReactDOM.render(
  <Result
    status="success"
    title="Successfully Purchased Cloud Server ECS!"
    subTitle="Order number: 2017182818828182881 Cloud server configuration takes 1-5 minutes, please wait."
    extra={[
      <Button type="primary" key="console">
        Go Console
      </Button>,
      <Button key="buy">Buy Again</Button>,
    ]}
  />,
  mountNode,
)
```
