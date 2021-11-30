---
order: 1
title:
  zh-CN: 标题组件
  en-US: Title Component
---

## zh-CN

展示不同级别的标题。

## en-US

Display title in different level.

```jsx
import { Typography } from '@ke/ked'

const { Title } = Typography

ReactDOM.render(
  <div>
    <Title>h1. Ke Design </Title>
    <Title level={2}>h2. Ke Design </Title>
    <Title level={3}>h3. Ke Design </Title>
    <Title level={4}>h4. Ke Design </Title>
  </div>,
  mountNode,
)
```
