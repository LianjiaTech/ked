---
order: 2
title: 加载更多
---

可通过 `loadMore` 属性实现加载更多功能。

```jsx
import { List, Avatar, Skeleton } from '@ke/ked'

import reqwest from 'reqwest'

const count = 3
const fakeDataUrl = `https://randomuser.me/api/?results=${count}&inc=name,gender,email,nat&noinfo`

class LoadMoreList extends React.Component {
  state = {
    initLoading: true,
    loading: false,
    data: [],
    list: [],
  }

  componentDidMount() {
    this.getData(res => {
      this.setState({
        initLoading: false,
        data: res.results,
        list: res.results,
      })
    })
  }

  getData = callback => {
    reqwest({
      url: fakeDataUrl,
      type: 'json',
      method: 'get',
      contentType: 'application/json',
      success: res => {
        callback(res)
      },
    })
  }

  onLoadMore = () => {
    this.setState({
      loading: true,
      list: this.state.data.concat([...new Array(count)].map(() => ({ loading: true, name: {} }))),
    })
    this.getData(res => {
      const data = this.state.data.concat(res.results)
      this.setState(
        {
          data,
          list: data,
          loading: false,
        },
        () => {
          // Resetting window's offsetTop so as to display react-virtualized demo underfloor.
          // In real scene, you can using public method of react-virtualized:
          // https://stackoverflow.com/questions/46700726/how-to-use-public-method-updateposition-of-react-virtualized
          window.dispatchEvent(new Event('resize'))
        },
      )
    })
  }

  getArrowToBottom = (color, size) => {
    return (
      <span
        style={{
          display: 'inline-block',
          margin: '0 0 2px 8px',
          width: size,
          height: size,
          borderLeft: `${color} solid 2px`,
          borderBottom: `${color} solid 2px`,
          transform: 'rotate(-45deg)',
          borderRadius: '2px',
        }}
      />
    )
  }

  render() {
    const { initLoading, loading, list } = this.state
    const loadMore =
      !initLoading && !loading ? (
        <div
          style={{
            textAlign: 'center',
            marginTop: 16,
            fontSize: '14px',
            color: '#999',
          }}
        >
          <span style={{ cursor: 'pointer' }} onClick={this.onLoadMore}>
            展开更多{this.getArrowToBottom('#999', 9)}
          </span>
        </div>
      ) : null

    return (
      <List
        className="demo-loadmore-list"
        loading={initLoading}
        itemLayout="horizontal"
        loadMore={loadMore}
        dataSource={list}
        renderItem={item => (
          <List.Item
            actions={[
              <a key="edit">edit</a>,
              <a key="more">more{this.getArrowToBottom('#0984f9', 9)}</a>,
            ]}
          >
            <Skeleton avatar title={false} loading={item.loading} active>
              <List.Item.Meta
                avatar={<Avatar src="https://img.ljcdn.com/beike/ked/1617095504422.png" />}
                title={<a href="https://bj.ke.com/">{item.name.last}</a>}
                description="Ked Design, a design language for background applications, is refined by Ant UED Team"
              />
              <div>content</div>
            </Skeleton>
          </List.Item>
        )}
      />
    )
  }
}

ReactDOM.render(<LoadMoreList />, mountNode)
```

```css
.demo-loadmore-list {
  min-height: 350px;
}
```
