---
order: 8
title: 销毁确认对话框
---

使用 `Modal.destroyAll()` 可以销毁弹出的确认窗。通常用于路由监听当中，处理路由前进、后退不能销毁确认对话框的问题。

```jsx
import { Modal, Button } from '@ke/ked'

function destroyAll() {
  Modal.destroyAll()
}

const { confirm } = Modal

function showConfirm() {
  for (let i = 0; i < 3; i += 1) {
    setTimeout(() => {
      confirm({
        content: <Button onClick={destroyAll}>Click to destroy all</Button>,
        onOk() {
          console.log('OK')
        },
        onCancel() {
          console.log('Cancel')
        },
      })
    }, i * 500)
  }
}

ReactDOM.render(
  <div>
    <Button onClick={showConfirm}>Confirm</Button>
  </div>,
  mountNode,
)
```
