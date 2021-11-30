---
order: 12
title: 表单布局
---

表单有三种布局。

```jsx
import { Form, Input, Button, Radio } from '@ke/ked'

class FormLayoutDemo extends React.Component {
  constructor() {
    super()
    this.state = {
      formLayout: 'horizontal',
    }
  }

  handleFormLayoutChange = e => {
    this.setState({ formLayout: e.target.value })
  }

  render() {
    const { formLayout } = this.state
    const formItemLayout =
      formLayout === 'horizontal'
        ? {
            labelCol: { span: 4 },
            wrapperCol: { span: 14 },
          }
        : null
    const buttonItemLayout =
      formLayout === 'horizontal'
        ? {
            wrapperCol: { span: 14, offset: 4 },
          }
        : null
    return (
      <div>
        <Form layout={formLayout}>
          <Form.Item label="Form Layout" {...formItemLayout}>
            <Radio.Group defaultValue="horizontal" onChange={this.handleFormLayoutChange}>
              <Radio.Button value="horizontal">Horizontal</Radio.Button>
              <Radio.Button value="vertical">Vertical</Radio.Button>
              <Radio.Button value="inline">Inline</Radio.Button>
            </Radio.Group>
          </Form.Item>
          <Form.Item label="Field A" {...formItemLayout}>
            <Input placeholder="请输入" />
          </Form.Item>
          <Form.Item label="Field B" {...formItemLayout}>
            <Input placeholder="请输入" />
          </Form.Item>
          <Form.Item {...buttonItemLayout}>
            <Button type="primary">Submit</Button>
          </Form.Item>
        </Form>
      </div>
    )
  }
}

ReactDOM.render(<FormLayoutDemo />, mountNode)
```
