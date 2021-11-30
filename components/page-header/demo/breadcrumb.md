---
order: 3
title: 带面包屑页头
---

## 带面包屑页头

带面包屑页头，适合层级比较深的页面，让用户可以快速导航。

```jsx
import { PageHeader } from '@ke/ked';

const routes = [
  {
    path: 'index',
    breadcrumbName: 'First-level Menu',
  },
  {
    path: 'first',
    breadcrumbName: 'Second-level Menu',
  },
  {
    path: 'second',
    breadcrumbName: 'Third-level Menu',
  },
];

ReactDOM.render(
  <PageHeader
    style={{
      border: '1px solid rgb(235, 237, 240)',
    }}
    title="Title"
    breadcrumb={{ routes }}
    subTitle="This is a subtitle"
  />,
  mountNode,
);
```
