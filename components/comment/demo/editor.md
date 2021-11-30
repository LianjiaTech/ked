---
order: 3
title: 回复框
---

## 回复框

评论编辑器组件提供了相同样式的封装以支持自定义评论编辑器。

```jsx
import { Comment, Avatar, Form, Button, List, Input } from '@ke/ked'
import moment from 'moment'

const { TextArea } = Input

const CommentList = ({ comments }) => (
  <List
    dataSource={comments}
    header={`${comments.length} ${comments.length > 1 ? 'replies' : 'reply'}`}
    itemLayout="horizontal"
    renderItem={props => <Comment {...props} />}
  />
)

const Editor = ({ onChange, onSubmit, submitting, value }) => (
  <div>
    <Form.Item>
      <TextArea rows={4} onChange={onChange} value={value} />
    </Form.Item>
    <Form.Item>
      <Button htmlType="submit" loading={submitting} onClick={onSubmit} type="primary">
        Add Comment
      </Button>
    </Form.Item>
  </div>
)

class App extends React.Component {
  state = {
    comments: [],
    submitting: false,
    value: '',
  }

  handleSubmit = () => {
    if (!this.state.value) {
      return
    }

    this.setState({
      submitting: true,
    })

    setTimeout(() => {
      this.setState({
        submitting: false,
        value: '',
        comments: [
          {
            author: 'Han Solo',
            avatar: 'https://img.ljcdn.com/beike/ked/1617095504422.png',
            content: <p>{this.state.value}</p>,
            datetime: moment().fromNow(),
          },
          ...this.state.comments,
        ],
      })
    }, 1000)
  }

  handleChange = e => {
    this.setState({
      value: e.target.value,
    })
  }

  render() {
    const { comments, submitting, value } = this.state

    return (
      <div>
        {comments.length > 0 && <CommentList comments={comments} />}
        <Comment
          avatar={<Avatar src="https://img.ljcdn.com/beike/ked/1617095504422.png" alt="Han Solo" />}
          content={
            <Editor
              onChange={this.handleChange}
              onSubmit={this.handleSubmit}
              submitting={submitting}
              value={value}
            />
          }
        />
      </div>
    )
  }
}

ReactDOM.render(<App />, mountNode)
```
