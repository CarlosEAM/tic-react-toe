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
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}
      />
    );
  }

  render() {
    return (
      <div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

export default Board;
