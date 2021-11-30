---
order: 4
title: 列表
---

在列表组件中使用加载占位符。

```jsx
import { Skeleton, Switch, List, Avatar, Icon } from '@ke/ked'

const listData = []
for (let i = 0; i < 3; i++) {
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

class App extends React.Component {
  state = {
    loading: true,
  }

  onChange = checked => {
    this.setState({ loading: !checked })
  }

  render() {
    const { loading } = this.state

    return (
      <div>
        <Switch checked={!loading} onChange={this.onChange} />

        <List
          itemLayout="vertical"
          size="large"
          dataSource={listData}
          renderItem={item => (
            <List.Item
              key={item.title}
              actions={
                !loading && [
                  <IconText key="1" type="star-o" text="156" />,
                  <IconText key="2" type="like-o" text="156" />,
                  <IconText key="3" type="message" text="2" />,
                ]
              }
              extra={
                !loading && (
                  <img
                    width={272}
                    alt="logo"
                    src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
                  />
                )
              }
            >
              <Skeleton loading={loading} active avatar>
                <List.Item.Meta
                  avatar={<Avatar src={item.avatar} />}
                  title={<a href={item.href}>{item.title}</a>}
                  description={item.description}
                />
                {item.content}
              </Skeleton>
            </List.Item>
          )}
        />
      </div>
    )
  }
}

ReactDOM.render(<App />, mountNode)
```

<style>
.skeleton-demo {
  border: 1px solid #f4f4f4;
}
</style>
