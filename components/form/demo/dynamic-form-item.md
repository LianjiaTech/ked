---
order: 5
title: 动态增减表单项
---

动态增加、减少表单项。

```jsx
import { Form, Input, Icon, Button } from '@ke/ked'

let id = 0

class DynamicFieldSet extends React.Component {
  remove = k => {
    const { form } = this.props
    // can use data-binding to get
    const keys = form.getFieldValue('keys')
    // We need at least one passenger
    if (keys.length === 1) {
      return
    }

    // can use data-binding to set
    form.setFieldsValue({
      keys: keys.filter(key => key !== k),
    })
  }

  add = () => {
    const { form } = this.props
    // can use data-binding to get
    const keys = form.getFieldValue('keys')
    const nextKeys = keys.concat(++id)
    // can use data-binding to set
    // important! notify form to detect changes
    form.setFieldsValue({
      keys: nextKeys,
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values)
      }
    })
  }

  render() {
    const { getFieldDecorator, getFieldValue } = this.props.form
    // eslint-disable-next-line no-unused-vars
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 4 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 20 },
      },
    }
    // eslint-disable-next-line no-unused-vars
    const formItemLayoutWithOutLabel = {
      wrapperCol: {
        xs: { span: 24, offset: 0 },
        sm: { span: 20, offset: 4 },
      },
    }
    getFieldDecorator('keys', { initialValue: [] })
    const keys = getFieldValue('keys')
    const formItems = keys.map((k, index) => (
      <Form.Item
      // {...(index === 0 ? formItemLayout : formItemLayoutWithOutLabel)}
        label={index === 0 ? 'Passengers' : ''}
        required={false}
        key={k}
      >
        {getFieldDecorator(`names[${k}]`, {
          validateTrigger: ['onChange', 'onBlur'],
          rules: [
            {
              required: true,
              whitespace: true,
              message:
                "Please input passenger's name or delete this field." /* eslint-disable-line */,
            },
          ],
        })(<Input placeholder="passenger name" style={{ width: '60%', marginRight: 16 }} />)}
        {keys.length > 1 ? (
          <Icon
            className="dynamic-delete-button"
            type="minus-circle-o"
            style={{color: '#0984f9'}}
            disabled={keys.length === 1}
            onClick={() => this.remove(k)}
          />
        ) : null}
      </Form.Item>
    ))
    return (
      <Form onSubmit={this.handleSubmit}>
        {formItems}
        <div style={{height: '1px', borderTop: '1px dashed #ddd'}} />
        <Form.Item>
          <span onClick={this.add} style={{fontSize: 14, color: '#0984f9', verticalAlign: 'middle'}}><Icon type="plus-circle" /> 添加</span>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    )
  }
}

const WrappedDynamicFieldSet = Form.create({ name: 'dynamic_form_item' })(DynamicFieldSet)
ReactDOM.render(<WrappedDynamicFieldSet />, mountNode)
```
