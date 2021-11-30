---
order: 6
title: 默认值
---

默认值通过数组的方式指定。

```jsx
import { Cascader } from '@ke/ked'

const options = [
  {
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [
      {
        value: 'hangzhou',
        label: 'Hangzhou',
        children: [
          {
            value: 'xihu',
            label: 'West Lake',
          },
        ],
      },
    ],
  },
  {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [
      {
        value: 'nanjing',
        label: 'Nanjing',
        children: [
          {
            value: 'zhonghuamen',
            label: 'Zhong Hua Men',
          },
        ],
      },
    ],
  },
]

function onChange(value) {
  console.log(value)
}

ReactDOM.render(
  <Cascader
    defaultValue={['zhejiang', 'hangzhou', 'xihu']}
    options={options}
    onChange={onChange}
  />,
  mountNode,
)
```
