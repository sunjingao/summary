
const path = require('path');

const webpack = require('webpack');

// 清空文件夹
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

// 查看打包情况
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const buildConfig = {

  // 模式，使用webpack4的优化功能
  mode: 'production',

  // 入口
  entry: {
    // 这个 vue-markdown 插件太大了，尽量换成其他的markdown插件
    vendor1: ['vue/dist/vue.common.js', 'vue-router', 'clipboard/dist/clipboard.min.js', 'nprogress'],
    vendor2: ['vue-markdown']
  },

  plugins: [

    // 清空文件夹
    new CleanWebpackPlugin(),

    new webpack.DllPlugin({
      path: path.join(__dirname, 'modules', "[name].manifest.json"),
      name: "[name]_[hash]"
    }),

    // 查看打包情况
    // new BundleAnalyzerPlugin()
  ],

  output: {

    path: path.join(__dirname, 'modules'),
    filename: '[name].dll.js',
    library: "[name]_[hash]"
  }
};

module.exports = buildConfig;


