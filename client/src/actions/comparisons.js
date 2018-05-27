import fetch from 'isomorphic-fetch';

export function fetchComparisons() {
  return function(dispatch) {
    dispatch({type: 'LOADING_COMPARISONS'});
    return fetch('/api/comparisons')
    .then(response => {
      return response.json()
    }).then(responseJSON => {
      return dispatch({type: 'FETCH_COMPARISONS', comparisons: responseJSON})
    })
  }
}
