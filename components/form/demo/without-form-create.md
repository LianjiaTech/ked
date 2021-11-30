---
order: 9
title: 自行处理表单数据
---

使用 Form.create 处理后的表单具有自动收集数据并校验的功能，但如果您不需要这个功能，或者默认的行为无法满足业务需求，可以选择不使用 Form.create 并自行处理数据。

```jsx
import { Form, InputNumber } from '@ke/ked'

function validatePrimeNumber(number) {
  if (number === 11) {
    return {
      validateStatus: 'success',
      errorMsg: null,
    }
  }
  return {
    validateStatus: 'error',
    errorMsg: 'The prime between 8 and 12 is 11!',
  }
}

class RawForm extends React.Component {
  state = {
    number: {
      value: 11,
    },
  }

  handleNumberChange = value => {
    this.setState({
      number: {
        ...validatePrimeNumber(value),
        value,
      },
    })
  }

  render() {
    const formItemLayout = {
      labelCol: { span: 7 },
      wrapperCol: { span: 12 },
    }
    const { number } = this.state
    const tips =
      'A prime is a natural number greater than 1 that has no positive divisors other than 1 and itself.'
    return (
      <Form>
        <Form.Item
          {...formItemLayout}
          label="Prime between 8 & 12"
          validateStatus={number.validateStatus}
          help={number.errorMsg || tips}
        >
          <InputNumber min={8} max={12} value={number.value} onChange={this.handleNumberChange} />
        </Form.Item>
      </Form>
    )
  }
}

ReactDOM.render(<RawForm />, mountNode)
```
