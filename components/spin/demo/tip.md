---
order: 4
title: 自定义描述文案
---

自定义描述文案。

```jsx
import { Spin, Alert } from '@ke/ked'

ReactDOM.render(
  <Spin tip="Loading...">
    <Alert
      message="Alert message title"
      description="Further details about the context of this alert."
      type="info"
    />
  </Spin>,
  mountNode,
)
```
