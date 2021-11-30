---
order: 3
title: 加载中
---

进行全局 loading，异步自行移除。

```jsx
import { message, Button } from '@ke/ked'

const success = () => {
  const hide = message.loading('Action in progress..', 0)
  // Dismiss manually and asynchronously
  setTimeout(hide, 2500)
}

ReactDOM.render(<Button onClick={success}>Display a loading indicator</Button>, mountNode)
```
