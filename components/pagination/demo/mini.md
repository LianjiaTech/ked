---
order: 4
title: 迷你
---

迷你版本。

```jsx
import { Pagination } from '@ke/ked'

function showTotal(total) {
  return `Total ${total} items`
}

ReactDOM.render(
  <div>
    <Pagination size="small" total={50} />
    <Pagination size="small" total={50} showSizeChanger showQuickJumper />
    <Pagination size="small" total={50} showTotal={showTotal} />
  </div>,
  mountNode,
)
```

<style>
#components-pagination-demo-mini .ked-pagination:not(:last-child) {
  margin-bottom: 24px;
}
</style>
