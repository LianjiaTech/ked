---
order: 1
title: 自定义样式
---

可以自定义回到顶部按钮的样式，限制宽高：`40px * 40px`。

```jsx
import { BackTop } from '@ke/ked'

ReactDOM.render(
  <div>
    <BackTop>
      <div className="ked-back-top-inner">UP</div>
    </BackTop>
    Scroll down to see the bottom-right
    <strong style={{ color: '#1088e9' }}> blue </strong>
    button.
  </div>,
  mountNode,
)
```

```css
#components-back-top-demo-custom .ked-back-top {
  bottom: 100px;
}
#components-back-top-demo-custom .ked-back-top-inner {
  height: 40px;
  width: 40px;
  line-height: 40px;
  border-radius: 4px;
  background-color: #1088e9;
  color: #fff;
  text-align: center;
  font-size: 20px;
}
```
