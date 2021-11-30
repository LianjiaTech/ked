---
order: 1
title: 基础列表
---

基础列表。

```jsx
import { List, Avatar } from '@ke/ked'

const data = [
  {
    title: 'Ant Design Title 1',
  },
  {
    title: 'Ant Design Title 2',
  },
  {
    title: 'Ant Design Title 3',
  },
  {
    title: 'Ant Design Title 4',
  },
]

ReactDOM.render(
  <List
    size="large"
    itemLayout="horizontal"
    dataSource={data}
    renderItem={item => (
      <List.Item>
        <List.Item.Meta
          avatar={<Avatar src="https://img.ljcdn.com/beike/ked/1617095504422.png" />}
          title={<a href="https://bj.ke.com/">{item.title}</a>}
          description="Ked Design, a design language for background applications, is refined by Ant UED Team"
        />
      </List.Item>
    )}
  />,
  mountNode,
)
```
