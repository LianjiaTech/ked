---
order: 4
title: 自定义 Icon 图标
---

使用 `icon` 自定义提示 `icon`。

```jsx
import { Popconfirm, Icon } from '@ke/ked'

ReactDOM.render(
  <Popconfirm
    title="Are you sure？"
    icon={<Icon type="question-circle-o" style={{ color: 'red' }} />}
  >
    <a href="#">Delete</a>
  </Popconfirm>,
  mountNode,
)
```
