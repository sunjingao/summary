## Image 图片

图片容器，在保留原生img的特性下，支持懒加载，自定义占位、加载失败等。


### 基本用法
基础用法
:::demo 基础用法
```js
constructor(props) {
  super(props);
  this.state = {
    fits: ['fill', 'contain', 'cover', 'none', 'scale-down'],
    url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
  };
}

render() {
  
  let children = this.state.fits.map(
    (item, index) => 
       <div className="block" key={index}>
        <span className="demonstration">{item}</span>
        <Image
          style={{width: "100px", height: "100px"}}
          src={this.state.url}
          fit={item}
        />
      </div>
  );
  
  return (
    <div className="demo-image">
      {children}
    </div>
  );
}
```
:::


### 占位内容
定义加载中展示的内容及加载失败展示的内容
:::demo 设置altText定义加载中展示的内容，设置errorText属性或设置errorComponent插槽定义加载失败展示的内容
```js
constructor(props) {
  super(props);
  this.state = {
    src: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg'
  };
}

render() {
  
  return (
    
    <React.Fragment>
    
        <div className="demo-image">
          <div className="block">
            <span>文字</span>
            <Image src={this.state.src} altText="加载中" className="imageSize"/>
          </div>
          <div className="block">
            <span>自定义</span>
            <Image src={this.state.src} style={{width: "300px", height: "200px"}} altComponent={
              <div>
                加载中<span>...</span>
              </div>
            }/>
          </div>
        </div>
    
        <div className="demo-image mt60">
          <div className="block">
            <span>文字</span>
            <Image errorText="加载失败" className="imageSize"/>
          </div>
          <div className="block">
            <span>自定义内容</span>
            <Image className="imageSize" errorComponent={
              <div>
                <i className="iconfont icon-error"/>
              </div>
            }/>
          </div>
        </div>
    </React.Fragment>
  );
}
```
:::


### 懒加载
懒加载，v-image需要设置好宽高
:::demo 懒加载，设置isLazy为true
```js
constructor(props) {
  super(props);
  this.state = {
    urls: [
      'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
      'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg',
      'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg',
      'https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg',
      'https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg',
      'https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg',
      'https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg'
    ]
  };
}

render() {
  
  let children = this.state.urls.map(
    (url, index) => React.cloneElement(
      <Image />,
      {
        key: index,
        isLazy: true,
        src: url, 
        className: "lazy-block"
      }
    )
  );
  
  return (
    <div className="demo-image__lazy">
      {children}
    </div>
  )
}
```
:::


### API

**Image props**

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| isLazy | 是否懒加载 | boolean | - | false |
| fit | object-fit | string | fill / contain / cover / none / scale-down | fill |
| src| 图片地址 | string | - | - |
| altText | 加载中展示的文字 | string | - | - |
| errorText | 错误时展示的文字 | string | - | - |
| scrollContainer | 滚动容器 | string，object | - | - |
| updateTimer | 节流时间 | number | - | 500 |
| showHeight | 当图形与scrollParent的地步的距离小于等于此值是，进行加载 | number | - | 50 |
| altComponent | 加载时插槽 | node | - | - |
| errorComponent | 错误插槽 | node | - | - |




