---
order: 7
title: 平滑地卸载
---

平滑、自然的卸载提示。

```jsx
import { Alert } from '@ke/ked'

class App extends React.Component {
  state = {
    visible: true,
  }

  handleClose = () => {
    this.setState({ visible: false })
  }

  render() {
    return (
      <div>
        {this.state.visible ? (
          <Alert
            message="Alert Message Text"
            type="success"
            closable
            afterClose={this.handleClose}
          />
        ) : null}
        <p>placeholder text here</p>
      </div>
    )
  }
}

ReactDOM.render(<App />, mountNode)
```
