---
order: 2
title: 确定类目
---

查询模式: 确定类目 示例

```jsx
import { Input, AutoComplete } from '@ke/ked'

const { Option, OptGroup } = AutoComplete
const { Search } = Input

const dataSource = [
  {
    title: 'Libraries',
    children: [
      {
        title: 'KeDesign',
        count: 10000,
      },
      {
        title: 'KeDesign UI',
        count: 10600,
      },
    ],
  },
  {
    title: 'Solutions',
    children: [
      {
        title: 'KeDesign UI',
        count: 60100,
      },
      {
        title: 'KeDesign',
        count: 30010,
      },
    ],
  },
  {
    title: 'Articles',
    children: [
      {
        title: 'KeDesign design language',
        count: 100000,
      },
    ],
  },
]

function renderTitle(title) {
  return (
    <span>
      {title}
      <a
        style={{ float: 'right' }}
        href="https://www.google.com/search?q=Ked"
        target="_blank"
        rel="noopener noreferrer"
      >
        more
      </a>
    </span>
  )
}

const options = dataSource
  .map(group => (
    <OptGroup key={group.title} label={renderTitle(group.title)}>
      {group.children.map(opt => (
        <Option key={opt.title} value={opt.title}>
          {opt.title}
          <span className="certain-search-item-count">{opt.count} people</span>
        </Option>
      ))}
    </OptGroup>
  ))
  .concat([
    <Option disabled key="all" className="show-all">
      <a href="https://www.google.com/search?q=Ked" target="_blank" rel="noopener noreferrer">
        View all results
      </a>
    </Option>,
  ])

function Complete() {
  return (
    <div className="certain-category-search-wrapper" style={{ width: 250 }}>
      <AutoComplete
        className="certain-category-search"
        dropdownClassName="certain-category-search-dropdown"
        dropdownMatchSelectWidth={false}
        dropdownStyle={{ width: 300 }}
        size="large"
        style={{ width: '100%' }}
        dataSource={options}
        placeholder="input here"
        optionLabelProp="value"
      >
        <Search
          placeholder=""
          enterButton="Search"
          size="large"
          onSearch={value => console.log(value)}
        />
      </AutoComplete>
    </div>
  )
}

ReactDOM.render(<Complete />, mountNode)
```
