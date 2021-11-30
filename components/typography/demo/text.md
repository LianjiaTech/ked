---
order: 2
title:
  zh-CN: 文本组件
  en-US: Text Component
---

## zh-CN

内置不同样式的文本。

## en-US

Provides multiple types of text.

```jsx
import { Typography } from '@ke/ked'

const { Text } = Typography

ReactDOM.render(
  <div>
    <Text>Ke Design</Text>
    <br />
    <Text type="secondary">Ke Design</Text>
    <br />
    <Text type="warning">Ke Design</Text>
    <br />
    <Text type="danger">Ke Design</Text>
    <br />
    <Text disabled>Ke Design</Text>
    <br />
    <Text mark>Ke Design</Text>
    <br />
    <Text code>Ke Design</Text>
    <br />
    <Text underline>Ke Design</Text>
    <br />
    <Text delete>Ke Design</Text>
    <br />
    <Text strong>Ke Design</Text>
  </div>,
  mountNode,
)
```
