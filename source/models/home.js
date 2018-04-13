import { getArticleList } from '../services/article';


export default {
	namespace:'home',
	state:{
		articleList:[],
		pageIndex:1,
		pageSize:10,
		total:11,
		isMoring:false,
		isRefreshing:false
	},
	subscriptions:{
		async setup({dispatch}){
			let articleList = await glboal.storage.load('articleList');
			// dispatch({type:'setState', payload:{pageIndex:1, total:11, articleList}});
		}
	},
	effects:{
		//获取文章
		*getArticleList({params}, {call, put, select}){
			let { pageSize, pageIndex, isMore, isRefreshing, articleList, total } = yield select(state=>state.home);
			let res = null;
			if(params.isRefresh){
				yield put({type:'setState', payload:{isRefreshing:true}});
				res = yield call(getArticleList, {pageIndex:1, pageSize});
				pageIndex = 1;
				articleList = res.data;
				global.storage.save({key:'articleList', value:res.data});

			}else{
				yield put({type:'setState', payload:{isMoring:true}});
				res = yield call(getArticleList, {pageIndex:pageIndex + 1, pageSize});
				if(res.data.length>1){
					pageIndex = pageIndex + 1
				}
				articleList = articleList.concat(res.data);

			}
			total = res.total;
			yield put({type:'setState', payload:{articleList, pageIndex, total, isRefreshing:false, isMoring:false}});
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