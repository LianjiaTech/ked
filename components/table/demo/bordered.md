---
order: 11
title: 带边框
---

添加表格边框线，页头和页脚。

```jsx
import { Table } from '@ke/ked'

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    render: text => <a href="#">{text}</a>,
  },
  {
    title: 'Cash Assets',
    className: 'column-money',
    dataIndex: 'money',
  },
  {
    title: 'Address',
    dataIndex: 'address',
  },
]

const data = [
  {
    key: '1',
    name: 'John Brown',
    money: '￥300,000.00',
    address: 'New York No. 1 Lake Park',
  },
  {
    key: '2',
    name: 'Jim Green',
    money: '￥1,256,000.00',
    address: 'London No. 1 Lake Park',
  },
  {
    key: '3',
    name: 'Joe Black',
    money: '￥120,000.00',
    address: 'Sidney No. 1 Lake Park',
  },
]

ReactDOM.render(
  <Table
    columns={columns}
    dataSource={data}
    bordered
    title={() => 'Header'}
    footer={() => 'Footer'}
  />,
  mountNode,
)
```

```css
th.column-money,
td.column-money {
  text-align: right !important;
}
```
