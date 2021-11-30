---
order: 3
title: 不可用
---

Switch 失效状态。

```jsx
import { Switch, Button } from '@ke/ked'

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
        <Switch disabled={this.state.disabled} defaultChecked />
        <br />
        <br />
        <Button type="primary" onClick={this.toggle}>
          Toggle disabled
        </Button>
      </div>
    )
  }
}

ReactDOM.render(<App />, mountNode)
```
