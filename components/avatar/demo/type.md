---
order: 1
title: 类型
---

支持三种类型：图片、Icon 以及字符，其中 Icon 和字符型可以自定义图标颜色及背景色。

```jsx
import { Avatar } from '@ke/ked'

ReactDOM.render(
  <div>
    <Avatar icon="user" />
    <Avatar>U</Avatar>
    <Avatar>USER</Avatar>
    <Avatar src="https://img.ljcdn.com/beike/ked/1617095504422.png" />
    <Avatar style={{ color: '#f56a00', backgroundColor: '#fde3cf' }}>U</Avatar>
    <Avatar style={{ backgroundColor: '#87d068' }} icon="user" />
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
