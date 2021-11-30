---
order: 7
title: 自定义标题
---

设置鼠标放在状态点上时显示的文字

```jsx
import { Badge } from '@ke/ked'

ReactDOM.render(
  <div>
    <Badge count={5} title="Custom hover text">
      <a href="#" className="head-example" />
    </Badge>
  </div>,
  mountNode,
)
```

<style>
.ked-badge:not(.ked-badge-not-a-wrapper) {
  margin-right: 20px;
}
.head-example {
  width: 42px;
  height: 42px;
  border-radius: 4px;
  background: #eee;
  display: inline-block;
}
</style>
