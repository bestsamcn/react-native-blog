import { routerReducer } from '../router';
import { NavigationActions } from 'react-navigation';
export const createAction = type => payload => ({ type, payload })
const actions = [
  	NavigationActions.BACK,
  	NavigationActions.INIT,
  	NavigationActions.NAVIGATE,
  	NavigationActions.RESET,
  	NavigationActions.SET_PARAMS,
  	NavigationActions.URI,
]


export default{
	namespace:'router',
	state:{
		...routerReducer()	
	},
	subscriptions:{

	},
	effects:{
		watch:[
			function*({call, put, take}){
				while(true){
					let payload = yield take(actions);
					console.log(payload, 'ffffffffffffffffffffff')
					yield put({type:'setState', payload});

				}
			}, {type:'watcher'}	
		]
	},
	reducers:{
		setState(state, action){
			return routerReducer(state, action)
		}
	}
}