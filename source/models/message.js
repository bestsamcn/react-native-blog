import { ToastAndroid } from 'react-native';
import { addMessage } from '../services/message';


export default {
	namespace:'message',
	state:{
		isLoading:false
	},
	subscriptions:{

	},
	effects:{
		* addMessage({ params }, { put, call, select }){
			yield put({type:'setState', payload:{isLoading:true}});
			try{
				let data = yield call(addMessage, params);
				params.callback && params.callback();
				ToastAndroid.show('添加成功', 1000)
			}catch(e){}
			yield put({type:'setState', payload:{isLoading:false}});
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