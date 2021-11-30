---
order: 3
title: 竖排列表样式
---

通过设置 `itemLayout` 属性为 `vertical` 可实现竖排列表样式。

```jsx
import { List, Avatar, Icon } from '@ke/ked'

const listData = []
for (let i = 0; i < 23; i++) {
  listData.push({
    href: 'http://ant.design',
    title: `ke design part ${i}`,
    avatar: 'https://img.ljcdn.com/beike/ked/1617095504422.png',
    description:
      'Ke Design, a design language for background applications, is refined by UED Team.',
    content:
      'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
  })
}

const IconText = ({ type, text }) => (
  <span>
    <Icon type={type} style={{ marginRight: 8 }} />
    {text}
  </span>
)

ReactDOM.render(
  <List
    itemLayout="vertical"
    size="large"
    pagination={{
      onChange: page => {
        console.log(page)
      },
      pageSize: 3,
    }}
    dataSource={listData}
    footer={
      <div>
        <b>ant design</b> footer part
      </div>
    }
    renderItem={item => (
      <List.Item
        key={item.title}
        actions={[
          <IconText key="1" type="star-o" text="156" />,
          <IconText key="2" type="like-o" text="156" />,
          <IconText key="3" type="message" text="2" />,
        ]}
        extra={
          <img
            width={272}
            alt="logo"
            src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
          />
        }
      >
        <List.Item.Meta
          avatar={<Avatar src={item.avatar} />}
          title={<a href={item.href}>{item.title}</a>}
          description={item.description}
        />
        {item.content}
      </List.Item>
    )}
  />,
  mountNode,
)
```
