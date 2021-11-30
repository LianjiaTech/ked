---
order: 1
title: 四种样式
---

共有四种样式 `success`、`info`、`warning`、`error`。

```jsx
import { Alert } from '@ke/ked'

ReactDOM.render(
  <div>
    <Alert message="Success Text" type="success" />
    <Alert message="Info Text" type="info" />
    <Alert message="Warning Text" type="warning" />
    <Alert message="Error Text" type="error" />
  </div>,
  mountNode,
)
```
