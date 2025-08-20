## 展示及使用文档
+ [小程序&h5重构文档](https://sunjingao.github.io/restructure-mini-h5/dist/index.html)
+ [H5组件库（基于vant，在实际项目中有应用） 展示及使用文档](https://sunjingao.github.io/mo-h5-components/dist-doc/index.html)
+ [H5组件库（基于vant，在实际项目中有应用） 源码](https://github.com/sunjingao/mo-h5-components)
+ [公共方法库 展示及使用文档](https://sunjingao.github.io/mobje-web-util/dist-doc/index.html)
+ [公共方法库 源码](https://github.com/sunjingao/mobje-web-util)
+ [桥接库（支持H5在微信/支付宝小程序，Android/iOS扩展） 展示及使用文档](https://sunjingao.github.io/mo-h5-bridge/dist-doc/index.html)
+ [桥接库（支持H5在微信/支付宝小程序，Android/iOS扩展） 源码](https://github.com/sunjingao/mo-h5-bridge)
+ [前端规范](https://sunjingao.github.io/project-rule/dist/index.html)

+ [出行管理平台重构](https://sunjingao.github.io/restructure/dist/index.html)
+ [vue3组件库（依赖开源组件库，已在生产上应用） 展示及使用文档](https://sunjingao.github.io/mo-web-components/dist-doc/index.html)
+ [vue3组件库（依赖开源组件库，已在生产上应用） 源码](https://github.com/sunjingao/mo-web-components)

+ [vue3+Ts组件库（不依赖开源组件库） 展示及使用文档](https://sunjingao.github.io/vue3Ts-component/dist/prod/#/button)
+ [vue3+Ts组件库（不依赖开源组件库） 源码](https://github.com/sunjingao/vue3Ts-component)
+ [vue3组件库（不依赖开源组件库） 展示及使用文档](https://sunjingao.github.io/vue3-component/dist/#/button)
+ [vue3组件库（不依赖开源组件库） 源码](https://github.com/sunjingao/vue3-component)
+ [vue2组件库（不依赖开源组件库） 展示及使用文档](https://sunjingao.github.io/summary/docs/vue-components/dist/index.html#/instructions)
+ [react组件库 展示及使用文档](https://sunjingao.github.io/summary/docs/react-components/dist/index.html)
+ [zepto 展示及使用文档](https://sunjingao.github.io/summary/docs/zepto/dist/index.html#/core/.init)
+ [underscore 展示及使用文档](https://sunjingao.github.io/summary/docs/underscore/dist/index.html#/core/each)
+ [popper 展示及使用文档](https://sunjingao.github.io/summary/docs/popper/dist/index.html#/options)

<br>


## 源码运行说明

```
依赖包安装：在根目录安装
npm install

运行：在 docs/ 对应的项目目录中运行
npm run dev
```

<br>

## 源码结构说明

```
project
│   package.json （项目公共依赖包）
│   README.md 
│   favicon.ico  
│   .gitignore
│
│
└───public
│        │ 
│        │──────── popper
│        │                   code（功能源码）
│        │        
│        │──────── underscore
│        │                   code（功能源码）
│        │        
│        │──────── zepto
│        │                   code（功能源码）                              
│        │            
│        └──────── vue-components  
│        │                   code（功能源码）                           
│        │            
│        └──────── react-components  
│                             code（功能源码）              
│       
│   
└───docs
          │
          └──────── popper
          │                   webpack.config.js 
          │                   babel.config.js 
          │                   package.json
          │                   code（展示文档相关内容）
          │
          └──────── underscore
          │                   webpack.config.js 
          │                   babel.config.js 
          │                   package.json 
          │                   code（展示文档相关内容）
          │
          └──────── zepto
          │                   webpack.config.js 
          │                   babel.config.js 
          │                   package.json 
          │                   code（展示文档相关内容）
          │
          └──────── vue-components 
          │                   webpack.config.js 
          │                   babel.config.js 
          │                   package.json 
          │                   code（展示文档相关内容）
          │                     
          └──────── react-components 
                               webpack.config.js 
                               babel.config.js 
                               package.json 
                               code（展示文档相关内容）
                     
```
