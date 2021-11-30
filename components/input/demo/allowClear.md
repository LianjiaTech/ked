---
order: 5
title: 带移除图标
---

带移除图标的输入框，点击图标删除所有内容。

```jsx
import { Input } from '@ke/ked'

const onChange = e => {
  console.log(e)
}

ReactDOM.render(
  <Input placeholder="input with clear icon" allowClear onChange={onChange} />,
  mountNode,
)
```
