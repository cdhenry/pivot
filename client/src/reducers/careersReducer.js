export default function careersReducer(state= {loading: false, career: [], careers: []}, action) {
  switch ( action.type ){
    case 'LOADING_CAREERS':
      return Object.assign({}, state,{loading: true})
    case 'FETCH_CAREER':
      return {loading: false, career: action.payload}
    case 'FETCH_CAREERS':
      return {loading: false, careers: action.payload}
    default:
      return state;
  }
}
