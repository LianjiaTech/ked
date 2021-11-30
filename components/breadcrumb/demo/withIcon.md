---
order: 1
title: 带有图标的
---

图标放在文字前面。

```jsx
import { Breadcrumb,Icon} from '@ke/ked'

ReactDOM.render(
  <Breadcrumb>
    <Breadcrumb.Item href="">
      <Icon type="home" />
    </Breadcrumb.Item>
    <Breadcrumb.Item href="">
      <Icon type="user" />
      <span>Application List</span>
    </Breadcrumb.Item>
    <Breadcrumb.Item>Application</Breadcrumb.Item>
  </Breadcrumb>,
  mountNode,
)
```
