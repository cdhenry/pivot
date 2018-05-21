import {combineReducers} from 'redux';
import careersReducer from './careersReducer'

const rootReducer = combineReducers({
  careers: careersReducer
});

export default rootReducer
