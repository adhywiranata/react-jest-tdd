import { combineReducers } from 'redux';

import todoReducer from './todoReducer';

export default combineReducers({
  todos: todoReducer,
});
