export default function careerReducer(state= {loading: false, career: []}, action) {
  switch ( action.type ){
    case 'LOADING_CAREER':
      return Object.assign({}, state,{loading: true})
    case 'FETCH_CAREER':
      return {loading: false, career: action.payload}
    default:
      return state;
  }
}
