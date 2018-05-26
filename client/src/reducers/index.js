import {combineReducers} from 'redux';
import careerReducer from './careerReducer'
import careersReducer from './careersReducer'
import jobZonesReducer from './jobZonesReducer'

const rootReducer = combineReducers({
  career: careerReducer,
  careers: careersReducer,
  jobZones: jobZonesReducer
});

export default rootReducer
