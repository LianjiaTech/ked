---
order: 3
title: 更灵活的内容展示
---

可以利用 `Card.Meta` 支持更灵活的内容。

```jsx
import { Card } from '@ke/ked'

const { Meta } = Card

ReactDOM.render(
  <Card
    hoverable
    bordered={false}
    style={{ width: 240 }}
    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
  >
    <Meta title="Europe Street beat" description="www.instagram.com" />
  </Card>,
  mountNode,
)
```
