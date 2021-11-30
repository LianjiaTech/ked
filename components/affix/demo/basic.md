---
order: 0
title: 基本
---

最简单的用法。

```jsx
import { Affix, Button } from '@ke/ked'

class Demo extends React.Component {
  state = {
    top: 10,
    bottom: 10,
  }

  render() {
    return (
      <div>
        <Affix offsetTop={this.state.top}>
          <Button
            type="primary"
            onClick={() => {
              this.setState({
                top: this.state.top + 10,
              })
            }}
          >
            Affix top
          </Button>
        </Affix>
        <br />
        <Affix offsetBottom={this.state.bottom}>
          <Button
            type="primary"
            onClick={() => {
              this.setState({
                bottom: this.state.bottom + 10,
              })
            }}
          >
            Affix bottom
          </Button>
        </Affix>
      </div>
    )
  }
}

ReactDOM.render(<Demo />, mountNode)
```
