---
order: 2
title: 清除
---

支持允许或者禁用清除。

```jsx
import { Rate } from '@ke/ked'

ReactDOM.render(
  <div>
    <Rate defaultValue={3} /> allowClear: true
    <br />
    <Rate allowClear={false} defaultValue={3} /> allowClear: false
  </div>,
  mountNode,
)
```
