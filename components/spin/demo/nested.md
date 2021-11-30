---
order: 3
title: 卡片加载中
---

可以直接把内容内嵌到 `Spin` 中，将现有容器变为加载状态。

```jsx
import { Spin, Switch, Alert } from '@ke/ked'

class Card extends React.Component {
  state = { loading: false }

  toggle = value => {
    this.setState({ loading: value })
  }

  render() {
    return (
      <div>
        <Spin spinning={this.state.loading}>
          <Alert
            message="Alert message title"
            description="Further details about the context of this alert."
            type="info"
          />
        </Spin>
        <div style={{ marginTop: 16 }}>
          Loading state：
          <Switch checked={this.state.loading} onChange={this.toggle} />
        </div>
      </div>
    )
  }
}

ReactDOM.render(<Card />, mountNode)
```
