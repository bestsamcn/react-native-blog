import { API } from '../config';
import { NetInfo, ToastAndroid } from 'react-native';



/**
 *
 * @param  {string} url       接口
 * @param  {object} [options] 配置
 * @return {promise}           数据
 */
export default async function request(url, options={}) {
    let isConnected = await NetInfo.isConnected.fetch();
    if(!isConnected){
        ToastAndroid.show('世界上最遥远的距离是什么？', 1000);
        const error = new Error('netword error');
        error.response = response;
        throw error;
    }
    return new Promise((resolve, reject)=>{
        options.headers = {};
        options.params = options.params || {};
        console.log(options.params)
        options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
        // options.headers['x-access-token'] = '';
        if(options.method != 'post'){
            Object.keys(options.params).map((item, index)=>{
                url+= index== 0 ? '?' : '&';
                url+= `${item}=${options.params[item]}`
            });
        }else{
            let _body = '';
            Object.keys(options.params).map((item, index)=>{
                _body+= index== 0 ? '' : '&';
                _body+= `${item}=${options.params[item]}`
            });
            options.body = _body;
        }
        //格式化
        function parseJSON(response) {
            return response.json();
        }

        //检查状态
        function checkStatus(response) {
            if (response.status >= 200 && response.status < 300) {
                return response;
            }
            return reject(response.statusText);
        }

        //返回
        function checkCode(data) {
            if (data.retCode != 0) {
                ToastAndroid.show(data.msg || '异常', 1000);
                return reject(data.msg || '异常');
            }
            return resolve(data);
        }
        fetch(API + url, options)
        .then(checkStatus)
        .then(parseJSON)
        .then(checkCode)
        .catch(err => reject(err));
    });
}