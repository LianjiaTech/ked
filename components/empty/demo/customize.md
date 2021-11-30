---
order: 2
title: 自定义
---

自定义图片、描述、附属内容。

```jsx
import { Empty, Button } from '@ke/ked'

ReactDOM.render(
  <Empty
    image="https://gw.alipayobjects.com/mdn/miniapp_social/afts/img/A*pevERLJC9v0AAAAAAAAAAABjAQAAAQ/original"
    description={
      <span>
        Customize <a href="#API">Description</a>
      </span>
    }
  >
    <Button type="primary">立即创建</Button>
  </Empty>,
  mountNode,
)
```
