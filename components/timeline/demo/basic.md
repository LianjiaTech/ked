---
order: 0
title: 基本用法
---

基本的时间轴。

```jsx
import { Timeline } from '@ke/ked'

ReactDOM.render(
  <Timeline>
    <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
    <Timeline.Item>Solve initial network problems 2015-09-01</Timeline.Item>
    <Timeline.Item passed>Technical testing 2015-09-01</Timeline.Item>
    <Timeline.Item passed>Network problems being solved 2015-09-01</Timeline.Item>
  </Timeline>,
  mountNode,
)
```
