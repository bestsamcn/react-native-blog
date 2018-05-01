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
			try{
				let { categoryList } = await global.storage.load({key:'categoryList'});
				if(!!categoryList && !!categoryList.length && categoryList.length !=0){
					dispatch({type:'setState', payload:{categoryList}});
				}else{
					dispatch({type:'getCategoryList', params:{}});
				}
			}catch(e){
				// console.log && console.log(e)
			}
		}
	},
	effects:{
		* setLoading({ params }, { put, call, select }){
			yield put({type:'setState', payload:{isLoading:true}});
		},
		//获取分类
		* getCategoryList({params}, { put, call, select }){
			let { data } = yield call(getCategoryList, {});
			global.storage.save({key:'categoryList', data:{categoryList:data}});
			yield put({type:'setState', payload:{categoryList}})
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