---
order: 3
title: 适应文本高度的文本域
---

autosize 属性适用于 textarea 节点，并且只有高度会自动变化。另外 autosize 可以设定为一个对象，指定最小行数和最大行数。

```jsx
import { Input } from '@ke/ked'

const { TextArea } = Input

ReactDOM.render(
  <div>
    <TextArea placeholder="Autosize height based on content lines" autoSize />
    <div style={{ margin: '24px 0' }} />
    <TextArea
      placeholder="Autosize height with minimum and maximum number of lines"
      autoSize={{ minRows: 2, maxRows: 6 }}
    />
  </div>,
  mountNode,
)
```
