---
order: 30
title: 合并表头
---

边框线表格。

```jsx
import { Table } from '@ke/ked'

const columns = [
  {
    title: 'Other',
    width: '50%',
    children: [
      {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
        sorter: (a, b) => a.age - b.age,
      },
      {
        title: 'Address',
        dataIndex: 'Adress',
        key: 'Adress',
        render: (text, record) => record.name,
      },
    ],
  },
  {
    title: 'Company',
    width: '50%',
    children: [
      {
        title: 'Company Address',
        dataIndex: 'companyAddress',
        key: 'companyAddress',
      },
      {
        title: 'Company Name',
        dataIndex: 'companyName',
        key: 'companyName',
      },
    ],
  },
]

const data = []
for (let i = 0; i < 100; i++) {
  data.push({
    key: i,
    name: 'John Brown',
    age: i + 1,
    street: 'Lake Park',
    building: 'C',
    number: 2035,
    companyAddress: 'Lake Street 42',
    companyName: 'SoftLake Co',
    gender: 'M',
  })
}

ReactDOM.render(
  <Table columns={columns} dataSource={data} size="middle" bordered mergeHeader />,
  mountNode,
)
```
