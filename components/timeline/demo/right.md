---
order: 4
title: 右侧时间轴点
---

时间轴点可以在内容的右边。

```jsx
import { Timeline, Icon } from '@ke/ked'

ReactDOM.render(
  <Timeline mode="right">
    <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
    <Timeline.Item>Solve initial network problems 2015-09-01</Timeline.Item>
    <Timeline.Item dot={<Icon type="clock-circle-o" style={{ fontSize: '16px' }} />} color="red">
      Technical testing 2015-09-01
    </Timeline.Item>
    <Timeline.Item>Network problems being solved 2015-09-01</Timeline.Item>
  </Timeline>,
  mountNode,
)
```
