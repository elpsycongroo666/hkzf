// 1 导入一个负责合并 管理员的函数
import {combineReducers  } from "redux";
// 2 导入 被合并的管理员
import mapReducer from "./mapReducer";

// 3  合并 并导出
export default combineReducers({mapReducer});