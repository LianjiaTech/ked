---
order: 0
title: 基本
---

最简单的用法，浮层的大小由内容区域决定。

```jsx
import { Popover, Button } from '@ke/ked'

const content = (
  <div>
    <p>Content</p>
    <p>Content</p>
  </div>
)

ReactDOM.render(
  <Popover content={content} title="Title">
    <Button type="primary">Hover me</Button>
  </Popover>,
  mountNode,
)
```

<style>
p {
  margin: 0;
}
</style>
