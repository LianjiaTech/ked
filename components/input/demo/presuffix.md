---
order: 4
title: 前缀和后缀
---

在输入框上添加前缀或后缀图标。

```jsx
import { Input, Icon } from '@ke/ked'
import '../index.less'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      userName: '',
    }
  }

  emitEmpty = () => {
    this.userNameInput.focus()
    this.setState({ userName: '' })
  }

  onChangeUserName = e => {
    this.setState({ userName: e.target.value })
  }

  render() {
    const { userName } = this.state
    const suffix = userName ? <Icon type="close-circle" onClick={this.emitEmpty} /> : null
    return (
      <Input
        placeholder="Enter your username"
        prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
        suffix={suffix}
        value={userName}
        onChange={this.onChangeUserName}
        ref={node => (this.userNameInput = node)}
      />
    )
  }
}

ReactDOM.render(<App />, mountNode)
```
