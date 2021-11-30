---
order: 4
title: 加载中状态
---

添加 `loading` 属性即可让按钮处于加载状态，最后两个按钮演示点击后进入加载状态。

```jsx
import { Button } from '@ke/ked'

class App extends React.Component {
  state = {
    loading: false,
    iconLoading: false,
  }

  enterLoading = () => {
    this.setState({ loading: true })
  }

  enterIconLoading = () => {
    this.setState({ iconLoading: true })
  }

  render() {
    return (
      <span>
        <Button type="primary" loading>
          Loading
        </Button>
        <Button type="primary" size="small" loading>
          Loading
        </Button>
        <br />
        <Button type="primary" loading={this.state.loading} onClick={this.enterLoading}>
          Click me!
        </Button>
        <Button
          type="primary"
          icon="poweroff"
          loading={this.state.iconLoading}
          onClick={this.enterIconLoading}
        >
          Click me!
        </Button>
        <br />
        <Button shape="circle" loading />
        <Button type="primary" shape="circle" loading />
      </span>
    )
  }
}

ReactDOM.render(<App />, mountNode)
```
