---
order: 10
title: 上一步和下一步
---

修改上一步和下一步为文字链接。

```jsx
import { Pagination } from '@ke/ked'

function itemRender(current, type, originalElement) {
  if (type === 'prev') {
    return <a>Previous</a>
  }
  if (type === 'next') {
    return <a>Next</a>
  }
  return originalElement
}

ReactDOM.render(<Pagination total={500} itemRender={itemRender} />, mountNode)
```
