---
order: 12
title: 扩展菜单
---

使用 dropdownRender 对下拉菜单进行自由扩展。

```jsx
import { Select, Icon, Divider } from '@ke/ked'

const { Option } = Select

ReactDOM.render(
  <Select
    defaultValue="lucy"
    style={{ width: 120 }}
    dropdownRender={menu => (
      <div>
        {menu}
        <Divider style={{ margin: '4px 0' }} />
        <div style={{ padding: '8px', cursor: 'pointer' }}>
          <Icon type="plus" /> Add item
        </div>
      </div>
    )}
  >
    <Option value="jack">Jack</Option>
    <Option value="lucy">Lucy</Option>
  </Select>,
  mountNode,
)
```
