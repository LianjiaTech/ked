---
order: 8
title: 带页签的卡片
---

可承载更多内容。

```jsx
import { Card } from '@ke/ked'

const tabList = [
  {
    key: 'tab1',
    tab: 'tab1',
  },
  {
    key: 'tab2',
    tab: 'tab2',
  },
]

const contentList = {
  tab1: <p>content1</p>,
  tab2: <p>content2</p>,
}

const tabListNoTitle = [
  {
    key: 'article',
    tab: 'article',
  },
  {
    key: 'app',
    tab: 'app',
  },
  {
    key: 'project',
    tab: 'project',
  },
]

const contentListNoTitle = {
  article: <p>article content</p>,
  app: <p>app content</p>,
  project: <p>project content</p>,
}

class TabsCard extends React.Component {
  state = {
    key: 'tab1',
    noTitleKey: 'app',
  }

  onTabChange = (key, type) => {
    console.log(key, type)
    this.setState({ [type]: key })
  }

  render() {
    return (
      <div>
        <Card
          style={{ width: '100%' }}
          title="Card title"
          bordered={false}
          extra={<a href="#">更多&gt;</a>}
          tabList={tabList}
          activeTabKey={this.state.key}
          onTabChange={key => {
            this.onTabChange(key, 'key')
          }}
        >
          {contentList[this.state.key]}
        </Card>
        <br />
        <br />
        <Card
          style={{ width: '100%' }}
          tabList={tabListNoTitle}
          bordered={false}
          activeTabKey={this.state.noTitleKey}
          onTabChange={key => {
            this.onTabChange(key, 'noTitleKey')
          }}
        >
          {contentListNoTitle[this.state.noTitleKey]}
        </Card>
      </div>
    )
  }
}

ReactDOM.render(<TabsCard />, mountNode)
```
