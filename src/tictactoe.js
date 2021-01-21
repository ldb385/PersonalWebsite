import React from 'react';
import './tictactoe.css';

/*
https://reactjs.org/tutorial/tutorial.html
used as a template for UI
*/

function Square(props) {
  console.log(props)
  return (
    <button className="square"
      onClick={ props.onClick }
      id={ props.id }
    >
      {props.value}
    </button>
  );
}

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(64).fill(null),
      xIsNext: true,
    };
  }

  handleClick(i) {
    const squares = this.state.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      squares: squares,
      xIsNext: !this.state.xIsNext,
    });
  }

  renderSquare( i, light) {
    if( light ){
      return (
        <Square
          id="light"
          value={this.state.squares[i]}
          onClick={() => this.handleClick(i)}
        />
      );
    } else {
      return (
        <Square
          id="dark"
          value={this.state.squares[i]}
          onClick={() => this.handleClick(i)}
        />
      );
    }
  }

  render() {
    const winner = calculateWinner(this.state.squares);
    let status;
    if (winner) {
      status = 'Winner: ' + winner;
    } else {
      status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    }

    

    return (
      <div>
        <div className="status">{status}</div>

        <div className="board-row">
          {this.renderSquare(0, false)}
          {this.renderSquare(1, true)}
          {this.renderSquare(2, false)}
        </div>
        <div className="board-row">
          {this.renderSquare(3, true)}
          {this.renderSquare(4, false)}
          {this.renderSquare(5, true)}
        </div>
        <div className="board-row">
          {this.renderSquare(6, false)}
          {this.renderSquare(7, true)}
          {this.renderSquare(8, false)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {



  render() {
    return (
      <div className="game">
        <br/>
        <div className="game-board">
          <Board />
        </div>
        <div className="game-settings">
          <h3>Searching Algorithms</h3>
          <button>Breadth-first Search</button>
          <button>Depth-first Search</button>
          <button>Depth-limited Search</button>
          <button>Iterative deepening depth-first search</button>
          <br/>
          <h3>Controls</h3>
          <button>Start</button>
          <button>Reset</button>
        </div>
        <br/>
      </div>
    );
  }
}

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