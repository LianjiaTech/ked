---
order: 1
title: 独立使用
---

不包裹任何元素即是独立使用，可自定样式展现。

> 在右上角的 badge 则限定为红色。

```jsx
import { Badge } from '@ke/ked'

ReactDOM.render(
  <div>
    <Badge count={25} />
    <Badge
      count={4}
      style={{
        backgroundColor: '#fff',
        color: '#999',
        boxShadow: '0 0 0 1px #d9d9d9 inset',
      }}
    />
    <Badge count={109} style={{ backgroundColor: '#52c41a' }} />
  </div>,
  mountNode,
)
```

<style>
.ked-badge-not-a-wrapper:not(.ked-badge-status) {
  margin-right: 8px;
}
</style>
