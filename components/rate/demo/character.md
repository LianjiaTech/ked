---
order: 5
title: 其他字符
---

可以将星星替换为其他字符，比如字母，数字，字体图标甚至中文。

```jsx
import { Rate, Icon } from '@ke/ked'

ReactDOM.render(
  <div>
    <Rate character={<Icon type="heart" />} allowHalf />
    <br />
    <Rate character="A" allowHalf style={{ fontSize: 36 }} />
    <br />
    <Rate character="好" allowHalf />
  </div>,
  mountNode,
)
```
