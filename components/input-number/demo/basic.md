---
order: 0
title: 基本用法
---

数字输入框。

```jsx
import { InputNumber } from '@ke/ked'

function onChange(value) {
  console.log('changed', value)
}

ReactDOM.render(<InputNumber min={1} max={10} defaultValue={3} onChange={onChange} />, mountNode)
```
