---
order: 3
title: 可点击
---

用 a 标签进行包裹即可。

```jsx
import { Badge } from '@ke/ked'

ReactDOM.render(
  <a href="#">
    <Badge count={5}>
      <span className="head-example" />
    </Badge>
  </a>,
  mountNode,
)
```
