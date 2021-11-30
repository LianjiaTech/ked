---
order: 5
title: 不可用
---

Radio 不可用。

```jsx
import { Radio, Button } from '@ke/ked'

class App extends React.Component {
  state = {
    disabled: true,
  }

  toggleDisabled = () => {
    this.setState({
      disabled: !this.state.disabled,
    })
  }

  render() {
    return (
      <div>
        <Radio defaultChecked={false} disabled={this.state.disabled}>
          Disabled
        </Radio>
        <br />
        <Radio defaultChecked disabled={this.state.disabled}>
          Disabled
        </Radio>
        <div style={{ marginTop: 20 }}>
          <Button type="primary" onClick={this.toggleDisabled}>
            Toggle disabled
          </Button>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, mountNode)
```
