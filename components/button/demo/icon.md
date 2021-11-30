---
order: 1
title: 图标按钮
---

当需要在 `Button` 内嵌入 `Icon` 时，可以设置 `icon` 属性，或者直接在 `Button` 内使用 `Icon` 组件。

如果想控制 `Icon` 具体的位置，只能直接使用 `Icon` 组件，而非 `icon` 属性。

```jsx
import { Button } from '@ke/ked'

ReactDOM.render(
  <div>
    <Button type="primary" shape="circle" icon="search" />
    <Button type="primary" icon="search">
      Search
    </Button>
    <Button shape="circle" icon="search" />
    <Button icon="search">Search</Button>
    <br />
    <Button type="dashed" shape="circle" icon="search" />
    <Button type="dashed" icon="search">Search</Button>
  </div>,
  mountNode,
)
```
