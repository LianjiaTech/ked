---
order: 3
title: 触发方式
---

默认是移入触发菜单，可以点击触发。

```jsx
import { Menu, Dropdown, Icon } from '@ke/ked'

const menu = (
  <Menu>
    <Menu.Item key="0">
      <a href="http://bj.ke.com/">1st menu item</a>
    </Menu.Item>
    <Menu.Item key="1">
      <a href="http://bj.ke.com/ershoufang/">2nd menu item</a>
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item key="3">3rd menu item</Menu.Item>
  </Menu>
)

ReactDOM.render(
  <Dropdown overlay={menu} trigger={['click']}>
    <a className="ked-dropdown-link" href="#">
      Click me <Icon type="down" />
    </a>
  </Dropdown>,
  mountNode,
)
```
