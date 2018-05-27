import {combineReducers} from 'redux';
import careerReducer from './careerReducer'
import careersReducer from './careersReducer'
import jobZonesReducer from './jobZonesReducer'
import comparisonsReducer from './comparisonsReducer'


const rootReducer = combineReducers({
  career: careerReducer,
  careers: careersReducer,
  jobZones: jobZonesReducer,
  comparisons: comparisonsReducer
});

export default rootReducer
