---
order: 3
title: 自定义 onClick 事件
---

点击锚点不记录历史。

```jsx
import { Anchor } from '@ke/ked'

const { Link } = Anchor

const handleClick = (e, link) => {
  e.preventDefault()
  console.log(link)
}

ReactDOM.render(
  <Anchor affix={false} onClick={handleClick}>
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
