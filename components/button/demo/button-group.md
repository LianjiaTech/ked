---
order: 6
title: 按钮组合
---

可以将多个 `Button` 放入 `Button.Group` 的容器中。

通过设置 `size` 为 `large` `small` 分别把按钮组合设为大、小尺寸。若不设置 `size`，则尺寸为中。

```jsx
import { Button } from '@ke/ked'

const ButtonGroup = Button.Group

ReactDOM.render(
  <div>
    <h4>Basic</h4>
    <ButtonGroup>
      <Button>Cancel</Button>
      <Button>OK</Button>
    </ButtonGroup>
    <ButtonGroup>
      <Button>L</Button>
      <Button>M</Button>
      <Button>R</Button>
    </ButtonGroup>

    <h4>With Icon</h4>
    <ButtonGroup>
      <Button type="primary">Go back</Button>
      <Button type="primary">Go forward</Button>
    </ButtonGroup>
    <ButtonGroup>
      <Button type="primary" icon="cloud" />
      <Button type="primary" icon="cloud-download" />
    </ButtonGroup>
  </div>,
  mountNode,
)
```

<style>
#components-button-demo-button-group h4 {
  margin: 16px 0;
  font-size: 14px;
  line-height: 1;
  font-weight: normal;
}
#components-button-demo-button-group h4:first-child {
  margin-top: 0;
}
#components-button-demo-button-group .ked-btn-group {
  margin-right: 8px;
}
</style>
