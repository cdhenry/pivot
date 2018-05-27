import fetch from 'isomorphic-fetch';

export function fetchCareers() {
  return function(dispatch) {
    dispatch({type: 'LOADING_CAREERS'});
    return fetch('/api/careers')
    .then(response => {
      return response.json()
    }).then(responseJSON => {
      return dispatch({type: 'FETCH_CAREERS', payload: responseJSON})
    })
  }
}
