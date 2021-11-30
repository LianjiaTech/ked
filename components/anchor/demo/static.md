---
order: 2
title: 静态位置
---

不浮动，状态不随页面滚动变化。

```jsx
import { Anchor } from '@ke/ked'

const { Link } = Anchor

ReactDOM.render(
  <Anchor affix={false}>
    <Link href="#components-anchor-demo-basic" title="Basic demo" />
    <Link href="#components-anchor-demo-static" title="Static demo" />
    <Link href="#API" title="API">
      <Link href="#Anchor-Props" title="Anchor Props" />
      <Link href="#Link-Props" title="Link Props" />
    </Link>
  </Anchor>,
  mountNode,
)
```
