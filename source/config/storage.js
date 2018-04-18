import { getArticleList } from '@/services/article';
import { getHotwordList } from '@/services/search';
import { PAGE_SIZE } from './index';
const sync ={
	async article(params){
		let { resolve, reject } = params;
		try{
			global.app._store.dispatch({type:'setLoading', params:{isLoading:true}});
			// 
			let res = await getArticleList({pageIndex:1, pageSize:PAGE_SIZE});
			console.log(res, 'ffffffffffffffffffff')
			global.app._store.dispatch({type:'setLoading', params:{isLoading:false}});
			global.storage.save({key:'article', data:{articleList:res.data || [], total:res.total}})
			resolve && resolve({articleList:res.data || [], total:res.total});
		}catch(e){
			// global.app._store.dispatch({type:'setLoading', params:{isLoading:false}});
			reject && reject(e.msg);
		}
	},
	async hotword(params){
		let { resolve, reject } = params;
		try{
			// global.app._store.dispatch({type:'setLoading', params:{isLoading:true}});
			let res = await getHotwordList({});
			// global.app._store.dispatch({type:'setLoading', params:{isLoading:false}});
			global.storage.save({key:'hotword', data:{hotword:res.data || []}})
			resolve && resolve({hotword:res.data || []});
		}catch(e){
			// global.app._store.dispatch({type:'setLoading', params:{isLoading:false}});
			reject && reject(e.msg)
		}
	}

}
export default sync;