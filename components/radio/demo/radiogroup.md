---
order: 1
title: 单选组合
---

一组互斥的 Radio 配合使用。

```jsx
import { Radio } from '@ke/ked'

const RadioGroup = Radio.Group

class App extends React.Component {
  state = {
    value: 1,
  }

  onChange = e => {
    console.log('radio checked', e.target.value)
    this.setState({
      value: e.target.value,
    })
  }

  render() {
    return (
      <RadioGroup onChange={this.onChange} value={this.state.value}>
        <Radio value={1}>A</Radio>
        <Radio value={2}>B</Radio>
        <Radio value={3}>C</Radio>
        <Radio value={4}>D</Radio>
      </RadioGroup>
    )
  }
}

ReactDOM.render(<App />, mountNode)
```
