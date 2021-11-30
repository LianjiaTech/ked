---
order: 4
title: 触发事件
---

点击菜单项后会触发事件，用户可以通过相应的菜单项 key 进行不同的操作。

```jsx
import { Menu, Dropdown, Icon, message } from '@ke/ked'

const onClick = ({ key }) => {
  message.info(`Click on item ${key}`)
}

const menu = (
  <Menu onClick={onClick}>
    <Menu.Item key="1">1st menu item</Menu.Item>
    <Menu.Item key="2">2nd memu item</Menu.Item>
    <Menu.Item key="3">3rd menu item</Menu.Item>
  </Menu>
)

ReactDOM.render(
  <Dropdown overlay={menu}>
    <a className="ked-dropdown-link" href="#">
      Hover me, Click menu item <Icon type="down" />
    </a>
  </Dropdown>,
  mountNode,
)
```
