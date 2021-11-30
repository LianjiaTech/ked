---
order: 6
title: 时间类控件
---

时间类组件的 value 类型为 moment 对象，所以在提交服务器前需要预处理。

```jsx
import { Form, DatePicker, TimePicker, Button } from '@ke/ked'

const { MonthPicker, RangePicker } = DatePicker

class TimeRelatedForm extends React.Component {
  handleSubmit = e => {
    e.preventDefault()

    this.props.form.validateFields((err, fieldsValue) => {
      if (err) {
        return
      }

      // Should format date value before submit.
      const rangeValue = fieldsValue['range-picker']
      const rangeTimeValue = fieldsValue['range-time-picker']
      const values = {
        ...fieldsValue,
        'date-picker': fieldsValue['date-picker'].format('YYYY-MM-DD'),
        'date-time-picker': fieldsValue['date-time-picker'].format('YYYY-MM-DD HH:mm:ss'),
        'month-picker': fieldsValue['month-picker'].format('YYYY-MM'),
        'range-picker': [rangeValue[0].format('YYYY-MM-DD'), rangeValue[1].format('YYYY-MM-DD')],
        'range-time-picker': [
          rangeTimeValue[0].format('YYYY-MM-DD HH:mm:ss'),
          rangeTimeValue[1].format('YYYY-MM-DD HH:mm:ss'),
        ],
        'time-picker': fieldsValue['time-picker'].format('HH:mm:ss'),
      }
      console.log('Received values of form: ', values)
    })
  }

  render() {
    const { getFieldDecorator } = this.props.form
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
      },
    }
    const calendarStyle = {
        width: '250px',
    };
    const config = {
      rules: [{ type: 'object', required: true, message: 'Please select time!' }],
    }
    const rangeConfig = {
      rules: [{ type: 'array', required: true, message: 'Please select time!' }],
    }
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Item {...formItemLayout} label="DatePicker">
          {getFieldDecorator('date-picker', config)(<DatePicker style={calendarStyle} />)}
        </Form.Item>
        <Form.Item {...formItemLayout} label="DatePicker[showTime]">
          {getFieldDecorator('date-time-picker', config)(
            <DatePicker showTime format="YYYY-MM-DD HH:mm:ss" style={calendarStyle} />,
          )}
        </Form.Item>
        <Form.Item {...formItemLayout} label="MonthPicker">
          {getFieldDecorator('month-picker', config)(<MonthPicker style={calendarStyle} />)}
        </Form.Item>
        <Form.Item {...formItemLayout} label="RangePicker">
          {getFieldDecorator('range-picker', rangeConfig)(<RangePicker style={calendarStyle} />)}
        </Form.Item>
        <Form.Item {...formItemLayout} label="RangePicker[showTime]">
          {getFieldDecorator('range-time-picker', rangeConfig)(
            <RangePicker showTime format="YYYY-MM-DD HH:mm:ss" style={calendarStyle} />,
          )}
        </Form.Item>
        <Form.Item {...formItemLayout} label="TimePicker">
          {getFieldDecorator('time-picker', config)(<TimePicker style={calendarStyle} />)}
        </Form.Item>
        <Form.Item
          wrapperCol={{
            xs: { span: 24, offset: 0 },
            sm: { span: 16, offset: 8 },
          }}
        >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    )
  }
}

const WrappedTimeRelatedForm = Form.create({ name: 'time_related_controls' })(TimeRelatedForm)

ReactDOM.render(<WrappedTimeRelatedForm />, mountNode)
```
