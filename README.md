# React-Native-Blog

## 简介
React-Native-Blog是一个基于`ReactNative`的移动端项目,另有[Vue版本](https://github.com/bestsamcn/vue-blog), [Angular版本](https://github.com/bestsamcn/angular-blog)和[React版本](https://github.com/bestsamcn/react-blog)。
- 使用了ReactNative技术栈完成，包括了``react-native + react-navigation + react-native-scrollable-tab-view + react-native-storage + dva-mobile``等;
- 后端接口利用 ``express + mongodb + redis`` 开发，后端地址[请点我](https://github.com/bestsamcn/node-blog)

## 环境
- node v6
- npm  v4
- react  v16.3.0
- react-native v0.54.3
- react-navigation v1.5.8
- dva v1.2.1


## 实现

[x] 分类文章列表与搜索记录缓存
[x] webview网页通信
[X] tabNavigator+stackNavigator使用
[x] 键盘弹起控制与tabbar控制
[x] 启动屏
[x] redux控制导航
[x] 分类与分页
[] 分享
[] tabbar动画显示与隐藏
[] 读取缓存状态页签动画显示内容
[] webview秒通信
[] 点击webview图片，滚动预览

## 开发
1. 克隆安装依赖
    ```
	git clone https://github.com/bestsamcn/react-native-blog.git

	cd react-native-blog

	npm install

	```
2. 修改`node_modules/dva/lib/creatDva`下的`start`方法,266行开始
	from:
	```javascript
	model.call(this, {
	  namespace: '@@dva',
	  state: 0,
	  reducers: {
	    UPDATE: function UPDATE(state) {
	      return state + 1;
	    }
	  }
	});
	```
	to:
	```javascript
	if(!this._models.some(item=>item.namespace == '@@dva')){
      model.call(this, {
        namespace: '@@dva',
        state: 0,
        reducers: {
          UPDATE: function UPDATE(state) {
            return state + 1;
          }
        }
      });
    }
	```
3. 开发环境，需提前设置设置，模拟器需启动模拟器并通过`adb connect `相应模拟器服务可以通过`adb devices`查看是否有设备连接
	```
	react-native run-android
	```
4. 打包
	```
	cd android
	gradlew assembleRelease
	```
5. 安装
	```
	cd \android\app\build\outputs\apk
	adb install app-release.apk
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
- app.model should be unique 导致闪退，通过修改dva源码修复；
- 页签下划线不显示，是因为宽度为0的原因，以强制初始值为70, tabs宽度不稳定，直接通过tabs的长度和单个tab宽度相乘拿到
- header，footer的高度，查源码可知在手机上的各种高度
- message通信过慢


## 后续
给个星星呗...

