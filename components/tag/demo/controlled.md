---
order: 5
title: 控制关闭状态
---

通过 `visible` 属性控制关闭状态。

```jsx
import { Tag, Button } from '@ke/ked'

class Demo extends React.Component {
  state = {
    visible: true,
  }

  render() {
    return (
      <div>
        <Tag
          closable
          visible={this.state.visible}
          onClose={() => this.setState({ visible: false })}
        >
          Movies
        </Tag>
        <br />
        <Button size="small" onClick={() => this.setState({ visible: !this.state.visible })}>
          Toggle
        </Button>
      </div>
    )
  }
}

ReactDOM.render(<Demo />, mountNode)
```
