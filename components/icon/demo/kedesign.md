---
order: 0
title: kedesign图标库
---

kedesign 图标库

```jsx
import { Icon } from '@ke/ked'

const MyIcon = Icon.createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_1764686_rhonkny4xp.js', // 在 iconfont.cn 上生成
})

ReactDOM.render(
  <div className="icons-list">
    <MyIcon type="icon-icon-bfq-mute" />
    <MyIcon type="icon-icon-bfq-yinliang" />
    <MyIcon type="icon-tishiicon" />
    <MyIcon type="icon-app-dialog-error" />
    <MyIcon type="icon-app-dialog-success" />
    <MyIcon type="icon-app-steps-ing" />
    <MyIcon type="icon-app-share-wechat" />
    <MyIcon type="icon-app-share-weibo" />
    <MyIcon type="icon-app-share-IM" />
    <MyIcon type="icon-app-share-lianjie" />
  </div>,
  mountNode,
)
```
