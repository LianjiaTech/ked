---
order: 11
title: 表单联动
---

使用 setFieldsValue 来动态设置其他控件的值。

```jsx
import { Form, Select, Input, Button } from '@ke/ked'

const { Option } = Select

class App extends React.Component {
  handleSubmit = e => {
    e.preventDefault()
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values)
      }
    })
  }

  handleSelectChange = value => {
    console.log(value)
    this.props.form.setFieldsValue({
      note: `Hi, ${value === 'male' ? 'man' : 'lady'}!`,
    })
  }

  render() {
    const { getFieldDecorator } = this.props.form
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Item label="Note" labelCol={{ span: 5 }} wrapperCol={{ span: 12 }}>
          {getFieldDecorator('note', {
            rules: [{ required: true, message: 'Please input your note!' }],
          })(<Input />)}
        </Form.Item>
        <Form.Item label="Gender" labelCol={{ span: 5 }} wrapperCol={{ span: 12 }}>
          {getFieldDecorator('gender', {
            rules: [{ required: true, message: 'Please select your gender!' }],
          })(
            <Select
              placeholder="Select a option and change input text above"
              onChange={this.handleSelectChange}
            >
              <Option value="male">male</Option>
              <Option value="female">female</Option>
            </Select>,
          )}
        </Form.Item>
        <Form.Item wrapperCol={{ span: 12, offset: 5 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    )
  }
}

const WrappedApp = Form.create({ name: 'coordinated' })(App)

ReactDOM.render(<WrappedApp />, mountNode)
```
