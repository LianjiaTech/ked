---
order: 3
title: 可选择
---

可通过 `CheckableTag` 实现类似 Checkbox 的效果，点击切换选中效果。

> 该组件为完全受控组件，不支持非受控用法。

```jsx
import { Tag } from '@ke/ked'

const { CheckableTag } = Tag

class MyTag extends React.Component {
  state = { checked: true }

  handleChange = checked => {
    this.setState({ checked })
  }

  render() {
    return (
      <CheckableTag {...this.props} checked={this.state.checked} onChange={this.handleChange} />
    )
  }
}

ReactDOM.render(
  <div>
    <MyTag>Tag1</MyTag>
    <MyTag>Tag2</MyTag>
    <MyTag>Tag3</MyTag>
  </div>,
  mountNode,
)
```
