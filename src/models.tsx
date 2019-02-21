import React, { Component, ReactNode } from 'react';

export type inputValue = null | "X" | "O";

export interface squareProps {
  value: inputValue
  onClick: () => void
}

export interface boardState {
    squares: Array<inputValue>,
    xIsNext: boolean,
    squaresLeft: number
    status: string
}