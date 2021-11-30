---
order: 0
title: 基本
---

最简单的用法。

```jsx
import { Popconfirm, message } from '@ke/ked'

function confirm(e) {
  console.log(e)
  message.success('Click on Yes')
}

function cancel(e) {
  console.log(e)
  message.error('Click on No')
}

ReactDOM.render(
  <Popconfirm
    title="Are you sure delete this task?"
    onConfirm={confirm}
    onCancel={cancel}
    okText="Yes"
    cancelText="No"
  >
    <a href="#">Delete</a>
  </Popconfirm>,
  mountNode,
)
```
