---
order: 9
title:
  zh-CN: 自定义预览
  en-US: Customize preview file
---

## zh-CN

自定义本地预览，用于处理非图片格式文件（例如视频文件）。

## en-US

Customize local preview. Can handle with non-image format files such as video.

```jsx
import { Upload, Button, Icon } from '@ke/ked'

const props = {
  action: '//jsonplaceholder.typicode.com/posts/',
  listType: 'picture',
  previewFile(file) {
    console.log('Your upload file:', file)
    // Your process logic. Here we just mock to the same file
    return fetch('https://next.json-generator.com/api/json/get/4ytyBoLK8', {
      method: 'POST',
      body: file,
    })
      .then(res => res.json())
      .then(({ thumbnail }) => thumbnail)
  },
}

ReactDOM.render(
  <div>
    <Upload {...props}>
      <Button>
        <Icon type="upload" /> Upload
      </Button>
    </Upload>
  </div>,
  mountNode,
)
```
