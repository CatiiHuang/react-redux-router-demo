import { createStore, applyMiddleware } from 'redux';
import { reducer } from './reducer';

// 异步支持
import thunk from 'redux-thunk';
// 初始值
export const initState = {
  count: 10,
};

export default createStore(reducer, initState, applyMiddleware(thunk));
