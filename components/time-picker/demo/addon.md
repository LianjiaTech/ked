---
order: 3
title: 附加内容
---

在 TimePicker 选择框底部显示自定义的内容。

```jsx
import { TimePicker, Button } from '@ke/ked'

class TimePickerAddonDemo extends React.Component {
  state = { open: false }

  handleOpenChange = open => {
    this.setState({ open })
  }

  handleClose = () => this.setState({ open: false })

  render() {
    return (
      <TimePicker
        open={this.state.open}
        onOpenChange={this.handleOpenChange}
        addon={() => (
          <Button size="small" type="primary" onClick={this.handleClose}>
            Ok
          </Button>
        )}
      />
    )
  }
}

ReactDOM.render(<TimePickerAddonDemo />, mountNode)
```
