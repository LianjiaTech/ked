---
order: 5
title: 确认对话框（带 loading）
---

使用 `confirm()` 可以快捷地弹出确认框。onCancel/onOk 返回 promise 可以延迟关闭

```jsx
import { Modal, Button } from '@ke/ked'

const { confirm } = Modal

function showConfirm() {
  confirm({
    title: 'Do you want to delete these items?',
    content: 'When clicked the OK button, this dialog will be closed after 1 second',
    onOk() {
      return new Promise((resolve, reject) => {
        setTimeout(Math.random() > 0.5 ? resolve : reject, 1000)
      }).catch(() => console.log('Oops errors!'))
    },
    onCancel() {},
  })
}

ReactDOM.render(<Button onClick={showConfirm}>Confirm</Button>, mountNode)
```
