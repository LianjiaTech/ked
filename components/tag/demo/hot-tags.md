---
order: 4
title: 热门标签
---

选择你感兴趣的话题。

```jsx
import { Tag } from '@ke/ked'

const { CheckableTag } = Tag

const tagsFromServer = ['Movies', 'Books', 'Music', 'Sports']

class HotTags extends React.Component {
  state = {
    selectedTags: ['Movies'],
  }

  handleChange(tag, checked) {
    const { selectedTags } = this.state
    const nextSelectedTags = checked ? [...selectedTags, tag] : selectedTags.filter(t => t !== tag)
    console.log('You are interested in: ', nextSelectedTags)
    this.setState({ selectedTags: nextSelectedTags })
  }

  render() {
    const { selectedTags } = this.state
    return (
      <div>
        <h6 style={{ marginRight: 8, display: 'inline' }}>Categories:</h6>
        {tagsFromServer.map(tag => (
          <CheckableTag
            key={tag}
            checked={selectedTags.indexOf(tag) > -1}
            onChange={checked => this.handleChange(tag, checked)}
          >
            {tag}
          </CheckableTag>
        ))}
      </div>
    )
  }
}

ReactDOM.render(<HotTags />, mountNode)
```
