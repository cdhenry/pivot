import React from 'react';

const SuccessComparison = () => {
  return(
    <div className="jumbotron"><center>
      <h1 className="display-3">Success!</h1>
      <p className="lead">Your comparison has been successfully saved.</p>
      <hr className="my-4"/>
      <p>Take a look at it over in: </p>
      <p className="lead">
        <a className="btn btn-primary btn-lg" href="/comparisons" role="button">
          Past Comparisons
        </a>
      </p></center>
    </div>
  )
}

export default SuccessComparison;
