---
order: 2
title: 搜索框
---

带有搜索按钮的输入框

```jsx
import { Input } from '@ke/ked'

const { Search } = Input

ReactDOM.render(
  <div>
    <Search
      placeholder="input search text"
      enterButton="Search"
      onSearch={value => console.log(value)}
      style={{ width: 200 }}
    />
    <br />
    <br />
    <Search
      placeholder="input search text"
      onSearch={value => console.log(value)}
      enterButton="Search"
    />
    <br />
    <br />
    <Search
      placeholder="input search text"
      enterButton="Search"
      size="large"
      onSearch={value => console.log(value)}
    />
  </div>,
  mountNode,
)
```
