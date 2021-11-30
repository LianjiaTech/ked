---
order: 1
title:
  zh-CN: 选择图片
  en-US: Chose image
---

可以通过设置 `image` 为 `Empty.PRESENTED_IMAGE_ERROR` 选择另一种风格的图片。

### 目前支持四种图片

- `Empty.PRESENTED_IMAGE_EMPTY`：未找到结果（默认值）
- `Empty.PRESENTED_IMAGE_NOPERMISSION`：无权限状态
- `Empty.PRESENTED_IMAGE_NOWIFI`：无网络状态
- `Empty.PRESENTED_IMAGE_ERROR`: 错误状态

### 支持自定义标题

- 默认，无标题
- 通过设置 `title='自定义标题'` 来设置标题内容

```jsx
import { Empty, Button, Divider } from '@ke/ked'

ReactDOM.render(
  <div>
    <Empty
      image={Empty.PRESENTED_IMAGE_NOPERMISSION}
      title="无权限"
      description={<span>抱歉，您无权访问当前页面</span>}
    >
      <Button>点击刷新</Button>
    </Empty>
    <Divider />
    <Empty
      image={Empty.PRESENTED_IMAGE_NOWIFI}
      title="无网络"
      description={<span>网络出错了，尝试刷新一下吧</span>}
    >
      <Button>点击刷新</Button>
    </Empty>
    <Divider />
    <Empty
      image={Empty.PRESENTED_IMAGE_ERROR}
      title="出错了"
      description={<span>抱歉，页面出错了</span>}
    >
      <Button>点击刷新</Button>
    </Empty>
  </div>,
  mountNode,
)
```
