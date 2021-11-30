---
order: 1
title: 文字和图标
---

带有文字和图标。

```jsx
import { Switch, Icon } from '@ke/ked'

ReactDOM.render(
  <div>
    <Switch checkedChildren="开" unCheckedChildren="关" defaultChecked />
    <br />
    <br />
    <Switch checkedChildren="1" unCheckedChildren="0" />
    <br />
    <br />
    <Switch
      checkedChildren={<Icon type="check" />}
      unCheckedChildren={<Icon type="close" />}
      defaultChecked
    />
  </div>,
  mountNode,
)
```
