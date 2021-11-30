---
order: 10
title: 卡片式页签容器
---

用于容器顶部，需要一点额外的样式覆盖。

```jsx
import { Tabs } from '@ke/ked'

const { TabPane } = Tabs

ReactDOM.render(
  <div className="card-container">
    <Tabs type="card">
      <TabPane tab="Tab Title 1" key="1">
        <p>Content of Tab Pane 1</p>
        <p>Content of Tab Pane 1</p>
        <p>Content of Tab Pane 1</p>
      </TabPane>
      <TabPane tab="Tab Title 2" key="2">
        <p>Content of Tab Pane 2</p>
        <p>Content of Tab Pane 2</p>
        <p>Content of Tab Pane 2</p>
      </TabPane>
      <TabPane tab="Tab Title 3" key="3">
        <p>Content of Tab Pane 3</p>
        <p>Content of Tab Pane 3</p>
        <p>Content of Tab Pane 3</p>
      </TabPane>
    </Tabs>
  </div>,
  mountNode,
)
```

```css
.card-container > .ked-tabs-card > .ked-tabs-content {
  height: 120px;
  margin-top: -16px;
}

.card-container > .ked-tabs-card > .ked-tabs-content > .ked-tabs-tabpane {
  background: #fff;
  padding: 16px;
}

.card-container > .ked-tabs-card > .ked-tabs-bar {
  border-color: #fff;
}

.card-container > .ked-tabs-card > .ked-tabs-bar .ked-tabs-tab {
  border-color: transparent;
  background: transparent;
}

.card-container > .ked-tabs-card > .ked-tabs-bar .ked-tabs-tab-active {
  border-color: #fff;
  background: #fff;
}
```

<style>
#components-tabs-demo-demo1 .code-box-demo {
  background: #F5F5F5;
  overflow: hidden;
  padding: 24px;
}
</style>
