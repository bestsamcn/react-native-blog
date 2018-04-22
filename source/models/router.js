import { routerReducer } from '../router';
import { NavigationActions } from 'react-navigation';
const actions = [
	NavigationActions.BACK,
	NavigationActions.INIT,
	NavigationActions.NAVIGATE,
	NavigationActions.RESET,
	NavigationActions.SET_PARAMS,
	NavigationActions.URI,
]


export default {
	namespace: 'router',
	state: {
		...routerReducer()
	},
	subscriptions: {

	},
	effects: {
		watch: [
			function*({take, call, put}) {
				while (true) {
					const payload = yield take(actions)
					yield put({
						type: 'setState',
						payload
					});
					if (payload.type === 'Navigation/NAVIGATE') {}
				}
			}, {type: 'watcher'}
		]
	},
	reducers: {
		setState(state, { payload: action }) {
			return routerReducer(state, action)
		}
	}
}