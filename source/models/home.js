import { getArticleList } from '../services/article';


export default {
	namespace:'home',
	state:{
		articleList:[],
		loading:false
	},
	subscriptions:{

	},
	effects:{
		*getArticleList({params}, {call, put, select}){
			yield put({type:'setState', payload:{loading:true}});
			let res = yield call(getArticleList, {pageIndex:1, pageSize:10});
			yield put({type:'setState', payload:{articleList:res.data, loading:false}});
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