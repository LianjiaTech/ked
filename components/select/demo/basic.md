---
order: 0
title: 基本用法
---

基本使用。

```jsx
import { Select } from '@ke/ked'

const { Option } = Select

function handleChange(value) {
  console.log(`selected ${value}`)
}

ReactDOM.render(
  <div>
    <Select defaultValue="lucy" style={{ width: 120, marginRight: 30 }} onChange={handleChange}>
      <Option value="jack">Jack</Option>
      <Option value="lucy">Lucy</Option>
      <Option value="disabled" disabled>
        Disabled
      </Option>
      <Option value="Yiminghe">yiminghe</Option>
    </Select>
    <Select defaultValue="lucy" style={{ width: 120, marginRight: 30 }} disabled>
      <Option value="lucy">Lucy</Option>
    </Select>
    <Select defaultValue="lucy" style={{ width: 120 }} loading>
      <Option value="lucy">Lucy</Option>
    </Select>
  </div>,
  mountNode,
)
```
