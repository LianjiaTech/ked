---
order: 3
title: 文件夹上传
---

支持上传一个文件夹里的所有文件。

```jsx
import { Upload, Button, Icon } from '@ke/ked'

ReactDOM.render(
  <Upload action="//jsonplaceholder.typicode.com/posts/" directory>
    <Button>
      <Icon type="upload" /> Upload Directory
    </Button>
  </Upload>,
  mountNode,
)
```
