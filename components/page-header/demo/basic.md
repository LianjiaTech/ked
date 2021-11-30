---
order: 1
title: 标准样式
---

## 标准样式

标准页头，适合使用在需要简单描述的场景。

```jsx
import { PageHeader } from '@ke/ked';

ReactDOM.render(
  <PageHeader
    style={{
      border: '1px solid rgb(235, 237, 240)',
    }}
    onBack={() => null}
    title="Title"
    subTitle="This is a subtitle"
  />,
  mountNode,
);
```
