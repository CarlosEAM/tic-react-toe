import React from 'react';

/**
 * @description Create a square component for the board
 * @param {function} props.onClick - Takes care of user clicks
 * @return {JSX component} HTML button with a onClick and className attributes
 */
function Square(props) {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}

export default Square;