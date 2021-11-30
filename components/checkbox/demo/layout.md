---
order: 5
title: 布局
---

Checkbox.Group 内嵌 Checkbox 并与 Grid 组件一起使用，可以实现灵活的布局。

```jsx
import { Checkbox } from '@ke/ked'

function onChange(checkedValues) {
  console.log('checked = ', checkedValues)
}

ReactDOM.render(
  <Checkbox.Group style={{ width: '100%' }} onChange={onChange}>
    <Checkbox value="A">A</Checkbox>
    <Checkbox value="B">B</Checkbox>
    <Checkbox value="C">C</Checkbox>
    <Checkbox value="D">D</Checkbox>
    <Checkbox value="E">E</Checkbox>
  </Checkbox.Group>,
  mountNode,
)
```
