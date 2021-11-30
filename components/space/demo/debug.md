---
order: 99
title: 多样的 Child
debug: true
---

Debug usage

```jsx
import { Space, Button, Popconfirm } from '@ke/ked';

ReactDOM.render(
  <Space>
    <>
      Button
      <Button>Button</Button>
    </>
    Button
    <Popconfirm title="Are you sure delete this task?" okText="Yes" cancelText="No">
      <Button>Delete</Button>
    </Popconfirm>
    <Popconfirm title="Are you sure delete this task?" okText="Yes" cancelText="No">
      <Button disabled>Delete</Button>
    </Popconfirm>
    {null}
    {false}
    {1}
    Button
    {null}
    {undefined}
  </Space>,
  mountNode,
);
```
