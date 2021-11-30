---
order: 1
title: JSX 风格的 API
---

使用 JSX 风格的 API（2.5.0 以后引入）

> 这个只是一个描述 `columns` 的语法糖，所以你不能用其他组件去包裹 `Column` 和 `ColumnGroup`。

```jsx
import { Table, Tag } from '@ke/ked'

const { Column, ColumnGroup } = Table

const data = [
  {
    key: '1',
    firstName: 'John',
    lastName: 'Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    firstName: 'Jim',
    lastName: 'Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    firstName: 'Joe',
    lastName: 'Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
]

ReactDOM.render(
  <Table dataSource={data} bordered>
    <ColumnGroup title="Name">
      <Column title="First Name" dataIndex="firstName" key="firstName" />
      <Column title="Last Name" dataIndex="lastName" key="lastName" />
    </ColumnGroup>

    <Column title="Age" dataIndex="age" key="age" />
    <Column title="Address" dataIndex="address" key="address" />
    <Column
      title="Tags"
      dataIndex="tags"
      key="tags"
      render={tags => (
        <span>
          {tags.map(tag => (
            <Tag key={tag}>
              {tag}
            </Tag>
          ))}
        </span>
      )}
    />
    <Column
      title="Action"
      key="action"
      render={(text, record) => (
        <span>
          <a href="#">Invite {record.lastName}</a>
          <a href="#" style={{ marginLeft: 16 }}>Delete</a>
        </span>
      )}
    />
  </Table>,
  mountNode,
)
```
