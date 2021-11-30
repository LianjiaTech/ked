---
order: 4
title: 两种大小
---

size="small" 表示小号开关。

```jsx
import { Switch } from '@ke/ked'

ReactDOM.render(
  <div>
    <Switch defaultChecked />
    <br />
    <br />
    <Switch size="small" defaultChecked />
  </div>,
  mountNode,
)
```
