import fetch from 'isomorphic-fetch';

export function fetchCareer(id) {
  return function(dispatch) {
    dispatch({type: 'LOADING_CAREER'});
    return fetch('/api/careers/' + id)
    .then(response => {
      return response.json()
    }).then(responseJSON => {
      return dispatch({type: 'FETCH_CAREER', payload: responseJSON})
    })
  }
}
