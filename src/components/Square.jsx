import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

function Square(props) {
  return (
    <div>
      {/* {props.localPositions[props.squareId]} */}
    </div>
  );
}

Square.propTypes = {
  localPositions: PropTypes.array,
  squareId: PropTypes.number
};

export default connect()(Square);