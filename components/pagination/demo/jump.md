---
order: 3
title: 跳转
---

快速跳转到某一页。

```jsx
import { Pagination } from '@ke/ked'

function onChange(pageNumber) {
  console.log('Page: ', pageNumber)
}

ReactDOM.render(
  <Pagination showQuickJumper defaultCurrent={2} total={500} onChange={onChange} />,
  mountNode,
)
```
