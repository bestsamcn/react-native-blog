import { getArticleList } from '../services/article';


export default {
	namespace:'home',
	state:{
		articleList:[],
		pageIndex:1,
		pageSize:10,
		isMoring:false,
		isRefreshing:false
	},
	subscriptions:{
		setup(args){
			console.log(args, 'ffffffffffff')
			
		}
	},
	effects:{
		*getArticleList({params}, {call, put, select}){
			let { pageSize, pageIndex, isMore, isRefreshing } = yield select(state=>state.home);
			let res = null;
			if(params.isRefresh){
				yield put({type:'setState', payload:{isMore:true}});
				res = yield call(getArticleList, {pageIndex:1, pageSize});
			}else{
				pageIndex = pageIndex + 1;
				yield put({type:'setState', payload:{isRefreshing:true}});
				res = yield call(getArticleList, {pageIndex, pageSize});

			}
			yield put({type:'setState', payload:{articleList:res.data, pageIndex, isRefreshing:false, isMoring:false}});
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