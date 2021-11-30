---
order: 1
title: 其他提示类型
---

包括成功、失败、警告。

```jsx
import { message, Button } from '@ke/ked'

const success = () => {
  message.success('This is a message of success')
}

const error = () => {
  message.error('This is a message of error')
}

const warning = () => {
  message.warning('This is message of warning')
}

ReactDOM.render(
  <div>
    <Button onClick={success}>Success</Button>
    <Button onClick={error}>Error</Button>
    <Button onClick={warning}>Warning</Button>
  </div>,
  mountNode,
)
```

<style>
#components-message-demo-other .ked-btn {
  margin-right: 8px;
}
</style>
