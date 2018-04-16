import request from '../utils/request';

export const getHotwordList = (params)=>{
	return request('/hot/getList', {params})
};