---
order: 5
title: 禁用时间
---

禁用时间选择。

```jsx
import { TimePicker } from '@ke/ked'
import moment from 'moment'

ReactDOM.render(<TimePicker defaultValue={moment('12:08:23', 'HH:mm:ss')} disabled />, mountNode)
```
