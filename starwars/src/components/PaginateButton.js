import React from 'react';
import { Button } from 'reactstrap';

const PaginateButton = props => {
  return (
    <Button
      className="mx-1"
      color="warning"
      size="lg"
      onClick={props.paginateFunction}
    >
      {props.buttonLabel}
    </Button>
  );
};

export default PaginateButton;
