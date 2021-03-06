---
order: 2
title: 自定义页脚
---

更复杂的例子，自定义了页脚的按钮，点击提交后进入 loading 状态，完成后关闭。

不需要默认确定取消按钮时，你可以把 `footer` 设为 `null`。

```jsx
import { Modal, Button } from '@ke/ked'

class App extends React.Component {
  state = {
    loading: false,
    visible: false,
  }

  showModal = () => {
    this.setState({
      visible: true,
    })
  }

  handleOk = () => {
    this.setState({ loading: true })
    setTimeout(() => {
      this.setState({ loading: false, visible: false })
    }, 3000)
  }

  handleCancel = () => {
    this.setState({ visible: false })
  }

  render() {
    const { visible, loading } = this.state
    return (
      <div>
        <Button type="primary" onClick={this.showModal}>
          Open Modal with customized footer
        </Button>
        <Modal
          visible={visible}
          title="请确认自定义页脚"
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          footer={[
            <Button key="back" onClick={this.handleCancel}>
              取消
            </Button>,
            <Button key="submit" type="primary" loading={loading} onClick={this.handleOk}>
              确认
            </Button>,
          ]}
        >
          <p>是否确认自定义页脚！</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal>
      </div>
    )
  }
}

ReactDOM.render(<App />, mountNode)
```
