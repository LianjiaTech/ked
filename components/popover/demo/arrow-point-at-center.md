---
order: 4
title: 箭头指向
---

设置了 `arrowPointAtCenter` 后，箭头将指向目标元素的中心。

```jsx
import { Popover, Button } from '@ke/ked'

const text = <span>Title</span>
const content = (
  <div>
    <p>Content</p>
    <p>Content</p>
  </div>
)

ReactDOM.render(
  <div>
    <Popover placement="topLeft" title={text} content={content}>
      <Button>Align edge / 边缘对齐</Button>
    </Popover>
    <Popover placement="topLeft" title={text} content={content} arrowPointAtCenter>
      <Button>Arrow points to center / 箭头指向中心</Button>
    </Popover>
  </div>,
  mountNode,
)
```
