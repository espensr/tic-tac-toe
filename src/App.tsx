import React, { Component, ReactNode } from 'react';
import './App.css';

type squareValue = null | "X" | "O";

interface squareProps {
  value: squareValue
  onClick: () => void
}

function Square(props: squareProps) {
    return (
      <div 
        className="square col-3 col-lg-2" 
        onClick={props.onClick}
      >
        {props.value}
      </div>
    );
}

interface boardState {
  squares: any[],
  xIsNext: boolean
}

class Board extends React.Component<{}, boardState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      xIsNext: true
    };
  }

  handleClick(i: number): void {
    const squares = this.state.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? "X" : "O";
    this.setState({
      squares: squares,
      xIsNext: !this.state.xIsNext
    });
  }

  renderSquare(i: number): ReactNode {
    return (
      <Square 
        value={this.state.squares[i]} 
        onClick={() => this.handleClick(i)}
      />
    );
  }
  
  restart() {
    this.setState({
      squares: Array(9).fill(null)
    })
  }

  render(): ReactNode {
    const title = <h1 id = "title">Tic Tac Toe</h1>;
    const winner = calculateWinner(this.state.squares);
    let status;
    if (winner) {
      status = 'Winner: ' + winner;
    } else {
      status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    }
    const restart = (<button 
                      type="button" 
                      className="btn btn-primary btn-lg"
                      onClick = {() => {this.setState({squares: Array(9).fill(null)})}}
                      >
                      Restart
                    </button>);
    return (
      <div className="container">
        <div className="status">{title}</div>
        <div className="row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
        <div className="status">{status}</div>
        <div className="status">{restart}</div>
      </div>
    );
  }
}

class App extends React.Component<{}, {}> {
  render(): ReactNode {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

function calculateWinner(squares: any[]): squareValue {
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

export default App;
