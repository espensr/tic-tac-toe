import React, { Component, ReactNode } from 'react';
import { boardState } from './models'
import { Square, calculateWinner } from './methods'
import './App.css';

class Board extends React.Component<{}, boardState> {
    constructor(props: {}) {
      super(props);
      this.state = {
        squares: Array(9).fill(null),
        xIsNext: true,
        squaresLeft: 9,
        status: ""
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
        xIsNext: !this.state.xIsNext,
        squaresLeft: (this.state.squaresLeft - 1)
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
  
    render(): ReactNode {
      const title = <h1 id = "title">Tic Tac Toe</h1>;

      const winner = calculateWinner(this.state.squares);
      let status = this.state.status;
      if (winner) {
        status = 'Winner: ' + winner;
      } else if (this.state.squaresLeft > 0) {
        status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
      } else {
        status = 'Draw';
      }
  
      const restart = (<button 
                        type="button" 
                        className="btn btn-primary btn-lg"
                        onClick = {() => {
                          this.setState({
                            squares: Array(9).fill(null),
                            squaresLeft: 9
                          })
                        }}
                        >
                        Restart
                      </button>);

      return (
        <div className="container">
          <div className="info">{title}</div>
          <div className="row row-top">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          </div>
          <div className="row">
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
          </div>
          <div className="row row-bottom">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </div>
          <div className="info">{status}</div>
          <div className="info">{restart}</div>
        </div>
      );
    }
  }

  export default Board;