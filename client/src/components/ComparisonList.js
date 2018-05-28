import React from 'react';
import '../styles/CompareStyle.css';

const ComparisonList = ({comparisons}) => {
  const renderComparisons = comparisons.map((comparison, index) =>
    <div>
      <div className="card-header">Comparison {comparison.id}</div>
      <table className="TableShowStyle table-hover">
        <thead>
          <tr>
            <th scope="col">Predictors</th>
            {comparison.careers.map((career) => <th scope="col">{career.title}</th>)}
          </tr>
        </thead>
        <tbody>
          <tr className="table-primary">
            <th scope="row">Engaging Work</th>
            {comparison.predictors.map((predictor) => <th scope="col">{predictor.engagement}</th>)}
          </tr>
          <tr className="table-light">
            <th scope="row">Work that helps others</th>
            {comparison.predictors.map((predictor) => <th scope="col">{predictor.altruism}</th>)}
          </tr>
          <tr className="table-primary">
            <th scope="row">Being good at your job</th>
            {comparison.predictors.map((predictor) => <th scope="col">{predictor.skill}</th>)}
          </tr>
          <tr className="table-light">
            <th scope="row">Supportive Colleagues</th>
            {comparison.predictors.map((predictor) => <th scope="col">{predictor.support}</th>)}
          </tr>
          <tr className="table-primary">
            <th scope="row">Basic Needs</th>
            {comparison.predictors.map((predictor) => <th scope="col">{predictor.basic_needs}</th>)}
          </tr>
          <tr className="table-light">
            <th scope="row">Fit with rest of life</th>
            {comparison.predictors.map((predictor) => <th scope="col">{predictor.balance}</th>)}
          </tr>
        </tbody>
      </table>
      <br/>
    </div>
  );

  return(
    <div className="row">
      {renderComparisons}
    </div>
  )
}

export default ComparisonList;
