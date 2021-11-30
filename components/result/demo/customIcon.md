---
order: 8
title: 自定义 icon
---

## zh-CN

自定义 icon。

```jsx
import { Result, Icon, Button } from '@ke/ked'

ReactDOM.render(
  <Result
    icon={<Icon type="smile" theme="twoTone" />}
    title="Great, we have done all the operations!"
    extra={<Button type="primary">Next</Button>}
  />,
  mountNode,
)
```
