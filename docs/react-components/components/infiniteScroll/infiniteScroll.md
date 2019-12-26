## InfiniteScroll 无限滚动

滚动至底部时，加载更多数据。


### 基础用法
基础用法
:::demo 基础用法
```js
constructor(props) {
  super(props);
  this.state = {
    count: 10,
    loading: false,
    noMore: false,
  };
}

componentDidMount() {
  this.infiniteScroll = InfiniteScroll.bind(
     document.querySelector('.infinite-list'),
    {
      callback: this.load.bind(this)
    }
  );
}

componentWillUnmount() {
  this.infiniteScroll.unbind(document.querySelector('.infinite-list'));
}

load(cb) {
  this.state.loading = true;
  this.setState({});
  setTimeout(
    _=> {
      this.state.loading = false;
      if(this.state.count === 20){
        cb();
        this.state.noMore = true;
        this.setState({});
        return;
      }            
      this.state.count += 2;
      this.setState({});
    },
     2000
  )
}

render() {
  return (
    <div className="infinite-list">
      <ul className="infinite-ul">
        {
          Array.from({length: this.state.count}).map(
            (item, index) => <li key={index} className="infinite-list-item">{index}</li>
          )
        }
      </ul>
      <div className="infinite-footer">
        {this.state.loading && <p>加载中...</p>}
        {this.state.noMore && <p>没有更多了</p>}
      </div>
    </div>
  )
}
```
:::


### API

**Infinite-scroll props**

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| infinite-scroll-disabled | 是否禁止 | boolean | - | false |
| infinite-scroll-delay | 节流延时 | string | - | 500 |
| infinite-scroll-distance | 触发回调距离 | string | - | 100 |

**Infinite-scroll Methods**

| 参数      | 说明          | 回调参数 |
|---------- |-------------- |-------------- |
| callback | 是否禁止，其回调的第一个参数为函数，当结束滚动加载时需调用这个函数 | - |


