---
order: 1
title: 不可用
---

点击按钮切换可用状态。

```jsx
import { InputNumber, Button } from '@ke/ked'

class App extends React.Component {
  state = {
    disabled: true,
  }

  toggle = () => {
    this.setState({
      disabled: !this.state.disabled,
    })
  }

  render() {
    return (
      <div>
        <InputNumber min={1} max={10} disabled={this.state.disabled} defaultValue={3} />
        <div style={{ marginTop: 20 }}>
          <Button onClick={this.toggle} type="primary">
            Toggle disabled
          </Button>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, mountNode)
```
