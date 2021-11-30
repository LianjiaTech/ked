---
order: 6
title: 自定义文字格式
---

`format` 属性指定格式。

```jsx
import { Progress } from '@ke/ked'

ReactDOM.render(
  <div>
    <Progress type="circle" percent={75} format={percent => `${percent} Days`} />
    <Progress type="circle" percent={100} format={() => 'Done'} />
  </div>,
  mountNode,
)
```

<style>
div.ked-progress-circle,
div.ked-progress-line {
  margin-right: 8px;
  margin-bottom: 8px;
}
</style>
