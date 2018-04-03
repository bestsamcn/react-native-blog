import { API } from '../config';


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
function checkCode(data){
  if(data.retCode !=0 ){
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
export default function request(url, options) {
  // options.headers = {'x-access-token':TOKEN};
  options.headers['Content-Type'] = 'application/json';

  return fetch(API+url, options)
    .then(checkStatus)
    .then(parseJSON)
    .then(checkCode)
    .then(data => ({data}))
    .then(data => (data.data))
    .catch(err => ({ err }));
}
