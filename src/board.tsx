import React, { Component, ReactNode } from 'react';
import { boardState } from './models'
import { Square } from './square'
import { calculateWinner } from './calcWinner';
import './App.css';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

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
  
      const restart = (<Button 
                        variant="contained" 
                        color="primary"
                        size={"large"}
                        className="button"
                        onClick = {() => {
                          this.setState({
                            squares: Array(9).fill(null),
                            squaresLeft: 9
                          })
                        }}
                        >
                        Restart
                      </Button>);

      return (
        <Grid container justify="center">
          <div className="info">{title}</div>
          <Grid item xs={12} md={10} lg={8}>
            <Grid container justify="center" className="row-top">
                {this.renderSquare(0)}
                {this.renderSquare(1)}
                {this.renderSquare(2)}
            </Grid>
          </Grid>
          <Grid item xs={12} md={10} lg={8}>
            <Grid container justify="center">
                {this.renderSquare(3)}
                {this.renderSquare(4)}
                {this.renderSquare(5)}
            </Grid>
          </Grid>
          <Grid item xs={12} md={10} lg={8}>
            <Grid container justify="center" className="row-bottom">
                {this.renderSquare(6)}
                {this.renderSquare(7)}
                {this.renderSquare(8)}
            </Grid>
          </Grid>
          <div className="info">{status}</div>
          <div className="info">{restart}</div>
        </Grid>
      );
    }
  }

  export default Board;