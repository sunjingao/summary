## Pagination 分页

当数据量过多时，使用分页分解数据。


### 基本用法
:::demo 基础用法
```js
constructor(props) {
  super(props);
  this.state = {
    paginationOption: {
      total: 500
    }
  };
}

paginationPageChange(item){
  console.log("pagination");
  console.log(item);
}

render() {
  return (
    <Pagination options={this.state.paginationOption} onPageChange={this.paginationPageChange}/>
  );
}
```
:::


### 展示button样式
条目以button样式进行展示
:::demo 设置 background 属性为true
```js
constructor(props) {
  super(props);
  this.state = {
    paginationOption: {
      isButton: true,
      total: 500
    },
  }
}

paginationPageChange(item){
  console.log("pagination");
  console.log(item);
}

render() {
  
  return (
    <Pagination options={this.state.paginationOption} onPageChange={this.paginationPageChange}/>
  )
}
```
:::


### 自定义布局
自定义展示内容及展示顺序
:::demo 设置 layout 属性控制 展示内容及展示顺序
```js
constructor(props) {
  super(props);
  this.state = {
    paginationOption: {
      layout: ['prev', 'content', 'next', 'sizes', 'jumper','total'],
      total: 500
    },
  };
}

paginationPageChange(item){
  console.log("pagination");
  console.log(item);
}

selectChange(value){
  console.log("selectChange");
  console.log(value);
}

render() {
  return (
    <Pagination options={this.state.paginationOption} onPageChange={this.paginationPageChange} selectChange={this.selectChange}/>
  );
}
```
:::


### API

**Pagination props**

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| options | 配置信息 | object | - | - |
| options.layout | 设置布局展示内容及展示顺序 | array | 'prev', 'content', 'next', 'sizes', 'jumper' | ['prev', 'content', 'next'] |
| options.isButton  | 展示为button样式 | boolean | - | - |
| options.total | 总条数 | Number | - | 0 |
| options.currentPage |当前选中页 | Number | - | 0 |
| options.pageSizeSelectedValue | 默认选中条数 | Number | - | 10 |
| options.pageSizeOption | 每页条数控制 | Array | - | [] |

**Pagination Events**

| 事件名称 | 说明 | 回调参数 |
|---------- |-------- |---------- |
| onSelectChange | 下拉框改变时触发 | 每页条数 |
| onPageChange | 选中的内容改变时触发 | 当前选中的页数 |


