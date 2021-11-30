---
order: 9
title: 总数
---

通过设置 `showTotal` 展示总共有多少数据。

```jsx
import { Pagination } from '@ke/ked'

ReactDOM.render(
  <div>
    <Pagination
      total={85}
      showTotal={total => `Total ${total} items`}
      pageSize={20}
      defaultCurrent={1}
    />
    <br />
    <Pagination
      total={85}
      showTotal={(total, range) => `${range[0]}-${range[1]} of ${total} items`}
      pageSize={20}
      defaultCurrent={1}
    />
  </div>,
  mountNode,
)
```
