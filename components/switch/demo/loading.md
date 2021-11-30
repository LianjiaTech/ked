---
order: 2
title: 加载中
---

标识开关操作仍在执行中。

```jsx
import { Switch } from '@ke/ked'

ReactDOM.render(
  <div>
    <Switch loading defaultChecked />
    <br />
    <br />
    <Switch size="small" loading />
  </div>,
  mountNode,
)
```
