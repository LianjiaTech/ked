---
order: 1
title: 前置/后置标签
---

用于配置一些固定组合。

```jsx
import { Input, Select, Icon } from '@ke/ked'

const { Option } = Select

const selectBefore = (
  <Select defaultValue="Http://" style={{ width: 92 }}>
    <Option value="Http://">Http://</Option>
    <Option value="Https://">Https://</Option>
  </Select>
)
const selectAfter = (
  <Select defaultValue=".com" style={{ width: 82 }}>
    <Option value=".com">.com</Option>
    <Option value=".jp">.jp</Option>
    <Option value=".cn">.cn</Option>
    <Option value=".org">.org</Option>
  </Select>
)

ReactDOM.render(
  <div>
    <div style={{ marginBottom: 16 }}>
      <Input addonBefore="Http://" addonAfter=".com" defaultValue="mysite" />
    </div>
    <div style={{ marginBottom: 16 }}>
      <Input addonBefore={selectBefore} addonAfter={selectAfter} defaultValue="mysite" />
    </div>
    <div style={{ marginBottom: 16 }}>
      <Input addonAfter={<Icon type="setting" />} defaultValue="mysite" />
    </div>
  </div>,
  mountNode,
)
```
