import globalModel from './global';
import routerModel from  './router';
import homeModel from  './home';
import searchModel from  './search';

export default (app)=>{
	app.model(globalModel);
	app.model(routerModel);
	app.model(homeModel);
	app.model(searchModel);
}
