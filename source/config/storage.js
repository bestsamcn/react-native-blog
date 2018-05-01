import { getArticleList } from '@/services/article';
import { getHotwordList } from '@/services/search';
import { getCategoryList } from '@/services/global';
import { PAGE_SIZE } from './index';
const sync ={

	//文章缓存{articleList, total}
	async article(params){
		let { resolve, reject } = params;
		try{
			let res = await getArticleList({pageIndex:1, pageSize:PAGE_SIZE});
			global.storage.save({key:'article', data:{articleList:res.data || [], total:res.total}});
			resolve && resolve({articleList:res.data || [], total:res.total});
		}catch(e){
			reject && reject(e.msg);
		}
	},
	//热词
	async hotword(params){
		let { resolve, reject } = params;
		try{
			let res = await getHotwordList({});
			global.storage.save({key:'hotword', data:{hotword:res.data || []}});
			resolve && resolve({hotword:res.data || []});
		}catch(e){
			reject && reject(e.msg)
		}
	},
	//获取分类
	async categoryList(params){
		let { resolve, reject } = params;
		try{
			let res = await getCategoryList({});
			global.storage.save({key:'categoryList', data:{categoryList:res.data || []}});
			resolve && resolve({categoryList:categoryList || []});
		}catch(e){
			console.log(e)
			reject && reject(e.msg)
		}
	},
	//搜索记录
	async keywordList(params){
		let { resolve, reject } = params;
		resolve && resolve({keywordList:[]});
	},


}
export default sync;