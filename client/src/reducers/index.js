import {combineReducers} from 'redux';
import careersReducer from './careersReducer'
import jobZonesReducer from './jobZonesReducer'

const rootReducer = combineReducers({
  careers: careersReducer,
  jobZones: jobZonesReducer
});

export default rootReducer
