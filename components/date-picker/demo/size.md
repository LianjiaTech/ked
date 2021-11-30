---
order: 1
title: 三种大小
---

三种大小的输入框，若不设置，则为 default。

```jsx
import { DatePicker } from '@ke/ked'

const { MonthPicker, RangePicker, WeekPicker } = DatePicker

class PickerSizesDemo extends React.Component {
  state = {
    size: 'default',
  }

  handleSizeChange = e => {
    this.setState({ size: e.target.value })
  }

  render() {
    const { size } = this.state
    return (
      <div>
        {/* <Radio.Group value={size} onChange={this.handleSizeChange}>
          <Radio.Button value="large">Large</Radio.Button>
          <Radio.Button value="default">Default</Radio.Button>
          <Radio.Button value="small">Small</Radio.Button>
        </Radio.Group> */}
        <br />
        <br />
        <DatePicker size={size} />
        <br />
        <MonthPicker size={size} placeholder="Select Month" />
        <br />
        <RangePicker size={size} />
        <br />
        <WeekPicker size={size} placeholder="Select Week" />
      </div>
    )
  }
}

ReactDOM.render(<PickerSizesDemo />, mountNode)
```
