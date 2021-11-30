---
order: 0
title: 基本用法
---

最简单的用法。

```jsx
import { Switch } from '@ke/ked'

function onChange(checked) {
  console.log(`switch to ${checked}`)
}

ReactDOM.render(<Switch defaultChecked onChange={onChange} />, mountNode)
```
