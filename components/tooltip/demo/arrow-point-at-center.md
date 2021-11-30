---
order: 2
title: 箭头指向
---

设置了 `arrowPointAtCenter` 后，箭头将指向目标元素的中心。

```jsx
import { Tooltip, Button } from '@ke/ked'

ReactDOM.render(
  <div>
    <Tooltip placement="topLeft" title="Prompt Text">
      <Button>Align edge / 边缘对齐</Button>
    </Tooltip>
    <Tooltip placement="topLeft" title="Prompt Text" arrowPointAtCenter>
      <Button>Arrow points to center / 箭头指向中心</Button>
    </Tooltip>
  </div>,
  mountNode,
)
```

<style>
.code-box-demo .ked-btn {
  margin-right: 1em;
  margin-bottom: 1em;
}
</style>
