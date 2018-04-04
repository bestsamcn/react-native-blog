import { getArticleList } from '../services/article';


export default {
	namespace:'home',
	state:{
		articleList:[]
	},
	subscriptions:{

	},
	effects:{
		*getArticleList({params}, {call, put, select}){
			let res = yield call(getArticleList, {pageIndex:1, pageSize:5});
			yield put({type:'setState', payload:{articleList:res.data}});
		}
	},
	reducers:{
		setState(state, action){
			return {
				...state, 
				...action.payload
			}
		}
	}
}