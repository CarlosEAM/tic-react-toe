import React, {Component} from 'react';
import Board from './Board';


/**
 * TODO: FURTHER PRACTICE
 * 1. Display the location for each move in the format (col, row) in the move history list.
 * 2. Bold the currently selected item in the move list.
 * 3. Rewrite Board to use two loops to make the squares instead of hardcoding them.
 * 4. Add a toggle button that lets you sort the moves in either ascending or descending order.
 * 5. When someone wins, highlight the three squares that caused the win.
 * 6. When no one wins, display a message about the result being a draw.
 */


/**
 * @description Create a tic-tac-toe game
 * @constructor
 */
class Game extends Component {
  constructor(props) {
    super(props);

    // Create component state
    this.state = {
      history: [{
        squares: Array(9).fill(null),
      }],
      stepNumber: 0,
      xIsNext: true,
    };
  }

  // Take care of players game move
  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();

    // Ignore square click if game won or square already used
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      history: history.concat([{
        squares: squares,
      }]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext,
    });
  }

  // Implements the time travel, Undo ability
  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: (step % 2) === 0,
    });
  }

  render() {
    // Using history to render game
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares);

    // Create Undo buttons
    const moves = history.map((step, move) => {
      const desc = move ?
        'Go to move #' + move :
        'Go to game start';
      return (
        <li key={move}>
          <button onClick={() => this.jumpTo(move)}>{desc}</button>
        </li>
      );
    });

    let status;
    if (winner) {
      status = 'Winner: ' + winner;
    } else {
      status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    }

    return (
      <div className="game">
        <div className="game-board">
          <Board
            squares={current.squares}
            onClick={(i) => this.handleClick(i)}
          />
        </div>
        <div className="game-info">
          <div>{ status }</div>
          <ol>{ moves }</ol>
        </div>
      </div>
    );
  }
}

/**
 * @description Use a list of winning moves to check the board for a winner
 * @param {array} squares - and array with current game board states
 * @return {string} either 'X' or 'O' depending on winner
 * @return {null} when no winner found
 */
function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

export default Game;
