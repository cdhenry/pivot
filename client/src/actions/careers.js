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
