---
order: 2
title: 修改延时
---

自定义时长 `10s`，默认时长为 `3s`。

```jsx
import { message, Button } from '@ke/ked'

const success = () => {
  message.success('This is a prompt message for success, and it will disappear in 10 seconds', 10)
}

ReactDOM.render(<Button onClick={success}>Customized display duration</Button>, mountNode)
```
