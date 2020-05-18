import React, {Component} from 'react';
import Square from './Square';


/**
 * @description Creates a tic-tac-toc game board
 * @param {array} props.squares - list of values in each square of the board
 * @param {function} props.onClick - Takes care of user clicks
 * @return {JSX component} The JSX to build the 9x9 board
 */
class Board extends Component {

  // Create a Square component for the board
  renderSquare(i) {
    return (
      <Square
        key={i}
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}
      />
    );
  }

  // #3 Use two loops to make the squares instead of hardcoding them.
  // Dont think this is the best way of doing it, may need to come back..
  render() {
    let grid = [];
    let i = 0;
    for (let row=0; row<3; row++) {
      let cols = [];
      for (let col=0; col<3; col++) {
        cols[col] = this.renderSquare(i);
        i++;
      }
      grid[row] = <div key={row} className="board-row">{cols}</div>
    }
    return (
      <div>
        {grid}
      </div>
    );
  }
}

export default Board;
