---
order: 1
title: 热门标签
---

【UI 定制】热门标签 2，可以通过添加 `bordered` 。

```jsx
import { Tag } from '@ke/ked'

function log(e) {
  console.log(e)
}

function preventDefault(e) {
  e.preventDefault()
  console.log('Clicked! But prevent default.')
}

ReactDOM.render(
  <div>
    <Tag bordered>Bordered</Tag>
    <Tag className="ivan test" bordered>
      Tag 1
    </Tag>
    <Tag bordered>
      <a href="https://bj.ke.com/">Link</a>
    </Tag>
    <Tag closable bordered onClose={log}>
      Tag 2
    </Tag>
    <Tag closable bordered onClose={preventDefault}>
      Prevent Default
    </Tag>
  </div>,
  mountNode,
)
```
