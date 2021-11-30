---
order: 3
title: 不可用
---

checkbox 不可用。

```jsx
import { Checkbox } from '@ke/ked'

ReactDOM.render(
  <div>
    <Checkbox defaultChecked={false} disabled />
    <br />
    <Checkbox defaultChecked disabled />
  </div>,
  mountNode,
)
```
