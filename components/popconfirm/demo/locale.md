---
order: 1
title: 国际化
---

使用 `okText` 和 `cancelText` 自定义按钮文字。

```jsx
import { Popconfirm } from '@ke/ked'

ReactDOM.render(
  <Popconfirm title="Are you sure？" okText="Yes" cancelText="No">
    <a href="#">Delete</a>
  </Popconfirm>,
  mountNode,
)
```
