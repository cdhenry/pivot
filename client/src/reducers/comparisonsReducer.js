export default function comparisonsReducer(state= {loading: false, comparisons: []}, action) {
  switch ( action.type ){
    case 'LOADING_COMPARISONS':
      return Object.assign({}, state,{loading: true})
    case 'FETCH_COMPARISONS':
      return {loading: false, comparisons: action.comparisons}
    default:
      return state;
  }
}
