---
order: 5
title: 预加载的卡片
---

数据读入前会有文本块样式。

```jsx
import { Skeleton, Switch, Card, Icon, Avatar } from '@ke/ked'

const { Meta } = Card

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

        <Card style={{ width: 300, marginTop: 16 }} loading={loading} bordered={false}>
          <Meta
            avatar={<Avatar src="https://img.ljcdn.com/beike/ked/1617095504422.png" />}
            title="Card title"
            description="This is the description"
          />
        </Card>

        <Card
          style={{ width: 300, marginTop: 16 }}
          bordered={false}
          actions={[
            <Icon key="setting" type="setting" />,
            <Icon key="edit" type="edit" />,
            <Icon key="ellipsis" type="ellipsis" />,
          ]}
        >
          <Skeleton loading={loading} avatar active>
            <Meta
              avatar={<Avatar src="https://img.ljcdn.com/beike/ked/1617095504422.png" />}
              title="Card title"
              description="This is the description"
            />
          </Skeleton>
        </Card>
      </div>
    )
  }
}

ReactDOM.render(<App />, mountNode)
```
