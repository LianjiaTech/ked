---
order: 3
title:
  zh-CN: 高级搜索
  en-US: Advanced search
---

三列栅格式的表单排列方式，常用于数据表格的高级搜索。

有部分定制的样式代码，由于输入标签长度不确定，需要根据具体情况自行调整。

```jsx
import { Form, Row, Col, Input, Button, Icon } from '@ke/ked'

class AdvancedSearchForm extends React.Component {
  state = {
    expand: false,
  }

  // To generate mock Form.Item
  getFields() {
    const count = this.state.expand ? 10 : 6
    const { getFieldDecorator } = this.props.form
    const children = []
    for (let i = 0; i < 10; i++) {
      children.push(
        <Col span={8} key={i} style={{ display: i < count ? 'block' : 'none' }}>
          <Form.Item label={`Field ${i}`}>
            {getFieldDecorator(`field-${i}`, {
              rules: [
                {
                  required: true,
                  message: 'Input something!',
                },
              ],
            })(<Input placeholder="请输入" />)}
          </Form.Item>
        </Col>,
      )
    }
    return children
  }

  handleSearch = e => {
    e.preventDefault()
    this.props.form.validateFields((err, values) => {
      console.log('Received values of form: ', values)
    })
  }

  handleReset = () => {
    this.props.form.resetFields()
  }

  toggle = () => {
    const { expand } = this.state
    this.setState({ expand: !expand })
  }

  render() {
    const expandStyle = { textAlign: 'right', position: 'absolute', right: 0, bottom: 28, marginTop: 16 };
    const collapseStyle = {
        textAlign: 'right',
    };

    return (
      <Form className="ked-advanced-search-form" onSubmit={this.handleSearch}>
        <Row gutter={24} style={{position: 'relative'}}>{this.getFields()}
          <Col span={this.state.expand ? 8 : 24} style={this.state.expand ? expandStyle : collapseStyle}>
            <a style={{ marginRight: 10, fontSize: 12 }} onClick={this.toggle}>
              Collapse <Icon type={this.state.expand ? 'up' : 'down'} />
            </a>
            <Button style={{ marginLeft: 10, marginRight: 10 }} onClick={this.handleReset}>
              Clear
            </Button>
            <Button type="primary" htmlType="submit">
              Search
            </Button>
          </Col>
        </Row>
      </Form>
    )
  }
}

const WrappedAdvancedSearchForm = Form.create({ name: 'advanced_search' })(AdvancedSearchForm)
ReactDOM.render(
  <div>
    <WrappedAdvancedSearchForm />
    <div className="search-result-list">Search Result List</div>
  </div>,
  mountNode,
)
```

```css
.ked-advanced-search-form {
  padding: 24px;
  background: #fbfbfb;
  border: 1px solid #d9d9d9;
  border-radius: 6px;
}

.ked-advanced-search-form .ked-form-item {
  display: flex;
}

.ked-advanced-search-form .ked-form-item-control-wrapper {
  flex: 1;
}
```

<style>
#components-form-demo-advanced-search .ked-form {
  max-width: none;
}
#components-form-demo-advanced-search .search-result-list {
  margin-top: 16px;
  border: 1px dashed #e9e9e9;
  border-radius: 6px;
  background-color: #fafafa;
  min-height: 200px;
  text-align: center;
  padding-top: 80px;
}
</style>
