---
order: 1
title: 带 icon 的滑块
---

滑块左右可以设置图标来表达业务含义。

```jsx
import { Slider, Icon } from '@ke/ked'

class IconSlider extends React.Component {
  state = {
    value: 0,
  }

  handleChange = value => {
    this.setState({ value })
  }

  render() {
    const { max, min } = this.props
    const { value } = this.state
    const mid = ((max - min) / 2).toFixed(5)
    const preColor = value >= mid ? '' : 'rgba(0, 0, 0, .45)'
    const nextColor = value >= mid ? 'rgba(0, 0, 0, .45)' : ''
    return (
      <div className="icon-wrapper">
        <Icon style={{ color: preColor }} type="frown-o" />
        <Slider {...this.props} onChange={this.handleChange} value={value} />
        <Icon style={{ color: nextColor }} type="smile-o" />
      </div>
    )
  }
}

ReactDOM.render(<IconSlider min={0} max={20} />, mountNode)
```
