import fetch from 'isomorphic-fetch';

export function fetchJobZones() {
  return function(dispatch) {
    dispatch({type: 'LOADING_JOB_ZONES'});
    return fetch('/api/job_zones')
    .then(response => {
      return response.json()
    }).then(responseJSON => {
      return dispatch({type: 'FETCH_JOB_ZONES', jobZones: responseJSON})
    })
  }
}
