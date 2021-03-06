---
order: 17
title: 固定表头
---

方便一页内展示大量数据。

需要指定 column 的 `width` 属性，否则列头和内容可能不对齐。（建议留一列不设宽度以适应弹性布局）

```jsx
import { Table } from '@ke/ked'

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    width: 150,
  },
  {
    title: 'Age',
    dataIndex: 'age',
    width: 150,
  },
  {
    title: 'Address',
    dataIndex: 'address',
  },
]

const data = []
for (let i = 0; i < 100; i++) {
  data.push({
    key: i,
    name: `Edward King ${i}`,
    age: 32,
    address: `London, Park Lane no. ${i}`,
  })
}

ReactDOM.render(
  <Table columns={columns} dataSource={data} pagination={{ pageSize: 50 }} scroll={{ y: 240 }} />,
  mountNode,
)
```
