---
order: 3
title: 确认对话框（不带 loading）
---

使用 `confirm()` 可以快捷地弹出确认框。

```jsx
import { Modal, Button } from '@ke/ked'

const { confirm } = Modal

function showConfirm() {
  confirm({
    title: 'Do you Want to delete these items?',
    content: 'Some descriptions',
    onOk() {
      console.log('OK')
    },
    onCancel() {
      console.log('Cancel')
    },
  })
}

function showDeleteConfirm() {
  confirm({
    title: 'Are you sure delete this task?',
    content: 'Some descriptions',
    okText: 'Yes',
    okType: 'danger',
    cancelText: 'No',
    onOk() {
      console.log('OK')
    },
    onCancel() {
      console.log('Cancel')
    },
  })
}

function showPropsConfirm() {
  confirm({
    title: 'Are you sure delete this task?',
    content: 'Some descriptions',
    okText: 'Yes',
    okType: 'danger',
    okButtonProps: {
      disabled: true,
    },
    cancelText: 'No',
    onOk() {
      console.log('OK')
    },
    onCancel() {
      console.log('Cancel')
    },
  })
}

ReactDOM.render(
  <div>
    <Button onClick={showConfirm}>Confirm</Button>
    <Button onClick={showDeleteConfirm} type="dashed">
      Delete
    </Button>
    <Button onClick={showPropsConfirm} type="dashed">
      With extra props
    </Button>
  </div>,
  mountNode,
)
```
