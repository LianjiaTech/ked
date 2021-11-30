---
order: 10
title: 自定义校验
---

我们提供了 validateStatus help hasFeedback 等属性，你可以不需要使用 Form.create 和 getFieldDecorator，自己定义校验的时机和内容。

1、validateStatus: 校验状态，可选 'success', 'warning', 'error', 'validating'。

2、hasFeedback：用于给输入框添加反馈图标。

3、help：设置校验文案。

```jsx
import {
  Form,
  Input,
  DatePicker,
  TimePicker,
  Select,
  Cascader,
  InputNumber,
} from '@ke/ked'

const { Option } = Select

// eslint-disable-next-line no-unused-vars
const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 5 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 12 },
  },
}

ReactDOM.render(
  <Form>
    <Form.Item
      label="Fail"
      validateStatus="error"
      help="Should be combination of numbers & alphabets"
    >
      <Input placeholder="unavailable choice" id="error" />
    </Form.Item>

    <Form.Item label="Warning" validateStatus="warning">
      <Input placeholder="Warning" id="warning" />
    </Form.Item>

    <Form.Item
      label="Validating"
      hasFeedback
      validateStatus="validating"
      help="The information is being validated..."
    >
      <Input placeholder="I'm the content is being validated" id="validating" />
    </Form.Item>

    <Form.Item label="Success" hasFeedback validateStatus="success">
      <Input placeholder="I'm the content" id="success" />
    </Form.Item>

    <Form.Item label="Warning" hasFeedback validateStatus="warning">
      <Input placeholder="Warning" id="warning2" />
    </Form.Item>

    <Form.Item
      label="Fail"
      hasFeedback
      validateStatus="error"
      help="Should be combination of numbers & alphabets"
    >
      <Input placeholder="unavailable choice" id="error2" />
    </Form.Item>

    <Form.Item label="Success" hasFeedback validateStatus="success">
      <DatePicker style={{ width: '100%' }} />
    </Form.Item>

    <Form.Item label="Warning" hasFeedback validateStatus="warning">
      <TimePicker style={{ width: '100%' }} />
    </Form.Item>

    <Form.Item label="Error" hasFeedback validateStatus="error">
      <Select defaultValue="1">
        <Option value="1">Option 1</Option>
        <Option value="2">Option 2</Option>
        <Option value="3">Option 3</Option>
      </Select>
    </Form.Item>

    <Form.Item
      label="Validating"
      hasFeedback
      validateStatus="validating"
      help="The information is being validated..."
    >
      <Cascader defaultValue={['1']} options={[]} />
    </Form.Item>

    <Form.Item label="inline" style={{ marginBottom: 0 }}>
      <Form.Item
        validateStatus="error"
        help="Please select the correct date"
        style={{ display: 'inline-block' }}
      >
        <DatePicker />
      </Form.Item>
      <span style={{ display: 'inline-block', width: '24px' }}>-</span>
      <Form.Item style={{ display: 'inline-block' }}>
        <DatePicker />
      </Form.Item>
    </Form.Item>

    <Form.Item label="Success" hasFeedback validateStatus="success">
      <InputNumber style={{ width: '100%' }} />
    </Form.Item>
  </Form>,
  mountNode,
)
```
