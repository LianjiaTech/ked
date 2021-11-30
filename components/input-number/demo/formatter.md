---
order: 2
title: 格式化展示
---

通过 formatter 格式化数字，以展示具有具体含义的数据，往往需要配合 parser 一起使用。

```jsx
import { InputNumber } from '@ke/ked'

function onChange(value) {
  console.log('changed', value)
}

ReactDOM.render(
  <div>
    <InputNumber
      defaultValue={1000}
      formatter={value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
      parser={value => value.replace(/\$\s?|(,*)/g, '')}
      onChange={onChange}
    />
    <InputNumber
      defaultValue={100}
      min={0}
      max={100}
      formatter={value => `${value}%`}
      parser={value => value.replace('%', '')}
      onChange={onChange}
    />
  </div>,
  mountNode,
)
```
