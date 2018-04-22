import { getArticleList } from '../services/article';
import { getHotwordList } from '@/services/search';
import { NavigationActions } from 'react-navigation';

export default {
	namespace:'search',
	state:{
		articleList:[],
		pageIndex:1,
		pageSize:10,
		total:11,
		keyword:'',
		isMoring:false,
		isRefreshing:false,
		hotwordList:[],
		keywordList:[]
	},
	subscriptions:{
		async setup({dispatch}){
			try{
				let { hotword } = await global.storage.load({key:'hotword'});
				let { keywordList } = await global.storage.load({key:'keywordList'});
				(!!hotword && !!hotword.length && hotword.length !=0) && dispatch({type:'setState', payload:{hotwordList:hotword}});
				(!!keywordList && !!keywordList.length && keywordList.length !=0) && dispatch({type:'setState', payload:{keywordList}});
			}catch(e){
				// console.log && console.log(e)
			}
		}
	},
	effects:{
		//清除搜索记录
		*clearKeyword({params}, {call, put, select}){
			global.storage.save({key:'keywordList', data:{keywordList:[]}});
			yield put({type:'setState', payload:{keywordList:[]}});
		},
		//获取热词列表
		*getHotwordList({params}, {call, put, select}){
			let res = yield call(getHotwordList, {});
			global.storage.save({key:'hotword', data:{hotword:res.data}});
			yield put({type:'setState', payload:{hotwordList:res.data}});
		},
		//设置关键字搜索
		*setKeyword({params}, {call, put, select}){
			let { hotwordList } = yield select(state=>state.search);
			let { keyword } = params;
			yield put({type:'setState', payload:{keyword, pageIndex:1}});
			yield put(NavigationActions.navigate({routeName: 'Result', params:{keyword, hotwordList}}));
			yield put({type:'getArticleList', params:{isRefresh:true, isSearch:true}});
		},
		//获取文章
		* getArticleList({params}, {call, put, select}){
			let { pageSize, pageIndex, isMore, isRefreshing, articleList, total, keyword } = yield select(state=>state.search);
			let res = null;
			//刷新
			if(params.isRefresh){
				yield put({type:'setState', payload:{isRefreshing:true}});
				res = yield call(getArticleList, {keyword, pageIndex:1, pageSize});
				pageIndex = 1;
				articleList = res.data;

				//如果是搜索，保存搜索记录
				!!params.isSearch && global.storage.load({key:'keywordList'}).then(ret=>{
					let { keywordList=[] } = ret;
					if(!keywordList.includes(keyword)){
						keywordList.unshift(keyword);
					}else{
						keywordList.splice(keywordList.indexOf(keyword), 1);
						keywordList.unshift(keyword);
					}
					global.app._store.dispatch({type:'search/setState', payload:{keywordList}});
					global.storage.save({key:'keywordList', data:{keywordList}});
				}).catch(err=>{
					global.storage.save({key:'keywordList', data:{keywordList:[]}});
				});

			//加载更多
			}else{
				yield put({type:'setState', payload:{isMoring:true}});
				res = yield call(getArticleList, {keyword, pageIndex:pageIndex + 1, pageSize});
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