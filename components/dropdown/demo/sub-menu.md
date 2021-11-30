---
order: 6
title: 多级菜单
---

传入的菜单里有多个层级。

```jsx
import { Menu, Dropdown, Icon } from '@ke/ked'

const { SubMenu } = Menu

const menu = (
  <Menu>
    <Menu.Item>1st menu item</Menu.Item>
    <Menu.Item>2nd menu item</Menu.Item>
    <SubMenu title="sub menu">
      <Menu.Item>3rd menu item</Menu.Item>
      <Menu.Item>4th menu item</Menu.Item>
    </SubMenu>
    <SubMenu title="disabled sub menu" disabled>
      <Menu.Item>5d menu item</Menu.Item>
      <Menu.Item>6th menu item</Menu.Item>
    </SubMenu>
  </Menu>
)

ReactDOM.render(
  <Dropdown overlay={menu}>
    <a className="ked-dropdown-link" href="#">
      Cascading menu <Icon type="down" />
    </a>
  </Dropdown>,
  mountNode,
)
```
