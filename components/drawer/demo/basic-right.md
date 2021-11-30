---
order: 0
title: 基础抽屉
---

基础抽屉，点击触发按钮抽屉从右滑出，点击遮罩区关闭

```jsx
import { Drawer, Button } from '@ke/ked'

class App extends React.Component {
  state = { visible: false }

  showDrawer = () => {
    this.setState({
      visible: true,
    })
  }

  onClose = () => {
    this.setState({
      visible: false,
    })
  }

  render() {
    return (
      <div>
        <Button type="primary" onClick={this.showDrawer}>
          Open
        </Button>
        <Drawer
          title="Basic Drawer"
          placement="right"
          closable={false}
          onClose={this.onClose}
          visible={this.state.visible}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Drawer>
      </div>
    )
  }
}

ReactDOM.render(<App />, mountNode)
```
