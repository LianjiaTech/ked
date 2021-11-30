---
order: 2
title: 可关闭的警告提示
---

显示关闭按钮，点击可关闭警告提示。

```jsx
import { Alert } from '@ke/ked'

const onClose = e => {
  console.log(e, 'I was closed.')
}

ReactDOM.render(
  <div>
    <Alert
      message="Warning Text Warning Text Warning TextW arning Text Warning Text Warning TextWarning Text"
      type="warning"
      closable
      onClose={onClose}
    />
    <Alert
      message="Error Text"
      description="Error Description Error Description Error Description Error Description Error Description Error Description"
      type="error"
      closable
      onClose={onClose}
    />
  </div>,
  mountNode,
)
```
