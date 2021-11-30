---
order: 6
title: 滚动加载
---

结合 [react-infinite-scroller](https://github.com/CassetteRocks/react-infinite-scroller) 实现滚动自动加载列表。

```jsx
import { List, message, Avatar, Spin } from '@ke/ked'
import reqwest from 'reqwest'

import InfiniteScroll from 'react-infinite-scroller'

const fakeDataUrl = 'https://randomuser.me/api/?results=5&inc=name,gender,email,nat&noinfo'

class InfiniteListExample extends React.Component {
  state = {
    data: [],
    loading: false,
    hasMore: true,
  }

  componentDidMount() {
    this.fetchData(res => {
      this.setState({
        data: res.results,
      })
    })
  }

  fetchData = callback => {
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

  handleInfiniteOnLoad = () => {
    let { data } = this.state
    this.setState({
      loading: true,
    })
    if (data.length > 14) {
      message.warning('Infinite List loaded all')
      this.setState({
        hasMore: false,
        loading: false,
      })
      return
    }
    this.fetchData(res => {
      data = data.concat(res.results)
      this.setState({
        data,
        loading: false,
      })
    })
  }

  render() {
    return (
      <div className="demo-infinite-container">
        <InfiniteScroll
          initialLoad={false}
          pageStart={0}
          loadMore={this.handleInfiniteOnLoad}
          hasMore={!this.state.loading && this.state.hasMore}
          useWindow={false}
        >
          <List
            dataSource={this.state.data}
            renderItem={item => (
              <List.Item key={item.id}>
                <List.Item.Meta
                  avatar={<Avatar src="https://img.ljcdn.com/beike/ked/1617095504422.png" />}
                  title={<a href="https://bj.ke.com/">{item.name.last}</a>}
                  description={item.email}
                />
                <div>Content</div>
              </List.Item>
            )}
          >
            {this.state.loading && this.state.hasMore && (
              <div className="demo-loading-container">
                <Spin />
              </div>
            )}
          </List>
        </InfiniteScroll>
      </div>
    )
  }
}

ReactDOM.render(<InfiniteListExample />, mountNode)
```

```css
.demo-infinite-container {
  height: 300px;
  padding: 8px 24px;
  overflow: auto;
  border: 1px solid #e8e8e8;
  border-radius: 4px;
}
.demo-loading-container {
  position: absolute;
  bottom: 40px;
  width: 100%;
  text-align: center;
}
```
