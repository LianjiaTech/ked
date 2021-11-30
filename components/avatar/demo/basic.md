---
order: 0
title: 基本
---

头像有三种尺寸，两种形状可选。

```jsx
import { Avatar } from '@ke/ked'

ReactDOM.render(
  <div>
    <div>
      <Avatar size={64} icon="user" />
      <Avatar size="large" icon="user" />
      <Avatar icon="user" />
      <Avatar size="small" icon="user" />
    </div>
    <div>
      <Avatar shape="square" size={64} icon="user" />
      <Avatar shape="square" size="large" icon="user" />
      <Avatar shape="square" icon="user" />
      <Avatar shape="square" size="small" icon="user" />
    </div>
  </div>,
  mountNode,
)
```

<style>
#components-avatar-demo-demo1 .ked-avatar {
  margin-top: 16px;
  margin-right: 16px;
}
</style>
