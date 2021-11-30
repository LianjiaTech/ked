---
order: 7
title: 拖拽上传
---

把文件拖入指定区域，完成上传，同样支持点击上传。

设置 multiple 后，在 IE10+ 可以一次上传多个文件。

```jsx
import { Upload, Icon, message } from '@ke/ked'

const { Dragger } = Upload

const props = {
  name: 'file',
  multiple: true,
  action: '//jsonplaceholder.typicode.com/posts/',
  onChange(info) {
    const { status } = info.file
    if (status !== 'uploading') {
      console.log(info.file, info.fileList)
    }
    if (status === 'done') {
      message.success(`${info.file.name} file uploaded successfully.`)
    } else if (status === 'error') {
      message.error(`${info.file.name} file upload failed.`)
    }
  },
}

ReactDOM.render(
  <Dragger {...props}>
    <p className="ked-upload-drag-icon">
      <Icon type="inbox" />
    </p>
    <p className="ked-upload-text">Click or drag file to this area to upload</p>
    <p className="ked-upload-hint">
      Support for a single or bulk upload. Strictly prohibit from uploading company data or other
      band files
    </p>
  </Dragger>,
  mountNode,
)
```
