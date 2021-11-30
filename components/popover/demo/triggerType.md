---
order: 1
title: 三种触发方式
---

鼠标移入、聚集、点击。

```jsx
import { Popover, Button } from '@ke/ked'

const content = (
  <div>
    <p>Content</p>
    <p>Content</p>
  </div>
)

ReactDOM.render(
  <div>
    <Popover content={content} title="Title" trigger="hover">
      <Button>Hover me</Button>
    </Popover>
    <Popover content={content} title="Title" trigger="focus">
      <Button>Focus me</Button>
    </Popover>
    <Popover content={content} title="Title" trigger="click">
      <Button>Click me</Button>
    </Popover>
  </div>,
  mountNode,
)
```
