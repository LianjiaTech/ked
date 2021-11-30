---
order: 8
title:
  zh-CN: 表单数据存储于上层组件
  en-US: Store Form Data into Upper Component
---

通过使用 `onFieldsChange` 与 `mapPropsToFields`，可以把表单的数据存储到上层组件或者 [Redux](https://github.com/reactjs/redux)、[dva](https://github.com/dvajs/dva) 中，更多可参考 [rc-form 示例](http://react-component.github.io/form/examples/redux.html)。

**注意：**`mapPropsToFields` 里面返回的表单域数据必须使用 `Form.createFormField` 包装。

```jsx
import { Form, Input } from '@ke/ked'

const CustomizedForm = Form.create({
  name: 'global_state',
  onFieldsChange(props, changedFields) {
    props.onChange(changedFields)
  },
  mapPropsToFields(props) {
    return {
      username: Form.createFormField({
        ...props.username,
        value: props.username.value,
      }),
    }
  },
  onValuesChange(_, values) {
    console.log(values)
  },
})(props => {
  const { getFieldDecorator } = props.form
  return (
    <Form layout="inline">
      <Form.Item label="Username">
        {getFieldDecorator('username', {
          rules: [{ required: true, message: 'Username is required!' }],
        })(<Input />)}
      </Form.Item>
    </Form>
  )
})

class Demo extends React.Component {
  state = {
    fields: {
      username: {
        value: 'benjycui',
      },
    },
  }

  handleFormChange = changedFields => {
    this.setState(({ fields }) => ({
      fields: { ...fields, ...changedFields },
    }))
  }

  render() {
    const { fields } = this.state
    return (
      <div>
        <CustomizedForm {...fields} onChange={this.handleFormChange} />
        <pre className="language-bash">{JSON.stringify(fields, null, 2)}</pre>
      </div>
    )
  }
}

ReactDOM.render(<Demo />, mountNode)
```

<style>
#components-form-demo-global-state .language-bash {
  max-width: 400px;
  border-radius: 6px;
  margin-top: 24px;
}
</style>
