---
order: 5
title:
  zh-CN: 额外节点
  en-US: Extra node
---

可以同时展开多个面板，这个例子默认展开了第一个。

```jsx
import { Collapse, Icon, Select } from '@ke/ked'

const { Panel } = Collapse
const { Option } = Select

function callback(key) {
  console.log(key)
}

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`

const genExtra = () => (
  <Icon
    type="setting"
    onClick={event => {
      // If you don't want click extra trigger collapse, you can prevent this:
      event.stopPropagation()
    }}
  />
)

class Demo extends React.Component {
  state = {
    expandIconPosition: 'left',
  }

  onPositionChange = expandIconPosition => {
    this.setState({ expandIconPosition })
  }

  render() {
    const { expandIconPosition } = this.state
    return (
      <div>
        <Collapse
          defaultActiveKey={['1']}
          onChange={callback}
          expandIconPosition={expandIconPosition}
        >
          <Panel header="This is panel header 1" key="1" extra={genExtra()}>
            <div>{text}</div>
          </Panel>
          <Panel header="This is panel header 2" key="2" extra={genExtra()}>
            <div>{text}</div>
          </Panel>
          <Panel header="This is panel header 3" key="3" extra={genExtra()}>
            <div>{text}</div>
          </Panel>
        </Collapse>
        <br />
        Expand Icon Position:{' '}
        <Select value={expandIconPosition} onChange={this.onPositionChange}>
          <Option value="left">left</Option>
          <Option value="right">right</Option>
        </Select>
      </div>
    )
  }
}

ReactDOM.render(<Demo />, mountNode)
```
