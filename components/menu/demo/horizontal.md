---
order: 0
title: 顶部导航
---

水平的顶部导航菜单。

```jsx
import { Menu, Icon } from '@ke/ked'

const { SubMenu } = Menu

const MenuItemGroup = Menu.ItemGroup

class App extends React.Component {
  state = {
    current: 'mail',
  }

  handleClick = e => {
    console.log('click ', e)
    this.setState({
      current: e.key,
    })
  }

  render() {
    return (
      <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
        <Menu.Item key="mail">
          <Icon type="mail" />
          Navigation One
        </Menu.Item>
        <Menu.Item key="app" disabled>
          <Icon type="appstore" />
          Navigation Two
        </Menu.Item>
        <SubMenu
          title={
            <span className="submenu-title-wrapper">
              <Icon type="setting" />
              Navigation Three - Submenu
            </span>
          }
        >
          <MenuItemGroup title="Item 1">
            <Menu.Item key="setting:1">Option 1</Menu.Item>
            <Menu.Item key="setting:2">Option 2</Menu.Item>
          </MenuItemGroup>
          <MenuItemGroup title="Item 2">
            <Menu.Item key="setting:3">Option 3</Menu.Item>
            <Menu.Item key="setting:4">Option 4</Menu.Item>
          </MenuItemGroup>
        </SubMenu>
        <Menu.Item key="ked">
          <a href="https://bj.ke.com/" target="_blank" rel="noopener noreferrer">
            Navigation Four - Link
          </a>
        </Menu.Item>
      </Menu>
    )
  }
}

ReactDOM.render(<App />, mountNode)
```
