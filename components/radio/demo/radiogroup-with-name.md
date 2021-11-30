---
order: 3
title: 单选组合 - 配合 name 使用
---

可以为 RadioGroup 配置 name 参数，为组合内的 input 元素赋予相同的 name 属性，使浏览器把 RadioGroup 下的 Radio 真正看作是一组（例如可以通过方向键始终在同一组内更改选项）。

```jsx
import { Radio } from '@ke/ked'

const RadioGroup = Radio.Group

function App() {
  return (
    <RadioGroup name="radiogroup" defaultValue={1}>
      <Radio value={1}>A</Radio>
      <Radio value={2}>B</Radio>
      <Radio value={3}>C</Radio>
      <Radio value={4}>D</Radio>
    </RadioGroup>
  )
}

ReactDOM.render(<App />, mountNode)
```
