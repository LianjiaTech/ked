---
order: 2
title: 标签
---

tags select，随意输入的内容（scroll the menu）

```jsx
import { Select } from '@ke/ked'

const { Option } = Select

const children = []
for (let i = 10; i < 36; i++) {
  children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>)
}

function handleChange(value) {
  console.log(`selected ${value}`)
}

ReactDOM.render(
  <Select mode="tags" style={{ width: '100%' }} placeholder="Tags Mode" onChange={handleChange}>
    {children}
  </Select>,
  mountNode,
)
```
