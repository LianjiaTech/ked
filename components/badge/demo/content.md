---
order: 8
title: 自定义内容
---

自由设置 badge 的内容

```jsx
import { Badge } from '@ke/ked'

ReactDOM.render(
  <div>
    <Badge count="新" className="ked-badge-desc" />
    <Badge count="新" className="ked-badge-desc" offset={[12, 0]}>
      示例
    </Badge>
  </div>,
  mountNode,
)
```

<style>
.ked-badge:not(.ked-badge-not-a-wrapper) {
  margin-right: 20px;
}
</style>
