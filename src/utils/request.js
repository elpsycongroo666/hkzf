import axios from 'axios'
import {baseUrl} from './url'
// axios.get
// 定义公共的url
var instance = axios.create({
    baseURL: baseUrl
  });

  export default instance;