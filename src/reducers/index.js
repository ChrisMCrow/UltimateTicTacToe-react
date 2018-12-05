
import boardReducer from './boardReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  boardData: boardReducer
});

export default rootReducer;