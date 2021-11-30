---
order: 1
title: 禁用
---

禁用某一项。

```jsx
import { Tabs } from '@ke/ked'

const { TabPane } = Tabs

ReactDOM.render(
  <Tabs defaultActiveKey="1">
    <TabPane tab="Tab 1" key="1">
      Tab 1
    </TabPane>
    <TabPane tab="Tab 2" disabled key="2">
      Tab 2
    </TabPane>
    <TabPane tab="Tab 3" key="3">
      Tab 3
    </TabPane>
  </Tabs>,
  mountNode,
)
```
