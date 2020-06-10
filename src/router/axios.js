import axios from 'axios'
const servies = axios.create({
  // headers: {
  //   'content-type': 'application/json;charst=UTF-8',
  //   'token': ''
  // },
  baseURL: '/api',
  withCredentials: true,
  timeout: 5000
})
// 添加请求拦截器
servies.interceptors.request.use(config => {
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
servies.interceptors.response.use(response => {
  const res = response.data;
  // 如果返回的状态不是200 就主动报错
  if (res.state != 200) {
    return Promise.reject(res.message || 'error')
  }
  return response;
}, error => {
  return Promise.reject(error.response.data); // 返回接口返回的错误信息
})

export default servies