---
order: 0
title: 基本
---

最简单的用法。

```jsx
import { Anchor } from '@ke/ked'

const { Link } = Anchor

ReactDOM.render(
  <Anchor>
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

<style>
.code-box-demo .ked-affix {
  z-index: 11;
}
</style>
