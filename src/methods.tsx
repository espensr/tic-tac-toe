import React, { Component, ReactNode } from 'react';
import { squareProps, inputValue } from './models';

export function Square(props: squareProps) {
    return (
      <div 
        className="square col-3 col-lg-2" 
        onClick={props.onClick}
      >
        {props.value}
      </div>
    );
}

export function calculateWinner(squares: Array<inputValue>): inputValue {
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