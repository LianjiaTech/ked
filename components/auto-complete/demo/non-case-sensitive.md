---
order: 4
title: 不区分大小写
---

不区分大小写的 AutoComplete

```jsx
import { AutoComplete } from '@ke/ked'

const dataSource = ['Burns Bay Road', 'Downing Street', 'Wall Street']

function Complete() {
  return (
    <AutoComplete
      style={{ width: 200 }}
      dataSource={dataSource}
      placeholder="try to type `b`"
      filterOption={(inputValue, option) =>
        option.props.children.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
      } /* eslint-disable-line */
    />
  )
}

ReactDOM.render(<Complete />, mountNode)
```
