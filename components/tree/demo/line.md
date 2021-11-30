---
order: 5
title: 连接线
---

带连接线的树。

```jsx
import { Tree } from '@ke/ked'

const { TreeNode } = Tree

class Demo extends React.Component {
  onSelect = (selectedKeys, info) => {
    console.log('selected', selectedKeys, info)
  }

  render() {
    return (
      <Tree showLine defaultExpandedKeys={['0-0-0']} onSelect={this.onSelect}>
        <TreeNode title="parent 1" key="0-0">
          <TreeNode title="parent 1-0" key="0-0-0">
            <TreeNode title="leaf" key="0-0-0-0" />
            <TreeNode title="leaf" key="0-0-0-1" />
            <TreeNode title="leaf" key="0-0-0-2" />
          </TreeNode>
          <TreeNode title="parent 1-1" key="0-0-1">
            <TreeNode title="leaf" key="0-0-1-0" />
          </TreeNode>
          <TreeNode title="parent 1-2" key="0-0-2">
            <TreeNode title="leaf" key="0-0-2-0" />
            <TreeNode title="leaf" key="0-0-2-1" />
          </TreeNode>
        </TreeNode>
      </Tree>
    )
  }
}

ReactDOM.render(<Demo />, mountNode)
```
