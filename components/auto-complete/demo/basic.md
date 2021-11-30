---
order: 0
title: 基本使用
---

基本使用。通过 dataSource 设置自动完成的数据源

```jsx
import { AutoComplete } from '@ke/ked'

function onSelect(value) {
  console.log('onSelect', value)
}

class Complete extends React.Component {
  state = {
    dataSource: [],
  }

  handleSearch = value => {
    this.setState({
      dataSource: !value ? [] : [value, value + value, value + value + value],
    })
  }

  render() {
    const { dataSource } = this.state
    return (
      <AutoComplete
        dataSource={dataSource}
        style={{ width: 200 }}
        onSelect={onSelect}
        onSearch={this.handleSearch}
        placeholder="input here"
      />
    )
  }
}

ReactDOM.render(<Complete />, mountNode)
```
