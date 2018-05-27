import fetch from 'isomorphic-fetch';

export function fetchComparisons() {
  return function(dispatch) {
    dispatch({type: 'LOADING_COMPARISONS'});
    return fetch('/api/comparisons')
    .then(response => {
      return response.json()
    }).then(responseJSON => {
      return dispatch({type: 'FETCH_COMPARISONS', payload: responseJSON})
    })
  }
}

export function addComparison(comparison) {
  return function(dispatch) {
    dispatch({type: 'LOADING_COMPARISON'});
    return fetch('/api/comparisons', {
        method: 'POST',
        headers: {
          'Accept': "application/json",
          'Content-Type': "application/json",
        },
        body: JSON.stringify(comparison)
      })
    .then(response => {
      return response.json()
    }).then(responseJSON => {
      return dispatch({type: 'ADD_COMPARISON', payload: responseJSON})
    })
  }
}
