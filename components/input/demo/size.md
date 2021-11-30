---
order: 6
title: 三种大小
---

我们为 Input 输入框定义了三种尺寸（大、默认、小），高度分别为 40px、32px 和 24px。

```jsx
import { Input } from '@ke/ked'
import '../index.less'

ReactDOM.render(
  <div className="example-input">
    <Input size="large" placeholder="large size" />
    <Input placeholder="default size" />
    <Input size="small" placeholder="small size" />
  </div>,
  mountNode,
)
```
