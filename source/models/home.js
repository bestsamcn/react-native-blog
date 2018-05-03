import { getArticleList } from '../services/article';
import { PAGE_SIZE } from '@/config';

export default {
	namespace:'home',
	state:{
		articleList:[],
		pageIndex:1,
		pageSize:10,
		total:11,
		isMoring:false,
		isRefreshing:true,
		currentTabIndex:0,
		tabList:[]
	},
	subscriptions:{
		async setup({dispatch}){
			try{
				let { articleList, total } = await global.storage.load({key:'article'});
				!!articleList && !!articleList.length && dispatch({type:'setState', payload:{pageIndex:1, total, articleList, isRefreshing:false}});
			}catch(e){
				console.log(e)
			}
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
				global.storage.save({key:'article', data:{articleList, total:res.total}});
			}else{
				yield put({type:'setState', payload:{isMoring:true}}); 
				res = yield call(getArticleList, {pageIndex:pageIndex + 1, pageSize});
				if(res.data.length < pageSize || pageIndex * pageSize < total){
					pageIndex = pageIndex + 1
				}
				articleList = articleList.concat(res.data);
			}
			total = res.total;
			yield put({type:'setState', payload:{articleList, pageIndex, total, isRefreshing:false, isMoring:false}});
		},
		//获取tab文章
		* getTabArticleList({ params }, { call, put, select }){
			let { tabList, currentTabIndex } = yield select(state=>state.home);
			if(!tabList.length) return;

			let _tabList = JSON.parse(JSON.stringify(tabList));
			currentTabIndex = params.currentTabIndex || currentTabIndex;
			let currentCategoryArticle = _tabList[currentTabIndex]
			let { isRefresh } = params;
			if(!!isRefresh){

				//状态
				currentCategoryArticle.isRefreshing = true;
				_tabList.splice(currentTabIndex, 1, currentCategoryArticle);
				yield put({type:'setState', payload:{currentTabIndex, tabList:_tabList}});

				//请求
				currentCategoryArticle.pageIndex = 1;
				let res = yield call(getArticleList, {category:currentCategoryArticle.name, pageIndex:currentCategoryArticle.pageIndex, pageSize:PAGE_SIZE});
				currentCategoryArticle.articleList = res.data;
				currentCategoryArticle.isRefreshing = false;
				currentCategoryArticle.total = res.total;
				yield put({type:'setState', payload:{currentTabIndex, tabList:_tabList}});
			}else{

				//状态
				currentCategoryArticle.isMoring = true;
				_tabList.splice(currentTabIndex, 1, currentCategoryArticle);
				yield put({type:'setState', payload:{currentTabIndex, tabList:_tabList}});

				//请求
				let res = yield call(getArticleList, {category:currentCategoryArticle.name, pageIndex:currentCategoryArticle.pageIndex + 1, pageSize:PAGE_SIZE})
				currentCategoryArticle.pageIndex = currentCategoryArticle.pageIndex + 1;
				currentCategoryArticle.articleList = currentCategoryArticle.articleList.concat(res.data);
				currentCategoryArticle.isMoring = false;
				currentCategoryArticle.total = res.total;
				_tabList.splice(currentTabIndex, 1, currentCategoryArticle);
				yield put({type:'setState', payload:{currentTabIndex, tabList:_tabList}});
			}
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