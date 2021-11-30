---
order: 99
title: 分隔符
---

相邻组件分隔符。

```jsx
import { Space, Typography, Divider } from '@ke/ked';

const { Text } = Typography;
function SpaceSplit() {
  return (
    <Space split={<Divider type="vertical" />}>
      <Text>Text</Text>
      <Text>Text</Text>
      <Text>Text</Text>
    </Space>
  );
}

ReactDOM.render(<SpaceSplit />, mountNode);
```
