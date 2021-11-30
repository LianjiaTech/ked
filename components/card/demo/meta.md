---
order: 9
title: 支持更多内容配置
---

一种支持封面、头像、标题和描述信息的卡片。

```jsx
import { Card, Icon, Avatar } from '@ke/ked'

const { Meta } = Card

ReactDOM.render(
  <Card
    style={{ width: 300 }}
    bordered={false}
    cover={
      <img
        alt="example"
        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
      />
    }
    actions={[
      <Icon key="setting" type="setting" />,
      <Icon key="edit" type="edit" />,
      <Icon key="ellipsis" type="ellipsis" />,
    ]}
  >
    <Meta
      avatar={<Avatar src="https://img.ljcdn.com/beike/ked/1617095504422.png" />}
      title="Card title"
      description="This is the description"
    />
  </Card>,
  mountNode,
)
```
