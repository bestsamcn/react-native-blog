import { API } from '../config';
import { NetInfo, ToastAndroid } from 'react-native';


//格式化
function parseJSON(response) {
    return response.json();
}

//检查状态
function checkStatus(response) {
    if (response.status >= 200 && response.status < 300) {
        return response;
    }
    const error = new Error(response.statusText);
    error.response = response;
    throw error;
}

//返回
function checkCode(data) {
    if (data.retCode != 0) {
        return Promise.reject(data.msg)
    }
    return data;
}

/**
 * Requests a URL, returning a promise.
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 * @return {object}           An object containing either "data" or "err"
 */
export default async function request(url, options) {
    
    let isConnected = await NetInfo.isConnected.fetch();
    if(!isConnected){
        ToastAndroid.show('世界上最遥远的距离是什么？', 1000);
        const error = new Error('netword error');
        error.response = response;
        throw error;
        return ;
    }
    // options.headers = {'x-access-token':TOKEN};
    options.headers = {};
    options.mode='cors';
    options.headers['Content-Type'] = 'application/json';
    if(options.params){
        Object.keys(options.params).map((item, index)=>{
            url+= index== 0 ? '?' : '&';
            url+= `${item}=${options.params[item]}`
        });
    }
    return fetch(API + url, options)
        .then(checkStatus)
        .then(parseJSON)
        .then(checkCode)
        .catch(err => ({ err })
    );
}