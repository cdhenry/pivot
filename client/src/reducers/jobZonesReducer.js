export default function jobZonesReducer(state= {loading: false, jobZones: []}, action) {
  switch ( action.type ){
    case 'LOADING_JOB_ZONES':
      return Object.assign({}, state,{loading: true})
    case 'FETCH_JOB_ZONES':
      return {loading: false, jobZones: action.jobZones}
    default:
      return state;
  }
}
