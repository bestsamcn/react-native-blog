import request from '../utils/request';

export const addMessage = (params)=>request('/message/add', {method:'post', params});