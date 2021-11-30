---
order: 5
title: 查询模式 - 不确定类目
---

查询模式: 不确定类目 示例。

```jsx
import { Input, AutoComplete } from '@ke/ked'

import '../index.less'

const { Option } = AutoComplete
const { Search } = Input

function onSelect(value) {
  console.log('onSelect', value)
}

function getRandomInt(max, min = 0) {
  return Math.floor(Math.random() * (max - min + 1)) + min // eslint-disable-line no-mixed-operators
}

function searchResult(query) {
  return new Array(getRandomInt(5))
    .join('.')
    .split('.')
    .map((item, idx) => ({
      query,
      category: `${query}${idx}`,
      count: getRandomInt(200, 100),
    }))
}

function renderOption(item) {
  return (
    <Option key={item.category} text={item.category}>
      {item.query} 在
      <a
        href={`https://s.taobao.com/search?q=${item.query}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        {item.category}
      </a>
      区块中
      <span className="global-search-item-count">约 {item.count} 个结果</span>
    </Option>
  )
}

class Complete extends React.Component {
  state = {
    dataSource: [],
  }

  handleSearch = value => {
    this.setState({
      dataSource: value ? searchResult(value) : [],
    })
  }

  render() {
    const { dataSource } = this.state
    return (
      <div className="global-search-wrapper" style={{ width: 250 }}>
        <AutoComplete
          className="global-search"
          size="large"
          style={{ width: '100%' }}
          dataSource={dataSource.map(renderOption)}
          onSelect={onSelect}
          onSearch={this.handleSearch}
          placeholder="input here"
          optionLabelProp="text"
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
}

ReactDOM.render(<Complete />, mountNode)
```
