import React from 'react';
//import '../styles/ComparisonStyle.css';

const ComparisonList = ({comparisons}) => {
  const renderComparisons = comparisons.map((comparison, index) =>
    <div>{comparison.id}</div>
  );

  return(
    <div className="row">
      {renderComparisons}
    </div>
  )
}

export default ComparisonList;
