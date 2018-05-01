import { getArticleList } from '../services/article';


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
		tabList:[{category:'', articleList:[], pageIndex:1, total:11, isRefreshing:true, isMoring:false}]
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
		getTabArticleList({ params }, { call, put, select }){
			let { currentTabIndex, tabList } = yield select(state=>state.home);
			let currentCategoryArticle = tabList[currentTabIndex];
			let { isRefresh, currentTabIndex } = params;
			if(!!isRefresh){

				//状态
				currentCategoryArticle.isRefreshing = true;
				tabList.splice(currentTabIndex, 1, currentCategoryArticle);
				yield put({type:'setState', payload:{currentTabIndex, tabList}});

				//请求
				currentCategoryArticle.pageIndex = 1;
				let { data } = yield call(getArticleList, {...currentCategoryArticle})
				currentCategoryArticle.articleList = data;
				currentCategoryArticle.isRefreshing = false;
				tabList.splice(currentTabIndex, 1, currentCategoryArticle);
				yield put({type:'setState', payload:{tabList}});
			}else{

				//状态
				currentCategoryArticle.isMoring = true;
				tabList.splice(currentTabIndex, 1, currentCategoryArticle);
				yield put({type:'setState', payload:{currentTabIndex, tabList}});

				//请求
				currentCategoryArticle.pageIndex = currentCategoryArticle.pageIndex + 1;
				let { data } = yield call(getArticleList, {...currentCategoryArticle})
				currentCategoryArticle.articleList = currentCategoryArticle.articleList.concat(data);
				currentCategoryArticle.isRefreshing = false;
				tabList.splice(currentTabIndex, 1, currentCategoryArticle);
				yield put({type:'setState', payload:{tabList}});
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