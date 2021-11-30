---
order: 2
title: 禁用选项
---

通过指定 options 里的 disabled 字段。

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
    disabled: true,
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

ReactDOM.render(<Cascader options={options} onChange={onChange} />, mountNode)
```
