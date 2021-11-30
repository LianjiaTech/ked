---
order: 0
title: 点击上传
---

经典款式，用户点击按钮弹出文件选择框。

```jsx
import { Upload, Button, message, Icon } from '@ke/ked'

const props = {
  name: 'file',
  action: '//jsonplaceholder.typicode.com/posts/',
  headers: {
    authorization: 'authorization-text',
  },
  onChange(info) {
    if (info.file.status !== 'uploading') {
      console.log(info.file, info.fileList)
    }
    if (info.file.status === 'done') {
      message.success(`${info.file.name} file uploaded successfully`)
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} file upload failed.`)
    }
  },
}

ReactDOM.render(
  <Upload {...props}>
    <Button>
      <Icon type="upload" /> Click to Upload
    </Button>
  </Upload>,
  mountNode,
)
```
