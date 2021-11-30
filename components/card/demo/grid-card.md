---
order: 6
title: 网格型内嵌卡片
---

一种常见的卡片内容区隔模式。

```jsx
import { Card } from '@ke/ked'

const gridStyle = {
  width: '25%',
  textAlign: 'center',
}

ReactDOM.render(
  <Card title="Card Title" bordered={false}>
    <Card.Grid style={gridStyle}>Content</Card.Grid>
    <Card.Grid style={gridStyle}>Content</Card.Grid>
    <Card.Grid style={gridStyle}>Content</Card.Grid>
    <Card.Grid style={gridStyle}>Content</Card.Grid>
    <Card.Grid style={gridStyle}>Content</Card.Grid>
    <Card.Grid style={gridStyle}>Content</Card.Grid>
    <Card.Grid style={gridStyle}>Content</Card.Grid>
  </Card>,
  mountNode,
)
```
