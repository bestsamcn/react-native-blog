import React from 'react';
import Storage from 'react-native-storage';
import { AppRegistry, AsyncStorage } from 'react-native';


import dva from 'dva/mobile';
import Router, { routerMiddleware } from './router';
import sync from './config/storage';
import _models from './models';

//缓存
global.storage = new Storage({
	size: 1000,
	storageBackend: AsyncStorage,
	defaultExpires: 1000 * 3600 * 24,
	enableCache: true,
	sync:sync,
});

//实例
global.app = dva({
	onAction:[routerMiddleware],
	onError(e) {
		console.log('onError', e)
	}
});

//model
_models(global.app);

//router
global.app.router(()=><Router/ >);

//start
const start = ()=>global.app.start();

AppRegistry.registerComponent('ReactNativeBlog', ()=>start());