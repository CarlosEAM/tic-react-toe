import React from 'react';

/**
 * @description Create a square component for the board
 * @param {function} props.onClick - Takes care of user clicks
 * @param {function} props.winnerSquare - True if this is a winning square
 * @return {JSX component} HTML button with a onClick and className attributes
 */
function Square(props) {

  const cName = props.winnerSquare ? "highlight-square square" : "square";
  return (
    <button className={cName} onClick={props.onClick}>
      {props.value}
    </button>
  );
}

export default Square;