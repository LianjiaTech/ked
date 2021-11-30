---
order: 2
title: 图标
---

有图标的标签。

```jsx
import { Tabs, Icon } from '@ke/ked'

const { TabPane } = Tabs

ReactDOM.render(
  <Tabs defaultActiveKey="2">
    <TabPane
      tab={
        <span>
          <Icon type="apple" />
          Tab 1
        </span>
      }
      key="1"
    >
      Tab 1
    </TabPane>
    <TabPane
      tab={
        <span>
          <Icon type="android" />
          Tab 2
        </span>
      }
      key="2"
    >
      Tab 2
    </TabPane>
  </Tabs>,
  mountNode,
)
```
