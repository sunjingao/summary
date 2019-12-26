const path = require('path');

const webpack = require('webpack');

// 合并配置文件
const Merge = require('webpack-merge');

// 创建 html
const HtmlWebpackPlugin = require('html-webpack-plugin');

// 提取css到文件中
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// 压缩css文件
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

// 拷贝到物理路径或虚拟路径的相应文件夹中
const CopyWebpackPlugin = require('copy-webpack-plugin');

// 清空文件夹
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

// 浏览器中打开
const OpenBrowserPlugin = require('open-browser-webpack-plugin');

// 查看打包情况
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

// 配置文件
const CONFIG_VARIABLES = {

  // 公共配置文件
  common: {
    publicPath: path.resolve("../../public"),
  },

  // 开发环境 配置文件
  development: {
    // 启动ip
    visitIp: 'localhost',
    // 启动端口
    visitPort: "8869",
    // dist 根目录
    publicPath: "/docs/react-component",
  },

  // 当前目录下打包环境 配置文件
  build: {
    // 打包目录
    outputPath: "./",
    // 输出目录名称
    outputFolderName: "dist",
  },
};

const commonConfig = {

  // 入口
  entry: {
    index: "./index.jsx",
  },

  resolve: {

    // 引用时可忽略的后缀
    extensions: ['.js', '.vue', '.jsx', '.scss', '.css', 'json', '.md'],

    // 别名，引用时直接可以通过别名引用
    alias: {
      'popper': path.join(CONFIG_VARIABLES.common.publicPath, "popper/index.js"),
    }
  },

  module: {
    rules: [
      {
        test: /\.(?:jsx?)$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.html$/,
        exclude: /node_modules/,
        use: "html-loader"
      },
      {
        test: /\.(png|gif|jpe?g)(\?\S*)?$/,
        exclude: /node_modules/,
        use: {
          loader: "url-loader",
          query: {
            limit: 10000,
            name: "images/[name]-[hash:8].[ext]"
          }
        }
      },
      {
        test: /\.(eot|woff|woff2|ttf|svg)(\?\S*)?$/,
        exclude: /node_modules/,
        use: {
          loader: "url-loader",
          query: {
            limit: 5000,
            name: "font/[name]-[hash:8].[ext]"
          }
        }
      },
      {
        test: /\.md$/,
        use: 'raw-loader'
      },
    ]
  },

  plugins: [

    // 1、将引用暴露到全局变量中
    // 2、先找 .resolve.alias 中的属性，若没找到会找 node_modules 下的文件，直到找到为止
    new webpack.ProvidePlugin({
      Popper: ['popper', 'default'],
    }),
  ]
};

const developmentConfig = {

  // 模式，使用webpack4的优化功能
  mode: 'development',

  devtool: "cheap-module-eval-source-map",

  module: {
    rules: [
      // vue-loader@15.?之后，css要单独处理
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.(sc|sa)ss$/,
        exclude: /node_modules/,
        use: [
          "style-loader", // 将 JS 字符串生成为 style 节点
          "css-loader", // 将 CSS 转化成 CommonJS 模块
          "sass-loader" // 将 Sass 编译成 CSS，默认使用 Node Sass
        ]
      },
    ]
  },

  plugins: [

    // 定义全局变量，一般是定义字符串变量
    new webpack.DefinePlugin({}),

    // 创建html文件
    new HtmlWebpackPlugin({
      filename: "./index.html",
      template: __dirname + "/index.html",
      chunks: ["index"],
      inject: "true",
      chunksSortMode: "dependency",
      minify: true
    }),

    new OpenBrowserPlugin(
      {
        url: `http://${CONFIG_VARIABLES.development.visitIp}:${CONFIG_VARIABLES.development.visitPort}${CONFIG_VARIABLES.development.publicPath}/index.html`
      }
    ),

    // 查看打包情况
    // new BundleAnalyzerPlugin(),
  ],

  output: {

    // 发布后，资源的引用目录
    publicPath: CONFIG_VARIABLES.development.publicPath,

    // 文件名称
    filename: "js/[name].js",

    // 按需加载模块时输出的文件名称
    chunkFilename: "js/[name].js"
  },

  devServer: {
    // 外部服务器可访问的ip
    host: "0.0.0.0",
    // 端口
    port: CONFIG_VARIABLES.development.visitPort,
    // 打包信息 只显示错误信息
    stats: "errors-only",
    // 当出现编译器错误或警告时，在浏览器中显示全屏覆盖层。默认禁用。如果你想要只显示编译器错误：
    overlay: true,
    // 不检查主机的应用程序
    disableHostCheck: true,
  },
};

const buildConfig = {

  // 模式，使用webpack4的优化功能
  mode: 'production',

  module: {
    rules: [
      // vue-loader @15.?之后，css要单独处理
      {
        test: /\.css/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
        ]
      },
      {
        test: /\.(sc|sa)ss$/,
        exclude: /node_modules/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader", // 将 CSS 转化成 CommonJS 模块
          "postcss-loader",
          "sass-loader" // 将 Sass 编译成 CSS，默认使用 Node Sass
        ]
      },
    ]
  },

  plugins: [

    // 全局变量
    new webpack.DefinePlugin({}),
    // 清空文件夹
    new CleanWebpackPlugin(),
    // 提取css到文件
    new MiniCssExtractPlugin({
      filename: 'css/[name]-[chunkhash:8].css',
      chunkFilename: 'css/[name]-[chunkhash:8].css'
    }),
    // 压缩css文件
    new OptimizeCssAssetsPlugin({
      assetNameRegExp: /\.css$/g,
      cssProcessor: require('cssnano'),
      cssProcessorOptions: {safe: true, discardComments: {removeAll: true}},
      canPrint: true
    }),
    // 创建html文件
    new HtmlWebpackPlugin({
      filename: "./index.html",
      template: __dirname + "/index.html",
      chunks: ["index"],
      inject: "true",
      chunksSortMode: "dependency",
      minify: true
    }),

    // 查看打包情况
    // new BundleAnalyzerPlugin(),
  ],

  output: {

    // 输出目录
    path: path.join(__dirname, CONFIG_VARIABLES.build.outputPath, CONFIG_VARIABLES.build.outputFolderName),

    // 文件名称
    filename: "js/[name]-[chunkhash:8].js",

    // 按需加载模块时输出的文件名称
    chunkFilename: "js/[name]-[chunkhash:8].js"
  }
};

module.exports = env => {

  let selfConfig = null;

  switch (env.type) {
    case 'development':
      selfConfig = developmentConfig;
      break;
    case 'build':
      selfConfig = buildConfig;
      break;
    default:
      throw new Error('package.json scripts env setting is error');
  }

  return Merge(commonConfig, selfConfig);
};


