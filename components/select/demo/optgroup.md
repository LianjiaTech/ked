---
order: 9
title: 分组
---

用 OptGroup 进行选项分组。

```jsx
import { Select } from '@ke/ked'

const { Option, OptGroup } = Select

function handleChange(value) {
  console.log(`selected ${value}`)
}

ReactDOM.render(
  <Select defaultValue="lucy" style={{ width: 200 }} onChange={handleChange}>
    <OptGroup label="Manager" key="Manager">
      <Option value="jack">Jack</Option>
      <Option value="lucy">Lucy</Option>
    </OptGroup>
    <OptGroup label="Engineer" key="Engineer">
      <Option value="Yiminghe">yiminghe</Option>
    </OptGroup>
  </Select>,
  mountNode,
)
```
