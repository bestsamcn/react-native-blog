import { login } from '../services/global';


export default {
	namespace:'global',
	state:{
		token:'',
		isLoading:false
	},
	subscriptions:{

	},
	effects:{
		* setLoading({ params }, { put, call, select }){
			yield put({type:'setState', payload:{isLoading:true}});
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