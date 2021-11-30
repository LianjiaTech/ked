---
order: 3
title: 三种大小
---

三种大小的数字输入框，当 size 分别为 large 和 small 时，输入框高度为 40px 和 24px ，默认高度为 32px。

```jsx
import { InputNumber } from '@ke/ked'

function onChange(value) {
  console.log('changed', value)
}

ReactDOM.render(
  <div>
    <InputNumber size="large" min={1} max={100000} defaultValue={3} onChange={onChange} />
    <InputNumber min={1} max={100000} defaultValue={3} onChange={onChange} />
    <InputNumber size="small" min={1} max={100000} defaultValue={3} onChange={onChange} />
  </div>,
  mountNode,
)
```
