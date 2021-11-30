---
order: 7
title: 菜单隐藏方式
---

默认是点击关闭菜单，可以关闭此功能。

```jsx
import { Menu, Dropdown, Icon } from '@ke/ked'

class OverlayVisible extends React.Component {
  state = {
    visible: false,
  }

  handleMenuClick = e => {
    if (e.key === '3') {
      this.setState({ visible: false })
    }
  }

  handleVisibleChange = flag => {
    this.setState({ visible: flag })
  }

  render() {
    const menu = (
      <Menu onClick={this.handleMenuClick}>
        <Menu.Item key="1">Clicking me will not close the menu.</Menu.Item>
        <Menu.Item key="2">Clicking me will not close the menu also.</Menu.Item>
        <Menu.Item key="3">Clicking me will close the menu</Menu.Item>
      </Menu>
    )
    return (
      <Dropdown
        overlay={menu}
        onVisibleChange={this.handleVisibleChange}
        visible={this.state.visible}
      >
        <a className="ked-dropdown-link" href="#">
          Hover me <Icon type="down" />
        </a>
      </Dropdown>
    )
  }
}

ReactDOM.render(<OverlayVisible />, mountNode)
```
