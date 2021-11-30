---
order: 2
title: 嵌套评论
---

## 嵌套评论

评论可以嵌套。

```jsx
import { Comment, Avatar } from '@ke/ked'

const ExampleComment = ({ children }) => (
  <Comment
    actions={[<span key="comment-nested-reply-to">Reply to</span>]}
    author={<a>Han Solo</a>}
    avatar={<Avatar src="https://img.ljcdn.com/beike/ked/1617095504422.png" alt="Han Solo" />}
    content={
      <p>
        We supply a series of design principles, practical patterns and high quality design
        resources (Sketch and Axure).
      </p>
    }
  >
    {children}
  </Comment>
)

ReactDOM.render(
  <ExampleComment>
    <ExampleComment>
      <ExampleComment />
      <ExampleComment />
    </ExampleComment>
  </ExampleComment>,
  mountNode,
)
```
