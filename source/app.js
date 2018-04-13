import React from 'react';
import Storage from 'react-native-storage';
import { AsyncStorage } from 'react-native';

import dva from 'dva/mobile';
import Router from './router';
import sync from './config/storage';
import _models from './models';

global.storage = new Storage({
	size: 1000,
	storageBackend: AsyncStorage,
	defaultExpires: 1000 * 3600 * 24,
	enableCache: true,
	sync:sync,
});

const app = dva({
	onError(e) {
		console.log('onError', e)
	}
});

_models(app);
app.router(() => < Router / > )

export default () => {
	return app.start();
}