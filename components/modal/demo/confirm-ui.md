---
order: 12
title: 新设计的confirm
---

第一个对话框。

```jsx
import { Modal, Button, Icon } from '@ke/ked'

class App extends React.Component {
  state = {
    visible: false,
  }

  showModal = () => {
    this.setState({
      visible: true,
    })
  }

  handleOk = e => {
    console.log(e)
    this.setState({
      visible: false,
    })
  }

  handleCancel = e => {
    console.log(e)
    this.setState({
      visible: false,
    })
  }

  render() {
    return (
      <div>
        <Button type="primary" onClick={this.showModal}>
          Open Modal
        </Button>
        <Modal
          antManWarning
          title={
            <div className="ked-modal-confirm-title">
              <Icon type="question-circle" theme="filled" />
              <span>Do you Want to delete these items?</span>
            </div>
          }
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
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

<style>
.ked-modal p {
  margin: 0;
}
</style>
