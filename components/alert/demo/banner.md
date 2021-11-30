---
order: 6
title: 顶部公告
---

页面顶部通告形式，默认有图标且`type` 为 'warning'。

```jsx
import { Alert } from '@ke/ked'

ReactDOM.render(
  <div>
    <Alert message="Warning text" type="warning" showIcon />
    <br />
    <Alert
      message="Very long warning text warning text text text text text text text"
      type="warning"
      showIcon 
      closable
    />
    <br />
    <Alert showIcon={false} message="Warning text without icon" type="warning" />
    <br />
    <Alert type="error" message="Error text" showIcon />
  </div>,
  mountNode,
)
```
