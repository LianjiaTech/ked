---
order: 6
title: 自定义指示符
---

使用自定义指示符。

```jsx
import { Spin, Icon } from '@ke/ked'

const antIcon = <Icon type="loading" style={{ fontSize: 24 }} spin />

ReactDOM.render(<Spin indicator={antIcon} />, mountNode)
```
