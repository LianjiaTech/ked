---
order: 3
title: 异步数据加载
---

点击展开节点，动态加载数据。

```jsx
import { Tree } from '@ke/ked'

const { TreeNode } = Tree

class Demo extends React.Component {
  state = {
    treeData: [
      { title: 'Expand to load', key: '0' },
      { title: 'Expand to load', key: '1' },
      { title: 'Tree Node', key: '2', isLeaf: true },
    ],
  }

  onLoadData = treeNode =>
    new Promise(resolve => {
      if (treeNode.props.children) {
        resolve()
        return
      }
      setTimeout(() => {
        treeNode.props.dataRef.children = [
          { title: 'Child Node', key: `${treeNode.props.eventKey}-0` },
          { title: 'Child Node', key: `${treeNode.props.eventKey}-1` },
        ]
        this.setState({
          treeData: [...this.state.treeData],
        })
        resolve()
      }, 1000)
    })

  renderTreeNodes = data =>
    data.map(item => {
      if (item.children) {
        return (
          <TreeNode title={item.title} key={item.key} dataRef={item}>
            {this.renderTreeNodes(item.children)}
          </TreeNode>
        )
      }
      return <TreeNode key={item.key} {...item} dataRef={item} />
    })

  render() {
    return <Tree loadData={this.onLoadData}>{this.renderTreeNodes(this.state.treeData)}</Tree>
  }
}

ReactDOM.render(<Demo />, mountNode)
```
