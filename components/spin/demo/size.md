---
order: 1
title: 各种大小
---

小的用于文本加载，默认用于卡片容器级加载，大的用于**页面级**加载。

```jsx
import { Spin } from '@ke/ked'

ReactDOM.render(
  <div>
    <Spin size="small" />
    <Spin />
    <Spin size="large" />
  </div>,
  mountNode,
)
```

<style>
.ked-spin {
  margin-right: 16px;
}
</style>
