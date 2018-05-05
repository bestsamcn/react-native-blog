import { getCategoryList } from '../services/global';
import { PAGE_SIZE } from '@/config';

export default {
	namespace:'global',
	state:{
		token:'',
		isLoading:false,
		keybordHeight:0,
		isKeybordVisible:false,
		categoryList:[],
		headerHeight:0,
		footerHeight:49
	},
	subscriptions:{
		async setup({dispatch}){
			try{
				let { tabCategoryArticleList } = await global.storage.load({key:'tabCategoryArticleList'});
				// dispatch({type:'getCategoryList', params:{}});
			}catch(e){}
			
		}
	},
	effects:{
		* setLoading({ params }, { put, call, select }){
			yield put({type:'setState', payload:{isLoading:true}});
		},
		//获取分类
		* getCategoryList({params}, { put, call, select }){
			let { data=[] } = params;
			
			let _tabCategoryArticleList = [];

			//读取缓存
			let load = ({tabCategoryArticleList})=>{

				//默认分类
				// data.unshift({category:'全部', name:'', articleList:[], pageIndex:1, total:11, isRefreshing:false, isMoring:false});
				data.unshift({category:'全部', name:''});
				data.map((item, index)=>{
					let _item = {};

					//后台返回的分类都是有name的，否则就是自定义的分类了
					!item.name ? (_item.category = '全部') : (_item.category = item.name);
					_item.name = item.name;
					_item.pageIndex = 1;
					_item.total = PAGE_SIZE+1;
					_item.isRefreshing = true;
					_item.isMoring = false;
					_item.articleList = []

					//读取缓存，如果名称对应，则将缓存的articleList赋值
					tabCategoryArticleList.map((oitem, oindex)=>{
						if(_item.category == oitem.category){
							_item.isRefreshing = false;
							_item.articleList = oitem.articleList;
							_item.total = oitem.total;
						}
					});
					_tabCategoryArticleList.push(_item);
				});
				console.log(_tabCategoryArticleList, 'sucess load')
				global.app._store.dispatch({type:'home/setState', payload:{tabCategoryArticleList:_tabCategoryArticleList}});

				//缓存为空则请求
				!_tabCategoryArticleList[0].articleList.length && global.app._store.dispatch({type:'home/getTabArticleList', params:{isRefresh:true, currentTabIndex:0}});
				global.app._store.dispatch({type:'global/setState', payload:{categoryList:data}});
				params.callback && params.callback();
			}

			//读取失败
			let fail = (e)=>{
				let tabCategoryArticleList = [];
				data.unshift({category:'全部', name:''});
				data.map((item, index)=>{
					let _item = {};

					//后台返回的分类都是有name的，否则就是自定义的分类了
					!item.name ? (_item.category = '全部') : (_item.category = item.name);
					_item.name = item.name;
					_item.pageIndex = 1;
					_item.total = 11;
					_item.isRefreshing = true;
					_item.isMoring = false;
					_item.articleList = []
					tabCategoryArticleList.push(_item);
				});
				console.log(tabCategoryArticleList, 'fail load')
				global.app._store.dispatch({type:'home/setState', payload:{tabCategoryArticleList}});
				global.app._store.dispatch({type:'home/getTabArticleList', params:{isRefresh:true, currentTabIndex:0}});
				global.app._store.dispatch({type:'global/setState', payload:{categoryList:data}});
				params.callback && params.callback();
			}
			
			//执行
			global.storage.load({key:'tabCategoryArticleList'}).then(load).catch(fail);
		}
	},
	reducers:{
		setState(state, action){
			return{
				...state,
				...action.payload
			}
		}	
	}
}