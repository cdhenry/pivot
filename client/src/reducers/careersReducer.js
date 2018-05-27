export default function careersReducer(state= {loading: false, careers: []}, action) {
  switch ( action.type ){
    case 'LOADING_CAREERS':
      return Object.assign({}, state,{loading: true})
    case 'FETCH_CAREERS':
      return {loading: false, careers: action.payload}
    default:
      return state;
  }
}
