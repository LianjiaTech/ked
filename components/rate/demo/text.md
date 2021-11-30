---
order: 1
title: 文案展示
---

给评分组件加上文案展示。

```jsx
import { Rate } from '@ke/ked'

const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful']

class Rater extends React.Component {
  state = {
    value: 3,
  }

  handleChange = value => {
    this.setState({ value })
  }

  render() {
    const { value } = this.state
    return (
      <span>
        <Rate tooltips={desc} onChange={this.handleChange} value={value} />
        {value ? <span className="ked-rate-text">{desc[value - 1]}</span> : ''}
      </span>
    )
  }
}

ReactDOM.render(<Rater />, mountNode)
```
