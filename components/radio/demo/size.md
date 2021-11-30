---
order: 8
title: 大中小
---

大中小三种组合，可以和表单输入框进行对应配合。

```jsx
import { Radio } from '@ke/ked'

const RadioButton = Radio.Button
const RadioGroup = Radio.Group

ReactDOM.render(
  <div>
    <div>
      <RadioGroup defaultValue="a" size="large">
        <RadioButton value="a">Hangzhou</RadioButton>
        <RadioButton value="b">Shanghai</RadioButton>
        <RadioButton value="c">Beijing</RadioButton>
        <RadioButton value="d">Chengdu</RadioButton>
      </RadioGroup>
    </div>
    <div style={{ marginTop: 16 }}>
      <RadioGroup defaultValue="a">
        <RadioButton value="a">Hangzhou</RadioButton>
        <RadioButton value="b">Shanghai</RadioButton>
        <RadioButton value="c">Beijing</RadioButton>
        <RadioButton value="d">Chengdu</RadioButton>
      </RadioGroup>
    </div>
    <div style={{ marginTop: 16 }}>
      <RadioGroup defaultValue="a" size="small">
        <RadioButton value="a">Hangzhou</RadioButton>
        <RadioButton value="b">Shanghai</RadioButton>
        <RadioButton value="c">Beijing</RadioButton>
        <RadioButton value="d">Chengdu</RadioButton>
      </RadioGroup>
    </div>
  </div>,
  mountNode,
)
```
