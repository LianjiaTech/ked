---
order: 6
title: 位置
---

有四个位置，`tabPosition="left|right|top|bottom"`。

```jsx
import { Tabs, Select } from '@ke/ked'

const { TabPane } = Tabs

class Demo extends React.Component {
  state = {
    tabPosition: 'top',
  }

  changeTabPosition = tabPosition => {
    this.setState({ tabPosition })
  }

  render() {
    return (
      <div>
        <div style={{ marginBottom: 16 }}>
          Tab position：
          <Select
            value={this.state.tabPosition}
            onChange={this.changeTabPosition}
            dropdownMatchSelectWidth={false}
          >
            <Select.Option value="top">top</Select.Option>
            <Select.Option value="bottom">bottom</Select.Option>
            <Select.Option value="left">left</Select.Option>
            <Select.Option value="right">right</Select.Option>
          </Select>
        </div>
        <Tabs tabPosition={this.state.tabPosition}>
          <TabPane tab="Tab 1" key="1">
            Content of Tab 1
          </TabPane>
          <TabPane tab="Tab 2" key="2">
            Content of Tab 2
          </TabPane>
          <TabPane tab="Tab 3" key="3">
            Content of Tab 3
          </TabPane>
        </Tabs>
      </div>
    )
  }
}

ReactDOM.render(<Demo />, mountNode)
```
