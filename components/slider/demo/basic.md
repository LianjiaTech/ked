---
order: 0
title: 基本用法
---

基本滑动条。当 range 为 true 时，渲染为双滑块。当 disabled 为 true 时，滑块处于不可用状态。

```jsx
import { Slider, Switch } from '@ke/ked'

class Demo extends React.Component {
  state = {
    disabled: false,
  }

  handleDisabledChange = disabled => {
    this.setState({ disabled })
  }

  render() {
    const { disabled } = this.state
    return (
      <div>
        <Slider defaultValue={30} disabled={disabled} />
        <Slider range defaultValue={[20, 50]} disabled={disabled} />
        Disabled: <Switch size="small" checked={disabled} onChange={this.handleDisabledChange} />
      </div>
    )
  }
}

ReactDOM.render(<Demo />, mountNode)
```
