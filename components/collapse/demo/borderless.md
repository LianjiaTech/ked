---
order: 6
title: 无边框
---

无边框风格的折叠面板

```jsx
import { Collapse, Icon } from '@ke/ked'

const { Panel } = Collapse

const text = (
  <p style={{ paddingLeft: 24 }}>
    A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found
    as a welcome guest in many households across the world.
  </p>
)

ReactDOM.render(
  <Collapse
    bordered={false}
    defaultActiveKey={['1']}
    expandIconPosition="right"
    expandIcon={({ isActive }) => (
      <span style={{ color: '#999' }}>
        <span style={{ marginRight: '5px' }}>全部</span>
        <Icon type="right" rotate={isActive ? 90 : 270} />
      </span>
    )}
  >
    <Panel header="This is panel header 1111" key="1">
      {text}
    </Panel>
    <Panel header="This is panel header 2" key="2">
      {text}
    </Panel>
    <Panel header="This is panel header 3" key="3">
      {text}
    </Panel>
  </Collapse>,
  mountNode,
)
```
