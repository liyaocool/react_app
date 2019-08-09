import axios from 'axios'

const AUTH_TOKEN = 'AUTH_TOKEN'; //取后端返回的token来请求

//全局默认配置
axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;
axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

// 添加一个请求拦截器
axios.interceptors.request.use(function (config) {
    // Do something before request is sent
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});

// 添加一个响应拦截器
axios.interceptors.response.use(function (response) {
    // Do something with response data
    return response;
}, function (error) {
    // Do something with response error
    return Promise.reject(error);
});

export default axios;