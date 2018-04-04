import React from 'react'

import dva from 'dva/mobile'
import Router from './router'

import _models from './models';

const app = dva({
	onError(e) {
	    console.log('onError', e)
	}
});

_models(app);
app.router(() => <Router />)

export default () => {
	return app.start();
}