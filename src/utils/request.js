import axios from 'axios'

// 获取 配置文件中 baseurl
const baseUrl = process.env.REACT_APP_API_URL;

// axios.get
// 定义公共的url
var instance = axios.create({
    baseURL: baseUrl
  });

  export default instance;