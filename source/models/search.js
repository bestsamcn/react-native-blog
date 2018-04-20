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
		hotwordList:[]
	},
	subscriptions:{
		async setup({dispatch}){
			try{
				let { hotword } = await global.storage.load({key:'hotword'});
				(!!hotword && !!hotword.length && hotword.length !=0) && dispatch({type:'setState', payload:{hotwordList:hotword}});
			}catch(e){
				console.log(e)
			}
		}
	},
	effects:{
		//获取热词列表
		*getHotwordList({params}, {call, put, select}){
			let res = yield call(getHotwordList, {});
			console.log(res, '')
			global.storage.save({key:'hotword', data:{hotword:res.data}});
			yield put({type:'setState', payload:{hotwordList:res.data}});
		},
		//设置关键字搜索
		*setKeyword({params}, {call, put, select}){
			let { keyword } = params;
			yield put({type:'setState', payload:{keyword, pageIndex:1}});
			yield put({type:'getArticleList', params:{isRefresh:true, isSearch:true}});
		},
		//获取文章
		*getArticleList({params}, {call, put, select}){
			let { pageSize, pageIndex, isMore, isRefreshing, articleList, total, keyword } = yield select(state=>state.search);
			let res = null;
			if(params.isRefresh){
				yield put({type:'setState', payload:{isRefreshing:true}});
				res = yield call(getArticleList, {keyword, pageIndex:1, pageSize});
				pageIndex = 1;
				articleList = res.data;

				//如果是搜索，保存搜索记录, 并跳转
				if(!!params.isSearch){
					let keywordList = global.storage.load({key:'keywordList'}) || [];
					if(!keywordList.includes(keyword)){
						keywordList.push(keyword);
					}else{
						keywordList.splice(keywordList.indexOf(keyword), 1);
						keywordList.unshift(keyword);
					}
					global.storage.save({key:'keywordList', data:{keywordList}});
					// yield put({type:`NavigationActions/${NAVIGATE}`, payload:{name:'Result'}});
					return false;
				}
				global.storage.save({key:'article', data:{articleList, total:res.total}});
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