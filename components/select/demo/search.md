---
order: 7
title: 带搜索框
---

展开后可对选项进行搜索。

```jsx
import { Select } from '@ke/ked'

const { Option } = Select

function handleChange(value) {
  console.log(`selected ${value}`)
}

function handleBlur() {
  console.log('blur')
}

function handleFocus() {
  console.log('focus')
}

ReactDOM.render(
  <Select
    showSearch
    style={{ width: 200 }}
    placeholder="Select a person"
    optionFilterProp="children"
    onChange={handleChange}
    onFocus={handleFocus}
    onBlur={handleBlur}
    filterOption={(input, option) =>
      option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
    }
  >
    <Option value="jack">Jack</Option>
    <Option value="lucy">Lucy</Option>
    <Option value="tom">Tom</Option>
  </Select>,
  mountNode,
)
```
