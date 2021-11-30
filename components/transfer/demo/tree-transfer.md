---
order: 6
title:
  zh-CN: 树穿梭框
  en-US: Tree Transfer
---

使用 Tree 组件作为自定义渲染列表。

```jsx
import { Transfer, Tree } from '@ke/ked'

const { TreeNode } = Tree

// Customize Table Transfer
const isChecked = (selectedKeys, eventKey) => selectedKeys.indexOf(eventKey) !== -1

const generateTree = (treeNodes = [], checkedKeys = []) =>
  treeNodes.map(({ children, ...props }) => (
    /* eslint-disable-next-line */
    <TreeNode {...props} disabled={checkedKeys.includes(props.key)}>
      {generateTree(children, checkedKeys)}
    </TreeNode>
  ))

const TreeTransfer = ({ dataSource, targetKeys, ...restProps }) => {
  const transferDataSource = []
  function flatten(list = []) {
    list.forEach(item => {
      transferDataSource.push(item)
      flatten(item.children)
    })
  }
  flatten(dataSource)

  return (
    <Transfer
      {...restProps}
      targetKeys={targetKeys}
      dataSource={transferDataSource}
      className="tree-transfer"
      render={item => item.title}
      showSelectAll={false}
    >
      {({ direction, onItemSelect, selectedKeys }) => {
        if (direction === 'left') {
          const checkedKeys = [...selectedKeys, ...targetKeys]
          return (
            <Tree
              blockNode
              checkable
              checkStrictly
              defaultExpandAll
              checkedKeys={checkedKeys}
              onCheck={(
                _,
                {
                  node: {
                    props: { eventKey },
                  },
                },
              ) => {
                onItemSelect(eventKey, !isChecked(checkedKeys, eventKey))
              }}
              onSelect={(
                _,
                {
                  node: {
                    props: { eventKey },
                  },
                },
              ) => {
                onItemSelect(eventKey, !isChecked(checkedKeys, eventKey))
              }}
            >
              {generateTree(dataSource, targetKeys)}
            </Tree>
          )
        }
      }}
    </Transfer>
  )
}

const treeData = [
  { key: '0-0', title: '0-0' },
  {
    key: '0-1',
    title: '0-1',
    children: [
      { key: '0-1-0', title: '0-1-0' },
      { key: '0-1-1', title: '0-1-1' },
    ],
  },
  { key: '0-2', title: '0-3' },
]

class App extends React.Component {
  state = {
    targetKeys: [],
  }

  onChange = targetKeys => {
    console.log('Target Keys:', targetKeys)
    this.setState({ targetKeys })
  }

  render() {
    const { targetKeys } = this.state
    return (
      <div>
        <TreeTransfer dataSource={treeData} targetKeys={targetKeys} onChange={this.onChange} />
      </div>
    )
  }
}

ReactDOM.render(<App />, mountNode)
```

<style>
.tree-transfer .ked-transfer-list:first-child {
  width: 50%;
  flex: none;
}
</style>
