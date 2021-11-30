---
order: 3
title: 栅格排序
---

列排序。

通过使用 `push` 和 `pull` 类就可以很容易的改变列（column）的顺序。

```jsx
import { Row, Col } from '@ke/ked'

ReactDOM.render(
  <div>
    <Row>
      <Col span={18} push={6}>
        col-18 col-push-6
      </Col>
      <Col span={6} pull={18}>
        col-6 col-pull-18
      </Col>
    </Row>
  </div>,
  mountNode,
)
```
