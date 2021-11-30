---
order: 3
title: 从浮层内关闭
---

使用 `visible` 属性控制浮层显示。

```jsx
import { Popover, Button } from '@ke/ked'

class App extends React.Component {
  state = {
    visible: false,
  }

  hide = () => {
    this.setState({
      visible: false,
    })
  }

  handleVisibleChange = visible => {
    this.setState({ visible })
  }

  render() {
    return (
      <Popover
        content={<a onClick={this.hide}>Close</a>}
        title="Title"
        trigger="click"
        visible={this.state.visible}
        onVisibleChange={this.handleVisibleChange}
      >
        <Button type="primary">Click me</Button>
      </Popover>
    )
  }
}

ReactDOM.render(<App />, mountNode)
```
