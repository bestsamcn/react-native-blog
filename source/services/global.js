import request from '../utils/request';
export const getCategoryList = (params)=>{
	return request('/category/getList', {params});
}