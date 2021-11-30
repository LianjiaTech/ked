---
order: 4
title: 栅格列表
---

可以通过设置 `List` 的 `grid` 属性来实现栅格列表，`column` 可设置期望显示的列数。

```jsx
import { List, Card } from '@ke/ked'

const data = [
  {
    title: 'Title 1',
  },
  {
    title: 'Title 2',
  },
  {
    title: 'Title 3',
  },
  {
    title: 'Title 4',
  },
]

ReactDOM.render(
  <List
    grid={{ gutter: 16, column: 4 }}
    dataSource={data}
    renderItem={item => (
      <List.Item>
        <Card title={item.title}>Card content</Card>
      </List.Item>
    )}
  />,
  mountNode,
)
```
