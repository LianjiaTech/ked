---
order: 0
title: 基本
---

最简单的下拉菜单。

```jsx
import { Menu, Dropdown, Icon } from '@ke/ked'

const menu = (
  <Menu>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="https://bj.ke.com/">
        1st menu item
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="https://bj.ke.com/ershoufang/">
        2nd menu item
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="https://bj.fang.ke.com/loupan">
        3rd menu item
      </a>
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
