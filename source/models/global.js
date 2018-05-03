import { getCategoryList } from '../services/global';


export default {
	namespace:'global',
	state:{
		token:'',
		isLoading:false,
		keybordHeight:0,
		isKeybordVisible:false,
		categoryList:[]
	},
	subscriptions:{
		async setup({dispatch}){
			let { categoryList } = await global.storage.load({key:'categoryList'});
			console.log(categoryList, 'storage, ;d')
			// dispatch({type:'getCategoryList', params:{}});
		}
	},
	effects:{
		* setLoading({ params }, { put, call, select }){
			yield put({type:'setState', payload:{isLoading:true}});
		},
		//获取分类
		* getCategoryList({params}, { put, call, select }){
			let { data=[] } = params;
			let tabList = [];
			data.map(item=>{
				let _item = {};
				_item.category = item.name;
				_item.name = item.name;
				_item.pageIndex = 1;
				_item.total = 11;
				_item.isRefreshing = true;
				_item.isMoring = false;
				_item.articleList = [];
				tabList.push(_item);
			});
			tabList.unshift({category:'全部', name:'', articleList:[], pageIndex:1, total:11, isRefreshing:true, isMoring:false});
			yield put({type:'home/setState', payload:{tabList}});
			global.storage.save({key:'categoryList', data:{categoryList:data}});
			yield put({type:'setState', payload:{categoryList:data}});
			params.callback && params.callback();
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