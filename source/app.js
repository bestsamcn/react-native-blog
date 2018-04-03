import React from 'react'

import dva from 'dva/mobile'
import Router from './router'

import globalModel from './models/global';

const app = dva({
	onError(e) {
	    console.log('onError', e)
	}
});

app.model(globalModel);
app.router(() => <Router />)

export default () => {
	return app.start();
}