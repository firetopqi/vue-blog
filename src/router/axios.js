import axios from 'axios'
axios.defaults.timeout = 30000
axios.defaults.baseURL = '/api'
// 添加请求拦截器
axios.interceptors.request.use(config => {
  // 在发送请求之前做某事，比如说 设置token
  // config.headers['token'] = 'token';
  const accessToken = "xxxx"
  config.headers['Authorization'] = "Bearer " + accessToken; // token
  return config;
}, error => {
  // 请求错误时做些事
  return Promise.reject(error);
});

// 添加响应拦截器
axios.interceptors.response.use(response => {
  const res = response.data;
  // console.log(res, res.state)
  return res;
}, error => {
  return Promise.reject(error.response); // 返回接口返回的错误信息
})

export default axios