---
order: 2
title: 其他元素
---

分割线和不可用菜单项。

```jsx
import { Menu, Dropdown, Icon } from '@ke/ked'

const menu = (
  <Menu>
    <Menu.Item key="0">
      <a target="_blank" rel="noopener noreferrer" href="http://www.ke.com/">
        1st menu item
      </a>
    </Menu.Item>
    <Menu.Item key="1">
      <a target="_blank" rel="noopener noreferrer" href="https://bj.ke.com/ershoufang/">
        2nd menu item
      </a>
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item key="3" disabled>
      3rd menu item（disabled）
    </Menu.Item>
  </Menu>
)

ReactDOM.render(
  <Dropdown overlay={menu}>
    <a className="ked-dropdown-link" href="#">
      Hover me <Icon type="down" />
    </a>
  </Dropdown>,
  mountNode,
)
```
