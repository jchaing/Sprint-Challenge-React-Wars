import React from 'react';

const PaginateButton = props => {
  return <button onClick={props.paginateFunction}>{props.buttonLabel}</button>;
};

export default PaginateButton;
