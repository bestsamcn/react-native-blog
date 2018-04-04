import globalModel from './global';
import routerModel from  './router';
import homeModel from  './home';

export default (app)=>{
	app.model(globalModel);
	app.model(routerModel);
	app.model(homeModel);
}
