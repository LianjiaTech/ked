---
order: 0
title: 基本用法
---

相邻组件水平间距。

```jsx
import { Button, Space, Upload, Popconfirm, Icon } from '@ke/ked';

function SpaceDemo() {
  return (
    <Space>
      Space
      <Button type="primary">Button</Button>
      <Upload>
        <Button>
          <Icon type="upload" /> Click to Upload
        </Button>
      </Upload>
      <Popconfirm title="Are you sure delete this task?" okText="Yes" cancelText="No">
        <Button>Confirm</Button>
      </Popconfirm>
    </Space>
  );
}

ReactDOM.render(<SpaceDemo />, mountNode);
```
