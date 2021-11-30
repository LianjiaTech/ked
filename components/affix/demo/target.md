---
order: 2
title: 滚动容器
---

用 `target` 设置 `Affix` 需要监听其滚动事件的元素，默认为 `window`。

```jsx
import { Affix, Button } from '@ke/ked'

class Demo extends React.Component {
  render() {
    return (
      <div
        className="scrollable-container"
        ref={node => {
          this.container = node
        }}
      >
        <div className="background">
          <Affix target={() => this.container}>
            <Button type="primary">Fixed at the top of container</Button>
          </Affix>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<Demo />, mountNode)
```

<style>
#components-affix-demo-target .scrollable-container {
  height: 100px;
  overflow-y: scroll;
}
#components-affix-demo-target .background {
  padding-top: 60px;
  height: 300px;
  background-image: url('https://zos.alipayobjects.com/rmsportal/RmjwQiJorKyobvI.jpg');
}
</style>
