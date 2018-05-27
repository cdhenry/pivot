import React from 'react';
//import '../styles/ComparisonStyle.css';

const ComparisonShow = ({comparisons}) => {
  const renderComparisons = comparisons.map((comparison, index) =>
    <div>{comparison.id}</div>
  );

  return(
    <div className="row">
      {renderComparisons}
    </div>
  )
}

export default ComparisonShow;
