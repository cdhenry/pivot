import React from 'react';

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
