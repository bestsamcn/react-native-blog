import globalModel from './global';
import routerModel from  './router';
import homeModel from  './home';
import searchModel from  './search';
import messageModel from  './message';

export default (app)=>{
	app.model(globalModel);
	app.model(routerModel);
	app.model(homeModel);
	app.model(searchModel);
	app.model(messageModel);
}
