---
order: 7
title: 目录
---

内置的目录树，`multiple` 模式支持 `ctrl(Windows)` / `command(Mac)` 复选。

```jsx
import { Tree } from '@ke/ked'

const { DirectoryTree } = Tree
const { TreeNode } = Tree

class Demo extends React.Component {
  onSelect = () => {
    console.log('Trigger Select')
  }

  onExpand = () => {
    console.log('Trigger Expand')
  }

  render() {
    return (
      <DirectoryTree multiple defaultExpandAll onSelect={this.onSelect} onExpand={this.onExpand}>
        <TreeNode title="parent 0" key="0-0">
          <TreeNode title="leaf 0-0" key="0-0-0" isLeaf />
          <TreeNode title="leaf 0-1" key="0-0-1" isLeaf />
        </TreeNode>
        <TreeNode title="parent 1" key="0-1">
          <TreeNode title="leaf 1-0" key="0-1-0" isLeaf />
          <TreeNode title="leaf 1-1" key="0-1-1" isLeaf />
        </TreeNode>
      </DirectoryTree>
    )
  }
}

ReactDOM.render(<Demo />, mountNode)
```
