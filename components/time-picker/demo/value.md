---
order: 4
title: 受控组件
---

value 和 onChange 需要配合使用。

```jsx
import { TimePicker } from '@ke/ked'

class Demo extends React.Component {
  state = {
    value: null,
  }

  onChange = time => {
    console.log(time)
    this.setState({ value: time })
  }

  render() {
    return <TimePicker value={this.state.value} onChange={this.onChange} />
  }
}

ReactDOM.render(<Demo />, mountNode)
```
