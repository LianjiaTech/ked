---
order: 0
title: 折叠面板
---

可以同时展开多个面板，这个例子默认展开了第一个。

```jsx
import { Collapse } from '@ke/ked'

const { Panel } = Collapse

function callback(key) {
  console.log(key)
}

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`

ReactDOM.render(
  <Collapse defaultActiveKey={['1']} onChange={callback}>
    <Panel header="This is panel header 1" key="1">
      <p>{text}</p>
    </Panel>
    <Panel header="This is panel header 2" key="2">
      <p>{text}</p>
    </Panel>
    <Panel header="This is panel header 3" key="3" disabled>
      <p>{text}</p>
    </Panel>
  </Collapse>,
  mountNode,
)
```

<style>
p {
  margin: 0;
}
</style>
