---
order: 1
title: 固定状态改变的回调
---

可以获得是否固定的状态。

```jsx
import { Affix, Button } from '@ke/ked'

ReactDOM.render(
  <Affix offsetTop={120} onChange={affixed => console.log(affixed)}>
    <Button>120px to affix top</Button>
  </Affix>,
  mountNode,
)
```
