---
order: 11
title: 自动分词
---

试下复制 露西,杰克 到输入框里。只在 tags 和 multiple 模式下可用。

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
  <Select mode="tags" style={{ width: '100%' }} onChange={handleChange} tokenSeparators={[',']}>
    {children}
  </Select>,
  mountNode,
)
```
