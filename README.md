# React-Native-Blog

## 简介
React-Native-Blog是一个基于`ReactNative`的移动端项目,另有[Vue版本](https://github.com/bestsamcn/vue-blog), [Angular版本](https://github.com/bestsamcn/angular-blog)和[React版本](https://github.com/bestsamcn/react-blog)。
- 使用了ReactNative技术栈完成，包括了``react-native + react-navigation + dva-mobile``等;
- 后端接口利用 ``express + mongodb + redis`` 开发，后端地址[请点我](https://github.com/bestsamcn/node-blog)

## 环境
- node v6
- npm  v4
- react  v16.3.0
- react-native v0.54.3
- react-navigation v1.5.8
- dva v1.2.1

## 开发
```
git clone https://github.com/bestsamcn/react-native-blog.git

cd react-native-blog

npm install

react-native run-android

```
## 图片
![piture](https://raw.githubusercontent.com/bestsamcn/react-native-blog/master/screenshots/view.jpg)

## 预览
- 项目总体完成，部分细节有待修改。
- [请点击我](http://blog.bestsamcn.me/)预览vue版本
- [请点击我](http://react.bestsamcn.me/)预览react版本
- [请点击我](http://angular.bestsamcn.me/)预览angular版本
- [请点击我](http://gulp.bestsamcn.me/)预览gulp自动化版本

## 问题
- app.model should be unique 导致闪退；
- 页签下划线不显示，是因为宽度为0的原因，以强制初始值为70, tabs宽度不稳定，直接通过tabs的长度和单个tab宽度相乘拿到
- header，footer的高度，header通过首页header元素的onLayout拿到，footer查源码可知在手机上是写死49

## 后续
给个星星呗...

