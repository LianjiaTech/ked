---
order: 6
title: 控制 ToolTip 的显示
---

当 tooltipVisible 为 true 时，将始终显示 ToolTip；反之则始终不显示，即使在拖动、移入时也是如此。

```jsx
import { Slider } from '@ke/ked'

ReactDOM.render(<Slider defaultValue={30} tooltipVisible />, mountNode)
```
